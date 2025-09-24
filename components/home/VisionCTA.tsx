export default function VisionCTA() {
  return (
    <section className="bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Eliminate Communication Chaos</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-300">
          Our mission is simple: eliminate communication chaos so agents, teams, and coordinators can focus on closing deals, not fixing their inbox.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/install"
             id="cta-vision-install"
             className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-slate-900">
            Start Free with Gmail Extension
          </a>
          <a href="/demo"
             id="cta-vision-demo"
             className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40">
            Watch Demo
          </a>
        </div>
        <div className="mt-4 text-xs text-slate-400">
          No credit card required • Cancel anytime • Bank-level security
        </div>
      </div>
    </section>
  );
}