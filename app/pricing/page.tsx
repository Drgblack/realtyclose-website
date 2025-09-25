import type { Metadata } from "next";
import PricingPageClient from "./PricingPageClient";

export const metadata: Metadata = {
  title: "Pricing | RealtyClose - Gmail-First Real Estate Assistant",
  description: "Pricing that pays for itself the first week. Gmail-first assistant to reply in seconds, keep deals moving, and stay audit-ready.",
};

export default function PricingPage() {
  return <PricingPageClient />;
}