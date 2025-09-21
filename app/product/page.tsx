import { Metadata } from 'next'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Product - RealtyClose',
  description: 'Transform your real estate communication with AI-powered email automation. Save hours and close more deals.',
}

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              The AI Assistant Built for Real Estate
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              RealtyClose seamlessly integrates with Gmail to help you write professional emails in seconds, 
              track deals, and never miss a follow-up.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Smart Email Generation</h3>
              <p className="text-slate-600 dark:text-slate-300">
                AI analyzes your email context and generates professional responses tailored to real estate transactions.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Template Library</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Pre-built templates for every stage of the transaction - from initial inquiry to closing congratulations.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Follow-up Reminders</h3>
              <p className="text-slate-600 dark:text-slate-300">
                Never miss a follow-up with intelligent reminders based on email content and transaction timelines.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="py-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              How RealtyClose Works
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Install Extension</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Add to Chrome in one click
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Open Gmail</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Works right in your inbox
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Click Generate</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  AI creates perfect response
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review & Send</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Customize and send in seconds
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white mt-16">
            <h2 className="text-3xl font-bold mb-4">Start Writing Better Emails Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join thousands of real estate professionals saving hours every week.
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg">
              Install Free Extension
            </button>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}