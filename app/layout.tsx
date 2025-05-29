import type { Metadata } from 'next'

import './globals.css'

import { GeistSans } from 'geist/font'
import { SpeedInsights } from "@vercel/speed-insights/next"

import { ThemeProvider } from '@/components/theme-provider'

export const metadata: Metadata = {
  title: 'Aadarsh Kumar - CV',
  description: 'Personal CV website of Aadarsh Kumar - B.Tech Student & Software Developer',
  icons: {
    icon: [
      { url: 'https://github.com/heyadrsh.png' }
    ],
    apple: [
      { url: 'https://github.com/heyadrsh.png' }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className={GeistSans.className}>
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
