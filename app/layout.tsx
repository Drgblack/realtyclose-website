import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
  description: 'AI-powered email assistant and deal tools for real estate professionals. Write perfect emails in seconds and close with confidence.',
  icons: {
    // Primary favicons – use the PNGs under /public/logo
    icon: [
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // keep .ico if present and good quality
      { url: '/logo/favicon.ico', rel: 'icon' },
    ],
    // iOS home screen
    apple: [{ url: '/logo/apple-touch-icon.png', sizes: '180x180' }],
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