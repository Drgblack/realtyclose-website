import Link from 'next/link'
import Header from '../components/Header'
import { Footer } from '../components/Footer'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Illustration */}
          <div className="mb-16">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            
            <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-4">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
              Sorry, we couldn't find the page you're looking for. 
              The page might have been moved, deleted, or you entered the wrong URL.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block"
            >
              Contact Support
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              Popular Pages
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                href="/features"
                className="p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Features</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">See what RealtyClose can do</p>
              </Link>
              
              <Link
                href="/pricing"
                className="p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-200 dark:group-hover:bg-green-900/50 transition-colors">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Pricing</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Simple, transparent pricing</p>
              </Link>
              
              <Link
                href="/demo"
                className="p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-200 dark:group-hover:bg-purple-900/50 transition-colors">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5a7 7 0 017 7H5a7 7 0 017-7z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">Demo</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">See RealtyClose in action</p>
              </Link>
              
              <Link
                href="/about"
                className="p-4 bg-white dark:bg-slate-700 rounded-lg hover:shadow-md transition-shadow group"
              >
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-3 group-hover:bg-orange-200 dark:group-hover:bg-orange-900/50 transition-colors">
                  <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-medium text-slate-900 dark:text-white mb-1">About</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400">Learn about our mission</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}