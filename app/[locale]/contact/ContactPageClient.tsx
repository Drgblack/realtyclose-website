"use client";

import { useTranslations } from "next-intl";
import { ShinyCard } from "@/components/ui/shiny-card";
import Reveal from "@/components/ui/Reveal";

export default function ContactPageClient() {
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
        
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 pt-20 pb-16 text-center">
          <Reveal>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              {t('contact.title')}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-slate-200 mb-8">
              {t('contact.subtitle')}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-300 mb-8">
              {t('contact.description')}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-16">
        {/* Contact Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Reveal delay={0.1}>
            <ShinyCard gradient="blue" padding="lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.generalSupport')}
                </h3>
                <a 
                  href="mailto:support@realtyclose.com" 
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-md"
                  aria-label="Send email to general support"
                >
                  support@realtyclose.com
                </a>
              </div>
            </ShinyCard>
          </Reveal>
          
          <Reveal delay={0.2}>
            <ShinyCard gradient="emerald" padding="lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.privacyInquiries')}
                </h3>
                <a 
                  href="mailto:privacy@realtyclose.com" 
                  className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-md"
                  aria-label="Send email for privacy inquiries"
                >
                  privacy@realtyclose.com
                </a>
              </div>
            </ShinyCard>
          </Reveal>
          
          <Reveal delay={0.3}>
            <ShinyCard gradient="indigo" padding="lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.pressMedia')}
                </h3>
                <a 
                  href="mailto:press@realtyclose.com" 
                  className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-md"
                  aria-label="Send email for press and media inquiries"
                >
                  press@realtyclose.com
                </a>
              </div>
            </ShinyCard>
          </Reveal>
          
          <Reveal delay={0.4}>
            <ShinyCard gradient="brand" padding="lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.salesPartnerships')}
                </h3>
                <a 
                  href="mailto:sales@realtyclose.com" 
                  className="text-purple-300 hover:text-purple-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-md"
                  aria-label="Send email for sales and partnerships"
                >
                  sales@realtyclose.com
                </a>
              </div>
            </ShinyCard>
          </Reveal>
          
          <Reveal delay={0.5}>
            <ShinyCard gradient="blue" padding="lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.billingAccounts')}
                </h3>
                <a 
                  href="mailto:billing@realtyclose.com" 
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-800 rounded-md"
                  aria-label="Send email for billing and accounts"
                >
                  billing@realtyclose.com
                </a>
              </div>
            </ShinyCard>
          </Reveal>
        </div>

        {/* Support Hours */}
        <Reveal delay={0.6}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {t('contact.supportHours')}
            </h2>
            <div className="max-w-2xl mx-auto">
              <ShinyCard gradient="emerald" padding="lg">
                <div className="text-center">
                  <p className="text-slate-200 text-lg">
                    {t('contact.supportHoursDesc')}
                  </p>
                </div>
              </ShinyCard>
            </div>
          </div>
        </Reveal>

        {/* Company Details */}
        <Reveal delay={0.7}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {t('contact.companyDetails')}
            </h2>
            <div className="max-w-2xl mx-auto">
              <ShinyCard gradient="brand" padding="lg">
                <div className="text-center space-y-4">
                  <p className="text-slate-200">
                    {t('contact.companyDetailsDesc')}
                  </p>
                  <div className="text-slate-300 space-y-2">
                    <p>{t('contact.businessAddress')}</p>
                    <p>{t('contact.registerCourt')}</p>
                    <p>{t('contact.vatId')}</p>
                    <p>{t('contact.managingDirector')}</p>
                  </div>
                  <div className="pt-4 border-t border-slate-600/50">
                    <p className="text-slate-400 text-sm">
                      {t('contact.footerLinks')}
                    </p>
                  </div>
                </div>
              </ShinyCard>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}