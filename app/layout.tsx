import { Inter } from 'next/font/google'
import Navigation from './components/navigation/navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
