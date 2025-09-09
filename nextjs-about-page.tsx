// Next.js About Page Implementation
// app/about/page.tsx (App Router) or pages/about.tsx (Pages Router)

import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us - RealtyClose',
  description: 'RealtyClose simplifies real estate closings with automated communication, intelligent reminders, and secure workflows. Part of the Zaza Technologies family.',
  openGraph: {
    title: 'About Us - RealtyClose',
    description: 'RealtyClose simplifies real estate closings with automated communication, intelligent reminders, and secure workflows. Part of the Zaza Technologies family.',
    type: 'website',
    url: 'https://realtyclose.com/about',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'RealtyClose',
  url: 'https://realtyclose.com',
  logo: 'https://realtyclose.com/logo.png',
  description: 'RealtyClose simplifies real estate closings with automated communication, intelligent reminders, and secure workflows.',
  founder: {
    '@type': 'Organization',
    name: 'Zaza Technologies'
  },
  sameAs: [
    'https://twitter.com/realtyclose',
    'https://linkedin.com/company/realtyclose',
    'https://github.com/realtyclose'
  ]
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

function TargetIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
    </svg>
  )
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Building Trust.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Simplifying
              </span>{' '}
              Closings.
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-8">
              RealtyClose is the smart platform designed to remove stress from real estate closings.
            </p>
          </div>
        </section>

        {/* About RealtyClose Section */}
        <section className="py-16 bg-white dark:bg-slate-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h6m-6 4h6m-6 4h6m-6 4h6" />
              </svg>
              About RealtyClose
            </h2>
            <div className="text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                RealtyClose is the smart platform designed to remove stress from real estate closings. We help agents, brokers, and clients stay in sync with automated communication, intelligent reminders, and secure document management. Our goal is simple - make every closing flawless so you can focus on growing relationships and earning referrals.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Our Mission & Vision
            </h2>
            <div className="text-base leading-8 text-slate-600 dark:text-slate-300 space-y-4">
              <p>
                Our mission is to empower real estate professionals with technology that keeps deals on track, eliminates last-minute chaos, and delivers peace of mind.
              </p>
              <p>
                Our vision is a real estate industry where closings are smooth, predictable, and a source of client delight rather than stress.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Our Story
            </h2>
            <div className="text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                RealtyClose was born from firsthand experience in the real estate industry. We saw too many deals collapse in the final stages - not because of the property or the client, but because of missed messages, misplaced documents, and last-minute surprises. We set out to change that. With RealtyClose, every closing is an opportunity to strengthen trust, protect your reputation, and create clients for life.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center justify-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Trust */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <ShieldIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Trust</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  We believe closings should build confidence, not anxiety.
                </p>
              </div>

              {/* Simplicity */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <SparklesIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Simplicity</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  Technology should make life easier, not more complicated.
                </p>
              </div>

              {/* Results */}
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <TargetIcon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Results</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-300 leading-7">
                  Every feature we build helps you close more deals, earn more referrals, and delight your clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Zaza Technologies Section */}
        <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Part of the Zaza Technologies Family
            </h2>
            <div className="text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                RealtyClose is proudly part of the Zaza Technologies family - a global innovator building AI-powered tools that help professionals thrive. From Zaza Promptly, which helps teachers communicate with parents in seconds, to RealtyClose, built for real estate agents, our ecosystem is united by one belief: professionals deserve tools that save time and build trust.
              </p>
            </div>
          </div>
        </section>

        {/* Looking Ahead Section */}
        <section className="py-16 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              Looking Ahead
            </h2>
            <div className="text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                We're just getting started. Join us as we shape the future of real estate closings - where every deal ends with happy clients, flawless execution, and more referrals.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See how RealtyClose can simplify your next closing
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of real estate professionals who trust RealtyClose to make their closings seamless and stress-free.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/demo"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg"
              >
                See Demo
              </Link>
              <Link
                href="/"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}