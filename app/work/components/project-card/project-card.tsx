'use client';
import { Project } from '@/app/api/projects';
import VideoFullBackground from '@/app/components/video-full-background/video-full-background';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
    project: Project;
    isFirst?: boolean;
};

export interface VideoInfos {
    url: string;
    description: string;
    title: string;
}

export default function ProjectCard({ project, isFirst }: ProjectCardProps) {
    const featuredImage = project._embedded['wp:featuredmedia']?.[0]?.source_url;
    const [backgroundVideo, setBackgroundVideo] = useState<string>();
    return (
        <Link
            href={`/work/${project.slug}`}
            onMouseEnter={() => setBackgroundVideo(project.acf.video_gif)}
            onMouseLeave={() => setBackgroundVideo('')}
            className='text-white text-center block text-xl cursor-pointer grid-item relative h-49vh overflow-hidden'
        >
            {featuredImage && (
                <Image
                    src={featuredImage}
                    alt=""
                    fill
                    priority={isFirst}
                    sizes={isFirst ? '100vw' : '(max-width: 991px) 100vw, 50vw'}
                    className='object-cover'
                />
            )}
            {backgroundVideo && <VideoFullBackground url={backgroundVideo} />}
            <div className={`bg-black bg-opacity-10 !h-full w-full relative flex items-end justify-start p-6`}>
                <p className="text-left" dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id}></p>
            </div>
        </Link>
    )
}
