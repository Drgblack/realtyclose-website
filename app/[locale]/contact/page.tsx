import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactPageClient from './ContactPageClient';

type Props = {
  params: { locale: string };
};

export default async function ContactPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  return <ContactPageClient />;
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('contact.title')} - RealtyClose`,
    description: t('contact.subtitle'),
  };
}