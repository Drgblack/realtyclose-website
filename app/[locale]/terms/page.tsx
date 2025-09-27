import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function TermsPage({ params: { locale } }: Props) {
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
            {t('terms.title')}
          </h1>
          <p className="text-xl text-slate-200 text-center">
            {t('terms.lastUpdated')}: January 2025
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 py-16">
        <div className="prose prose-slate prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.acceptance.title')}</h2>
              <p className="text-slate-300">
                {t('terms.acceptance.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.serviceDescription.title')}</h3>
              <p className="text-slate-300">
                {t('terms.serviceDescription.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.userResponsibilities.title')}</h3>
              <p className="text-slate-300 mb-3">{t('terms.userResponsibilities.description')}</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>{t('terms.userResponsibilities.item1')}</li>
                <li>{t('terms.userResponsibilities.item2')}</li>
                <li>{t('terms.userResponsibilities.item3')}</li>
                <li>{t('terms.userResponsibilities.item4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.subscription.title')}</h3>
              <p className="text-slate-300">
                {t('terms.subscription.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.limitation.title')}</h3>
              <p className="text-slate-300">
                {t('terms.limitation.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.termination.title')}</h3>
              <p className="text-slate-300">
                {t('terms.termination.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.changes.title')}</h3>
              <p className="text-slate-300">
                {t('terms.changes.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('terms.contact.title')}</h3>
              <p className="text-slate-300">
                {t('terms.contact.description')} <a href="mailto:support@realtyclose.com" className="text-blue-300 hover:text-blue-200">support@realtyclose.com</a>
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
    title: `${t('terms.title')} - RealtyClose`,
    description: t('terms.acceptance.description'),
  };
}