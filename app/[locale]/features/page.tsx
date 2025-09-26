import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '../../../routing';
import { ShinyCard } from "@/components/ui/shiny-card";
import { glowBtn } from "@/components/ui/shiny-card";
import Reveal from "@/components/ui/Reveal";

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: locale === 'de' ? 'Funktionen | RealtyClose - Gmail-first Immobilien-Assistent' : 'Features | RealtyClose - Gmail-First Real Estate Assistant',
    description: locale === 'de' 
      ? 'Gmail-first Immobilien-Assistent, der 30+ Stunden pro Transaktion spart. KI-gestütztes E-Mail-Schreiben, Deal-Tracking und Compliance für TCs, Teamleiter und Solo-Makler.'
      : 'Gmail-first real estate assistant that saves 30+ hours per transaction. AI-powered email drafting, deal tracking, and compliance for TCs, team leads, and solo agents.',
    alternates: {
      languages: {
        'en': '/en/features',
        'de': '/de/features'
      }
    },
  }
}

export default async function FeaturesPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale);
  
  const t = await getTranslations();
  
  return (
    <main className="bg-[var(--rc-bg)] text-[var(--rc-text)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--rc-bg)] rc-noise">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0"
               style={{background:
                 "radial-gradient(900px 520px at 8% -10%, rgba(37,99,235,.28), transparent 55%), radial-gradient(700px 420px at 95% -15%, rgba(124,58,237,.24), transparent 55%)"}} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-4">
              {t('features.title')}
            </h1>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-6" />
          </Reveal>

          {/* Category Statement & Quantified Outcomes */}
          <div className="text-center">
            <Reveal delay={0.1}>
              <p className="text-xl font-medium mb-4 text-blue-600">
                <strong>{t('features.hero.subtitle')}</strong>
              </p>
              <p className="text-[var(--rc-muted)] mb-6 max-w-3xl mx-auto">
                {t('features.hero.description')}
              </p>
            </Reveal>
            
            {/* Research proof chips */}
            <Reveal delay={0.2}>
              <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
                <div className="flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-2 rounded-full">
                  <span className="text-orange-600">⚠️</span>
                  <span className="text-orange-800">{t('features.hero.stat1')}</span>
                </div>
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 px-4 py-2 rounded-full">
                  <span className="text-red-600">📉</span>
                  <span className="text-red-800">{t('features.hero.stat2')}</span>
                </div>
              </div>
            </Reveal>

            {/* Primary CTAs */}
            <Reveal delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <a 
                  href="/install" 
                  className={`inline-flex items-center px-6 py-3 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-xl transition-all duration-200 ${glowBtn}`}
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {t('features.hero.addToChrome')}
                </a>
                <a 
                  href="/demo" 
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--rc-border)] hover:border-indigo-200 bg-white px-6 py-3 font-semibold transition-all duration-200 hover:bg-slate-50"
                >
                  <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {t('features.hero.watchDemo')}
                </a>
              </div>
              <p className="text-[var(--rc-muted)] text-sm">{t('features.hero.subtitle2')}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it Works (Gmail 1-2-3) */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-8 text-center">{t('features.howItWorks.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-12" />
          </Reveal>
          
          <Reveal delay={0.2}>
            <ShinyCard gradient="brand" padding="lg">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--rc-text)] mb-2">{t('features.howItWorks.step1Title')}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{t('features.howItWorks.step1Desc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-green-600">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--rc-text)] mb-2">{t('features.howItWorks.step2Title')}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{t('features.howItWorks.step2Desc')}</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--rc-text)] mb-2">{t('features.howItWorks.step3Title')}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{t('features.howItWorks.step3Desc')}</p>
                </div>
              </div>
            </ShinyCard>
          </Reveal>
          
          <Reveal delay={0.3}>
            <div className="mt-6">
              <ShinyCard gradient="blue" padding="md" innerClassName="text-center">
                <p className="text-[var(--rc-muted)] italic">
                  💡 <strong>{t('features.howItWorks.noContextSwitching')}</strong>
                </p>
              </ShinyCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Save 30+ hours per transaction */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-4">{t('features.saveHours.title')}</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-6" />
              <p className="text-[var(--rc-muted)] max-w-3xl mx-auto">
                {t('features.saveHours.description')}
              </p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "🤖",
                title: t('features.saveHours.aiDrafts'),
                desc: t('features.saveHours.aiDraftsDesc'),
                gradient: "blue"
              },
              {
                icon: "📄",
                title: t('features.saveHours.smartTemplates'),
                desc: t('features.saveHours.smartTemplatesDesc'),
                gradient: "emerald"
              },
              {
                icon: "⚡",
                title: t('features.saveHours.oneClick'),
                desc: t('features.saveHours.oneClickDesc'),
                gradient: "indigo"
              }
            ].map((feature, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard gradient={feature.gradient as "blue" | "emerald" | "indigo"} innerClassName="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-[var(--rc-text)] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{feature.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <ShinyCard gradient="blue" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
                  alt="Sarah M. headshot"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-300/50 shadow-sm"
                />
                <div className="text-left">
                  <div className="font-semibold text-blue-600">Sarah M.</div>
                  <div className="text-xs text-[var(--rc-muted)]">Team Lead at Compass</div>
                </div>
              </div>
              <blockquote className="text-[var(--rc-text)] italic text-lg text-left">
                "{t('features.saveHours.testimonial1')}"
              </blockquote>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Protect every deal from email drop-offs */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-4">{t('features.protectDeals.title')}</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-6" />
              <p className="text-[var(--rc-muted)] max-w-3xl mx-auto">
                <span className="text-orange-600 font-semibold">{t('features.protectDeals.description')}</span>
              </p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "🚨",
                title: t('features.protectDeals.alerts'),
                desc: t('features.protectDeals.alertsDesc'),
                color: "red"
              },
              {
                icon: "⏰",
                title: t('features.protectDeals.deadlines'),
                desc: t('features.protectDeals.deadlinesDesc'),
                color: "orange"
              },
              {
                icon: "🎯",
                title: t('features.protectDeals.singleSource'),
                desc: t('features.protectDeals.singleSourceDesc'),
                color: "green"
              }
            ].map((feature, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard innerClassName="text-center">
                  <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-[var(--rc-text)] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{feature.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <ShinyCard gradient="emerald" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                  alt="Michael R. headshot"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-green-300/50 shadow-sm"
                />
                <div className="text-left">
                  <div className="font-semibold text-green-600">Michael R.</div>
                  <div className="text-xs text-[var(--rc-muted)]">Brokerage Operations</div>
                </div>
              </div>
              <blockquote className="text-[var(--rc-text)] italic text-lg text-left">
                "{t('features.protectDeals.testimonial2')}"
              </blockquote>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Consistent, on-brand client experience */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-4">{t('features.brandExperience.title')}</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-6" />
              <p className="text-[var(--rc-muted)] max-w-3xl mx-auto">
                {t('features.brandExperience.description')}
              </p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "📝",
                title: t('features.brandExperience.sharedTemplates'),
                desc: t('features.brandExperience.sharedTemplatesDesc'),
                gradient: "blue"
              },
              {
                icon: "🎨",
                title: t('features.brandExperience.toneControl'),
                desc: t('features.brandExperience.toneControlDesc'),
                gradient: "indigo"
              },
              {
                icon: "🔄",
                title: t('features.brandExperience.handoffContinuity'),
                desc: t('features.brandExperience.handoffContinuityDesc'),
                gradient: "emerald"
              }
            ].map((feature, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard gradient={feature.gradient as "blue" | "indigo" | "emerald"} innerClassName="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-[var(--rc-text)] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{feature.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <ShinyCard gradient="indigo" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                  alt="Jennifer L. headshot"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-300/50 shadow-sm"
                />
                <div className="text-left">
                  <div className="font-semibold text-purple-600">Jennifer L.</div>
                  <div className="text-xs text-[var(--rc-muted)]">Independent Broker</div>
                </div>
              </div>
              <blockquote className="text-[var(--rc-text)] italic text-lg text-left">
                "{t('features.brandExperience.testimonial3')}"
              </blockquote>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Audit-ready compliance & oversight */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-10">
            <Reveal>
              <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-4">{t('features.compliance.title')}</h2>
              <div className="h-1 w-16 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto mb-6" />
              <p className="text-[var(--rc-muted)] max-w-3xl mx-auto">
                {t('features.compliance.description')}
              </p>
            </Reveal>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: "📊",
                title: t('features.compliance.centralizedLog'),
                desc: t('features.compliance.centralizedLogDesc')
              },
              {
                icon: "👥",
                title: t('features.compliance.rolePermissions'),
                desc: t('features.compliance.rolePermissionsDesc')
              },
              {
                icon: "✅",
                title: t('features.compliance.reviews'),
                desc: t('features.compliance.reviewsDesc')
              }
            ].map((feature, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard innerClassName="text-center">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{feature.icon}</span>
                  </div>
                  <h3 className="text-[var(--rc-text)] font-semibold mb-2">{feature.title}</h3>
                  <p className="text-[var(--rc-muted)] text-sm">{feature.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <ShinyCard gradient="brand" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                  alt="Rachel K. headshot"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-300/50 shadow-sm"
                />
                <div className="text-left">
                  <div className="font-semibold text-orange-600">Rachel K.</div>
                  <div className="text-xs text-[var(--rc-muted)]">Compliance Manager</div>
                </div>
              </div>
              <blockquote className="text-[var(--rc-text)] italic text-lg text-left">
                "{t('features.compliance.testimonial4')}"
              </blockquote>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Who it's for (ICP Clarity) */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-12 text-center">{t('features.builtFor.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-12" />
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "📋",
                title: t('features.builtFor.tc'),
                desc: t('features.builtFor.tcDesc'),
                features: [
                  t('features.builtFor.tcFeature1'),
                  t('features.builtFor.tcFeature2'),
                  t('features.builtFor.tcFeature3')
                ],
                gradient: "blue"
              },
              {
                icon: "👥",
                title: t('features.builtFor.teamLeads'),
                desc: t('features.builtFor.teamLeadsDesc'),
                features: [
                  t('features.builtFor.teamLeadsFeature1'),
                  t('features.builtFor.teamLeadsFeature2'),
                  t('features.builtFor.teamLeadsFeature3')
                ],
                gradient: "emerald"
              },
              {
                icon: "🏠",
                title: t('features.builtFor.soloAgents'),
                desc: t('features.builtFor.soloAgentsDesc'),
                features: [
                  t('features.builtFor.soloAgentsFeature1'),
                  t('features.builtFor.soloAgentsFeature2'),
                  t('features.builtFor.soloAgentsFeature3')
                ],
                gradient: "indigo"
              }
            ].map((audience, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard gradient={audience.gradient as "blue" | "emerald" | "indigo"} innerClassName="text-center h-full">
                  <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">{audience.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-blue-600 mb-3">{audience.title}</h3>
                  <p className="text-[var(--rc-muted)] text-sm mb-4">
                    {audience.desc}
                  </p>
                  <ul className="text-left text-[var(--rc-muted)] text-sm space-y-1">
                    {audience.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why not X? (Compare Block) */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold text-[var(--rc-text)] mb-12 text-center">{t('features.whyNot.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-12" />
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: `❌ ${t('features.whyNot.crms')}`,
                problem: t('features.whyNot.crmsProblem'),
                solution: t('features.whyNot.crmsSolution')
              },
              {
                title: `❌ ${t('features.whyNot.transactionTools')}`,
                problem: t('features.whyNot.transactionToolsProblem'),
                solution: t('features.whyNot.transactionToolsSolution')
              },
              {
                title: `❌ ${t('features.whyNot.genericPlugins')}`,
                problem: t('features.whyNot.genericPluginsProblem'),
                solution: t('features.whyNot.genericPluginsSolution')
              }
            ].map((comparison, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard>
                  <h3 className="text-lg font-semibold text-[var(--rc-text)] mb-3">{comparison.title}</h3>
                  <p className="text-[var(--rc-muted)] text-sm mb-2">
                    <strong>{comparison.problem.split(':')[0]}:</strong> {comparison.problem.split(':')[1]}
                  </p>
                  <p className="text-green-600 text-sm">
                    <strong>{comparison.solution.split(':')[0]}:</strong> {comparison.solution.split(':')[1]}
                  </p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Security Note */}
      <section className="rc-ambient py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ShinyCard gradient="brand" padding="md" innerClassName="text-center">
              <h3 className="text-lg font-semibold text-[var(--rc-text)] mb-3">🔒 {t('features.security.title')}</h3>
              <p className="text-[var(--rc-muted)] max-w-3xl mx-auto">
                {t('features.security.description')}
              </p>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="rc-ambient py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ShinyCard gradient="brand" padding="lg" innerClassName="text-center">
              <h2 className="text-3xl font-bold text-[var(--rc-text)] mb-4">{t('features.finalCta.title')}</h2>
              <p className="text-[var(--rc-muted)] mb-8 max-w-2xl mx-auto">
                {t('features.finalCta.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <a 
                  href="/install" 
                  className={`inline-flex items-center px-8 py-4 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-xl transition-all duration-200 text-lg ${glowBtn}`}
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  {t('features.finalCta.addToChrome')}
                </a>
                <a 
                  href="/demo" 
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--rc-border)] hover:border-indigo-200 bg-white px-8 py-4 font-semibold transition-all duration-200 hover:bg-slate-50 text-lg"
                >
                  <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  {t('features.finalCta.watchDemo')}
                </a>
              </div>
              
              <p className="text-[var(--rc-muted)] text-sm">
                {t('features.finalCta.subtitle')}
              </p>
            </ShinyCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}