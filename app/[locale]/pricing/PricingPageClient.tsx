"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { PLANS, comparisonRows, type BillingCycle, CHROME_BADGE_URL, CHROME_DEMO_URL } from "@/lib/pricing";

export default function PricingPageClient() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10" />
          <div className="absolute inset-0" 
               style={{background: "radial-gradient(1200px 600px at 50% -100px, rgba(59,130,246,0.15), transparent)"}} />
        </div>
        
        <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10 pt-20 pb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>

          {/* Toggle + hero CTAs */}
          <div className="flex flex-col items-center gap-6">
            <div className="inline-flex rounded-2xl border border-slate-600/50 bg-slate-800/50 p-1">
              <button
                onClick={() => setCycle("monthly")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  cycle === "monthly" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t('pricing.monthly')}
              </button>
              <button
                onClick={() => setCycle("annual")}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  cycle === "annual" 
                    ? "bg-white text-slate-900 shadow-sm" 
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {t('pricing.annual')}
                <span className="ml-2 rounded-md bg-green-500/20 px-2 py-0.5 text-xs text-green-300">
                  {t('pricing.save20')}
                </span>
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href={CHROME_BADGE_URL}
                className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200 text-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                {t('pricing.startTrial')}
              </Link>
              <Link 
                href={CHROME_DEMO_URL}
                className="inline-flex items-center px-8 py-4 border border-slate-600 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors duration-200 text-lg"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                {t('pricing.watchDemo')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-16">
        <div className="grid gap-8 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.key}
              className={`relative rounded-2xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 p-8 shadow-2xl ${
                plan.popular 
                  ? "ring-2 ring-blue-500/50 transform scale-105 bg-gradient-to-b from-blue-900/20 to-slate-800/40" 
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    {t('pricing.mostPopular')}
                  </span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-bold text-white">
                      ${plan.priceMonthly === 0 
                        ? "0" 
                        : cycle === "monthly" ? plan.priceMonthly : plan.priceAnnual
                      }
                    </span>
                    {plan.priceMonthly > 0 && (
                      <span className="text-slate-400">{t('pricing.perUserMonth')}</span>
                    )}
                  </div>
                  {plan.priceMonthly > 0 && cycle === "annual" && (
                    <p className="text-sm text-green-400 mt-1">
                      {t('pricing.billedAnnually')} (${plan.priceMonthly}/mo {t('pricing.ifBilledMonthly')})
                    </p>
                  )}
                  <p className="text-slate-300 mt-3">{plan.tagline}</p>
                </div>

                <ul className="space-y-3">
                  {plan.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                      <span className="text-slate-200 text-sm leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href={plan.ctaHref}
                  className={`block w-full text-center py-4 px-6 rounded-xl font-semibold transition-colors duration-200 ${
                    plan.popular
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-slate-700/50 text-white border border-slate-600/50 hover:bg-slate-600/50"
                  }`}
                >
                  {plan.ctaLabel}
                </Link>

                {plan.key === "free" && (
                  <p className="text-xs text-slate-400 text-center">
                    {t('pricing.upgradePrompts')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CRM Price Anchoring Strip */}
        <div className="mt-12 bg-orange-600/10 border border-orange-500/20 rounded-2xl p-6 text-center">
          <p className="text-slate-100">
            <span className="text-orange-300 font-semibold">⚠️</span> {t('pricing.crmComparison')}
          </p>
        </div>

        {/* ROI Hint Bar */}
        <div className="mt-6 bg-green-600/10 border border-green-500/20 rounded-2xl p-4 text-center">
          <p className="text-slate-100">
            ✨ <strong>{t('pricing.roiHint')}</strong>
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-8">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-2">{t('pricing.planComparison')}</h2>
          <p className="text-slate-300 mb-8">{t('pricing.compareOutcomes')}</p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="text-left py-4 px-4 font-semibold text-white">{t('pricing.outcome')}</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">{t('pricing.free')}</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">{t('pricing.professional')}</th>
                  <th className="text-center py-4 px-4 font-semibold text-white">{t('pricing.team')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {comparisonRows.map((row, i) => (
                  <tr key={i}>
                    <td className="py-4 px-4 font-medium text-slate-200">{row.label}</td>
                    <td className="py-4 px-4 text-center text-slate-300 text-sm">{row.free}</td>
                    <td className="py-4 px-4 text-center text-slate-300 text-sm">{row.pro}</td>
                    <td className="py-4 px-4 text-center text-slate-300 text-sm">{row.team}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-xs text-slate-400">
            {t('pricing.featureAvailability')}
          </p>
        </div>
      </section>

      {/* Micro-FAQ */}
      <section className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 py-8">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">{t('pricing.quickQuestions')}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-blue-300 font-semibold mb-2">{t('pricing.whySeatBased')}</p>
              <p className="text-slate-200 text-sm">{t('pricing.seatBasedAnswer')}</p>
            </div>
            <div>
              <p className="text-blue-300 font-semibold mb-2">{t('pricing.whoIsEachPlan')}</p>
              <p className="text-slate-200 text-sm">{t('pricing.planTargets')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-8">
        <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.enterprise')}</h3>
          <p className="text-slate-300 mb-6">{t('pricing.enterpriseDesc')}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ul className="space-y-3 text-slate-200">
              <li>✓ {t('pricing.sso')}</li>
              <li>✓ {t('pricing.customIntegrations')}</li>
              <li>✓ {t('pricing.whiteLabel')}</li>
              <li>✓ {t('pricing.advancedAudit')}</li>
            </ul>
            <ul className="space-y-3 text-slate-200">
              <li>✓ {t('pricing.conciergeOnboarding')}</li>
              <li>✓ {t('pricing.dedicatedManager')}</li>
              <li>✓ {t('pricing.prioritySupport')}</li>
              <li>✓ {t('pricing.slaGuarantees')}</li>
            </ul>
          </div>
          
          <Link 
            href="/demo"
            className="inline-flex items-center px-6 py-3 bg-slate-700/50 text-white border border-slate-600/50 font-semibold rounded-xl hover:bg-slate-600/50 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            {t('pricing.scheduleDemo')}
          </Link>
        </div>
      </section>

      {/* Risk-Reversal + Final CTA */}
      <section className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-10 py-16">
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-8 text-center shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-4">
            {t('pricing.readyToReclaim')}
          </h2>
          <p className="text-slate-100 mb-6 max-w-2xl mx-auto">
            {t('pricing.joinThousands')}
          </p>
          
          {/* Risk-Reversal Band */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-4 bg-blue-600/10 border border-blue-500/20 rounded-full px-6 py-3 text-sm text-slate-200">
              <span>🎆 {t('pricing.chromeTrialFeatures')}</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link 
              href={CHROME_BADGE_URL}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              {t('pricing.addToChrome')}
            </Link>
            <Link 
              href={CHROME_DEMO_URL}
              className="inline-flex items-center px-8 py-4 border border-slate-600 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              {t('pricing.scheduleStandardDemo')}
            </Link>
          </div>
          
          <div className="mb-6">
            <blockquote className="text-slate-100 italic text-lg">
              "{t('pricing.testimonialQuote')}"
            </blockquote>
            <cite className="text-blue-300 text-sm">{t('pricing.testimonialAuthor')}</cite>
          </div>
          
          <p className="text-slate-300">
            {t('pricing.usedBy')}
          </p>
        </div>
      </section>
    </div>
  );
}