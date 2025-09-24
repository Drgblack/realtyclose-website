import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/components/layout/Header";
import SiteFooter from "../components/SiteFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
  description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon. Build trust through transparent development.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-slate-900`}>
        <Header />
        <div className="pt-16">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}