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
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Reveal delay={0.1}>
            <ShinyCard gradient="blue" padding="lg">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {t('contact.generalSupport')}
                </h3>
                <a 
                  href="mailto:help@zazatechnologies.com" 
                  className="text-blue-300 hover:text-blue-200 font-medium transition-colors"
                >
                  help@zazatechnologies.com
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
                  className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
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
                  className="text-indigo-300 hover:text-indigo-200 font-medium transition-colors"
                >
                  press@realtyclose.com
                </a>
              </div>
            </ShinyCard>
          </Reveal>
        </div>

        {/* Business Address */}
        <Reveal delay={0.4}>
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {t('contact.businessAddress')}
            </h2>
            <div className="max-w-2xl mx-auto">
              <ShinyCard gradient="brand" padding="lg">
                <div className="text-center">
                  <p className="text-slate-200">
                    <strong className="text-white">{t('contact.companyName')}</strong><br />
                    <span className="text-slate-300">{t('contact.addressPlaceholder')}</span>
                  </p>
                </div>
              </ShinyCard>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}