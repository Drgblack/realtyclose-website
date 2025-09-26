'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { ShinyCard } from './ui/shiny-card'
import { glowBtn } from './ui/shiny-card'

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
    <main className="bg-white text-slate-900">
      {/* Hero Section with Aurora Effect */}
      <section className="relative overflow-hidden bg-white">
        {/* Aurora background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0"
               style={{background:
                 "radial-gradient(900px 520px at 8% -10%, rgba(37,99,235,.28), transparent 55%),\
                  radial-gradient(700px 420px at 95% -15%, rgba(124,58,237,.24), transparent 55%)"}} />
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-24 sm:pt-40 sm:pb-32 md:grid-cols-2">
          {/* Hero Text */}
          <div className="max-w-[720px] md:max-w-[760px]">
            <h1 className={`text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-slate-900 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              {locale === 'de' ? (
                <>
                  Chaos bei Immobilien-E-Mails beheben -{" "}
                  <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-600 bg-clip-text text-transparent">
                    direkt in Gmail
                  </span>
                </>
              ) : (
                <>
                  Fix real estate email chaos -{" "}
                  <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-600 bg-clip-text text-transparent">
                    right inside Gmail
                  </span>
                </>
              )}
            </h1>

            <p className="mt-5 max-w-xl text-lg text-slate-600">
              {t('hero.subtitle')}
            </p>

            {/* Proof chips */}
            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <div className="inline-flex items-center rounded-full bg-green-50 px-3 py-1 text-green-700">
                ✓ Agents save 30+ hours monthly
              </div>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-blue-700">
                ⚡ 10+ seconds to professional email drafts
              </div>
              <div className="inline-flex items-center rounded-full bg-purple-50 px-3 py-1 text-purple-700">
                🛡️ Compliant + audit trails
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => handleInstallClick('hero')}
                className={`inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${glowBtn}`}
              >
                {t('hero.ctaPrimary')}
              </button>
              <a href="/demo"
                 className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-slate-50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
                Watch Demo
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span>{t('stats.emailsGenerated')} • {t('stats.timesSaved')} • {t('stats.dealsProtected')}</span>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative">
            <div className="relative rounded-2xl bg-white p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-slate-500">gmail.com · RealtyClose Extension</span>
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">Ready</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">10</div>
                  <div className="text-xs text-slate-500">Daily Drafts</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4 text-center">
                  <div className="text-2xl font-bold text-slate-900">5</div>
                  <div className="text-xs text-slate-500">Hours Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-slate-200 bg-slate-50 py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
          <span className="text-sm text-slate-600">Trusted by solo agents, teams, and brokerages</span>
          <div className="flex items-center gap-6">
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Value strip - Features with ShinyCard */}
      <section className="py-20 scroll-animate" style={{background: "linear-gradient(180deg,#f8fbff 0%,#f5f3ff 100%)"}}>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          <ShinyCard gradient="brand" padding="lg">
            <h3 className="text-lg font-bold text-slate-900">{t('features.aiAssistant.title')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('features.aiAssistant.description')}</p>
          </ShinyCard>

          <ShinyCard gradient="indigo" padding="lg">
            <h3 className="text-lg font-bold text-slate-900">{t('features.smartTemplates.title')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('features.smartTemplates.description')}</p>
          </ShinyCard>

          <ShinyCard gradient="blue" padding="lg">
            <h3 className="text-lg font-bold text-slate-900">{t('features.quickActions.title')}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{t('features.quickActions.description')}</p>
          </ShinyCard>
        </div>
      </section>

      {/* How it works with ShinyCard steps */}
      <section className="py-20 scroll-animate" style={{background: "linear-gradient(180deg,#f8fbff 0%,#f5f3ff 100%)"}}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-600 bg-clip-text text-transparent">
                {t('features.title')}
              </span>
            </h2>
            <div className="h-1 w-16 mt-4 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500" />
            <p className="mt-4 text-base leading-relaxed text-slate-600 max-w-2xl mx-auto">{t('features.subtitle')}</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <ShinyCard gradient="brand" padding="lg" innerClassName="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 text-white text-lg font-bold">
                1
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Install in Chrome</h4>
              <p className="mt-2 text-sm text-slate-600">Works instantly with Gmail. No setup required.</p>
            </ShinyCard>

            <ShinyCard gradient="indigo" padding="lg" innerClassName="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 text-white text-lg font-bold">
                2
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Select context</h4>
              <p className="mt-2 text-sm text-slate-600">First contact, follow up, listing update, or client question.</p>
            </ShinyCard>

            <ShinyCard gradient="blue" padding="lg" innerClassName="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 text-white text-lg font-bold">
                3
              </div>
              <h4 className="text-lg font-semibold text-slate-900">Send perfect email</h4>
              <p className="mt-2 text-sm text-slate-600">AI generates professional and compliant drafts in seconds.</p>
            </ShinyCard>
          </div>
        </div>
      </section>

      {/* Testimonials with ShinyCard */}
      <section className="py-20 bg-white scroll-animate">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
              {t('testimonials.title')}
            </h2>
            <div className="h-1 w-16 mt-4 mx-auto rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500" />
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <ShinyCard gradient="brand" padding="lg">
              <blockquote className="text-slate-700 font-medium leading-relaxed">"{t('testimonials.sarah.quote')}"</blockquote>
              <div className="flex items-center mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=faces" 
                  alt={t('testimonials.sarah.name')}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t('testimonials.sarah.name')}</div>
                  <div className="text-slate-600 text-xs">{t('testimonials.sarah.title')}</div>
                </div>
              </div>
            </ShinyCard>

            <ShinyCard gradient="indigo" padding="lg">
              <blockquote className="text-slate-700 font-medium leading-relaxed">"{t('testimonials.michael.quote')}"</blockquote>
              <div className="flex items-center mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?w=150&h=150&fit=crop&crop=faces" 
                  alt={t('testimonials.michael.name')}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t('testimonials.michael.name')}</div>
                  <div className="text-slate-600 text-xs">{t('testimonials.michael.title')}</div>
                </div>
              </div>
            </ShinyCard>

            <ShinyCard gradient="blue" padding="lg">
              <blockquote className="text-slate-700 font-medium leading-relaxed">"{t('testimonials.jennifer.quote')}"</blockquote>
              <div className="flex items-center mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=150&h=150&fit=crop&crop=faces" 
                  alt={t('testimonials.jennifer.name')}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{t('testimonials.jennifer.name')}</div>
                  <div className="text-slate-600 text-xs">{t('testimonials.jennifer.title')}</div>
                </div>
              </div>
            </ShinyCard>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            {t('cta.subtitle')}
          </p>
          
          <button
            onClick={() => handleInstallClick('final_cta')}
            className={`bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 ${glowBtn}`}
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