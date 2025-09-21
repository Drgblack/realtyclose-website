import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import SiteFooter from "../components/SiteFooter";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
  description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon. Build trust through transparent development.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} gradient-bg min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
