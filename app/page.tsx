import Image from 'next/image'
import Footer from './components/footer/footer'
import { projectsApi } from './api/projects';

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

export default async function Home() {
  const highlightedProjects = await projectsApi.getHighlightedProjects();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image 
          src="/logo.png"
          width="600"
          className='invert'
          height="200"
          alt="Jaack logo"
          />

        {highlightedProjects.map((project) => (
          <p key={project.id}>{project.title.rendered}</p>
        ))}
      </main>
      <Footer />
    </>
  )
}
