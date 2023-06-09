import { pagesApi } from "../api/pages";
import Footer from "../components/footer/footer";
import VideoFullBackground from "../components/video-full-background/video-full-background";

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - Distinctions',
  description: 'Jack Antoine Charlot is a french director.',
}

const AWARDS_PAGE_ID = 293;

export default async function About() {
  const pageData = await pagesApi.getPageById(AWARDS_PAGE_ID);
  const backgroundVideo = pageData.acf.background_video;

  return (
    <>
      <main className="min-h-screen relative page-container">
      {backgroundVideo && <VideoFullBackground url={backgroundVideo} />}
        <div className="relative p-6 md:p-16 md:ml-16">
        <h1 className="page-title mt-16 md:mt-0 text-white text-center leading-none font-semibold" dangerouslySetInnerHTML={{__html: pageData.title.rendered}}></h1>
        <div className="text-white page-description mt-16 text-xl text-center font-light" dangerouslySetInnerHTML={{__html: pageData.content.rendered}}></div>
        </div>
      <Footer className="absolute"/>
      </main>
    </>
  )
}