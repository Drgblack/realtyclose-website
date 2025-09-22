import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Features | RealtyClose",
  description: "14+ Powerful Features Built for Real Estate Communication. Stop losing hours and risking deals to messy emails. RealtyClose turns Gmail into your real estate command center.",
};

export default function FeaturesPage() {
  return (
    <PageShell title="14+ Powerful Features Built for Real Estate Communication">
      {/* Features Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          Stop losing hours and risking deals to messy emails. RealtyClose turns Gmail into your real estate command center with AI-driven communication, deal tracking, and compliance built in.
        </p>
      </div>

      {/* Productivity & Time Savings */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-600/50 pb-4">
          1. Productivity & Time Savings
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Turn 3+ hours of daily email work into 30 minutes. Write better emails faster with AI assistance and smart templates.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">AI Email Assistant</h3>
            <p className="text-slate-300 text-sm">
              Draft polished, professional replies in seconds without rewriting the same message five times.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Smart Templates</h3>
            <p className="text-slate-300 text-sm">
              On-brand templates that auto-fill with client and property details.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Quick Actions</h3>
            <p className="text-slate-300 text-sm">
              One-click scheduling, call logging, and client updates directly from Gmail.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">AI Insights</h3>
            <p className="text-slate-300 text-sm">
              Personalized coaching and market tips to continuously improve performance.
            </p>
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
          <blockquote className="text-slate-300 italic text-lg">
            &quot;I cut my weekly client updates from 30 minutes to 5. Total gamechanger.&quot;
          </blockquote>
          <cite className="text-blue-300 text-sm mt-2 block">- Team Lead</cite>
        </div>
      </div>

      {/* Deal Health & Risk Reduction */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-600/50 pb-4">
          2. Deal Health & Risk Reduction
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Never lose another deal to missed follow-ups or communication gaps. Keep every transaction on track with automated reminders.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Deal Management</h3>
            <p className="text-slate-300 text-sm">
              Track every deal from lead to close with automated reminders and timeline alerts.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Document Checklist</h3>
            <p className="text-slate-300 text-sm">
              Instantly detect missing or outdated documents to avoid delays.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Smart Nudges</h3>
            <p className="text-slate-300 text-sm">
              Automated follow-up reminders based on client behavior and deadlines.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🔗</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Deal Linking</h3>
            <p className="text-slate-300 text-sm">
              Keep every conversation connected to its deal for full context and continuity.
            </p>
          </div>
        </div>

        <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6 text-center">
          <blockquote className="text-slate-300 italic text-lg">
            &quot;Our closing rate improved 15% in just two months.&quot;
          </blockquote>
          <cite className="text-green-300 text-sm mt-2 block">- Brokerage Ops Manager</cite>
        </div>
      </div>

      {/* Compliance & Oversight */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-white mb-4 border-b border-slate-600/50 pb-4">
          3. Compliance & Oversight
        </h2>
        <p className="text-slate-300 mb-8 text-lg">
          Maintain brand consistency and regulatory compliance across all communication. Built for real estate teams that scale.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Multilingual Support</h3>
            <p className="text-slate-300 text-sm">
              Communicate in your client&apos;s preferred language with real-time translation.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Audit Trails</h3>
            <p className="text-slate-300 text-sm">
              Track who sent what, when, and to whom.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Brokerage Controls</h3>
            <p className="text-slate-300 text-sm">
              Approve templates and enforce on-brand communication at scale.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Unified Dashboard</h3>
            <p className="text-slate-300 text-sm">
              View deal pipelines, performance analytics, and tasks in Gmail.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-lime-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">✅</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Consent Guardrails</h3>
            <p className="text-slate-300 text-sm">
              Ensure every email is compliant with privacy regulations.
            </p>
          </div>

          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-2xl">📤</span>
            </div>
            <h3 className="text-xl font-bold text-blue-300 mb-3">Advanced Sharing</h3>
            <p className="text-slate-300 text-sm">
              Send updates across email and social channels in one click.
            </p>
          </div>
        </div>

        <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-6 text-center">
          <blockquote className="text-slate-300 italic text-lg">
            &quot;Audit prep time was cut by 90%. Our compliance officer loves it.&quot;
          </blockquote>
          <cite className="text-orange-300 text-sm mt-2 block">- Broker Owner</cite>
        </div>
      </div>

      {/* Closing Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Seamless Gmail Integration</h2>
          <p className="text-slate-300 mb-8">
            No context switching, no new logins. Install once and start working smarter instantly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-all hover:scale-110">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">Lightning Fast</h4>
              <p className="text-slate-400 text-sm">Features load instantly inside Gmail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-all hover:scale-110">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-green-300 mb-2">Secure</h4>
              <p className="text-slate-400 text-sm">Bank-level privacy protection</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-all hover:scale-110">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-purple-300 mb-2">Intuitive</h4>
              <p className="text-slate-400 text-sm">No learning curve</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/install" className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-block">
              Install Free Extension
            </a>
            <a href="/demo" className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-block">
              Watch Features Demo
            </a>
          </div>
          
          <p className="text-slate-400 text-sm mt-4">Save hours on your next deal</p>
        </div>
      </div>
    </PageShell>
  );
}