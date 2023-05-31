import Image from 'next/image'
import Footer from './components/footer/footer'

export const metadata = {
  title: 'Jack Antoine Charlot | French Director',
  description: 'Jack Antoine Charlot is a french director.',
}

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Image 
          src="/logo.png"
          width="200"
          height="200"
          alt="Jaack logo"
          />
      </main>
      <Footer />
    </>
  )
}
