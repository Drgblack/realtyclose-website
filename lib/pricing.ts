// lib/pricing.ts
export type BillingCycle = "monthly" | "annual";

export type PlanKey = "free" | "pro" | "team";

export type Plan = {
  key: PlanKey;
  name: string;
  tagline: string;
  priceMonthly: number;   // in USD
  priceAnnual: number;    // in USD (billed per user / mo on annual)
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
  bullets: string[];      // outcome-first benefits
};

export const PLANS: Plan[] = [
  {
    key: "free",
    name: "Free",
    tagline: "Try the Gmail workflow. Great for solo testing.",
    priceMonthly: 0,
    priceAnnual: 0,
    ctaLabel: "Get Started Free",
    ctaHref: "/install",
    bullets: [
      "5 AI email drafts per month",
      "Basic real-estate templates",
      "Gmail integration",
      "Community support",
    ],
  },
  {
    key: "pro",
    name: "Professional",
    tagline: "Reclaim hours and protect every deal - right inside Gmail.",
    priceMonthly: 29,
    priceAnnual: 23, // 20% off annual (displayed as /mo when billed annually)
    ctaLabel: "Start 7-Day Chrome Trial",
    ctaHref: "/install",
    popular: true,
    bullets: [
      "Unlimited AI drafts & smart templates - save 30+ hours/transaction",
      "Quick Actions for follow-ups & date flags - reduce delays",
      "On-brand tone & style controls for polished replies",
      "Priority email support",
      "Analytics & insights",
    ],
  },
  {
    key: "team",
    name: "Team",
    tagline: "Consistency and oversight for teams & brokerages.",
    priceMonthly: 49,
    priceAnnual: 39, // 20% off annual
    ctaLabel: "Talk to Sales",
    ctaHref: "/demo",
    bullets: [
      "Everything in Professional",
      "Shared template library & approvals - brand control",
      "Team collaboration & role permissions - smooth handoffs",
      "Compliance & audit logs - review in seconds",
      "Dedicated account manager",
    ],
  },
];

export const comparisonRows = [
  {
    label: "Time saved (per transaction)",
    free: "Test workflow",
    pro: "30+ hrs saved",
    team: "30+ hrs saved",
  },
  {
    label: "Deal protection (missed-email / deadline alerts)",
    free: "-",
    pro: "✓",
    team: "✓",
  },
  {
    label: "Brand consistency (templates, tone, approvals)",
    free: "Basic",
    pro: "Individual",
    team: "Team-wide",
  },
  {
    label: "Compliance & audit readiness",
    free: "-",
    pro: "Individual",
    team: "✓",
  },
  {
    label: "Team controls & permissions",
    free: "-",
    pro: "-",
    team: "✓",
  },
];

export const CHROME_DEMO_URL = "/demo";
export const CHROME_BADGE_URL = "/install"; // Points to install page with Chrome Web Store link