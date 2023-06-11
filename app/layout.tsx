import localFont from 'next/font/local';
import Navigation from './components/header/header';
import './globals.css';
import { HtmlHead } from './components/htmlHead/htmlHead';

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
      <body className={satoshi.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
