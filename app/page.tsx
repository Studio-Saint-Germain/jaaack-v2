import Image from 'next/image'
import Footer from './components/footer/footer'

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

async function getData() {
  const res = await fetch("https://api.jaaack.fr/wp-json/wp/v2/projects");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log('lol')
 console.log('res', res  );
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image 
          src="/logo.png"
          width="600"
          className='invert'
          height="200"
          alt="Jaack logo"
          />
      </main>
      <Footer />
    </>
  )
}
