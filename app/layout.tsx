import { Inter } from 'next/font/google'
import Navigation from './components/navigation/navigation'
import './globals.css';
import localFont from 'next/font/local';

const inter = Inter({ subsets: ['latin'] })
const satoshi = localFont({
  src: './assets/fonts/satoshi/Satoshi-Variable.woff2',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={satoshi.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
