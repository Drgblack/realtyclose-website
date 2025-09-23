import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Impressum | RealtyClose",
  description: "Legal notice for RealtyClose.",
};

export default function ImpressumPage() {
  return (
    <PageShell title="Impressum">
      <h2>Impressum</h2>
      
      <p className="text-slate-300 mb-6">
        <strong>Zaza Technologies UG (haftungsbeschränkt)</strong><br />
        Represented by: <strong>Dr. Greg Blackburn</strong>
      </p>

      <p className="text-slate-300 mb-6">
        Business Address:<br />
        [insert registered address here]
      </p>

      <p className="text-slate-300 mb-6">
        Contact:<br />
        Email: <a href="mailto:help@zazatechnologies.com" className="text-blue-400 hover:text-blue-300">help@zazatechnologies.com</a>
      </p>

      <p className="text-slate-300 mb-6">
        VAT ID: [insert VAT number]
      </p>

      <h3>Liability for Content:</h3>
      <p className="text-slate-300 mb-6">
        We strive to keep our website content accurate and up to date. However, we cannot accept liability for external content.
      </p>

      <h3>Liability for Links:</h3>
      <p className="text-slate-300 mb-6">
        Our website contains links to external third-party websites. We have no influence on their content and cannot accept liability for it.
      </p>

      <h3>EU Dispute Resolution:</h3>
      <p className="text-slate-300">
        The European Commission provides a platform for online dispute resolution: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">https://ec.europa.eu/consumers/odr</a>
      </p>
    </PageShell>
  );
}