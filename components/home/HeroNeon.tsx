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
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl xl:text-7xl" style={{lineHeight:1.08}}>
            Perfect real estate emails<br/>
            <span className="relative inline-block">
              <span className="relative z-10">in 10 seconds</span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-2 w-full rounded-md"
                    style={{background:"var(--rc-cta-grad-strong)"}} />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-[var(--rc-muted)]">
            Stop losing hours to email. RealtyClose drafts professional, on-brand replies inside Gmail in seconds.
          </p>

          <div className="mt-8">
            <ShimmerButton id="cta-hero" href="/install">Start Free – No Credit Card Required</ShimmerButton>
            <div className="mt-3 text-xs text-[var(--rc-muted)]">Works with your existing Gmail. No setup required.</div>
          </div>
        </div>

        {/* Product card with glow halo + tilt */}
        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute -inset-8 -z-10 rounded-[28px] blur-2xl opacity-70"
               style={{background:
                 "radial-gradient(350px 220px at 40% 20%, rgba(59,130,246,.35), transparent 65%),\
                  radial-gradient(360px 220px at 75% 55%, rgba(124,58,237,.30), transparent 65%)"}} />
          <ParallaxCard>
            <div className="rounded-xl border border-[var(--rc-border)] p-4 bg-white/95 backdrop-blur-[2px]">
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
    </section>
  );
}
