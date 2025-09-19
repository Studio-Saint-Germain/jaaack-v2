import { Analytics } from '@vercel/analytics/react';
import { Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Navigation from './components/header/header';
import { HtmlHead } from './components/htmlHead/htmlHead';
import './globals.css';


const geist = Roboto_Mono({
  subsets: ['latin'],
})
const satoshi = localFont({
  src: './assets/fonts/satoshi/Satoshi-Variable.woff2',
});

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="fr">
      <head>
        <HtmlHead />
      </head>
      <body className={geist.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
