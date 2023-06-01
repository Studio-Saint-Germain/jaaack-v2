import Image from 'next/image'
import Footer from './components/footer/footer'
import { projectsApi } from './about/api/projects';
import Link from 'next/link';

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

export default async function Home() {
  const highlightedProjects = await projectsApi.getHighlightedProjects();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {highlightedProjects.map((project) => (
          <Link href={`/work/${project.slug}`} key={project.id}>
            <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id} className='text-white text-xl font-bold cursor-pointer'></p>
          </Link>
        ))}
      </main>
      <Footer />
    </>
  )
}
