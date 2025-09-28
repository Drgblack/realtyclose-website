import { getTranslations, setRequestLocale } from 'next-intl/server';
import InstallPageClient from './InstallPageClient';

type Props = {
  params: { locale: string };
};

export default async function InstallPage({ params: { locale } }: Props) {
  // Enable static rendering
  setRequestLocale(locale);
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Install RealtyClose Chrome Extension",
    "description": "Step-by-step guide to install the RealtyClose Chrome extension for Gmail email assistance",
    "totalTime": "PT2M",
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Google Chrome Browser"
      },
      {
        "@type": "HowToSupply", 
        "name": "Gmail Account"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Install from Chrome Web Store",
        "text": "Click the install button to go to Chrome Web Store and add the extension",
        "url": "https://chromewebstore.google.com/detail/realtyclose"
      },
      {
        "@type": "HowToStep",
        "name": "Connect Your Gmail",
        "text": "Open Gmail and authorize RealtyClose to access your email for composition assistance"
      },
      {
        "@type": "HowToStep",
        "name": "Start Writing Better Emails",
        "text": "Use AI assistance and templates to write professional real estate emails in seconds"
      }
    ]
  };
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <InstallPageClient />
    </>
  );
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale });
  
  return {
    title: `${t('install.title')} - RealtyClose`,
    description: t('install.subtitle'),
    openGraph: {
      title: `${t('install.title')} - RealtyClose`,
      description: t('install.subtitle'),
      type: 'website',
    },
  };
}