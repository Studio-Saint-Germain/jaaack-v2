import Image from 'next/image'
import Footer from './components/footer/footer'
import { projectsApi } from './api/projects';

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

export default async function Home() {
  const highlightedProjects = await projectsApi.getHighlightedProjects();
  console.log(highlightedProjects)
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        {highlightedProjects.map((project) => (
          <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id} className='text-white text-xl font-bold cursor-pointer'></p>
        ))}
      </main>
      <Footer />
    </>
  )
}
