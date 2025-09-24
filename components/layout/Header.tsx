"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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

  const wrap = "fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur ring-1 ring-black/5";
  const link = "text-sm font-medium text-slate-700 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-white";
  const cta = "rounded-xl bg-[var(--rc-coral)] px-4 py-2 text-sm font-semibold text-white hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rc-coral)] focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  return (
    <header className={wrap} data-scrolled={scrolled}>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="text-base font-semibold text-slate-900">RealtyClose</Link>

        {/* center link */}
        <nav className="hidden sm:block">
          <a href="/#how-it-works" className={link}>How it Works</a>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/install" className={cta}>Start Free</Link>
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
              <span className="text-base font-semibold text-slate-900">Menu</span>
              <button onClick={() => setOpen(false)} aria-label="Close" className="inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-black/10">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6l-12 12" stroke="#0f172a" strokeWidth="2" strokeLinecap="round"/></svg>
              </button>
            </div>
            <nav className="mt-6 grid gap-2">
              <Link href="/features" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Features</Link>
              <Link href="/pricing" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Pricing</Link>
              <Link href="/blog" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Blog</Link>
              <Link href="/demo" onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Demo</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}