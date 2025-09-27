import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealtyClose – The enterprise real estate platform starting with Gmail',
  description: 'AI-powered email assistant and deal tools for real estate professionals.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },                    // primary
      { url: '/images/brand/z-logo.png', sizes: '32x32', type: 'image/png' }, // fallback
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],      // if present
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