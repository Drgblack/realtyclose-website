import PageShell from "@/app/components/PageShell";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  
  return {
    title: "Deal Tracking - RealtyClose",
    description: "Visual timeline and milestone tracking for real estate transactions. Stay on top of deadlines and keep deals moving forward."
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('features.dealTracking');
  return (
    <PageShell title={t('title')}>
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          {t('tagline')}
        </p>
        
        <p>
          {t('intro')}
        </p>

        <h2>{t('coreFeatures')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.timeline.title')}</h3>
            <p>{t('features.timeline.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.milestones.title')}</h3>
            <p>{t('features.milestones.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.reminders.title')}</h3>
            <p>{t('features.reminders.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.collaboration.title')}</h3>
            <p>{t('features.collaboration.description')}</p>
          </div>
        </div>

        <h2>{t('tracking')}</h2>
        
        <ul className="space-y-3">
          <li><strong>Contracts:</strong> {t('trackingItems.contracts')}</li>
          <li><strong>Inspections:</strong> {t('trackingItems.inspections')}</li>
          <li><strong>Financing:</strong> {t('trackingItems.financing')}</li>
          <li><strong>Closing:</strong> {t('trackingItems.closing')}</li>
        </ul>

        <h2>{t('howItWorks')}</h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <div>
              <h4>{t('steps.step1.title')}</h4>
              <p>{t('steps.step1.description')}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <div>
              <h4>{t('steps.step2.title')}</h4>
              <p>{t('steps.step2.description')}</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <div>
              <h4>{t('steps.step3.title')}</h4>
              <p>{t('steps.step3.description')}</p>
            </div>
          </div>
        </div>

        <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
          <h3>{t('benefits.title')}</h3>
          <p className="mb-0">
            {t('benefits.description')}
          </p>
        </div>
      </div>
    </PageShell>
  );
}