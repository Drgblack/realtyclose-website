"use client";
import Link from "next/link";
import ShimmerButton from "@/components/ui/ShimmerButton";
import ParallaxCard from "@/components/ui/ParallaxCard";

export default function HeroNeon(){
  return (
    <section className="relative overflow-hidden bg-[var(--rc-bg)] rc-noise">
      {/* Aurora + spotlight */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0"
             style={{background:
               "radial-gradient(900px 520px at 8% -10%, rgba(37,99,235,.22), transparent 55%), radial-gradient(700px 420px at 95% -15%, rgba(124,58,237,.18), transparent 55%)"}} />
        <div className="aurora-spot absolute -inset-24 rounded-[50%]" />
        <style>{`
          .aurora-spot{
            background: radial-gradient(500px 500px at var(--mx,60%) var(--my,40%), rgba(96,165,250,.35), transparent 60%);
            transition: background-position .15s ease-out;
          }
          @media (max-width: 768px) {
            .aurora-spot { position: fixed; background: radial-gradient(300px 300px at 50% 30%, rgba(96,165,250,.25), transparent 60%); }
          }
        `}</style>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 pt-28 pb-24 sm:pt-40 sm:pb-32 md:grid-cols-2"
           onMouseMove={(e)=>{ const el = document.querySelector<HTMLElement>(".aurora-spot"); if(!el) return; const r=(e.currentTarget as HTMLElement).getBoundingClientRect(); el.style.setProperty("--mx", ((e.clientX-r.left)/r.width*100)+"%"); el.style.setProperty("--my", ((e.clientY-r.top)/r.height*100)+"%"); }}>
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[var(--rc-text)] sm:text-6xl xl:text-7xl" style={{lineHeight:1.08}}>
            Perfect real estate emails in <span className="relative inline-block">
              <span className="relative z-10">10 seconds</span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-0.5 w-full rounded-md" style={{background:"var(--rc-cta-grad)"}} />
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg text-[var(--rc-muted)]">
            Stop losing hours to email. RealtyClose drafts professional, on-brand replies inside Gmail in seconds.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ShimmerButton id="cta-hero" href="/install">Start Free - No Credit Card Required</ShimmerButton>
          </div>

          <div className="mt-3 text-xs text-[var(--rc-muted)]">Works with your existing Gmail. No setup required.</div>
        </div>

        <ParallaxCard>
          <div className="rounded-xl border border-[var(--rc-border)] p-4">
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
    </section>
  );
}