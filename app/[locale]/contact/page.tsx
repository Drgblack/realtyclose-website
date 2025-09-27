import { getTranslations, setRequestLocale } from 'next-intl/server';
import ContactPageClient from './ContactPageClient';

type Props = {
  params: { locale: string };
};

export default async function ContactPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RealtyClose",
    "url": "https://realtyclose.com",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Zaza Technologies UG (haftungsbeschränkt)"
    },
    "email": "support@realtyclose.com",
    "sameAs": [
      "https://www.linkedin.com/company/zazatechnologies"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gumbertstraße 150",
      "postalCode": "40229",
      "addressLocality": "Düsseldorf",
      "addressCountry": "DE"
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ContactPageClient />
    </>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('contact.title')} - RealtyClose`,
    description: t('contact.subtitle'),
  };
}