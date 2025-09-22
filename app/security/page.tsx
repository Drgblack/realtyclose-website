import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Security | RealtyClose",
  description: "Learn about RealtyClose's security measures, data protection, and privacy safeguards for real estate professionals.",
};

export default function SecurityPage() {
  return (
    <PageShell title="Security & Data Protection">
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>Your data security is our top priority</strong>
        </p>
        <p className="text-slate-300">
          We implement enterprise-grade security measures to protect your client communications and business data
        </p>
      </div>

      <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">🔒 Bank-Level Security</h2>
          <p className="text-slate-300 mb-6">
            RealtyClose uses the same security standards as major financial institutions to protect your data
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-green-300">End-to-End Encryption</h4>
              <p className="text-slate-400 text-sm">All data encrypted in transit and at rest</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔐</span>
              </div>
              <h4 className="font-semibold text-blue-300">Zero-Trust Architecture</h4>
              <p className="text-slate-400 text-sm">Every request verified and authenticated</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-purple-300">SOC 2 Compliant</h4>
              <p className="text-slate-400 text-sm">Independently audited security controls</p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <h2>Data Protection Principles</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">🚫 What We DON&apos;T Do</h3>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We never read your existing emails</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We don&apos;t store email content on our servers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We never train AI models on your private data</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We don&apos;t share data with third parties</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We never sell your information</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">✅ What We DO</h3>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Process emails only when you explicitly request AI help</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Use temporary processing that&apos;s immediately discarded</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Encrypt all data with AES-256 encryption</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Allow you to revoke access anytime</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Provide complete data export capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 bg-green-600/10 border border-green-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Secure by Design, Trusted by Professionals</h2>
        <p className="text-slate-300 mb-6">
          Join hundreds of real estate professionals who trust RealtyClose with their client communications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            🛒 Install Secure Extension
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            📋 Request Security Documentation
          </button>
        </div>
      </div>
    </PageShell>
  );
}