import { projectsApi } from "@/app/about/api/projects";

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - Work',
  description: 'Jack Antoine Charlot is a french director.',
}

export default async function ProjectSingle({ params }: any) {
  console.log(params);
  const project = await projectsApi.getProjectBySlug(params.slug);
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-16 md:ml-24">
        <h1 className="text-4xl text-white" dangerouslySetInnerHTML={{__html: project.title.rendered}}></h1>
        <p className="text-white" dangerouslySetInnerHTML={{__html: project.content.rendered}}></p>
      </main>
    </>
  )
}