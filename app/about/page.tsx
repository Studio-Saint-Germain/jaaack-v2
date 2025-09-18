import Link from "next/link";
import { pagesApi } from "../api/pages";
import Footer from "../components/footer/footer";
import VideoFullBackground from "../components/video-full-background/video-full-background";

export const metadata = {
  title: 'Jack Antoine Charlot - Director & Animation Director - About',
  description: 'Discover Jack Antoine Charlot, an award-winning director and animation expert. Uncover his creative brilliance and captivating storytelling.',
}

const ABOUT_PAGE_ID = 16;

export default async function About() {
  const pageData = await pagesApi.getPageById(ABOUT_PAGE_ID);
  const backgroundVideo = pageData.acf.background_video;
  console.log(pageData)

  return (
    <>
      <main className="min-h-screen relative page-container">
        {backgroundVideo && <VideoFullBackground fixed url={backgroundVideo} />}
        <div className="relative p-6 pt-20 md:p-10 md:ml-16">
          <h1 className="page-title mt-16 md:mt-0 text-white text-center leading-none font-semibold" dangerouslySetInnerHTML={{ __html: pageData.title.rendered }}></h1>
          <div className="text-white page-description mt-10 text-xl font-light" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>
          <div className="text-center mt-16">
            <Link className="text-xl text-white underline" href='/contact'>Contact & booking</Link>
          </div>
        </div>
        <Footer className="md:absolute" />
      </main>
    </>
  )
}