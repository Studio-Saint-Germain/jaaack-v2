import Link from "next/link";
import { pagesApi } from "../api/pages"
import Footer from "../components/footer/footer"

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - About Jack Antoine',
  description: 'Jack Antoine Charlot is a french director.',
}

const ABOUT_PAGE_ID = 16;

export default async function About() {
  const pageData = await pagesApi.getPageById(ABOUT_PAGE_ID);

  return (
    <>
          <main className="md:min-h-screen p-16 md:ml-24 page-container !bg-cover" style={pageData.background_image ? {background: `linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ),url(${pageData.background_image} no-repeat`} : {}}>
        <h1 className="page-title mt-16 md:mt-0 md:max-w-[80%] md:ml-[20%] text-white text-right leading-none font-semibold" dangerouslySetInnerHTML={{__html: pageData.title.rendered}}></h1>
        <div className="text-white text-right mt-16 text-xl font-light" dangerouslySetInnerHTML={{__html: pageData.content.rendered}}></div>
        <div className="text-right mt-16">
          <Link className="text-3xl text-white underline" href='/contact'>Contact & booking</Link>
        </div>
      </main>
    </>
  )
}