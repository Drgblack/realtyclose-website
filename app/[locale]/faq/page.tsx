import { getTranslations, setRequestLocale } from 'next-intl/server';
import FAQPageClient from './FAQPageClient';

type Props = {
  params: { locale: string };
};

export default async function FAQPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  return <FAQPageClient />;
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('faq.title')} - RealtyClose`,
    description: t('faq.subtitle'),
  };
}