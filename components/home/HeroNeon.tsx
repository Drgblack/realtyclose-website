"use client";
import ShimmerButton from "@/components/ui/ShimmerButton";
import ParallaxCard from "@/components/ui/ParallaxCard";
import { useRef } from "react";

export default function HeroNeon(){
  const wrapRef = useRef<HTMLDivElement>(null);

  function track(e:React.MouseEvent<HTMLDivElement>){
    const el = wrapRef.current; if(!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
    el.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
  }

  return (
    <section className="relative overflow-hidden bg-[var(--rc-bg)] rc-noise">
      {/* Aurora + cursor spotlight */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0"
             style={{background:
               "radial-gradient(900px 520px at 8% -10%, rgba(37,99,235,.28), transparent 55%),\
                radial-gradient(700px 420px at 95% -15%, rgba(124,58,237,.24), transparent 55%)"}} />
        <div className="aurora-spot absolute -inset-24 rounded-[50%]" />
        <style>{`
          .aurora-spot{
            background: radial-gradient(520px 520px at var(--mx,55%) var(--my,42%),
              rgba(59,130,246,.35), transparent 60%);
            transition: background-position .12s ease-out;
          }
        `}</style>
      </div>

      <div ref={wrapRef} onMouseMove={track}
           className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-24 sm:pt-40 sm:pb-32 md:grid-cols-2">

        {/* Copy */}
        <div className="max-w-[720px] md:max-w-[760px]">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl" style={{lineHeight:1.08}}>
            Fix real estate email chaos<br/>
            <span className="relative inline-block">
              <span className="relative z-10">- right inside Gmail</span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-2 w-full rounded-md"
                    style={{background:"var(--rc-cta-grad-strong)"}} />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-[var(--rc-muted)]">
            Reclaim hours on every transaction and keep deals on track with on-brand, compliant emails in seconds.
          </p>

          {/* Proof chips */}
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-full border">
              <span className="text-orange-600">⚠️</span>
              <span className="text-slate-700">Agents lose 30+ hrs/transaction to comms</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-50 px-3 py-2 rounded-full border">
              <span className="text-red-600">📉</span>
              <span className="text-slate-700">49% report comms-related deal delays</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a 
              href="/install" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              Add to Chrome
            </a>
            <a 
              href="/demo" 
              className="inline-flex items-center px-6 py-3 border border-[var(--rc-border)] bg-white text-[var(--rc-text)] font-semibold rounded-xl hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch 2-min Gmail demo
            </a>
          </div>
          <div className="mt-3 text-xs text-[var(--rc-muted)]">Works with your existing Gmail. No setup required.</div>
        </div>

        {/* Product card with glow halo + tilt */}
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] blur-2xl opacity-70"
               style={{background:
                 "radial-gradient(350px 220px at 40% 20%, rgba(59,130,246,.35), transparent 65%),\
                  radial-gradient(360px 220px at 75% 55%, rgba(124,58,237,.30), transparent 65%)"}} />
          <div className="hero-mock">
            <ParallaxCard>
            <div className="rc-holo rounded-xl p-4 bg-white/95 backdrop-blur-[2px]">
              <div className="flex items-center justify-between text-xs text-[var(--rc-muted)]">
                <span>gmail.com · RealtyClose Extension</span><span>Ready</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-[var(--rc-text)]">10</div>
                  <div className="text-xs text-[var(--rc-muted)]">Daily Drafts</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-2xl font-bold text-[var(--rc-text)]">5</div>
                  <div className="text-xs text-[var(--rc-muted)]">Languages</div>
                </div>
              </div>
              <div className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
                Email draft set to professional tone. Compliance check passed.
              </div>
            </div>
            </ParallaxCard>
          </div>
        </div>

      </div>
    </section>
  );
}
