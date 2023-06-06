import { pagesApi } from "../api/pages";
import Footer from "../components/footer/footer"

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - Contact',
  description: 'Jack Antoine Charlot is a french director.',
}
const CONTACT_PAGE_ID = 18;

export default async function Contact() {
  const pageData = await pagesApi.getPageById(CONTACT_PAGE_ID);

  return (
    <>
      <main className="min-h-screen p-6 md:p-16 md:ml-16 page-container !bg-cover" style={{background: `linear-gradient(
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.3)
  ), url(${pageData.background_image})`}}>
        <div className="page-title mt-16 md:mt-0 text-white text-center leading-none font-semibold" dangerouslySetInnerHTML={{__html: pageData.title.rendered}}></div>
        <div className="page-description text-white text-center mt-16 text-xl font-light" dangerouslySetInnerHTML={{__html: pageData.content.rendered}}></div>
        <Footer className='absolute' />
      </main>
    </>
  )
}