import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Pricing | RealtyClose",
  description: "Simple, transparent pricing for real estate professionals. Start free, scale with your business.",
};

export default function PricingPage() {
  return (
    <PageShell title="Pricing">
      {/* Pricing Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          Simple, transparent pricing for real estate professionals
        </p>
        <p className="text-slate-300">
          Start free and scale with your business. No hidden fees, no long-term contracts.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-8 my-12 not-prose">
        {/* Free Tier */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
            <div className="text-4xl font-bold text-blue-300 mb-2">$0</div>
            <p className="text-slate-400">Perfect for trying RealtyClose</p>
          </div>
          
          <ul className="text-slate-300 space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              5 AI email generations per month
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Basic email templates
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Gmail integration
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Community support
            </li>
          </ul>
          
          <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Get Started Free
          </button>
        </div>

        {/* Professional Tier - Most Popular */}
        <div className="bg-gradient-to-br from-blue-600/20 to-blue-500/10 border-2 border-blue-500 rounded-xl p-8 relative transform scale-105 shadow-xl">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
            <div className="text-4xl font-bold text-blue-300 mb-2">$29</div>
            <p className="text-slate-400">per month • billed monthly</p>
          </div>
          
          <ul className="text-slate-300 space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Unlimited AI email generations
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Premium email templates
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Quick Actions suite
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Custom tone & style settings
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Priority email support
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Analytics & insights
            </li>
          </ul>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Start 14-Day Free Trial
          </button>
        </div>

        {/* Team Tier */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
            <div className="text-4xl font-bold text-purple-300 mb-2">$49</div>
            <p className="text-slate-400">per user/month • billed monthly</p>
          </div>
          
          <ul className="text-slate-300 space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Everything in Professional
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Shared template library
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Team collaboration tools
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Compliance & brand controls
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Team analytics dashboard
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Dedicated account manager
            </li>
          </ul>
          
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Enterprise Option */}
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
          <p className="text-slate-300 mb-4 text-lg font-medium">
            Trusted by brokerages with 50+ agents
          </p>
          <p className="text-slate-300 mb-6">
            Built for compliance-driven teams. Custom solutions that scale with your brokerage.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Everything in Team, plus:</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Custom integrations (MLS, CRM)</li>
                <li>• Advanced compliance controls</li>
                <li>• White-label options</li>
                <li>• API access</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Enterprise Support:</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Dedicated success manager</li>
                <li>• Priority phone support</li>
                <li>• Custom training sessions</li>
                <li>• SLA guarantees</li>
              </ul>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-all">
            Schedule Enterprise Demo
          </button>
        </div>
      </div>


      {/* CTA Section */}
      <div className="mx-auto max-w-4xl px-4 pb-24 pt-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-slate-800/60 to-slate-900/60 p-8 shadow-xl ring-1 ring-black/10">
          <h2 className="text-2xl font-semibold tracking-tight text-white mb-2">
            Ready to get started?
          </h2>
          <p className="text-slate-300">
            Join agents and teams who save <span className="font-medium text-white">3+ hours a day</span> and keep every deal on track with RealtyClose.
          </p>

          <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Works inside Gmail – no new logins
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Real-estate specific templates & follow-ups
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-0.5 inline-block h-2 w-2 rounded-full bg-emerald-400" />
              Audit-ready communication for teams & brokerages
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60">
              Start Free Trial
            </button>
            <button className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40">
              Schedule Demo
            </button>
          </div>

          <div className="mt-4 text-xs text-slate-400">
            No credit card required · Cancel anytime · Bank-level security
          </div>

          <div className="mt-6 text-slate-300">
            "Weekly client updates dropped from 30 minutes to 5. Total gamechanger."
          </div>
          <div className="mt-1 text-xs text-slate-400">— Team Lead</div>
          
          <p className="mt-6 text-slate-300">Used by solo agents, teams, and compliance focused brokerages</p>

          <div className="mt-6">
            <a href="/faq" className="text-sm font-medium text-emerald-400 hover:text-emerald-300">
              Questions? Visit the FAQ →
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}