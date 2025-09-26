'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

interface HomePageProps {
  locale: string
}

export default function HomePage({ locale }: HomePageProps) {
  const [isVisible, setIsVisible] = useState(false)
  const t = useTranslations('home')

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
    // Redirect to extension landing page
    window.open('/extension', '_blank')
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {locale === 'de' ? (
                <>
                  Die Enterprise-Immobilienplattform{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    beginnt mit Ihrem Gmail
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
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => handleInstallClick('hero')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {t('hero.ctaPrimary')}
              </button>
            </div>
            
            {/* Social Proof Strip */}
            <div className="inline-flex items-center text-slate-600 dark:text-slate-300 cursor-pointer hover:text-slate-900 dark:hover:text-white transition-colors">
              <div className="flex items-center space-x-1 mr-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">
                {t('stats.emailsGenerated')} • {t('stats.timesSaved')} • {t('stats.dealsProtected')}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview with Gradient Cards */}
      <section className="py-16 bg-white dark:bg-slate-900 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('features.title')}
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Assistant Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-cyan-500/80">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              <div className="relative block rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 bg-white/90 backdrop-blur-[2px] shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)] group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)] p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {t('features.aiAssistant.title')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('features.aiAssistant.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Smart Templates Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-red-500/80">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              <div className="relative block rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 bg-white/90 backdrop-blur-[2px] shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)] group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)] p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-teal-100 dark:from-green-900/30 dark:to-teal-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {t('features.smartTemplates.title')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('features.smartTemplates.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-teal-500/80 via-cyan-500/80 to-blue-500/80">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              <div className="relative block rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 bg-white/90 backdrop-blur-[2px] shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)] group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)] p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                    {t('features.quickActions.title')}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {t('features.quickActions.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials with Gradient Cards */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 scroll-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              {t('testimonials.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sarah Testimonial */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-blue-500/80 via-purple-500/80 to-cyan-500/80">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              <div className="relative block rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 bg-white/90 backdrop-blur-[2px] shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)] group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)] p-8">
                <blockquote className="text-slate-700 dark:text-slate-300 mb-6">
                  "{t('testimonials.sarah.quote')}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
                    alt={t('testimonials.sarah.name')}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {t('testimonials.sarah.name')}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      {t('testimonials.sarah.title')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Michael Testimonial */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/80 via-pink-500/80 to-red-500/80">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              <div className="relative block rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 bg-white/90 backdrop-blur-[2px] shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)] group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)] p-8">
                <blockquote className="text-slate-700 dark:text-slate-300 mb-6">
                  "{t('testimonials.michael.quote')}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=150&h=150&fit=crop&crop=faces" 
                    alt={t('testimonials.michael.name')}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {t('testimonials.michael.name')}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      {t('testimonials.michael.title')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Jennifer Testimonial */}
            <div className="group relative rounded-2xl p-[1px] bg-gradient-to-r from-teal-500/80 via-cyan-500/80 to-blue-500/80">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-pulse" />
              <div className="relative block rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5 bg-white/90 backdrop-blur-[2px] shadow-[0_6px_20px_-8px_rgba(88,101,242,0.25)] group-hover:shadow-[0_12px_40px_-12px_rgba(88,101,242,0.35)] p-8">
                <blockquote className="text-slate-700 dark:text-slate-300 mb-6">
                  "{t('testimonials.jennifer.quote')}"
                </blockquote>
                <div className="flex items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=150&h=150&fit=crop&crop=faces" 
                    alt={t('testimonials.jennifer.name')}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">
                      {t('testimonials.jennifer.name')}
                    </div>
                    <div className="text-slate-600 dark:text-slate-400 text-sm">
                      {t('testimonials.jennifer.title')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <button
            onClick={() => handleInstallClick('final_cta')}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
          >
            {t('cta.button')}
          </button>
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