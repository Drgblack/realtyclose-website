import PageShell from "@/app/components/PageShell";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  
  return {
    title: "AI Email Assistant - RealtyClose",
    description: "Professional email drafting powered by AI. Reply faster with on-brand emails, tone suggestions, and smart templates for real estate communication."
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('features.aiEmailAssistant');
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
            <h3>{t('features.fastDrafts.title')}</h3>
            <p>{t('features.fastDrafts.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.toneControl.title')}</h3>
            <p>{t('features.toneControl.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.smartRewrites.title')}</h3>
            <p>{t('features.smartRewrites.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>{t('features.translation.title')}</h3>
            <p>{t('features.translation.description')}</p>
          </div>
        </div>

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

        <h2>{t('perfectFor')}</h2>
        
        <ul className="space-y-3">
          <li><strong>Client Updates:</strong> {t('useCases.clientUpdates')}</li>
          <li><strong>Vendor Coordination:</strong> {t('useCases.vendorCoordination')}</li>
          <li><strong>Team Handoffs:</strong> {t('useCases.teamHandoffs')}</li>
          <li><strong>Follow-up Sequences:</strong> {t('useCases.followupSequences')}</li>
        </ul>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
          <h3>{t('timeSavings.title')}</h3>
          <p className="mb-0">
            {t('timeSavings.description')}
          </p>
        </div>
      </div>
    </PageShell>
  );
}