'use client';
import { useRouter } from 'next/navigation';
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
    const [playing, setPlaying] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className={`!w-full !h-screen ${ showDetails ? 'flex' : ''}`}>
            <div className={`${ showDetails ? 'bg-white pl-6' : ''} md:relative !w-full !h-screen`}>
                <ReactPlayer volume={0.5} muted={false} loop={true} responsive="true" playing={playing} className="!w-full !h-full" url={videoInfos.url} />
            </div>
            { videoInfos.description && videoInfos.title && showDetails &&
                <div className='bg-white h-full overflow-auto p-6 pb-20 text-right'>
                    <h1 className="text-2xl font-bold mb-6" dangerouslySetInnerHTML={{__html: videoInfos.title}}></h1>
                    <div className="text-sm description" dangerouslySetInnerHTML={{__html: videoInfos.description}}></div>
                </div>
            }
            <div className={`md:!w-full pointer-events-none md:!h-full md:absolute md:top-0 md:flex md:flex-col md:items-start md:justify-between p-6 pb-0 ${showDetails ? 'text-black' : 'text-white'}`}>
                    <a className="text-2xl cursor-pointer pointer-events-auto" onClick={() => router.back()}>Back</a>
                    <div className={`md:flex md:justify-between w-full md:py-6 ${ showDetails ? 'md:bg-white' : ''}`}>
                        <a className="text-2xl cursor-pointer pointer-events-auto" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'} video</a>
                        <a className="text-2xl cursor-pointer pointer-events-auto" onClick={() => setShowDetails(!showDetails)}>Infos</a>
                    </div>
            </div>
        </div>
    )
}