import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import Navigation from './components/header/header';
import defaultImage from './assets/images/default.jpg';
import './globals.css';


const geist = Roboto_Mono({
  subsets: ['latin'],
})
const satoshi = localFont({
  src: './assets/fonts/satoshi/Satoshi-Variable.woff2',
});

const DESCRIPTION = 'Explore the award-winning work of Jack Antoine Charlot, a visionary director and animation expert. Discover captivating storytelling and breathtaking artistry.';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_ROOT_URL as string),
  robots: { index: true, follow: true },
  themeColor: '#ffffff',
  openGraph: {
    siteName: 'Jack Antoine Charlot',
    title: 'Jack Antoine Charlot - Director & Animation Director',
    description: DESCRIPTION,
    type: 'website',
    images: defaultImage.src,
  },
  twitter: {
    card: 'summary_large_image',
    images: defaultImage.src,
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="fr">
      <body className={geist.className}>
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
