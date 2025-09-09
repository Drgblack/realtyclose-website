import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'RealtyClose - The Enterprise Real Estate Platform Starting With Your Gmail',
    template: '%s | RealtyClose'
  },
  description: 'RealtyClose is the smart platform designed to remove stress from real estate closings. Generate professional emails in seconds and keep every deal on track.',
  keywords: ['real estate', 'email automation', 'AI', 'Gmail', 'closing management', 'real estate CRM'],
  authors: [{ name: 'RealtyClose Team' }],
  creator: 'RealtyClose',
  publisher: 'RealtyClose',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://realtyclose.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'RealtyClose - The Enterprise Real Estate Platform Starting With Your Gmail',
    description: 'RealtyClose is the smart platform designed to remove stress from real estate closings. Generate professional emails in seconds and keep every deal on track.',
    url: 'https://realtyclose.com',
    siteName: 'RealtyClose',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RealtyClose - AI-Powered Email Platform for Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RealtyClose - The Enterprise Real Estate Platform Starting With Your Gmail',
    description: 'Generate professional real estate emails in seconds with AI-powered assistance.',
    creator: '@realtyclose',
    images: ['/twitter-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Google Analytics - Replace with your GA4 measurement ID */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'RealtyClose',
              url: 'https://realtyclose.com',
              description: 'AI-powered email platform for real estate professionals',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web, Chrome Extension',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '500',
              },
              publisher: {
                '@type': 'Organization',
                name: 'RealtyClose',
                url: 'https://realtyclose.com',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}