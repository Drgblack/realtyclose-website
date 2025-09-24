export default function HeroMidnight() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      {/* Radial glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_circle_at_20%_20%,rgba(30,64,175,.25),transparent_60%),radial-gradient(600px_circle_at_80%_0%,rgba(16,185,129,.18),transparent_55%)]" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10">
            Gmail Extension Live Now
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Turn messy real estate emails into{" "}
            <span className="text-blue-400">perfect client communication</span>.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-300">
            Agents lose 30+ hours per transaction to email chaos. RealtyClose gives you that time back with AI powered, Gmail first communication.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            <li><span className="font-semibold text-white">500+</span> active agents</li>
            <li><span className="font-semibold text-white">10K+</span> emails drafted</li>
            <li><span className="font-semibold text-white">3+</span> hours saved daily</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a 
              href="/install" 
              id="cta-hero-install"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Start Free with Gmail Extension
            </a>
            <a 
              href="/demo" 
              id="cta-hero-demo"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/15 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              Watch Demo
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-sm text-slate-400">
            <span>Trusted by solo agents, teams, and brokerages</span>
            <div className="flex items-center gap-4 opacity-70">
              <div className="h-6 w-20 rounded bg-white/10" aria-hidden="true" />
              <div className="h-6 w-20 rounded bg-white/10" aria-hidden="true" />
              <div className="h-6 w-20 rounded bg-white/10" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Product shot card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-xl">
          <div className="rounded-xl border border-white/10 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>gmail.com · RealtyClose Extension</span>
              <span>Ready</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white/[0.04] p-4">
                <div className="text-2xl font-bold text-white">10</div>
                <div className="text-xs text-slate-400">Daily Drafts</div>
              </div>
              <div className="rounded-lg bg-white/[0.04] p-4">
                <div className="text-2xl font-bold text-white">5</div>
                <div className="text-xs text-slate-400">Languages</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-emerald-400/10 p-4 text-sm text-emerald-200 ring-1 ring-emerald-400/20">
              Email draft set to professional tone. Compliance check passed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}