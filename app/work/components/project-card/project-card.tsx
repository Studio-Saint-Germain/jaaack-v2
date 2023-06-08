'use client';
import { Project } from '@/app/api/projects';
import VideoFullBackground from '@/app/components/video-full-background/video-full-background';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface ProjectCardProps {
    project: Project;
};

export interface VideoInfos {
    url: string; 
    description: string; 
    title: string;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    const initialBkg = !!project._embedded['wp:featuredmedia'] ? project._embedded['wp:featuredmedia'][0].source_url : '';
    const [backgroundVideo, setBackgroundVideo] = useState<string>();
    const router = useRouter();
    return (
        <Link 
            href={`/work/${project.slug}`} 
            onMouseEnter={() => setBackgroundVideo(project.acf.video_gif)} 
            onMouseLeave={() => setBackgroundVideo('')} 
            style={{backgroundImage: `url(${initialBkg})`}}
            className='text-white text-center bg-cover block bg-center text-xl cursor-pointer grid-item relative h-49vh overflow-hidden'
        >
            {backgroundVideo && <VideoFullBackground url={backgroundVideo} />}
            <div className="bg-black bg-opacity-10 !h-full w-full relative flex items-center justify-center p-12">
                <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id}></p>
            </div>
        </Link>   
        )
}