import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealtyClose – The enterprise real estate platform starting with Gmail',
  description: 'AI-powered email assistant and deal tools for real estate professionals. Write perfect emails in seconds and close with confidence.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },        // primary (transparent)
      { url: '/brand/z-mark-32.png', sizes: '32x32', type: 'image/png' }, // fallback
      { url: '/brand/z-mark-16.png', sizes: '16x16', type: 'image/png' }, // fallback
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },   // no transparency
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' }, // pinned tabs (monotone)
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={`${inter.className} min-h-screen`}>
        <main className="pt-14">{children}</main>
      </body>
    </html>
  )
}