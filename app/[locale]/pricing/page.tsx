import { getTranslations, setRequestLocale } from 'next-intl/server';
import { PLANS, comparisonRows, CHROME_BADGE_URL, CHROME_DEMO_URL } from '@/lib/pricing';
import PricingPageClient from './PricingPageClient';

type Props = {
  params: { locale: string };
};

export default async function PricingPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const t = await getTranslations();

  return <PricingPageClient />;
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('pricing.title')} - RealtyClose`,
    description: t('pricing.subtitle'),
  };
}