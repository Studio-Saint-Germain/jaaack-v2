import { projectsApi } from "../api/projects";

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - Work',
  description: 'Jack Antoine Charlot is a french director.',
}

export default async function Work() {
  const projects = await projectsApi.getHighlightedProjects();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between py-16 md:pl-24">
        <div className="md:grid md:grid-cols-6">
          {projects.map((project, i) => (
            <div key={project.id} className='text-white text-center text-xl cursor-pointer grid-item'>
              <p dangerouslySetInnerHTML={{ __html: project.title.rendered }} key={project.id}></p>
            </div>
          ))}
        </div>
      </main>
    </>
  )
}