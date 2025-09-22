import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Contact | RealtyClose",
  description: "Get in touch with the RealtyClose team.",
};

export default function ContactPage() {
  return (
    <PageShell title="Contact RealtyClose">
      <div className="mb-8">
        <p className="text-slate-300 mb-6">
          We'd love to help. Choose the right contact so we can assist you faster:
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 my-8 not-prose">
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <h3 className="text-blue-300 font-semibold mb-4">General Support</h3>
          <a href="mailto:help@zazatechnologies.com" className="text-white hover:text-blue-300 font-medium">
            help@zazatechnologies.com
          </a>
        </div>
        
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <h3 className="text-blue-300 font-semibold mb-4">Privacy Inquiries</h3>
          <a href="mailto:privacy@realtyclose.com" className="text-white hover:text-blue-300 font-medium">
            privacy@realtyclose.com
          </a>
        </div>
        
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <h3 className="text-blue-300 font-semibold mb-4">Press & Media</h3>
          <a href="mailto:press@realtyclose.com" className="text-white hover:text-blue-300 font-medium">
            press@realtyclose.com
          </a>
        </div>
      </div>

      <div className="mb-16">
        <h2>Business Address</h2>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <p className="text-slate-300">
            <strong>Zaza Technologies UG (haftungsbeschränkt)</strong><br />
            [insert registered address here]
          </p>
        </div>
      </div>
    </PageShell>
  );
}