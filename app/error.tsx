'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Error Illustration */}
          <div className="mb-16">
            <div className="w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Something went wrong
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Go to Homepage
            </Link>
          </div>

          {/* Error Details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 text-left">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Error Details (Development Only)
              </h3>
              <pre className="text-sm text-red-600 dark:text-red-400 overflow-auto">
                {error.message}
              </pre>
              {error.digest && (
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Contact Support */}
          <div className="mt-8">
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              If the problem persists, please contact our support team.
            </p>
            <Link
              href="/contact"
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}