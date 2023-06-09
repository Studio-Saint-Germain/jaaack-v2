import { projectsApi } from "@/app/api/projects";
import VideoPlayer, { VideoInfos } from "./components/video-player/video-player";
import { Metadata } from "next";


export default async function ProjectSingle({ params }: any) {
  const project = await projectsApi.getProjectBySlug(params.slug);
  const videoInfos: VideoInfos = {
    url: project.acf.vimeo_link.url,
    description: project.content.rendered,
    title: project.title.rendered,
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:ml-16 relative">
          <VideoPlayer videoInfos={videoInfos}/>
      </main>
    </>
  )
}

export async function generateMetadata(
  { params }: any,
): Promise<Metadata> {

  const project = await projectsApi.getProjectBySlug(params.slug);
 
  return {
    title: 'Jack Antoine Charlot - French Director - Work',
    description: `Discover Jack Antoine Charlot\'s work as a director: ${project.title.rendered}.`,
  }
}