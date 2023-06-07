import Link from "next/link";
import { pagesApi } from "../api/pages"
import Footer from "../components/footer/footer"
import VideoFullBackground from "../components/video-full-background/video-full-background";

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - About Jack Antoine',
  description: 'Jack Antoine Charlot is a french director.',
}

const ABOUT_PAGE_ID = 16;

export default async function About() {
  const pageData = await pagesApi.getPageById(ABOUT_PAGE_ID);
  const backgroundVideo = pageData.acf.background_video;

  return (
    <>
      <main className="min-h-screen relative page-container !bg-cover">
        {backgroundVideo && <VideoFullBackground url={backgroundVideo} />}
        <div className="relative p-6 md:p-16 md:ml-16">
        <h1 className="page-title mt-16 md:mt-0 md:max-w-[80%] md:ml-[20%] text-white text-right leading-none font-semibold" dangerouslySetInnerHTML={{__html: pageData.title.rendered}}></h1>
        <div className="text-white text-right mt-16 text-xl font-light" dangerouslySetInnerHTML={{__html: pageData.content.rendered}}></div>
        <div className="text-right mt-16">
          <Link className="text-3xl text-white underline" href='/contact'>Contact & booking</Link>
        </div>
        </div>
      </main>
    </>
  )
}