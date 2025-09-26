import { getTranslations } from 'next-intl/server';
import FAQPageClient from './FAQPageClient';

export default async function FAQPage() {
  return <FAQPageClient />;
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('faq.title')} - RealtyClose`,
    description: t('faq.subtitle'),
  };
}