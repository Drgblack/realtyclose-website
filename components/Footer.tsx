"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

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

// Static configuration - non-translatable content
const STATIC_CFG = {
  brand: "RealtyClose",
  supportEmail: "support@realtyclose.com",
};

export default function Footer({ variant = "realtyclose" as Variant }) {
  const t = useTranslations('footer');
  const pathname = usePathname();
  
  // Extract current locale from pathname (e.g., /en/about -> en)
  const currentLocale = pathname.split('/')[1] || 'en';

  // Configuration using translations
  const cfg = {
    brand: STATIC_CFG.brand,
    tagline: t('description'),
    featureLabel: t('proTools'),
    features: [
      { name: t('aiEmailAssistant'), href: "/features/ai-email-assistant" },
      { name: t('smartTemplates'), href: "/features/smart-templates" },
      { name: t('dealTracking'), href: "/features/deal-tracking" },
      { name: t('complianceGuardrails'), href: "/features/compliance" },
      { name: t('integrations'), href: "/features/integrations" },
    ],
    company: [
      { name: t('about'), href: "/about" },
      { name: t('pricing'), href: "/pricing" },
      { name: "Blog", href: "/blog" },
      { name: "Features", href: "/features" },
      { name: "FAQs", href: "/faqs" },
      { name: t('contact'), href: "/contact" },
    ],
    legal: [
      { name: t('impressum'), href: "/impressum" },
      { name: t('privacy'), href: "/privacy" },
      { name: t('termsOfService'), href: "/terms" },
      { name: t('cookiePolicy'), href: "/cookies" },
    ],
    supportEmail: STATIC_CFG.supportEmail,
    copyright: t('copyright'),
  };
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
                <Link href={`/${currentLocale}${i.href}`} className="hover:underline">
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
                <Link href={`/${currentLocale}${i.href}`} className="hover:underline">
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
            {cfg.legal.map((l, idx) => (
              <span key={l.name} className="flex items-center gap-3">
                <Link href={`/${currentLocale}${l.href}`} className="hover:underline">
                  {l.name}
                </Link>
                {idx < cfg.legal.length - 1 && <span>•</span>}
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