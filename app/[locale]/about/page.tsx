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
  const t = await getTranslations({ locale });
  
  return {
    title: locale === 'de' ? 'Über uns | RealtyClose' : 'About Us | RealtyClose',
    description: locale === 'de' 
      ? 'Der Gmail-erste KI-Assistent für Immobilienkommunikation. Erfahren Sie, wie RealtyClose Kommunikationschaos eliminiert.'
      : 'The Gmail-first AI assistant built for real estate communication. Learn how RealtyClose eliminates communication chaos.',
    alternates: {
      languages: {
        'en': '/en/about',
        'de': '/de/about'
      }
    },
  }
}

export default async function AboutPage({ params }: Props) {
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
              {t('about.title')}
            </h1>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500" />
          </Reveal>
        </div>
      </section>

      {/* The Problem */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{t('about.problem.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-red-500 to-orange-500 mb-6" />
            <p className="text-base leading-relaxed text-[var(--rc-muted)] max-w-2xl mb-8">
              {t('about.problem.description')}
            </p>
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { stat: t('about.problem.stat1'), desc: t('about.problem.stat1Desc') },
              { stat: t('about.problem.stat2'), desc: t('about.problem.stat2Desc') },
              { stat: t('about.problem.stat3'), desc: t('about.problem.stat3Desc') }
            ].map((item, index) => (
              <Reveal key={item.stat} delay={0.1 * index}>
                <ShinyCard gradient="indigo" padding="lg" innerClassName="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                    {item.stat}
                  </div>
                  <div className="text-sm text-[var(--rc-muted)]">
                    <strong>{item.desc}</strong>
                  </div>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Existing Tools Fail */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{t('about.whyFail.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-8" />
          </Reveal>
          
          <div className="space-y-6">
            {[
              { title: "❌ CRMs", desc: t('about.whyFail.crm') },
              { title: "❌ Transaction Management Platforms", desc: t('about.whyFail.tm') },
              { title: "❌ Generic Email Tools", desc: t('about.whyFail.generic') }
            ].map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index}>
                <ShinyCard>
                  <h3 className="text-xl font-bold text-red-400 mb-3">{item.title}</h3>
                  <p className="text-[var(--rc-muted)]">{item.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{t('about.solution.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6" />
            <p className="text-base leading-relaxed text-[var(--rc-muted)] max-w-2xl mb-8">
              {t('about.solution.description')}
            </p>
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: "⚡", title: t('about.solution.feature1') },
              { icon: "🔔", title: t('about.solution.feature2') },
              { icon: "🛡️", title: t('about.solution.feature3') }
            ].map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index}>
                <ShinyCard gradient="emerald">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold text-green-300 mb-3">{item.title}</h3>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{t('about.whoWeHelp.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-8" />
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "👤", title: "Solo Agents", desc: t('about.whoWeHelp.solo'), gradient: "indigo" },
              { icon: "👥", title: "Teams", desc: t('about.whoWeHelp.teams'), gradient: "blue" },
              { icon: "📋", title: "Transaction Coordinators", desc: t('about.whoWeHelp.tc'), gradient: "brand" },
              { icon: "🏢", title: "Brokerages", desc: t('about.whoWeHelp.brokerages'), gradient: "emerald" }
            ].map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index}>
                <ShinyCard gradient={item.gradient as "brand" | "indigo" | "blue" | "emerald"}>
                  <h3 className="text-lg font-bold mb-3 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-[var(--rc-muted)]">{item.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Proof & Outcomes */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{t('about.proof.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-8" />
          </Reveal>
          
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: "⚡", title: "Faster replies", desc: t('about.proof.faster') },
              { icon: "✅", title: "Fewer mistakes", desc: t('about.proof.fewer') },
              { icon: "😊", title: "Happier clients", desc: t('about.proof.happier') },
              { icon: "🏠", title: "More closings", desc: t('about.proof.more') }
            ].map((item, index) => (
              <Reveal key={item.title} delay={0.1 * index}>
                <ShinyCard>
                  <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    {item.title}
                  </h3>
                  <p className="text-[var(--rc-muted)]">{item.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">{t('about.beforeAfter.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-8" />
          </Reveal>
          
          <div className="grid gap-8 md:grid-cols-2">
            <Reveal delay={0.1}>
              <ShinyCard gradient="indigo" padding="lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">😵</span>
                  </div>
                  <h3 className="text-xl font-bold text-red-400">{t('about.beforeAfter.beforeTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    t('about.beforeAfter.before1'),
                    t('about.beforeAfter.before2'),
                    t('about.beforeAfter.before3')
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-[var(--rc-muted)]">
                      <span className="text-red-400 mr-3">❌</span>
                      <span><strong>{item}</strong></span>
                    </li>
                  ))}
                </ul>
              </ShinyCard>
            </Reveal>
            
            <Reveal delay={0.2}>
              <ShinyCard gradient="emerald" padding="lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-green-400">{t('about.beforeAfter.afterTitle')}</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    t('about.beforeAfter.after1'),
                    t('about.beforeAfter.after2'),
                    t('about.beforeAfter.after3')
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-[var(--rc-muted)]">
                      <span className="text-green-400 mr-3">✅</span>
                      <span><strong>{item}</strong></span>
                    </li>
                  ))}
                </ul>
              </ShinyCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">{t('about.vision.title')}</h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-8" />
          </Reveal>
          
          <Reveal delay={0.2}>
            <ShinyCard gradient="brand" padding="lg" innerClassName="text-center">
              <p className="text-xl text-[var(--rc-text)]">
                <strong>{t('about.vision.description')}</strong>
              </p>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="rc-ambient py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <ShinyCard gradient="brand" padding="lg" innerClassName="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                <a 
                  href="/install" 
                  className={`inline-flex items-center px-6 py-3 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-xl transition-all duration-200 ${glowBtn}`}
                >
                  {t('about.cta.install')}
                </a>
                <a 
                  href="/demo" 
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--rc-border)] hover:border-indigo-200 bg-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-slate-50"
                >
                  {t('about.cta.demo')}
                </a>
              </div>
              <div className="text-sm text-[var(--rc-muted)]">
                <p>{t('about.cta.subtitle')}</p>
              </div>
            </ShinyCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}