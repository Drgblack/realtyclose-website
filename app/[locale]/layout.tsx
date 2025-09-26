import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import LiveChat from '../../components/LiveChat'
import Analytics from '../../components/Analytics'
import { locales } from '../../i18n'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
  const isGerman = locale === 'de'
  
  const title = isGerman 
    ? 'RealtyClose - Die Enterprise-Immobilienplattform beginnt mit Ihrem Gmail'
    : 'RealtyClose - The Enterprise Real Estate Platform Starting With Your Gmail'
  
  const description = isGerman
    ? 'RealtyClose ist die intelligente Plattform, die entwickelt wurde, um Stress aus Immobilienabschlüssen zu nehmen. Generieren Sie professionelle E-Mails in Sekunden und halten Sie jeden Deal auf Kurs.'
    : 'RealtyClose is the smart platform designed to remove stress from real estate closings. Generate professional emails in seconds and keep every deal on track.'

  const canonical = locale === 'en' ? '/' : `/${locale}`

  return {
    title: {
      default: title,
      template: '%s | RealtyClose'
    },
    description,
    keywords: ['real estate', 'email automation', 'AI', 'Gmail', 'closing management', 'real estate CRM'],
    authors: [{ name: 'RealtyClose Team' }],
    creator: 'RealtyClose',
    publisher: 'RealtyClose',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical,
      languages: {
        'en': '/',
        'de': '/de'
      }
    },
    openGraph: {
      title,
      description,
      url: `https://realtyclose.com${canonical}`,
      siteName: 'RealtyClose',
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: isGerman 
            ? 'RealtyClose - KI-gestützte E-Mail-Plattform für Immobilien'
            : 'RealtyClose - AI-Powered Email Platform for Real Estate',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: isGerman 
        ? 'Generieren Sie professionelle Immobilien-E-Mails in Sekunden mit KI-gestützter Unterstützung.'
        : 'Generate professional real estate emails in seconds with AI-powered assistance.',
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
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound()
  }

  // Providing all messages to the client side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
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
                    availableLanguage: locale === 'de' ? 'German' : 'English'
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
                  description: locale === 'de' 
                    ? 'KI-gestützte E-Mail-Plattform für Immobilienprofis. Generieren Sie professionelle E-Mails in Sekunden, sparen Sie 15+ Stunden pro Woche und erhöhen Sie Ihre Abschlussrate um 23%.'
                    : 'AI-powered email platform for real estate professionals. Generate professional emails in seconds, save 15+ hours per week, and increase your close rate by 23%.',
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
                      name: locale === 'de' ? 'Kostenloser Plan' : 'Free Plan',
                      price: '0',
                      priceCurrency: 'USD',
                      description: locale === 'de' 
                        ? '10 KI-E-Mails pro Tag, Grundvorlagen, Gmail-Integration'
                        : '10 AI emails per day, basic templates, Gmail integration'
                    },
                    {
                      '@type': 'Offer',
                      name: locale === 'de' ? 'Professional Plan' : 'Professional Plan',
                      price: '14.50',
                      priceCurrency: 'USD',
                      priceSpecification: {
                        '@type': 'UnitPriceSpecification',
                        price: '14.50',
                        priceCurrency: 'USD',
                        billingPeriod: 'P1M'
                      },
                      description: locale === 'de'
                        ? 'Unbegrenzte KI-E-Mails, erweiterte Vorlagen, Priority-Support, Analytics'
                        : 'Unlimited AI emails, advanced templates, priority support, analytics'
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
                      reviewBody: locale === 'de'
                        ? 'RealtyClose war ein Wendepunkt für mein Geschäft. Ich bin von 3 Stunden täglich für E-Mails auf nur 20 Minuten übergegangen.'
                        : 'RealtyClose has been a game-changer for my business. I\'ve gone from spending 3 hours a day on emails to just 20 minutes.'
                    }
                  ],
                  featureList: locale === 'de' ? [
                    'KI-gestützte E-Mail-Generierung',
                    'Gmail-Integration',
                    '50+ professionelle Vorlagen',
                    'Follow-up-Erinnerungen',
                    'Individuelles Branding',
                    'Analytics-Dashboard',
                    'Teamzusammenarbeit'
                  ] : [
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
                  description: locale === 'de'
                    ? 'Die Enterprise-Immobilienplattform beginnt mit Ihrem Gmail'
                    : 'The Enterprise Real Estate Platform Starting With Your Gmail',
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
                      name: locale === 'de' ? 'Wie lange dauert die Einrichtung?' : 'How long does setup take?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: locale === 'de'
                          ? 'Die Installation dauert weniger als 60 Sekunden. Fügen Sie einfach die Chrome-Erweiterung hinzu und Sie sind bereit, E-Mails zu generieren.'
                          : 'Installation takes less than 60 seconds. Simply add the Chrome extension and you\'re ready to start generating emails.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: locale === 'de' ? 'Funktioniert es mit Outlook?' : 'Does it work with Outlook?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: locale === 'de'
                          ? 'Derzeit ist RealtyClose für Gmail optimiert. Outlook-Support kommt bald - tragen Sie sich in unsere Warteliste ein, um benachrichtigt zu werden.'
                          : 'Currently, RealtyClose is optimized for Gmail. Outlook support is coming soon - join our waitlist to be notified.'
                      }
                    },
                    {
                      '@type': 'Question',
                      name: locale === 'de' ? 'Sind meine Daten sicher?' : 'Is my data secure?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: locale === 'de'
                          ? 'Ja. Wir verwenden banktaugliche Verschlüsselung und sind DSGVO-konform. Ihre Daten verlassen niemals unsere sicheren Server.'
                          : 'Yes. We use bank-grade encryption and are GDPR compliant. Your data never leaves our secure servers.'
                      }
                    }
                  ]
                }
              ]
            }),
          }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {children}
          <LiveChat />
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}