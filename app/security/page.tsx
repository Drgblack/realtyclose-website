import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Security | RealtyClose",
  description: "Learn about RealtyClose's security measures, data protection, and privacy safeguards for real estate professionals.",
};

export default function SecurityPage() {
  return (
    <PageShell title="Security & Data Protection">
      <div className="mb-16">
        <h2>Enterprise-Grade Security</h2>
        <p className="text-slate-300 mb-6">
          We protect your data with enterprise-grade security measures that meet or exceed industry standards.
        </p>
        
        <ul className="text-slate-300 space-y-3">
          <li className="flex items-start">
            <span className="text-green-400 mr-3">•</span>
            <span>End-to-end encryption for emails, documents, and workflows</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3">•</span>
            <span>Strict access controls and role-based permissions</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-400 mr-3">•</span>
            <span>Regular penetration tests and independent security audits</span>
          </li>
        </ul>
      </div>

      <div className="mb-16">
        <h2>Secure by Design, Trusted by Professionals</h2>
        <p className="text-slate-300 mb-6">
          RealtyClose is built with a security-first mindset. Our infrastructure is regularly audited and penetration-tested by independent security firms. Every feature is designed with privacy and compliance in mind.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏦</span>
            </div>
            <h3 className="text-lg font-bold text-blue-300 mb-3">Bank-level encryption</h3>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-lg font-bold text-green-300 mb-3">GDPR & CCPA compliant</h3>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-bold text-purple-300 mb-3">Privacy by default</h3>
          </div>
        </div>
      </div>
    </PageShell>
  );
}