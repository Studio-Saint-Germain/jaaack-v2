import Link from 'next/link';
import { projectsApi } from './api/projects';
import Footer from './components/footer/footer';

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

export default async function Home() {
  const highlightedProjects = await projectsApi.getHighlightedProjects();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <ul className='link-container'>
          {highlightedProjects.map((project) => (
            <li className='link-item' key={project.id}>
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
