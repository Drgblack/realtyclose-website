import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import LiveChat from '../components/LiveChat'
import Analytics from '../components/Analytics'

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
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://realtyclose.com/#organization',
                  name: 'RealtyClose',
                  url: 'https://realtyclose.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://realtyclose.com/logo.png',
                    width: 512,
                    height: 512
                  },
                  contactPoint: {
                    '@type': 'ContactPoint',
                    telephone: '+1-415-555-0123',
                    contactType: 'customer service',
                    email: 'support@realtyclose.com',
                    availableLanguage: 'English'
                  },
                  sameAs: [
                    'https://twitter.com/realtyclose',
                    'https://linkedin.com/company/realtyclose',
                    'https://youtube.com/@realtyclose'
                  ]
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://realtyclose.com/#software',
                  name: 'RealtyClose',
                  url: 'https://realtyclose.com',
                  description: 'AI-powered email platform for real estate professionals. Generate professional emails in seconds, save 15+ hours per week, and increase your close rate by 23%.',
                  applicationCategory: 'BusinessApplication',
                  operatingSystem: ['Web', 'Chrome Extension'],
                  screenshot: 'https://realtyclose.com/screenshot.png',
                  softwareVersion: '2.0',
                  datePublished: '2024-01-01',
                  dateModified: '2024-01-15',
                  publisher: {
                    '@id': 'https://realtyclose.com/#organization'
                  },
                  offers: [
                    {
                      '@type': 'Offer',
                      name: 'Free Plan',
                      price: '0',
                      priceCurrency: 'USD',
                      description: '10 AI emails per day, basic templates, Gmail integration'
                    },
                    {
                      '@type': 'Offer',
                      name: 'Professional Plan',
                      price: '14.50',
                      priceCurrency: 'USD',
                      priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '14.50',
                        priceCurrency: 'USD',
                        billingPeriod: 'P1M'
                      },
                      description: 'Unlimited AI emails, advanced templates, priority support, analytics'
                    }
                  ],
                  aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    ratingCount: '2500',
                    bestRating: '5',
                    worstRating: '1'
                  },
                  review: [
                    {
                      '@type': 'Review',
                      author: {
                        '@type': 'Person',
                        name: 'Sarah Mitchell'
                      },
                      reviewRating: {
                        '@type': 'Rating',
                        ratingValue: '5'
                      },
                      reviewBody: 'RealtyClose has been a game-changer for my business. I\'ve gone from spending 3 hours a day on emails to just 20 minutes.'
                    }
                  ],
                  featureList: [
                    'AI-powered email generation',
                    'Gmail integration',
                    '50+ professional templates',
                    'Follow-up reminders',
                    'Custom branding',
                    'Analytics dashboard',
                    'Team collaboration'
                  ]
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://realtyclose.com/#website',
                  url: 'https://realtyclose.com',
                  name: 'RealtyClose',
                  description: 'The Enterprise Real Estate Platform Starting With Your Gmail',
                  publisher: {
                    '@id': 'https://realtyclose.com/#organization'
                  },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://realtyclose.com/help?q={search_term_string}'
                    },
                    'query-input': 'required name=search_term_string'
                  }
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://realtyclose.com/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How long does setup take?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Installation takes less than 60 seconds. Simply add the Chrome extension and you\'re ready to start generating emails.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: 'Does it work with Outlook?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Currently, RealtyClose is optimized for Gmail. Outlook support is coming soon - join our waitlist to be notified.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: 'Is my data secure?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes. We use bank-grade encryption and are GDPR compliant. Your data never leaves our secure servers.'
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <LiveChat />
        <Analytics />
      </body>
    </html>
  )
}