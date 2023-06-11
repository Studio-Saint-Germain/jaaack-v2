import Footer from './components/footer/footer';
import HighlightedProjects from './components/highlighted-projects/highlighted-projects';

export const metadata = {
  title: 'Jack Antoine Charlot | Director & Animation Director',
  description: 'Explore the award-winning work of Jack Antoine Charlot, a visionary director and animation expert. Discover captivating storytelling and breathtaking artistry.',
}

export default function Home() {

  return (
    <>
    <HighlightedProjects />
    <Footer className='md:absolute' />
    </>
  )
}
