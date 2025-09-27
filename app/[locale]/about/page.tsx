import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '../../../routing';
import Link from 'next/link';

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
    title: t('about.seo.title'),
    description: t('about.seo.description'),
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
    <main className="bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 pt-20 pb-16">
          {/* Locale Toggle */}
          <div className="flex justify-end mb-8">
            <div className="flex gap-2 bg-slate-100 rounded-lg p-1">
              <Link 
                href="/en/about" 
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'en' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </Link>
              <Link 
                href="/de/about" 
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  locale === 'de' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                DE
              </Link>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {t('about.hero.title')}
          </h1>
          <p className="text-xl leading-relaxed text-slate-600 mb-8 max-w-3xl" style={{fontSize: '18px', lineHeight: '28px'}}>
            {t('about.hero.subtitle')}
          </p>
          
          {/* Trust Row */}
          <div className="text-sm text-slate-500 mb-8">
            {t('about.hero.trustRow')}
          </div>
          
          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/install" 
              className="inline-flex items-center justify-center px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Install free Chrome extension"
            >
              {t('about.hero.ctaPrimary')}
            </a>
            <a 
              href="/demo" 
              className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
              aria-label="Watch product demo"
            >
              {t('about.hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.problem.title')}</h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl" style={{fontSize: '18px', lineHeight: '28px'}}>
            {t('about.problem.lead')}
          </p>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">70%</div>
              <div className="text-sm text-slate-600">{t('about.problem.stat1')}</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">49%</div>
              <div className="text-sm text-slate-600">{t('about.problem.stat2')}</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="text-3xl md:text-4xl font-semibold text-slate-900 mb-2">{t('about.problem.stat3Number')}</div>
              <div className="text-sm text-slate-600">{t('about.problem.stat3')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Existing Tools Fail */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.whyFail.title')}</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whyFail.crm.title')}</h3>
              <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                {t('about.whyFail.crm.description')}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whyFail.transaction.title')}</h3>
              <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                {t('about.whyFail.transaction.description')}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whyFail.generic.title')}</h3>
              <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                {t('about.whyFail.generic.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.solution.title')}</h2>
          
          <div className="grid gap-6 md:grid-cols-3 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.solution.feature1.title')}</h3>
              <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                {t('about.solution.feature1.description')}
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5V3h0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.solution.feature2.title')}</h3>
              <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                {t('about.solution.feature2.description')}
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">{t('about.solution.feature3.title')}</h3>
              <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                {t('about.solution.feature3.description')}
              </p>
            </div>
          </div>
          
          <p className="text-xl text-slate-700 text-center font-medium" style={{fontSize: '18px', lineHeight: '28px'}}>
            {t('about.solution.closer')}
          </p>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.whoWeHelp.title')}</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whoWeHelp.soloAgents.title')}</h3>
              <p className="text-slate-600">{t('about.whoWeHelp.soloAgents.description')}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whoWeHelp.teams.title')}</h3>
              <p className="text-slate-600">{t('about.whoWeHelp.teams.description')}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whoWeHelp.tc.title')}</h3>
              <p className="text-slate-600">{t('about.whoWeHelp.tc.description')}</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3">{t('about.whoWeHelp.brokerages.title')}</h3>
              <p className="text-slate-600">{t('about.whoWeHelp.brokerages.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Proof & Outcomes */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.proof.title')}</h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left column - outcomes */}
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('about.proof.faster.title')}</h3>
                <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                  {t('about.proof.faster.description')}
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('about.proof.fewer.title')}</h3>
                <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                  {t('about.proof.fewer.description')}
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('about.proof.happier.title')}</h3>
                <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                  {t('about.proof.happier.description')}
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
                <h3 className="text-xl font-semibold mb-3">{t('about.proof.more.title')}</h3>
                <p className="text-slate-600" style={{fontSize: '18px', lineHeight: '28px'}}>
                  {t('about.proof.more.description')}
                </p>
              </div>
            </div>
            
            {/* Right column - quote card */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 shadow-sm">
              <blockquote className="text-xl mb-4" style={{fontSize: '18px', lineHeight: '28px'}}>
                "{t('about.proof.quote.text')}"
              </blockquote>
              <cite className="text-slate-300 font-medium">
                {t('about.proof.quote.author')}
              </cite>
              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="text-sm text-slate-400">
                  {t('about.proof.metrics')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.beforeAfter.title')}</h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Before */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-red-600">{t('about.beforeAfter.beforeTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start" style={{fontSize: '18px', lineHeight: '28px'}}>
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{t('about.beforeAfter.before1')}</span>
                </li>
                <li className="flex items-start" style={{fontSize: '18px', lineHeight: '28px'}}>
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{t('about.beforeAfter.before2')}</span>
                </li>
                <li className="flex items-start" style={{fontSize: '18px', lineHeight: '28px'}}>
                  <span className="text-red-500 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{t('about.beforeAfter.before3')}</span>
                </li>
              </ul>
            </div>
            
            {/* After */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-green-600">{t('about.beforeAfter.afterTitle')}</h3>
              <ul className="space-y-4">
                <li className="flex items-start" style={{fontSize: '18px', lineHeight: '28px'}}>
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{t('about.beforeAfter.after1')}</span>
                </li>
                <li className="flex items-start" style={{fontSize: '18px', lineHeight: '28px'}}>
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{t('about.beforeAfter.after2')}</span>
                </li>
                <li className="flex items-start" style={{fontSize: '18px', lineHeight: '28px'}}>
                  <span className="text-green-500 mr-3 mt-1">•</span>
                  <span className="text-slate-700">{t('about.beforeAfter.after3')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.vision.title')}</h2>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm text-center">
            <p className="text-2xl text-slate-700 font-medium" style={{fontSize: '24px', lineHeight: '32px'}}>
              {t('about.vision.description')}
            </p>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">{t('about.founder.title')}</h2>
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
            <p className="text-xl mb-6" style={{fontSize: '18px', lineHeight: '28px'}}>
              {t('about.founder.description')}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                {t('about.founder.securityLink')}
              </Link>
              <Link href="/privacy" className="text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded">
                {t('about.founder.privacyLink')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Strip */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="mx-auto max-w-[1200px] px-6 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('about.finalCta.title')}</h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a 
              href="/install" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Install free Chrome extension"
            >
              {t('about.finalCta.ctaPrimary')}
            </a>
            <a 
              href="/demo" 
              className="inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Watch product demo"
            >
              {t('about.finalCta.ctaSecondary')}
            </a>
          </div>
          
          <p className="text-slate-400">
            <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
              {t('about.finalCta.demoLink')}
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}