import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default async function PrivacyPage({ params: { locale } }: Props) {
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
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-slate-200 text-center">
            {t('privacy.lastUpdated')}: January 2025
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-10 py-16">
        <div className="prose prose-slate prose-invert max-w-none">
          <div className="bg-slate-800/50 rounded-2xl p-8 space-y-8">
            
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.overview.title')}</h2>
              <p className="text-slate-300 mb-4">
                {t('privacy.overview.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.dataCollection.title')}</h3>
              <p className="text-slate-300 mb-3">{t('privacy.dataCollection.description')}</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>{t('privacy.dataCollection.item1')}</li>
                <li>{t('privacy.dataCollection.item2')}</li>
                <li>{t('privacy.dataCollection.item3')}</li>
                <li>{t('privacy.dataCollection.item4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.dataUse.title')}</h3>
              <p className="text-slate-300 mb-3">{t('privacy.dataUse.description')}</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>{t('privacy.dataUse.item1')}</li>
                <li>{t('privacy.dataUse.item2')}</li>
                <li>{t('privacy.dataUse.item3')}</li>
                <li>{t('privacy.dataUse.item4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.dataSharing.title')}</h3>
              <p className="text-slate-300">
                {t('privacy.dataSharing.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.dataSecurity.title')}</h3>
              <p className="text-slate-300">
                {t('privacy.dataSecurity.description')}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.userRights.title')}</h3>
              <p className="text-slate-300 mb-3">{t('privacy.userRights.description')}</p>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>{t('privacy.userRights.item1')}</li>
                <li>{t('privacy.userRights.item2')}</li>
                <li>{t('privacy.userRights.item3')}</li>
                <li>{t('privacy.userRights.item4')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{t('privacy.contact.title')}</h3>
              <p className="text-slate-300">
                {t('privacy.contact.description')} <a href="mailto:privacy@realtyclose.com" className="text-blue-300 hover:text-blue-200">privacy@realtyclose.com</a>
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
    title: `${t('privacy.title')} - RealtyClose`,
    description: t('privacy.overview.description'),
  };
}