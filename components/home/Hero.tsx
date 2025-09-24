export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <div className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
            Gmail Extension Live Now
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Turn messy real estate emails into{" "}
            <span className="text-blue-600">perfect client communication</span>{" "}
            in seconds.
          </h1>
          <p className="mt-4 max-w-xl text-lg text-slate-700">
            Agents lose <strong>30+ hours per transaction</strong> to email chaos. RealtyClose
            gives you that time back with AI powered, Gmail first communication.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
            <li><span className="font-semibold text-slate-900">500+</span> active agents</li>
            <li><span className="font-semibold text-slate-900">10K+</span> emails drafted</li>
            <li><span className="font-semibold text-slate-900">3+</span> hours saved daily</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/install"
               id="cta-hero-install"
               className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Start Free with Gmail Extension
            </a>
            <a href="/demo"
               id="cta-hero-demo"
               className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
              Watch Demo
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="rounded-xl border border-slate-200 p-4">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>gmail.com · RealtyClose Extension</span>
              <span>Ready</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-2xl font-bold">10</div>
                <div className="text-xs text-slate-500">Daily Drafts</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-2xl font-bold">5</div>
                <div className="text-xs text-slate-500">Languages</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm">
              Email draft set to professional tone. Compliance check passed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}