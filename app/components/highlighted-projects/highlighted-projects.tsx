'use client';

import { Project, projectsApi } from '@/app/api/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';


export default function HighlightedProjects() {

  const [highlightedProjects, setHighlightedProjects] = useState<Project[]>();
  const [videoBackground, setVideoBackground] = useState<string>();

  const getHighlightedProjects = useCallback( async () => {
    const projects = await projectsApi.getHighlightedProjects();
    setHighlightedProjects(projects);
  }, [setHighlightedProjects]);

  useEffect(() => {
    getHighlightedProjects();
  }, [getHighlightedProjects]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center pt-24 p-6 md:p-16">
      {videoBackground && 
      <ReactPlayer muted className="absolute !object-center !object-cover z-0 !w-auto !min-w-full !min-h-full !max-h-none !max-w-none video-preview-player" loop responsive playsinline playing url={videoBackground} />
      }
        <ul className='link-container md:ml-16 relative' onMouseLeave={() => setVideoBackground('')}>
          {highlightedProjects && highlightedProjects.map((project) => (
            <li className='link-item' key={project.id} onMouseEnter={() => setVideoBackground(project.acf.video_gif)} onMouseLeave={() => setVideoBackground('')}>
              <Link href={`/work/${project.slug}`}>
                <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id} className='text-white text-center p-2 md:p-0 text-xl cursor-pointer'></p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
