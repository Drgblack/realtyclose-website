"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Light variant only at top of the homepage
  const light = isHome && !scrolled;

  const bg = light ? "bg-white/70" : "bg-slate-900/70";
  const text = light ? "text-slate-900" : "text-white";
  const ring = light ? "ring-black/5" : "ring-white/10";
  const shadow = scrolled ? "shadow-[0_1px_0_rgba(255,255,255,.08)]" : "";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur ring-1 ${bg} ${text} ${ring} ${shadow}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold">
          RealtyClose
        </Link>

        <nav className="hidden gap-6 text-sm sm:flex">
          <Link href="/features" className="hover:opacity-80">Features</Link>
          <Link href="/pricing" className="hover:opacity-80">Pricing</Link>
          <Link href="/blog" className="hover:opacity-80">Blog</Link>
          <Link href="/demo" className="hover:opacity-80">Demo</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/install"
            id="cta-header-install"
            className={`rounded-xl px-4 py-2 text-sm font-semibold ${
              light
                ? "bg-blue-600 text-white hover:bg-blue-500"
                : "bg-emerald-400 text-slate-900 hover:bg-emerald-300"
            }`}
          >
            Start Free with Gmail Extension
          </Link>
        </div>
      </div>
    </header>
  );
}