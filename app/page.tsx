import Footer from './components/footer/footer';
import HighlightedProjects from './components/highlighted-projects/highlighted-projects';

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

export default function Home() {


  return (
    <>
    <HighlightedProjects />
    <Footer className='absolute' />
    </>
  )
}
