import PageShell from "@/app/components/PageShell";
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{locale: string}>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  
  return {
    title: "Smart Templates - RealtyClose",
    description: "Reusable email templates that auto-fill client details, property information, and dates. Start faster without losing your professional voice."
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  const t = await getTranslations('features.smartTemplates');
  return (
    <PageShell title={t('title')}>
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          {t('tagline')}
        </p>
        
        <p>
          {t('intro')}
        </p>

        <h2>{t('categories')}</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📝 {t('templateTypes.listings.title')}</h3>
            <p className="mt-3">{t('templateTypes.listings.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🏠 {t('templateTypes.buyer.title')}</h3>
            <p className="mt-3">{t('templateTypes.buyer.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>👥 {t('templateTypes.transactions.title')}</h3>
            <p className="mt-3">{t('templateTypes.transactions.description')}</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🔄 {t('templateTypes.followup.title')}</h3>
            <p className="mt-3">{t('templateTypes.followup.description')}</p>
          </div>
        </div>

        <h2>{t('coreFeatures')}</h2>
        
        <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
          <h3>{t('features.smartFill.title')}</h3>
          <p>{t('features.smartFill.description')}</p>
          <ul className="mt-3 space-y-2">
            <li><strong>Client Names:</strong> Proper salutations and personalized greetings</li>
            <li><strong>Property Details:</strong> Address, price, square footage, and key features</li>
            <li><strong>Important Dates:</strong> Contract dates, inspection deadlines, closing schedules</li>
            <li><strong>Agent Information:</strong> Your contact details, license numbers, and brokerage</li>
            <li><strong>Next Steps:</strong> Context-aware action items and timeline expectations</li>
          </ul>
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

        <h2>Team Templates</h2>
        
        <p>
          <strong>For brokerages and teams:</strong> Create shared template libraries that ensure 
          consistent messaging across all agents. Maintain brand voice and compliance while 
          allowing personal customisation.
        </p>

        <ul className="space-y-3">
          <li><strong>Brand Consistency:</strong> Approved messaging that reflects your brokerage's professional standards</li>
          <li><strong>Compliance Built-in:</strong> Templates include required disclosures and legal language</li>
          <li><strong>Performance Tracking:</strong> See which templates generate the best client responses</li>
          <li><strong>Easy Updates:</strong> Update templates once and they refresh for the entire team</li>
        </ul>

        <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
          <h3>{t('benefits.title')}</h3>
          <p className="mb-0">
            {t('benefits.description')}
          </p>
        </div>
      </div>
    </PageShell>
  );
}