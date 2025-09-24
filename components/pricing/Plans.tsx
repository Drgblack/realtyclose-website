"use client";
import { useBilling } from "./BillingToggle";

const BASE = { professional: 29, team: 49 }; // monthly USD
const ANNUAL_DISCOUNT = 0.2;

function priceFor(billing: "monthly" | "annual", base: number) {
  const v = billing === "annual" ? base * (1 - ANNUAL_DISCOUNT) : base;
  // Show clean numbers on UI
  return Math.round(v);
}

export default function Plans() {
  const { billing } = useBilling();
  const pro = priceFor(billing, BASE.professional);
  const team = priceFor(billing, BASE.team);

  const subLabel = billing === "annual" ? "per month billed annually" : "per month billed monthly";

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {/* Free */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">Free</h3>
        <div className="mt-2 text-3xl font-extrabold text-white">$0</div>
        <p className="mt-1 text-xs text-white/60">Perfect for trying RealtyClose</p>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
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
            Basic templates
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
        <a href="/signup?plan=free" id="cta-plan-free" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40">
          Get Started Free
        </a>
      </div>

      {/* Professional */}
      <div className="relative rounded-2xl border border-blue-400/30 bg-blue-400/10 p-6 ring-1 ring-blue-400/30">
        <span className="absolute -top-3 right-4 rounded-md bg-blue-400 px-2 py-1 text-xs font-bold text-slate-900">Most Popular</span>
        <h3 className="text-lg font-semibold text-white">Professional</h3>
        <div className="mt-2 text-3xl font-extrabold text-white">${pro}</div>
        <p className="text-xs text-white/70">{subLabel}</p>
        <ul className="mt-4 space-y-2 text-sm text-white/90">
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
            Premium real estate templates
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
            Custom tone and style settings
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
            Analytics and insights
          </li>
        </ul>
        <a href="/signup?plan=professional" id="cta-plan-pro" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Start 14 Day Free Trial
        </a>
      </div>

      {/* Team */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-lg font-semibold text-white">Team</h3>
        <div className="mt-2 text-3xl font-extrabold text-white">${team}</div>
        <p className="text-xs text-white/70">{subLabel}</p>
        <p className="text-xs text-white/50 mt-1">Price is per user per month</p>
        <ul className="mt-4 space-y-2 text-sm text-white/80">
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
            Compliance and brand controls
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
        <a href="/contact-sales" id="cta-plan-team" className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40">
          Contact Sales
        </a>
      </div>
    </div>
  );
}