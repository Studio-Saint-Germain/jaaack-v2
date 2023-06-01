'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactPlayer from 'react-player'

interface VideoPlayerProps {
    url: string;
};

export default function VideoPlayer({ url }: VideoPlayerProps) {
    const router = useRouter();
    const [playing, setPlaying] = useState(false);
    return (
        <>
            <ReactPlayer volume={0.5} muted={false} loop={true} responsive={true} playing={playing} className="!w-full !h-screen" url={url} />
            <div className="md:!w-full md:!h-screen md:absolute md:flex md:flex-col md:justify-between p-4">
            <a className="text-white cursor-pointer" onClick={() => router.back()}>Back</a>
            <div className="md:flex md:justify-between">
                <a className="text-white cursor-pointer" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'} video</a>
                <a className="text-white cursor-pointer" onClick={() => setPlaying(!playing)}>Infos</a>
            </div>
            </div>
        </>
    )
}