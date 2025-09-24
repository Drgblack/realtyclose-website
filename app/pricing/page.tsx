import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";
import { BillingProvider } from "@/components/pricing/BillingToggle";
import BillingToggle from "@/components/pricing/BillingToggle";
import Plans from "@/components/pricing/Plans";
import ComparisonTable from "@/components/pricing/ComparisonTable";

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
          Save time, protect deals, and keep every email compliant.
        </p>
      </div>

      <BillingProvider>
        <div className="mt-8">
          <BillingToggle />
          <Plans />
          <p className="mt-3 text-xs text-white/50 text-center">VAT may apply. You can cancel anytime.</p>
        </div>
      </BillingProvider>

      {/* Feature Comparison Link */}
      <div className="mt-8 text-center">
        <a href="/features#comparison" id="view-feature-comparison" className="text-sm font-medium text-blue-400 hover:text-blue-300">
          View full feature comparison →
        </a>
      </div>

      {/* Comparison Table */}
      <ComparisonTable />


      {/* Enterprise Option */}
      <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 text-white">
        <h2 className="text-xl font-semibold">Enterprise</h2>
        <p className="mt-1 text-sm text-white/80">Trusted by brokerages with 50+ agents. Custom solutions that scale with your brokerage.</p>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <ul className="space-y-2 text-sm text-white/80">
            <li>Custom integrations (MLS, CRM)</li>
            <li>Advanced compliance controls</li>
            <li>White label options</li>
            <li>API access</li>
          </ul>
          <ul className="space-y-2 text-sm text-white/80">
            <li>Dedicated success manager</li>
            <li>Priority phone support</li>
            <li>Custom training sessions</li>
            <li>SLA guarantees</li>
          </ul>
        </div>
        <a href="/enterprise-demo" id="cta-enterprise" className="mt-6 inline-flex rounded-xl bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40">
          Schedule Enterprise Demo
        </a>
      </section>


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
            <a href="/signup?plan=professional" id="cta-pricing-trial" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-slate-900 bg-emerald-400 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400">
              Start 14 Day Free Trial
            </a>
            <a href="/demo" id="cta-pricing-demo" className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white/90 bg-white/10 hover:bg-white/15 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-white/40">
              Schedule Demo
            </a>
          </div>

          <div className="mt-4 text-xs text-slate-400">
            No credit card required · Cancel anytime · <span className="relative">
              <span title="256-bit SSL encryption, SOC 2 Type II certified, zero-knowledge architecture" className="underline decoration-dotted cursor-help">Bank level security</span>
            </span>
          </div>

          <div className="mt-6 text-slate-300">
            "I cut my weekly client updates from 30 minutes to 5. Gamechanger."
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