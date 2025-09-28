"use client";
import Link from "next/link";

type Variant = "realtyclose";

const SOCIALS = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/zaza-technologies" },
  { name: "X", href: "https://x.com/zazateachapp" },
  { name: "TikTok", href: "https://www.tiktok.com/@zazatechnologies" },
];

const SUITE = [
  { name: "Zaza Teach", href: "https://zazateach.com" },
  { name: "Zaza Promptly", href: "https://zazapromptly.com" },
  { name: "Zaza Technologies", href: "https://zazatechnologies.com" },
  { name: "RealtyClose", href: "https://realtyclose.com" },
];

const CFG = {
  brand: "RealtyClose",
  tagline:
    "The Gmail first AI assistant for real estate communication. Part of Zaza Technologies.",
  featureLabel: "Pro Tools",
  features: [
    { name: "AI Email Assistant", href: "/features/ai-email-assistant" },
    { name: "Smart Templates", href: "/features/smart-templates" },
    { name: "Deal Tracking", href: "/features/deal-tracking" },
    { name: "Compliance Guardrails", href: "/features/compliance" },
    { name: "Integrations", href: "/features/integrations" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "Features", href: "/features" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/terms" },
    { name: "Cookies", href: "/cookies" },
  ],
  supportEmail: "support@realtyclose.com",
  copyright: `© ${new Date().getFullYear()} RealtyClose (part of Zaza Technologies UG). All rights reserved.`,
};

export default function Footer({ variant = "realtyclose" as Variant }) {
  const cfg = CFG;
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#0B1220] text-white">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <h3 className="text-xl font-semibold">{cfg.brand}</h3>
          <p className="mt-3 text-sm text-white/80">{cfg.tagline}</p>
          <div className="mt-5 flex items-center gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/10"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Suite</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {SUITE.map((i) => (
              <li key={i.name}>
                <a
                  href={i.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {i.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">{cfg.featureLabel}</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cfg.features.map((i) => (
              <li key={i.name}>
                <Link href={`/en${i.href}`} className="hover:underline">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide">Company</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {cfg.company.map((i) => (
              <li key={i.name}>
                <Link href={`/en${i.href}`} className="hover:underline">
                  {i.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-6 py-6 text-xs text-white/70 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-3">
            {CFG.legal.map((l, idx) => (
              <span key={l.name} className="flex items-center gap-3">
                <Link href={`/en${l.href}`} className="hover:underline">
                  {l.name}
                </Link>
                {idx < CFG.legal.length - 1 && <span>•</span>}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <span>Support:</span>
            <a href={`mailto:${cfg.supportEmail}`} className="hover:underline">
              {cfg.supportEmail}
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-7xl px-6 pb-8 text-xs text-white/60">
          {cfg.copyright}
        </div>
      </div>
    </footer>
  );
}