export default function HowItWorksSlim() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Write Perfect Real Estate Emails in 10 Seconds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            RealtyClose is purpose built for real estate. Inside Gmail. AI driven. Compliance ready.
          </p>
        </div>

        {/* Steps grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              num: "1",
              title: "Install in Chrome",
              desc: "Works instantly with your existing Gmail. No setup required."
            },
            {
              num: "2", 
              title: "Select Your Context",
              desc: "First contact, follow up, listing update, or client question. Pick tone and language."
            },
            {
              num: "3",
              title: "Send Perfect Email",
              desc: "AI generates professional and compliant drafts in seconds. Edit lightly and send."
            }
          ].map((step) => (
            <div
              key={step.num}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-center backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white ring-1 ring-white/20">
                {step.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="mt-12">
          <figure className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-sm">
            <blockquote className="text-lg text-slate-100">
              "We closed three deals that were about to fall apart because RealtyClose kept us on top of every follow up."
            </blockquote>
            <figcaption className="mt-3 text-sm text-slate-400">— Transaction Coordinator</figcaption>
          </figure>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/install"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Start Free with Gmail Extension
          </a>
          <a
            href="/demo"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Watch Demo
          </a>
        </div>
        <div className="mt-3 text-center text-xs text-slate-400">
          No credit card required. Cancel anytime. Bank level security.
        </div>
      </div>
    </section>
  );
}