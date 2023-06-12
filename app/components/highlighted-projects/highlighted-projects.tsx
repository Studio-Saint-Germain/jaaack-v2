'use client';

import { Project, projectsApi } from '@/app/api/projects';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import VideoFullBackground from '../video-full-background/video-full-background';
import { pagesApi } from '@/app/api/pages';


export default function HighlightedProjects() {

  const [highlightedProjects, setHighlightedProjects] = useState<Project[]>();
  const [videoBackground, setVideoBackground] = useState<string>();
  const [defaultVideo, setDefaultVideo] = useState<string>();

  const getHighlightedProjects = useCallback( async () => {
    const projects = await projectsApi.getHighlightedProjects();
    setHighlightedProjects(projects);
  }, [setHighlightedProjects]);

  const getDefaultVideo = useCallback( async () => {
    const pageData = await pagesApi.getPageById(138);
    const videos = Object.values(pageData.acf);
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    setDefaultVideo(randomVideo);
    setVideoBackground(randomVideo);
  }, []);

  useEffect(() => {
    getDefaultVideo();
  }, [getDefaultVideo]);

  useEffect(() => {
    getHighlightedProjects();
  }, [getHighlightedProjects]);

  return (
    <>
      <main className="flex min-h-screen w-full h-full flex-col items-center justify-center pt-24 p-6 md:p-16">
        {videoBackground && <VideoFullBackground fixed className="opacity-90" url={videoBackground} />}
        <ul className='link-container md:ml-16 relative' onMouseLeave={() => setVideoBackground(defaultVideo)}>
          {highlightedProjects && highlightedProjects.map((project) => (
            <li className='link-item' key={project.id} onMouseEnter={() => setVideoBackground(project.acf.video_gif)}>
              <Link href={`/work/${project.slug}`}>
                AAA
                <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id} className='text-white text-center p-2 md:p-0 text-xl cursor-pointer'></p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
