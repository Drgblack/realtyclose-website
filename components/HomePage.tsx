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
    <main className="bg-white">
      {/* Hero Section */}
      <section className="pt-16 pb-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className={`text-5xl font-bold text-gray-900 mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {t('hero.subtitle')}
          </p>
          
          <button
            onClick={() => handleInstallClick('hero')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl mb-12"
          >
            {t('hero.ctaPrimary')}
          </button>
          
          {/* Stats */}
          <div className="flex items-center justify-center text-gray-600">
            <div className="flex items-center mr-3">
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
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white scroll-animate">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('features.title')}
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Assistant */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.aiAssistant.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.aiAssistant.description')}
                </p>
              </div>
            </div>

            {/* Smart Templates */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.smartTemplates.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.smartTemplates.description')}
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {t('features.quickActions.title')}
                </h3>
                <p className="text-gray-600">
                  {t('features.quickActions.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-50 scroll-animate">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('testimonials.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sarah */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <blockquote className="text-gray-700 mb-6">
                "{t('testimonials.sarah.quote')}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
                  alt={t('testimonials.sarah.name')}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {t('testimonials.sarah.name')}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {t('testimonials.sarah.title')}
                  </div>
                </div>
              </div>
            </div>

            {/* Michael */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <blockquote className="text-gray-700 mb-6">
                "{t('testimonials.michael.quote')}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=150&h=150&fit=crop&crop=faces" 
                  alt={t('testimonials.michael.name')}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {t('testimonials.michael.name')}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {t('testimonials.michael.title')}
                  </div>
                </div>
              </div>
            </div>

            {/* Jennifer */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <blockquote className="text-gray-700 mb-6">
                "{t('testimonials.jennifer.quote')}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=150&h=150&fit=crop&crop=faces" 
                  alt={t('testimonials.jennifer.name')}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {t('testimonials.jennifer.name')}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {t('testimonials.jennifer.title')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <button
            onClick={() => handleInstallClick('final_cta')}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
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