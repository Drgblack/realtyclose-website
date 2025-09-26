"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from 'next-intl';
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Header() {
  const pathname = usePathname();
  const t = useTranslations();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Extract locale from pathname
  const locale = pathname.startsWith('/de') ? 'de' : 'en';
  
  // Dynamic navigation with translations
  const primaryNav = [
    { label: t('nav.howItWorks'), href: "#how-it-works" },
    {
      label: t('nav.company'),
      items: [
        { label: t('nav.aboutUs'), href: `/${locale}/about` },
        { label: t('nav.blog'), href: `/${locale}/blog` },
        { label: t('nav.pricing'), href: `/${locale}/pricing` },
        { label: t('nav.features'), href: `/${locale}/features` },
        { label: t('nav.faq'), href: `/${locale}/faq` },
        { label: t('nav.contact'), href: `/contact` },
      ],
    },
  ];
  
  const ctaNav = { label: t('nav.startFree'), href: `/install` };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const wrap = "fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur ring-1 ring-black/5";
  const link = "text-sm font-medium text-slate-700 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white";
  const cta = "rounded-xl px-4 py-2 text-sm font-semibold text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500";

  return (
    <header className={wrap} data-scrolled={scrolled}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold text-slate-900">
          <svg width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="6" fill="#2563eb"/>
            <path d="M9 8h14v3.5L13.5 20.5H23V24H9v-3.5l9.5-9H9V8z" fill="white"/>
          </svg>
          RealtyClose
        </Link>

        {/* Center - Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {/* How It Works */}
          <a href="#how-it-works" className="text-sm font-medium text-slate-700 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">{t('nav.howItWorks')}</a>

          {/* Company dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500">
              {t('nav.company')}
              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-1 min-w-[220px] rounded-xl bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-2">
                {primaryNav[1].items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href={ctaNav.href}
            className="rounded-full px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            style={{background:"var(--rc-cta-grad)"}}>
            {ctaNav.label}
          </Link>
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-black/10 sm:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile drawer with secondary links */}
      {open && (
        <div className="sm:hidden">
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="fixed inset-0 z-40 bg-black/40" />
          <div className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="6" fill="#2563eb"/>
                  <path d="M9 8h14v3.5L13.5 20.5H23V24H9v-3.5l9.5-9H9V8z" fill="white"/>
                </svg>
                <span className="text-base font-semibold text-slate-900">{t('nav.menu')}</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <nav className="mt-6 grid gap-2">
              <a href="#how-it-works" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">{t('nav.howItWorks')}</a>
              <div className="mt-4">
                <div className="px-3 py-1 text-xs font-semibold text-slate-500 uppercase tracking-wide">{t('nav.company')}</div>
                {primaryNav[1].items?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 block"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}