'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactPlayer from 'react-player';

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
    const path = usePathname();
    const [playing, setPlaying] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleScroll = (e: any, target: string) => {
        e.preventDefault();
        const href = target;
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
          behavior: "smooth",
        });
      };
    
    return (
        <div className={`!w-full !h-screen relative ${ showDetails ? 'md:flex' : ''}`}>
            {loading && <p className="text-white m-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</p>}
            <div className={`transition-opacity duration-300 cursor-pointer md:relative !w-full !h-screen ${ showDetails ? 'md:bg-white md:pl-6' : ''} ${loading ? 'opacity-0' : 'opacity-100 delay-150'}`}>
            <div className={`w-full aspect-video absolute ${showDetails ? 'md:left-6 md:w-[calc(100%_-_1.5rem)]' : ''} left-0 top-1/2 z-10 -translate-y-1/2 md:cursor-pointer`} onClick={() => setPlaying(!playing)}></div>
                <ReactPlayer playsinline autoplay volume={0.5} muted={false} onReady={() => setLoading(false)} loop responsive playing={playing} className="!w-full !h-full cursor-pointer" url={videoInfos.url} />
            </div>
            { (videoInfos.description || videoInfos.title) && 
                <div id="video-infos" className={`md:bg-white border-t min-h-screen pt-24 border-t-white text-white md:text-black md:min-h-0 md:h-full overflow-auto p-6 md:pb-20 text-left md:text-right md:max-w-[360px] ${showDetails ? 'md:block':'md:hidden' }`}>
                    <h1 className="text-2xl font-bold mb-6" dangerouslySetInnerHTML={{__html: videoInfos.title}}></h1>
                    <div className="text-sm description" dangerouslySetInnerHTML={{__html: videoInfos.description}}></div>
                </div>
            }
            <div className='w-full z-10 absolute top-0 pt-24 pl-6 md:pt-6'>
                <Image
                    src="/arrow-back.svg"
                    alt="back to Jaaack work"
                    onClick={() => router.back()}
                    width={80}
                    className={`${showDetails ? '' : 'invert'} cursor-pointer`}
                    height={20}
                    priority
                />
            </div>
            <div className='w-full z-10 absolute bottom-0 pb-6 px-6 md:pb-0'>
                <div className={`flex justify-between w-full py-6 text-white ${ showDetails ? 'md:bg-white md:text-black' : ''}`}>
                    <span className="text-2xl cursor-pointer font-light pointer-events-auto" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'} video</span>
                    <span className="text-2xl cursor-pointer font-light pointer-events-auto hidden md:block" onClick={() => setShowDetails(!showDetails)}>Infos</span>
                    <span onClick={(e) => handleScroll(e, '#video-infos')} className="md:hidden font-light text-2xl pointer-events-auto">Infos</span>
                </div>
            </div>
        </div>
    )
}