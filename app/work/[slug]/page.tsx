import { projectsApi } from "@/app/about/api/projects";
import React from 'react';
import VideoPlayer from "./components/video-player/video-player";

export default async function ProjectSingle({ params }: any) {
  console.log(params);
  const project = await projectsApi.getProjectBySlug(params.slug);
  const videoUrl = project.acf.vimeo_link.url;
  const title = project.title.rendered;
  const description = project.content.rendered;
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between md:ml-24 relative">
        { videoUrl &&
          <VideoPlayer url={videoUrl} />
        }
        { title &&
          <h1 className="text-4xl text-white" dangerouslySetInnerHTML={{__html: title}}></h1>
        }
        { description &&
          <div className="text-white" dangerouslySetInnerHTML={{__html: description}}></div>
        }
      </main>
    </>
  )
}