import { projectsApi } from "@/app/api/projects";
import React, { Suspense } from 'react';
import VideoPlayer, { VideoInfos } from "./components/video-player/video-player";
import Loading from "./loading";



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

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - Work',
  description: 'Jack Antoine Charlot is a french director.',
}