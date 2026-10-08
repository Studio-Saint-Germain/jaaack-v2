import { pagesApi } from './api/pages';
import { projectsApi } from './api/projects';
import Footer from './components/footer/footer';
import HighlightedProjects from './components/highlighted-projects/highlighted-projects';

export const metadata = {
  title: 'Jack Antoine Charlot | Director & Animation Director',
  description: 'Explore the award-winning work of Jack Antoine Charlot, a visionary director and animation expert. Discover captivating storytelling and breathtaking artistry.',
  alternates: { canonical: '/' },
}

const HOME_PAGE_ID = 138;

export default async function Home() {
  const [projects, homePage] = await Promise.all([
    projectsApi.getHighlightedProjects(),
    pagesApi.getPageById(HOME_PAGE_ID),
  ]);
  const defaultVideos = Object.values(homePage.acf).filter(Boolean);

  return (
    <>
    <HighlightedProjects projects={projects} defaultVideos={defaultVideos} />
    <Footer className='md:absolute' />
    </>
  )
}
