'use client';

import { Project } from '@/app/api/projects';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import VideoFullBackground from '../video-full-background/video-full-background';

interface HighlightedProjectsProps {
  projects: Project[];
  defaultVideos: string[];
}

export default function HighlightedProjects({ projects, defaultVideos }: HighlightedProjectsProps) {

  const [videoBackground, setVideoBackground] = useState<string>();
  const [defaultVideo, setDefaultVideo] = useState<string>();

  // Random pick on the client so each visit gets a different video despite the cached page
  useEffect(() => {
    const randomVideo = defaultVideos[Math.floor(Math.random() * defaultVideos.length)];
    setDefaultVideo(randomVideo);
    setVideoBackground(randomVideo);
  }, [defaultVideos]);

  return (
    <>
      <main className="flex min-h-screen w-full h-full flex-col items-center justify-center pt-24 p-6 md:p-16">
        {videoBackground && <VideoFullBackground fixed className="opacity-90" url={videoBackground} />}
        <ul className='link-container md:ml-16 relative' onMouseLeave={() => setVideoBackground(defaultVideo)}>
          {projects.map((project) => (
            <li className='link-item' key={project.id} onMouseEnter={() => setVideoBackground(project.acf.video_gif)}>
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
