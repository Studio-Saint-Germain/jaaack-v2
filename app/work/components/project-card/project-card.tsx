'use client';
import { Project } from '@/app/api/projects';
import Image from 'next/image';
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
    const [background, setBackground] = useState<string>(initialBkg);
    const router = useRouter();
    /* const [background, setBackground] = useState<string>(project?._embedded?['wp:featuredmedia'][0].source_url ?? ''); */
    return (
        <Link href={`/work/${project.slug}`} key={project.id} onMouseEnter={() => setBackground(project.acf.video_gif)} onMouseLeave={() => setBackground(initialBkg)} className='text-white text-center text-xl cursor-pointer grid-item relative h-49vh overflow-hidden'>
            {background && <Image src={background} fill={true} className="object-cover object-center" alt="Jaack video preview"></Image>}
            <div className="bg-black bg-opacity-40 !h-full w-full relative flex items-center justify-center p-12">
                <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id}></p>
            </div>
        </Link>   
        )
}