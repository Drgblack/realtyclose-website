import Script from "next/script";
import { FAQ_ITEMS, buildFaqJsonLd } from "@/lib/faqData";
import { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "RealtyClose FAQ – AI for Real Estate Professionals",
  description: "Answers about RealtyClose—AI-powered workflows that help agents, brokers, and property managers close more deals, save time, and stay compliant.",
  keywords: "AI for real estate, close more deals faster, real estate workflow automation, AI real estate assistant",
  openGraph: {
    title: "RealtyClose FAQ – AI for Real Estate Professionals", 
    description: "Answers about RealtyClose—AI-powered workflows that help agents, brokers, and property managers close more deals, save time, and stay compliant.",
    type: "website",
  },
};

export default function FAQPage() {
  const fullJsonLd = buildFaqJsonLd(FAQ_ITEMS);

  return (
    <>
      <FAQPageClient />
      {/* FAQ Schema */}
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(fullJsonLd) }}
      />
    </>
  );
}