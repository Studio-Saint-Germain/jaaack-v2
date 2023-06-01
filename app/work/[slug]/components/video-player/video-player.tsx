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
        <div className="!w-full !h-screen">
            <div className='md:relative !w-full !h-screen'>
                <ReactPlayer volume={0.5} muted={false} loop={true} responsive={true} playing={playing} className="!w-full !h-full" url={videoInfos.url} />
                <div className="md:!w-full md:!h-full md:absolute md:top-0 md:flex md:flex-col md:items-start md:justify-between p-6">
                    <a className="text-white text-2xl cursor-pointer" onClick={() => router.back()}>Back</a>
                    <div className="md:flex md:justify-between w-full">
                        <a className="text-white text-2xl cursor-pointer" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'} video</a>
                        <a className="text-white text-2xl cursor-pointer" onClick={() => setShowDetails(!showDetails)}>Infos</a>
                    </div>
                </div>
            </div>
            { videoInfos.description && videoInfos.title && showDetails &&
                <div className='bg-white'>
                    <h1 className="text-4xl " dangerouslySetInnerHTML={{__html: videoInfos.title}}></h1>
                    <div className="" dangerouslySetInnerHTML={{__html: videoInfos.description}}></div>
                </div>
            }
            <div>
                
            </div>
        </div>
    )
}