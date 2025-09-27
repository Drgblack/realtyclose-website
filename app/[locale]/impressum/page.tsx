import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function ImpressumPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-700/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 to-purple-600/10" />
          <div className="absolute inset-0" 
               style={{background: "radial-gradient(1200px 600px at 50% -100px, rgba(59,130,246,0.15), transparent)"}} />
        </div>
        
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 pt-20 pb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 text-center">
            {t('impressum.title')}
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 py-16">
        <div className="prose prose-slate prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-2xl p-8 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('impressum.companyInfo')}</h2>
              <div className="text-slate-300 space-y-2">
                <p><strong className="text-white">Zaza Technologies UG (haftungsbeschränkt)</strong></p>
                <p>Gumbertstraße 150</p>
                <p>40229 Düsseldorf, Deutschland</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('impressum.legalInfo')}</h3>
              <div className="text-slate-300 space-y-2">
                <p>{t('impressum.registerCourt')}: Amtsgericht Düsseldorf, HRB [number]</p>
                <p>{t('impressum.vatId')}: DE [number]</p>
                <p>{t('impressum.managingDirector')}: Greg Blackburn</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('impressum.contact')}</h3>
              <div className="text-slate-300 space-y-2">
                <p>{t('impressum.email')}: <a href="mailto:support@realtyclose.com" className="text-blue-300 hover:text-blue-200">support@realtyclose.com</a></p>
                <p>{t('impressum.website')}: <a href="https://realtyclose.com" className="text-blue-300 hover:text-blue-200">https://realtyclose.com</a></p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('impressum.responsibility')}</h3>
              <p className="text-slate-300">
                {t('impressum.responsibilityText')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('impressum.disclaimer')}</h3>
              <p className="text-slate-300">
                {t('impressum.disclaimerText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('impressum.title')} - RealtyClose`,
    description: t('impressum.description'),
  };
}