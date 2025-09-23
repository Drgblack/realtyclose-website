import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "About Us | RealtyClose",
  description: "The Gmail-first AI assistant built for real estate communication. Learn how RealtyClose eliminates communication chaos so agents can focus on closing deals.",
};

export default function AboutPage() {
  return (
    <PageShell title="The Gmail-First AI Assistant Built for Real Estate Communication">
      {/* The Problem */}
      <div className="mb-16">
        <h2>The Problem</h2>
        
        <p className="text-slate-300 mb-6">
          Real estate professionals spend hours buried in messy inboxes. Communication is unstructured, deadlines slip, clients feel ignored, and deals fall apart.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">70%</div>
            <div className="text-slate-300 text-sm"><strong>of professionals</strong> face closing delays from poor communication</div>
          </div>
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">49%</div>
            <div className="text-slate-300 text-sm"><strong>of managers</strong> have seen a deal jeopardized by missed emails</div>
          </div>
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">30+</div>
            <div className="text-slate-300 text-sm"><strong>hours lost</strong> per transaction to repetitive email work</div>
          </div>
        </div>
      </div>

      {/* Why Existing Tools Fail */}
      <div className="mb-16">
        <h2>Why Existing Tools Fail</h2>
        
        <div className="space-y-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">❌ CRMs</h3>
            <p className="text-slate-300">
              Too complex and expensive, require you to leave Gmail
            </p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">❌ Transaction Management Platforms</h3>
            <p className="text-slate-300">
              Focus on documents, not conversations
            </p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-3">❌ Generic Email Tools</h3>
            <p className="text-slate-300">
              Fast but not built for real estate compliance
            </p>
          </div>
        </div>
      </div>

      {/* Our Solution */}
      <div className="mb-16">
        <h2>Our Solution</h2>
        
        <p className="text-slate-300 mb-6">
          RealtyClose lives inside Gmail. It drafts, organizes, and tracks every deal-critical email. You reply faster, sound consistent, and keep every transaction on track.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold text-green-300 mb-3">Professional, on-brand replies in seconds</h3>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-lg font-bold text-green-300 mb-3">Automated follow-up nudges so no client slips through the cracks</h3>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold text-green-300 mb-3">Compliance guardrails that protect your brokerage</h3>
          </div>
        </div>
      </div>

      {/* Who We Help */}
      <div className="mb-16">
        <h2>Who We Help</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">👤 Solo Agents</h3>
            <p className="text-slate-300">Save time and maintain a professional voice</p>
          </div>
          
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-purple-300 mb-3">👥 Teams</h3>
            <p className="text-slate-300">Standardize communication and coordinate handoffs</p>
          </div>
          
          <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-orange-300 mb-3">📋 Transaction Coordinators</h3>
            <p className="text-slate-300">Automate reminders and track dozens of active deals</p>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-lg font-bold text-green-300 mb-3">🏢 Brokerages</h3>
            <p className="text-slate-300">Enforce brand consistency and audit readiness</p>
          </div>
        </div>
      </div>

      {/* Proof & Outcomes */}
      <div className="mb-16">
        <h2>Proof & Outcomes</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">⚡ Faster replies</h3>
            <p className="text-slate-300">professional drafts in seconds</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">✅ Fewer mistakes</h3>
            <p className="text-slate-300">AI checks tone and compliance</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">😊 Happier clients</h3>
            <p className="text-slate-300">consistent, proactive updates build trust</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-lg font-bold text-blue-300 mb-3">🏠 More closings</h3>
            <p className="text-slate-300">less time in email, more time with clients</p>
          </div>
        </div>
      </div>

      {/* Before vs After */}
      <div className="mb-16">
        <h2>Before vs After</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">😵</span>
              </div>
              <h3 className="text-xl font-bold text-red-300">Before RealtyClose</h3>
            </div>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-center">
                <span className="text-red-400 mr-3">❌</span>
                <span><strong>3+ hours daily</strong> writing emails</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-3">❌</span>
                <span><strong>Missed follow-ups</strong> and delays</span>
              </li>
              <li className="flex items-center">
                <span className="text-red-400 mr-3">❌</span>
                <span><strong>Fragmented tools</strong> and copy-paste chaos</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-green-300">With RealtyClose</h3>
            </div>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                <span><strong>10-second replies</strong></span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                <span><strong>Consistent, compliant</strong> communication</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-3">✅</span>
                <span><strong>Every deal tracked</strong> in Gmail</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="mb-16">
        <h2>Vision</h2>
        
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 text-center">
          <p className="text-xl text-slate-300">
            Our mission is simple: <strong>eliminate communication chaos so agents, teams, and coordinators can focus on closing deals, not fighting their inbox.</strong>
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/install" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-block">
            Install Free Extension
          </a>
          <a href="/demo" className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-block">
            Watch the Demo
          </a>
        </div>
        <div className="mt-4 text-slate-400 text-sm">
          <p>Write your next client email in seconds • See how top agents use RealtyClose daily</p>
        </div>
      </div>
    </PageShell>
  );
}