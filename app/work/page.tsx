import { projectsApi } from "../api/projects";
import ProjectCard from "./components/project-card/project-card";

export const metadata = {
  title: 'Jack Antoine Charlot - Director & Animation Director - Work',
  description: 'Explore the award-winning work of Jack Antoine Charlot, a visionary director and animation expert. Discover captivating storytelling and breathtaking artistry.',
}

export default async function Work() {
  const projects = await projectsApi.getProjects(['_embed', 'acf_format=standard']);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:pl-16 md:py-0">
        <div className="md:grid md:grid-cols-6 w-full gap-0">
          {projects.map((project, i) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </main>
    </>
  )
}