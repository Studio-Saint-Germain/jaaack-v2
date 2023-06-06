'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
    videoInfos: VideoInfos;
};

export interface VideoInfos {
    url: string; 
    description: string; 
    title: string;
}

export default function VideoPlayer({ videoInfos }: VideoPlayerProps) {
    const router = useRouter();
    const navigation = usePathname();
    const [playing, setPlaying] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);
    return (
        <div className={`!w-full !h-screen scroll-smooth ${ showDetails ? 'md:flex' : ''}`}>
            {loading && <p className="text-white m-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</p>}
            <div onClick={() => console.log(!playing)} className={`${ showDetails ? 'md:bg-white md:pl-6' : ''} md:relative !w-full !h-screen ${loading ? 'opacity-0' : 'opacity-100 delay-150'} transition-opacity duration-300`}>
                <ReactPlayer volume={0.5} muted={false} onReady={() => setLoading(false)} loop={true} responsive="true" playing={playing} className="!w-full !h-full" url={videoInfos.url} />
            </div>
            { (videoInfos.description || videoInfos.title) && 
                <div id="video-infos" className={`md:bg-white text-white md:text-black md:h-full overflow-auto p-6 md:pb-20 text-left md:text-right md:max-w-[360px] ${showDetails ? 'md:block':'md:hidden' }`}>
                    <h1 className="text-2xl font-bold mb-6" dangerouslySetInnerHTML={{__html: videoInfos.title}}></h1>
                    <div className="text-sm description" dangerouslySetInnerHTML={{__html: videoInfos.description}}></div>
                </div>
            }
            <div className={`!w-full pointer-events-none !h-full absolute top-0 flex flex-col items-start justify-between pt-24 md:pt-6 p-6 pb-0 ${showDetails ? 'md:text-black' : 'text-white'}`}>
                    <a className="text-2xl cursor-pointer pointer-events-auto" onClick={() => router.back()}>Back</a>
                    <div className={`flex justify-between w-full py-6 ${ showDetails ? 'md:bg-white' : ''}`}>
                        <a className="text-2xl cursor-pointer pointer-events-auto" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'} video</a>
                        <a className="text-2xl cursor-pointer pointer-events-auto hidden md:block" onClick={() => setShowDetails(!showDetails)}>Infos</a>
                        <Link className="text-2xl cursor-pointer pointer-events-auto md:hidden" href={navigation+'#video-infos'}>Infos</Link>
                    </div>
            </div>
        </div>
    )
}