'use client'

import { useState } from 'react'

export default function DemoContent() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_demo_video_loaded', {
        event_category: 'engagement',
        event_label: 'demo_page'
      })
    }
  }

  const handleInstallClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_install_cta_click', {
        event_category: 'engagement',
        event_label: 'demo_page'
      })
    }
  }

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            See RealtyClose in Action
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Watch how real estate professionals are saving hours every day with AI-powered email generation.
          </p>
        </div>

        {/* Video Player */}
        <div className="mb-16">
          <div className="bg-slate-900 rounded-2xl p-8 text-center">
            <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center">
              {!isVideoLoaded ? (
                <div className="text-center">
                  <button 
                    onClick={handleVideoLoad}
                    className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </button>
                  <p className="text-white text-lg mb-2">RealtyClose Demo</p>
                  <p className="text-slate-400">Click to play (3:24)</p>
                </div>
              ) : (
                <div className="w-full h-full bg-slate-700 rounded-lg flex items-center justify-center">
                  <p className="text-white">Demo video would be embedded here</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Demo Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Gmail Integration</h3>
            <p className="text-slate-600 dark:text-slate-300">See how seamlessly RealtyClose works within your existing Gmail workflow.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI-Powered Responses</h3>
            <p className="text-slate-600 dark:text-slate-300">Watch AI generate contextual, professional emails in seconds.</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Custom Branding</h3>
            <p className="text-slate-600 dark:text-slate-300">Learn how to customize templates to match your personal brand.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Install RealtyClose today and start generating professional emails in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleInstallClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Install Free Extension
            </button>
            <a
              href="mailto:support@realtyclose.com?subject=Demo%20Follow-up"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Schedule Personal Demo
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                How long does setup take?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Installation takes less than 60 seconds. Simply add the Chrome extension and you're ready to start generating emails.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Does it work with Outlook?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Currently, RealtyClose is optimized for Gmail. Outlook support is coming soon - join our waitlist to be notified.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Is my data secure?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Yes. We use bank-grade encryption and are GDPR compliant. Your data never leaves our secure servers.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Can I customize the templates?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Absolutely. You can customize templates, add your branding, and create custom templates for specific scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}