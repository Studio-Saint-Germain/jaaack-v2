'use client';

import { Project, projectsApi } from '@/app/api/projects';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';


export default function HighlightedProjects() {

  const [highlightedProjects, setHighlightedProjects] = useState<Project[]>();
  const [background, setBackground] = useState<string>();

  const getHighlightedProjects = useCallback( async () => {
    const projects = await projectsApi.getHighlightedProjects();
    setHighlightedProjects(projects);
  }, [setHighlightedProjects]);

  useEffect(() => {
    getHighlightedProjects();
  }, [getHighlightedProjects]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-6 md:p-24">
      {background && <Image src={background} fill={true} className="object-cover object-center" alt="Jaack video preview"></Image>}
        <ul className='link-container md:ml-24 relative' onMouseLeave={() => setBackground('')}>
          {highlightedProjects && highlightedProjects.map((project) => (
            <li className='link-item' key={project.id} onMouseEnter={() => setBackground(project.acf.video_gif)} onMouseLeave={() => setBackground('')}>
              <Link href={`/work/${project.slug}`}>
                <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id} className='text-white text-center text-xl cursor-pointer'></p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </>
  )
}
