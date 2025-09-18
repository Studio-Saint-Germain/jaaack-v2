import Image from "next/image";
import Link from "next/link";
import { pagesApi } from "../api/pages";
import Footer from "../components/footer/footer";
import VideoFullBackground from "../components/video-full-background/video-full-background";

export const metadata = {
  title: 'Jack Antoine Charlot - Director & Animation Director - Contact',
  description: 'Contact Jack Antoine Charlot, a renowned Director and animation director. Get in touch with this talented professional for your creative projects.',
}
const CONTACT_PAGE_ID = 18;

export default async function Contact() {
  const pageData = await pagesApi.getPageById(CONTACT_PAGE_ID);
  const backgroundVideo = pageData.acf.background_video;

  return (
    <>
      <main className="min-h-screen relative page-container !bg-cover">
        {backgroundVideo && <VideoFullBackground fixed url={backgroundVideo} />}
        <div className="relative p-6 md:p-10 md:ml-16 md:max-w-5xl">
          <h1 className="page-title mt-16 md:mt-0 text-white leading-none font-semibold" dangerouslySetInnerHTML={{ __html: pageData.title.rendered }}></h1>
          <div className="page-description text-white mt-10 text-xl font-light" dangerouslySetInnerHTML={{ __html: pageData.content.rendered }}></div>
          <div className="flex gap-2 items-center">
            <Link className="text-3xl text-white underline" href='https://www.instagram.com/jackantoinecharlot' target="_blank">
              <Image
                src="/instagram.svg"
                alt="Jaaack Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
            <Link className="text-3xl text-white underline" href='https://vimeo.com/jackantoinecharlot' target="_blank">
              <Image
                src="/vimeo.svg"
                alt="Jaaack Logo"
                width={40}
                height={40}
                priority
              />
            </Link>
          </div>
        </div>
        <Footer className="md:absolute" />
      </main>
    </>
  )
}