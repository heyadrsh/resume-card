import type { Metadata, Viewport } from 'next'

import './globals.css'

import { GeistSans } from 'geist/font'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Resume card',
  description: 'Personal Resume website of Aadarsh Kumar - B.Tech Student & Software Developer',
  keywords: ['resume', 'cv', 'portfolio', 'aadarsh kumar', 'software developer', 'machine learning'],
  authors: [{ name: 'Aadarsh Kumar' }],
  creator: 'Aadarsh Kumar',
  metadataBase: new URL('https://resume.heyadrsh.tech'),
  openGraph: {
    title: 'Resume card - Aadarsh Kumar',
    description: 'Personal Resume website of Aadarsh Kumar - B.Tech Student & Software Developer',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2025', sizes: 'any' },
      { url: '/favicon.ico?v=2025', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.ico?v=2025', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.ico?v=2025', sizes: '48x48', type: 'image/x-icon' }
    ],
    shortcut: [
      { url: '/favicon.ico?v=2025' }
    ],
    apple: [
      { url: '/favicon.ico?v=2025' }
    ],
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={GeistSans.className}>
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2025" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico?v=2025" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=2025" />
        <meta name="msapplication-TileImage" content="/favicon.ico?v=2025" />
      </head>
      <body>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}
