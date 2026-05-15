import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LanguageProvider } from '@/context/LanguageContext'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aiz Websites | Web Design Studio | Europe',
  description: 'Custom websites for businesses, creators, and brands across Europe. From idea to launch. Web design and development studio based in Europe.',
  keywords: ['web design', 'web development', 'landing pages', 'e-commerce', 'portfolio', 'Europe', 'custom websites'],
  authors: [{ name: 'Aiz Websites' }],
  openGraph: {
    title: 'Aiz Websites | Web Design Studio',
    description: 'Turning ideas into functional digital experiences. Custom websites for businesses, creators, and brands across Europe.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aiz Websites | Web Design Studio',
    description: 'Turning ideas into functional digital experiences.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#0a0a08',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
    <link rel="icon" type="image/x-icon" href="/images/logo.ico"></link>
      <body>
        <LanguageProvider>
          {/* Grain Overlay */}
          <div className="grain-overlay" aria-hidden="true">
            <svg>
              <filter id="noiseFilter">
                <feTurbulence 
                  type="fractalNoise" 
                  baseFrequency="0.8" 
                  numOctaves="4" 
                  stitchTiles="stitch"
                />
              </filter>
              <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
          </div>
          
          {/* Vertical Line */}
          <div className="vertical-line" aria-hidden="true" />
          
          {children}
          
          <CookieBanner />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
