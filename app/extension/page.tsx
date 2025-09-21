'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
import CountdownTimer from '../../components/CountdownTimer'

export const metadata: Metadata = {
  title: 'Chrome Extension - RealtyClose',
  description: 'Get early access to the RealtyClose Chrome extension. Join the waitlist for exclusive beta access.',
}

export default function ExtensionPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Chrome Extension Coming Soon
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              The RealtyClose Chrome extension is currently in final testing. 
              Join our waitlist to be the first to get access when we launch.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-2xl p-8 mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-700 dark:text-green-300 font-semibold">In Active Development</span>
              </div>
              <p className="text-slate-700 dark:text-slate-300">
                Our team is putting the finishing touches on the extension. 
                Expected launch: <strong>Q1 2024</strong>
              </p>
            </div>
          </div>

          {/* Waitlist Form */}
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-2xl p-12 mb-16">
            <div className="text-center mb-8">
              <div className="bg-orange-500 text-white px-4 py-2 rounded-full inline-block mb-4">
                <span className="font-semibold">🎯 Limited Beta Access</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">
                Join the Beta Waitlist
              </h2>
              <p className="text-blue-100 mb-6">
                Only 247 spots remaining for exclusive early access
              </p>
              
              <div className="mb-6">
                <p className="text-blue-200 mb-4">Beta program closes in:</p>
                <CountdownTimer 
                  targetDate={new Date('2024-01-31T23:59:59')} 
                  className="mb-4"
                />
              </div>
            </div>
            
            <form className="max-w-md mx-auto">
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/70 text-center"
                  required
                />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/70 text-center"
                  required
                />
                <input
                  type="text"
                  placeholder="Brokerage/Company (optional)"
                  className="w-full px-4 py-3 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-white/10 text-white placeholder-white/70 text-center"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 px-6 rounded-lg font-semibold transition-colors"
                >
                  🚀 Secure My Beta Spot
                </button>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-4">
                We'll email you as soon as the extension is ready. No spam, promise.
              </p>
            </form>
          </div>

          {/* Features Preview */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
              What to Expect
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  One-Click Installation
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Install directly from the Chrome Web Store in seconds.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Gmail Integration
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Works seamlessly within your existing Gmail workflow.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  AI-Powered Writing
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Generate professional emails in seconds with AI assistance.
                </p>
              </div>
            </div>
          </div>

          {/* Browser Requirements */}
          <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              System Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Browser</h4>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Google Chrome (recommended)</li>
                  <li>• Chrome version 90 or higher</li>
                  <li>• Outlook support coming soon</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-2">Email Providers</h4>
                <ul className="text-slate-600 dark:text-slate-300 space-y-1">
                  <li>• Gmail (full support)</li>
                  <li>• Google Workspace</li>
                  <li>• G Suite Legacy</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16">
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Have questions about the extension?
            </p>
            <Link
              href="/contact"
              className="inline-block bg-slate-800 dark:bg-slate-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-900 dark:hover:bg-slate-600 transition-colors"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}