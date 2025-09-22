import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie Policy | RealtyClose",
  description: "How RealtyClose uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <PageShell title="Cookie Policy">
      <h2>Cookie Policy</h2>
      
      <p className="text-slate-300 mb-6">
        We use cookies to provide essential functionality and improve our website. We don&apos;t use advertising or tracking cookies.
      </p>

      <h3>Essential Cookies Only</h3>
      <p className="text-slate-300 mb-6">
        Our website uses only the minimum necessary cookies for:
      </p>

      <ul className="text-slate-300 space-y-2 mb-6">
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>User authentication and security</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Basic website functionality</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Remembering your preferences</span>
        </li>
      </ul>

      <h3>No Tracking</h3>
      <p className="text-slate-300 mb-6">
        We do not use advertising cookies, tracking pixels, or third-party analytics that compromise your privacy.
      </p>

      <h3>Managing Cookies</h3>
      <p className="text-slate-300 mb-6">
        You can control cookies through your browser settings. Note that disabling essential cookies may affect website functionality.
      </p>

      <h3>Contact</h3>
      <p className="text-slate-300">
        Questions about our cookie usage? Email us at <a href="mailto:help@zazatechnologies.com" className="text-blue-400 hover:text-blue-300">help@zazatechnologies.com</a>
      </p>
    </PageShell>
  );
}