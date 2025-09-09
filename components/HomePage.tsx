'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const ENABLE_TRIAL = process.env.NEXT_PUBLIC_ENABLE_TRIAL === 'true'

interface HomePageProps {
  variant: string
}

export default function HomePage({ variant }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const handleInstallClick = (location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_install_cta_click', {
        event_category: 'engagement',
        event_label: location
      })
    }
  }

  const handleDemoClick = (location: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_demo_cta_click', {
        event_category: 'engagement',
        event_label: location
      })
    }
  }

  const handleSocialProofClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_social_proof_click', {
        event_category: 'engagement',
        event_label: 'hero'
      })
    }
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {variant === 'B' ? (
                <>
                  Close More Deals.{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Write Emails In Seconds.
                  </span>
                </>
              ) : (
                <>
                  The Enterprise Real Estate Platform{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Starting With Your Gmail
                  </span>
                </>
              )}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8 leading-8">
              RealtyClose is the smart platform designed to remove stress from real estate closings. 
              Generate professional emails in seconds and keep every deal on track.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => handleInstallClick('hero')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Install Free Extension
              </button>
              <Link
                href="/demo"
                onClick={() => handleDemoClick('hero')}
                className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Social Proof Strip */}
            <div 
              className="inline-flex items-center text-slate-600 dark:text-slate-300 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors"
              onClick={handleSocialProofClick}
            >
              <div className="flex items-center space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 • Trusted by 500+ real estate professionals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution Band */}
      <section className="py-16 bg-slate-50 dark:bg-slate-800/50 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Transform Your Real Estate Communication
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Stop spending hours on repetitive emails. Start closing more deals with AI-powered communication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Before Card */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Before RealtyClose</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">3+ hours/day writing emails</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Inconsistent follow-ups</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Missed details at closing</span>
                </li>
              </ul>
            </div>

            {/* After Card */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">With RealtyClose</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">10-second smart replies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Consistent, on-brand communication</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-600 dark:text-slate-300">Fewer surprises at closing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to close more deals with less stress?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of real estate professionals who trust RealtyClose to make their closings seamless and stress-free.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleInstallClick('final_cta')}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Install Free Extension
            </button>
            <Link
              href="/demo"
              onClick={() => handleDemoClick('final_cta')}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Watch Demo
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .scroll-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        @media (prefers-reduced-motion: reduce) {
          .scroll-animate {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </main>
  )
}