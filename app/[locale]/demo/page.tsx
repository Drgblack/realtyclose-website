import { getTranslations, setRequestLocale } from 'next-intl/server';
import DemoPageClient from './DemoPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function DemoPage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "RealtyClose",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "Gmail-first AI assistant for real estate communication. Transform your inbox into a deal-closing machine.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "127"
    }
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <DemoPageClient />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('demo.title')} - RealtyClose`,
    description: t('demo.subtitle'),
    openGraph: {
      title: `${t('demo.title')} - RealtyClose`,
      description: t('demo.subtitle'),
      type: 'website',
    },
  };
}