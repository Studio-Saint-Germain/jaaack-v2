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
    const [playing, setPlaying] = useState(false);
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
        <div className={`!w-full !h-screen scroll-smooth ${ showDetails ? 'md:flex' : ''}`}>
            {loading && <p className="text-white m-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Loading...</p>}
            <div onClick={() => console.log(!playing)} className={`${ showDetails ? 'md:bg-white md:pl-6' : ''} md:relative !w-full !h-screen ${loading ? 'opacity-0' : 'opacity-100 delay-150'} transition-opacity duration-300`}>
                <ReactPlayer onClick={() => console.log('click')} volume={0.5} muted={false} onReady={() => setLoading(false)} loop={true} responsive="true" playing={playing} className="!w-full !h-full" url={videoInfos.url} />
            </div>
            { (videoInfos.description || videoInfos.title) && 
                <div id="video-infos" className={`md:bg-white border-t min-h-screen pt-24 border-t-white text-white md:text-black md:min-h-0 md:h-full overflow-auto p-6 md:pb-20 text-left md:text-right md:max-w-[360px] ${showDetails ? 'md:block':'md:hidden' }`}>
                    <h1 className="text-2xl font-bold mb-6" dangerouslySetInnerHTML={{__html: videoInfos.title}}></h1>
                    <div className="text-sm description" dangerouslySetInnerHTML={{__html: videoInfos.description}}></div>
                </div>
            }
            <div className={`!w-full pointer-events-none !h-full absolute top-0 flex flex-col items-start justify-between pt-24 md:pt-6 p-6 pb-0 ${showDetails ? 'md:text-black' : 'text-white'}`}>
                    <span className="text-2xl cursor-pointer pointer-events-auto font-light" onClick={() => router.back()}>
                      <Image
                        src="/arrow-back.svg"
                        alt="back to Jaaack work"
                        width={80}
                        className={`${showDetails ? '' : 'invert'}`}
                        height={20}
                        priority
                        />
                    </span>
                    <div className={`flex justify-between w-full py-6 ${ showDetails ? 'md:bg-white' : ''}`}>
                        <span className="text-2xl cursor-pointer font-light pointer-events-auto" onClick={() => setPlaying(!playing)}>{playing ? 'Pause' : 'Play'} video</span>
                        <span className="text-2xl cursor-pointer font-light pointer-events-auto hidden md:block" onClick={() => setShowDetails(!showDetails)}>Infos</span>
                        <span onClick={(e) => handleScroll(e, '#video-infos')} className="md:hidden font-light text-2xl pointer-events-auto">Infos</span>
                    </div>
            </div>
        </div>
    )
}