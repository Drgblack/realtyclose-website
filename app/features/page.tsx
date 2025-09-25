import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features | RealtyClose - Gmail-First Real Estate Assistant",
  description: "Gmail-first real estate assistant that saves 30+ hours per transaction. AI-powered email drafting, deal tracking, and compliance for TCs, team leads, and solo agents.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-slate-700/50">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Gmail-First Real Estate Assistant
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-20">
        {/* Category Statement & Quantified Outcomes */}
        <div className="mb-16 text-center">
          <p className="text-xl text-blue-300 font-medium mb-4">
            <strong>Fix email chaos without leaving Gmail</strong>
          </p>
          <p className="text-slate-200 mb-6">
            Reclaim 30+ hours per transaction and protect deals from communication failures with AI-powered email assistance built for real estate professionals.
          </p>
          
          {/* Research proof chips */}
          <div className="flex flex-wrap justify-center gap-3 text-sm mb-8">
            <div className="flex items-center gap-2 bg-orange-600/10 border border-orange-500/30 px-4 py-2 rounded-full">
              <span className="text-orange-400">⚠️</span>
              <span className="text-slate-200">94% lose 30+ hrs/transaction to comms</span>
            </div>
            <div className="flex items-center gap-2 bg-red-600/10 border border-red-500/30 px-4 py-2 rounded-full">
              <span className="text-red-400">📉</span>
              <span className="text-slate-200">49% report comms-related deal delays</span>
            </div>
          </div>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a 
              href="/install" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Add to Chrome
            </a>
            <a 
              href="/demo" 
              className="inline-flex items-center px-6 py-3 border border-slate-600 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch 2-min Gmail demo
            </a>
          </div>
          <p className="text-slate-400 text-sm">Chrome Web Store • Free trial • No credit card required</p>
        </div>

        {/* How it Works (Gmail 1-2-3) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">How it works in Gmail</h2>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-2xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-300">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Open Gmail</h3>
                <p className="text-slate-300 text-sm">RealtyClose appears in your Gmail sidebar</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-300">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Click RealtyClose</h3>
                <p className="text-slate-300 text-sm">AI analyzes context and suggests responses</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-300">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Insert on-brand draft</h3>
                <p className="text-slate-300 text-sm">Auto-fills names, dates, and next steps</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 text-center">
            <p className="text-slate-100 italic">
              💡 <strong>No context switching.</strong> No new logins. No disruption to your existing workflow.
            </p>
          </div>
        </div>

        {/* Save 30+ hours per transaction */}
        <div id="ai-email-assistant" className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Save 30+ hours per transaction</h2>
            <p className="text-slate-200 max-w-3xl mx-auto">
              Turn 3+ hours of daily email chaos into 30 minutes of streamlined communication
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🤖</span>
              </div>
              <h3 className="text-white font-semibold mb-2">AI drafts professional emails</h3>
              <p className="text-slate-300 text-sm">Stop rewriting the same message five times</p>
            </div>
            <div id="smart-templates" className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📄</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Smart templates auto-fill details</h3>
              <p className="text-slate-300 text-sm">Names, dates, property info inserted instantly</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">One-click client updates</h3>
              <p className="text-slate-300 text-sm">Schedule, log calls, send updates without switching tabs</p>
            </div>
          </div>

          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
                alt="Sarah M. headshot"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-300/50 shadow-sm"
              />
              <div className="text-left">
                <div className="font-semibold text-blue-300">Sarah M.</div>
                <div className="text-xs text-slate-300">Team Lead at Compass</div>
              </div>
            </div>
            <blockquote className="text-slate-100 italic text-lg text-left">
              "I cut my weekly client updates from 30 minutes to 5. Complete gamechanger for my workflow."
            </blockquote>
          </div>
        </div>

        {/* Protect every deal from email drop-offs */}
        <div id="deal-tracking" className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Protect every deal from email drop-offs</h2>
            <p className="text-slate-200 max-w-3xl mx-auto">
              <span className="text-orange-300 font-semibold">Nearly half of managers report deals delayed/jeopardized by communication failures.</span> Don't be a statistic.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🚨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Unanswered-email alerts</h3>
              <p className="text-slate-300 text-sm">Never miss a follow-up that could kill your deal</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⏰</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Deadline flags</h3>
              <p className="text-slate-300 text-sm">Critical dates surface automatically in every email thread</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Single source of truth</h3>
              <p className="text-slate-300 text-sm">Every conversation connected to its deal for full context</p>
            </div>
          </div>

          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                alt="Michael R. headshot"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-green-300/50 shadow-sm"
              />
              <div className="text-left">
                <div className="font-semibold text-green-300">Michael R.</div>
                <div className="text-xs text-slate-300">Brokerage Operations</div>
              </div>
            </div>
            <blockquote className="text-slate-100 italic text-lg text-left">
              "Our closing rate improved 18% in two months. The follow-up automation is incredible."
            </blockquote>
          </div>
        </div>

        {/* Consistent, on-brand client experience */}
        <div id="integrations" className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Consistent, on-brand client experience</h2>
            <p className="text-slate-200 max-w-3xl mx-auto">
              Sound like the best version of yourself in every message, whether you're solo or managing a 50-agent team
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📝</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Shared templates</h3>
              <p className="text-slate-300 text-sm">Team-approved messaging across all agents</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎨</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Tone control</h3>
              <p className="text-slate-300 text-sm">Professional, friendly, or urgent - AI matches your brand voice</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🔄</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Handoff continuity</h3>
              <p className="text-slate-300 text-sm">Seamless TC transitions without client confusion</p>
            </div>
          </div>

          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
                alt="Jennifer L. headshot"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-purple-300/50 shadow-sm"
              />
              <div className="text-left">
                <div className="font-semibold text-purple-300">Jennifer L.</div>
                <div className="text-xs text-slate-300">Independent Broker</div>
              </div>
            </div>
            <blockquote className="text-slate-100 italic text-lg text-left">
              "Clients can't tell when I hand deals to my TC. The communication stays perfectly consistent."
            </blockquote>
          </div>
        </div>

        {/* Audit-ready compliance & oversight */}
        <div id="compliance" className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Audit-ready compliance & oversight</h2>
            <p className="text-slate-200 max-w-3xl mx-auto">
              Sleep better knowing every communication is logged, compliant, and ready for broker review
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Centralized log</h3>
              <p className="text-slate-300 text-sm">Every email tracked with timestamps and participants</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">👥</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Role-based permissions</h3>
              <p className="text-slate-300 text-sm">Agents, TCs, and brokers see exactly what they need</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✅</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Reviews</h3>
              <p className="text-slate-300 text-sm">Broker approval workflows for sensitive communications</p>
            </div>
          </div>

          <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"
                alt="Rachel K. headshot"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-orange-300/50 shadow-sm"
              />
              <div className="text-left">
                <div className="font-semibold text-orange-300">Rachel K.</div>
                <div className="text-xs text-slate-300">Compliance Manager</div>
              </div>
            </div>
            <blockquote className="text-slate-100 italic text-lg text-left">
              "Audit prep time cut by 90%. Compliance officer can't believe the organization."
            </blockquote>
          </div>
        </div>

        {/* Who it's for (ICP Clarity) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Built for real estate professionals who live in Gmail</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-blue-300 mb-3">Transaction Coordinators</h3>
              <p className="text-slate-100 text-sm mb-4">
                Oversight + compliance without the chaos. Reclaim hours while keeping every deal on track.
              </p>
              <ul className="text-left text-slate-300 text-sm space-y-1">
                <li>• Centralized deal monitoring</li>
                <li>• Automated compliance checks</li>
                <li>• Team handoff management</li>
              </ul>
            </div>

            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="text-xl font-bold text-green-300 mb-3">Team Leads</h3>
              <p className="text-slate-100 text-sm mb-4">
                Consistency across agents without micromanaging. Scale your standards, not your stress.
              </p>
              <ul className="text-left text-slate-300 text-sm space-y-1">
                <li>• Shared template libraries</li>
                <li>• Brand voice consistency</li>
                <li>• Performance insights</li>
              </ul>
            </div>

            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-purple-300 mb-3">Solo Agents</h3>
              <p className="text-slate-100 text-sm mb-4">
                Speed and polish without learning new tools. Professional communication at enterprise scale.
              </p>
              <ul className="text-left text-slate-300 text-sm space-y-1">
                <li>• AI-powered email drafting</li>
                <li>• Smart follow-up reminders</li>
                <li>• Professional templates</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why not X? (Compare Block) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why not just use...?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">❌ CRMs</h3>
              <p className="text-slate-300 text-sm mb-2">
                <strong>The problem:</strong> Powerful but complex & not Gmail-native → slows communication.
              </p>
              <p className="text-green-300 text-sm">
                <strong>RealtyClose:</strong> Works inside Gmail, no context switching required.
              </p>
            </div>

            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">❌ Transaction Tools</h3>
              <p className="text-slate-300 text-sm mb-2">
                <strong>The problem:</strong> Document-first; don't fix daily email chaos.
              </p>
              <p className="text-green-300 text-sm">
                <strong>RealtyClose:</strong> Email-first with deal context built in.
              </p>
            </div>

            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-3">❌ Generic Email Plugins</h3>
              <p className="text-slate-300 text-sm mb-2">
                <strong>The problem:</strong> Fast but not real-estate-specific or compliance-aware.
              </p>
              <p className="text-green-300 text-sm">
                <strong>RealtyClose:</strong> Built for real estate professionals and their workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mb-12 bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-3 text-center">🔒 Enterprise Security</h3>
          <p className="text-slate-100 text-center max-w-3xl mx-auto">
            Bank-level encryption, SOC 2 compliance, and zero data retention policies. 
            Your client data never leaves your Gmail account.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to reclaim 30+ hours per transaction?</h2>
          <p className="text-slate-100 mb-8 max-w-2xl mx-auto">
            Join thousands of real estate professionals who've already transformed their email workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
            <a 
              href="/install" 
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200 text-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Add to Chrome - Start Free
            </a>
            <a 
              href="/demo" 
              className="inline-flex items-center px-8 py-4 border border-slate-600 bg-slate-700/50 text-white font-semibold rounded-xl hover:bg-slate-600 transition-colors duration-200 text-lg"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch 2-min demo
            </a>
          </div>
          
          <p className="text-slate-400 text-sm">
            Chrome Web Store • 14-day free trial • No credit card required • Works with existing Gmail
          </p>
        </div>
      </div>
    </div>
  );
}