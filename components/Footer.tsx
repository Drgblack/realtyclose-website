"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

type Variant = "realtyclose";

const SOCIALS = [
  { 
    name: "LinkedIn", 
    href: "https://www.linkedin.com/company/zaza-technologies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/>
      </svg>
    )
  },
  { 
    name: "X", 
    href: "https://x.com/zazateachapp",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" fill="#FFFFFF"/>
      </svg>
    )
  },
  { 
    name: "TikTok", 
    href: "https://www.tiktok.com/@zazatechnologies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v16.222a2.896 2.896 0 1 1-2.896-2.896c.324 0 .631.057.917.146V11.97a6.387 6.387 0 0 0-.917-.067 6.467 6.467 0 1 0 6.466 6.467V9.83a8.234 8.234 0 0 0 3.645.831V6.686Z" fill="#FF0050"/>
      </svg>
    )
  },
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
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-white/15 hover:bg-white/10 hover:border-white/30 transition-all duration-200"
              >
                {s.icon}
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