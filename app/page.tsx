'use client';

import Link from 'next/link';
import { Project, projectsApi } from './api/projects';
import Footer from './components/footer/footer';
import { useEffect, useState } from 'react';
import Head from 'next/head';

/* export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
} */

export default function Home() {

  const [highlightedProjects, setHighlightedProjects] = useState<Project[]>();
  const [background, setBackground] = useState<string>();

  const getHighlightedProjects = async () => {
    const projects = await projectsApi.getHighlightedProjects();
    setHighlightedProjects(projects);
  };

  useEffect(() => {
    getHighlightedProjects();
  }, []);


  return (
    <>
      <Head>
        <title>Jack Antoine Charlot | French Director</title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center p-24 !bg-cover" style={{backgroundImage: background ? `url(${background})` : 'transparent'}}>
        <ul className='link-container' onMouseLeave={() => setBackground('')}>
          {highlightedProjects && highlightedProjects.map((project) => (
            <li className='link-item' key={project.id} onMouseEnter={() => setBackground(project.acf.video_gif)} onMouseLeave={() => setBackground('')}>
              <Link href={`/work/${project.slug}`}>
                <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id} className='text-white text-center text-xl font-bold cursor-pointer'></p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer className='absolute' />
    </>
  )
}
