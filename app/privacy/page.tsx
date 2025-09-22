import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | RealtyClose",
  description: "How RealtyClose collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      {/* Plain English Summary */}
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-blue-300 mb-3">Quick Summary</h3>
        <p className="text-slate-300 text-sm">
          We never sell your data. We use cookies only for site functionality and analytics. Your information stays private and secure.
        </p>
      </div>

      <h2>Privacy Policy</h2>
      
      <p className="text-slate-300 mb-6">
        We respect your privacy and are committed to protecting your personal data. This policy explains how we handle your information.
      </p>

      <h3>What Information We Collect</h3>
      <ul className="text-slate-300 space-y-2 mb-6">
        <li className="flex items-start">
          <span className="text-blue-400 mr-3">•</span>
          <span>Account details (name, email) for billing and support</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-400 mr-3">•</span>
          <span>Usage data to improve our service</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-400 mr-3">•</span>
          <span>Real estate transaction data you choose to process</span>
        </li>
      </ul>

      <h3>How We Use Your Information</h3>
      <ul className="text-slate-300 space-y-2 mb-6">
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Provide our AI-powered real estate tools</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Process billing and provide customer support</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Improve our service based on usage patterns</span>
        </li>
      </ul>

      <h3>Data Security</h3>
      <p className="text-slate-300 mb-6">
        All data is encrypted in transit and at rest. We use enterprise-grade security measures and conduct regular security audits.
      </p>

      <h3>Your Rights</h3>
      <p className="text-slate-300 mb-6">
        You can access, correct, or delete your personal data at any time. You can also export your data or restrict its processing.
      </p>

      <h3>Data Retention</h3>
      <p className="text-slate-300 mb-6">
        We keep your account data while your account is active, plus 30 days after cancellation. Transaction data is processed only as needed for our service.
      </p>

      <h3>Contact</h3>
      <p className="text-slate-300">
        Privacy questions? Email us at <a href="mailto:privacy@realtyclose.com" className="text-blue-400 hover:text-blue-300">privacy@realtyclose.com</a>
      </p>
    </PageShell>
  );
}