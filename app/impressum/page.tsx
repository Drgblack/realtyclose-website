import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Impressum | RealtyClose",
  description: "Legal notice for RealtyClose.",
};

export default function ImpressumPage() {
  return (
    <PageShell title="Impressum">
      <p><strong>RealtyClose</strong> • Part of Zaza Technologies</p>
      <p>Registered office: Gumbertstraße 150, 40229 Düsseldorf, Deutschland</p>
      <p>Contact: <a href="mailto:support@realtyclose.com">support@realtyclose.com</a></p>
    </PageShell>
  );
}