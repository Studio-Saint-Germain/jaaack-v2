import { projectsApi } from "@/app/api/projects";
import React from 'react';
import VideoPlayer, { VideoInfos } from "./components/video-player/video-player";



export default async function ProjectSingle({ params }: any) {
  const project = await projectsApi.getProjectBySlug(params.slug);
  const videoInfos: VideoInfos = {
    url: project.acf.vimeo_link.url,
    description: project.content.rendered,
    title: project.title.rendered,
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:ml-24 relative">
        { videoInfos && videoInfos.url && videoInfos.description && videoInfos.title &&
          <VideoPlayer videoInfos={videoInfos}/>
        }
      </main>
    </>
  )
}

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - Work',
  description: 'Jack Antoine Charlot is a french director.',
}