import Footer from "../components/footer/footer"

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - About Jack Antoine',
  description: 'Jack Antoine Charlot is a french director.',
}

export default function About() {
  return (
    <>
      <main className="min-h-screen p-16 md:pl-24 md:mr-">
        <h1 className="text-[180px] leading-tight text-white font-bold text-right">Hi, I'm <br/>Jaaack.</h1>
      </main>
      <Footer />
    </>
  )
}