import type { Metadata } from 'next'
import "./globals.css";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
  description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon. Build trust through transparent development.',
  keywords: ['real estate', 'ai', 'email', 'gmail', 'automation', 'crm', 'real estate agents'],
  authors: [{ name: 'Zaza Technologies' }],
  openGraph: {
    title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
    description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon.',
    type: 'website',
    locale: 'en_US',
    siteName: 'RealtyClose',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
    description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="gradient-bg min-h-screen">
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
