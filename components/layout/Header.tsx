"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/demo", label: "Demo" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light clean header on top of the homepage. Dark everywhere else or after scroll.
  const light = isHome && !scrolled;

  const wrap =
    "fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-opacity-80 transition-colors";
  const lightBg = "bg-white/80 ring-1 ring-black/5";
  const darkBg = "bg-slate-950/75 ring-1 ring-white/10";
  const text = light ? "text-slate-900" : "text-white";

  const linkBase =
    "text-sm font-medium hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  const linkRing = light ? "focus-visible:ring-blue-500 focus-visible:ring-offset-white" : "focus-visible:ring-white/50 focus-visible:ring-offset-slate-950";

  const ctaPrimary = light
    ? "rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500 focus-visible:ring-blue-500 focus-visible:ring-offset-white"
    : "rounded-xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-emerald-300 focus-visible:ring-white/60 focus-visible:ring-offset-slate-950";

  return (
    <header className={`${wrap} ${light ? lightBg : darkBg}`}>
      <div className={`mx-auto flex h-14 max-w-6xl items-center justify-between px-6 ${text}`}>
        {/* Brand */}
        <Link href="/" className={`text-base font-semibold ${linkRing}`}>
          RealtyClose
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`${linkBase} ${linkRing}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right side CTA and mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            id="cta-header-install"
            href="/install"
            className={`${ctaPrimary} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
          >
            Start Free with Gmail Extension
          </Link>

          {/* Mobile menu button */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className={`sm:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ${
              light ? "ring-black/10" : "ring-white/15"
            }`}
          >
            <span className="sr-only">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6h16M4 12h16M4 18h16"
                stroke={light ? "#0f172a" : "#e5e7eb"}
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="sm:hidden">
          {/* overlay */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/40"
          />
          {/* panel */}
          <div className="fixed right-0 top-0 z-50 h-full w-80 bg-white p-6 shadow-xl ring-1 ring-black/5">
            <div className="flex items-center justify-between">
              <Link href="/" onClick={() => setOpen(false)} className="text-base font-semibold text-slate-900">
                RealtyClose
              </Link>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-black/10"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <nav className="mt-6 grid gap-2">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-6">
              <Link
                href="/install"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Start Free with Gmail Extension
              </Link>
              <Link
                href="/demo"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}