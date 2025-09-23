import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service | RealtyClose",
  description: "The terms that govern your use of RealtyClose.",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service">
      <h2>Terms of Service</h2>
      
      <p className="text-slate-300 mb-6">
        By using RealtyClose, you agree to these simple terms. Our goal is to be transparent and fair.
      </p>

      <h3>What You Can Do</h3>
      <ul className="text-slate-300 space-y-2 mb-6">
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Use RealtyClose for real estate business activities</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Process client communications and documents securely</span>
        </li>
        <li className="flex items-start">
          <span className="text-green-400 mr-3">•</span>
          <span>Cancel anytime (no long-term contracts)</span>
        </li>
      </ul>

      <h3>What You Can&apos;t Do</h3>
      <ul className="text-slate-300 space-y-2 mb-6">
        <li className="flex items-start">
          <span className="text-red-400 mr-3">•</span>
          <span>Share your account or resell access</span>
        </li>
        <li className="flex items-start">
          <span className="text-red-400 mr-3">•</span>
          <span>Use for illegal activities or spam</span>
        </li>
        <li className="flex items-start">
          <span className="text-red-400 mr-3">•</span>
          <span>Attempt to hack or reverse-engineer our service</span>
        </li>
      </ul>

      <h3>Payments & Billing</h3>
      <p className="text-slate-300 mb-6">
        Subscriptions are billed monthly or annually. Cancel anytime. No refunds for partial periods, but you keep access until your billing period ends.
      </p>

      <h3>Your Professional Responsibilities</h3>
      <p className="text-slate-300 mb-6">
        RealtyClose is a tool to help your business. You remain responsible for professional licensing, legal compliance, and accuracy of information you enter.
      </p>

      <h3>Limitations</h3>
      <p className="text-slate-300 mb-6">
        We provide our service &quot;as is&quot; and can&apos;t guarantee 100% uptime. Our liability is limited to what you&apos;ve paid us.
      </p>

      <h3>Changes to Terms</h3>
      <p className="text-slate-300 mb-6">
        We may update these terms occasionally. We&apos;ll notify you of significant changes.
      </p>

      <h3>Contact</h3>
      <p className="text-slate-300">
        Questions about these terms? Email us at <a href="mailto:help@zazatechnologies.com" className="text-blue-400 hover:text-blue-300">help@zazatechnologies.com</a>
      </p>
    </PageShell>
  );
}