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
      {backgroundVideo && <VideoFullBackground url={backgroundVideo} />}
      <main className="min-h-screen relative page-container !bg-cover">
        <div className="relative p-6 md:p-16 md:ml-16">
          <h1 className="text-white font-bold text-5xl w-fit mx-auto">
            <div className="text-[1em]">JACK</div>
            <div className="text-[.6em]">ANTOINE</div>
            <div className="text-[.55em]">CHARLOT</div>
          </h1>
        <div className="text-white page-description mt-16 text-xl text-center font-light" dangerouslySetInnerHTML={{__html: pageData.content.rendered}}></div>
        <div className="text-center mt-16">
          <Link className="text-xl text-white underline" href='/contact'>Contact & booking</Link>
        </div>
        </div>
      </main>
      <Footer className="md:absolute"/>
    </>
  )
}