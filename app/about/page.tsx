import { Metadata } from 'next'
import Link from 'next/link'
import HeaderLegacy from '../../components/HeaderLegacy'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'About - RealtyClose',
  description: 'Learn how RealtyClose helps real estate professionals save time, close more deals, and build better client relationships.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderLegacy />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              About RealtyClose
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Empowering real estate professionals to communicate better, close faster, and grow their business.
            </p>
          </div>

          {/* Our Story */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-16">
            <h2>Our Story</h2>
            <p>
              RealtyClose was born from a simple observation: real estate agents spend up to 3 hours every day writing emails. 
              That's time that could be spent showing properties, meeting clients, or closing deals.
            </p>
            <p>
              Founded in 2023 by a team of real estate professionals and AI experts, we set out to solve this problem. 
              Our mission is to give agents their time back while helping them communicate more effectively than ever before.
            </p>
          </div>

          {/* Mission & Values */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-12 mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8 text-center">
              Our Mission
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 text-center mb-12">
              To empower every real estate professional with AI tools that save time, 
              improve communication, and help close more deals.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Speed</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Turn hours of email writing into seconds of review and send.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Quality</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Professional, personalized communication that builds trust.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Simplicity</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Works right in Gmail. No learning curve. Just results.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Built by Real Estate Professionals
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Sarah Chen</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">Co-Founder & CEO</p>
                <p className="text-slate-600 dark:text-slate-300">
                  Former top-producing agent with 15 years of experience in residential real estate.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-teal-400 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-1">Michael Rodriguez</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-3">Co-Founder & CTO</p>
                <p className="text-slate-600 dark:text-slate-300">
                  AI engineer formerly at Google, passionate about making AI accessible to everyone.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center mb-16">
            <h2 className="text-3xl font-bold mb-12">By the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-blue-100">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50K+</div>
                <div className="text-blue-100">Emails Generated</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15 hrs</div>
                <div className="text-blue-100">Saved Per Week</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-100">User Rating</div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
              Have questions? Want to partner with us? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@realtyclose.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Contact Us
              </a>
              <Link
                href="/demo"
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}