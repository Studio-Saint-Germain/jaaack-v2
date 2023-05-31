import Footer from "../components/footer/footer"

export const metadata = {
  title: 'Jack Antoine Charlot - French Director - About Jack Antoine',
  description: 'Jack Antoine Charlot is a french director.',
}

export default function About() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-4xl">About</h1>
      </main>
      <Footer />
    </>
  )
}