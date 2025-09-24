export default function HomePage() {
  return (
    <main className="bg-[var(--rc-bg)] text-[color:var(--rc-text)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* soft grid background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_-10%_-20%,rgba(37,99,235,.08),transparent_50%),radial-gradient(900px_500px_at_110%_-10%,rgba(16,185,129,.06),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-20 md:grid-cols-2 sm:pt-28">
          <div>
            <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
              Gmail Extension Live Now
            </div>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Turn messy real estate emails into{" "}
              <span className="text-[var(--rc-primary)]">perfect client communication</span>.
            </h1>
            <p className="mt-4 max-w-xl text-lg text-[color:var(--rc-muted)]">
              Agents lose 30+ hours per transaction to email chaos. RealtyClose gives you that time back with AI powered, Gmail first communication.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--rc-muted)]">
              <li><span className="font-semibold text-[color:var(--rc-text)]">500+</span> active agents</li>
              <li><span className="font-semibold text-[color:var(--rc-text)]">10K+</span> emails drafted</li>
              <li><span className="font-semibold text-[color:var(--rc-text)]">3+</span> hours saved daily</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/install" className="inline-flex items-center justify-center rounded-xl bg-[var(--rc-primary)] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rc-primary)]/50">
                Start Free with Gmail Extension
              </a>
              <a href="/demo" className="inline-flex items-center justify-center rounded-xl border border-[color:var(--rc-border)] bg-white px-5 py-3 text-sm font-semibold hover:bg-slate-50">
                Watch Demo
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-[color:var(--rc-muted)]">
              <span>Trusted by solo agents, teams, and brokerages</span>
              <div className="flex items-center gap-4 opacity-70">
                <div className="h-6 w-20 rounded bg-slate-200" />
                <div className="h-6 w-20 rounded bg-slate-200" />
                <div className="h-6 w-20 rounded bg-slate-200" />
              </div>
            </div>
          </div>

          {/* product card */}
          <div className="rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-6 shadow-sm">
            <div className="rounded-xl border border-[color:var(--rc-border)] p-4">
              <div className="flex items-center justify-between text-xs text-[color:var(--rc-muted)]">
                <span>gmail.com · RealtyClose Extension</span>
                <span>Ready</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-2xl font-bold">10</div>
                  <div className="text-xs text-[color:var(--rc-muted)]">Daily Drafts</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-2xl font-bold">5</div>
                  <div className="text-xs text-[color:var(--rc-muted)]">Languages</div>
                </div>
              </div>
              <div className="mt-4 rounded-lg bg-emerald-50 p-4 text-sm text-emerald-700 ring-1 ring-emerald-200">
                Email draft set to professional tone. Compliance check passed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-[color:var(--rc-border)] bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {[
            { t: "Save hours", d: "Reply in seconds with AI assisted drafting and templates." },
            { t: "Protect deals", d: "Follow up nudges and timeline alerts stop slips." },
            { t: "Stay compliant", d: "Audit trails and approved templates keep messages safe." }
          ].map((i) => (
            <div key={i.t} className="rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-5">
              <div className="text-base font-semibold">{i.t}</div>
              <p className="mt-1 text-sm text-[color:var(--rc-muted)]">{i.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Write perfect real estate emails in 10 seconds</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: 1, t: "Install in Chrome", d: "Works instantly with Gmail. No setup required." },
              { n: 2, t: "Select context", d: "First contact, follow up, listing update, or client question." },
              { n: 3, t: "Send perfect email", d: "AI generates professional and compliant drafts in seconds." }
            ].map((s) => (
              <div key={s.n} className="rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--rc-primary)] text-white">{s.n}</div>
                <div className="mt-4 text-lg font-semibold">{s.t}</div>
                <p className="mt-1 text-sm text-[color:var(--rc-muted)]">{s.d}</p>
              </div>
            ))}
          </div>

          <figure className="mt-8 rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-slate-50 p-6">
            <blockquote className="text-[color:var(--rc-text)]">
              "We closed three deals that were about to fall apart because RealtyClose kept us on top of every follow up."
            </blockquote>
            <figcaption className="mt-2 text-xs text-[color:var(--rc-muted)]">— Transaction Coordinator</figcaption>
          </figure>
        </div>
      </section>

      {/* Why not CRM */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Why not just use a CRM</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { h:"CRMs", p:"Expensive and complicated. Force you out of Gmail and add extra steps." },
              { h:"Generic AI tools", p:"Do not understand real estate compliance or deal timelines." },
              { h:"Email alone", p:"Leads to missed follow ups and untracked details across transactions." }
            ].map((c)=>(
              <div key={c.h} className="rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-6">
                <div className="font-semibold">{c.h}</div>
                <p className="mt-2 text-sm text-[color:var(--rc-muted)]">{c.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[var(--rc-radius)] border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
            RealtyClose is purpose built for real estate. Inside Gmail. AI driven. Compliance ready.
          </div>
        </div>
      </section>

      {/* Social proof + closing CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Agents, teams, and brokerages trust RealtyClose</h2>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k:"500+", v:"active users" },
              { k:"10K+", v:"emails drafted" },
              { k:"5", v:"languages supported" },
              { k:"10 sec", v:"average draft time" },
            ].map((p)=>(
              <div key={p.k} className="rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-6 text-center">
                <div className="text-2xl font-extrabold">{p.k}</div>
                <div className="text-sm text-[color:var(--rc-muted)]">{p.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { q:"I cut weekly client updates from 30 minutes to 5. Gamechanger.", a:"Team Lead" },
              { q:"Our closing rate improved 15 percent in two months.", a:"Brokerage Ops Manager" },
              { q:"Audit prep time cut by 90 percent. Compliance officer loves it.", a:"Broker Owner" },
            ].map((t,i)=>(
              <figure key={i} className="rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-6">
                <blockquote>"{t.q}"</blockquote>
                <figcaption className="mt-2 text-xs text-[color:var(--rc-muted)]">— {t.a}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/install" className="inline-flex items-center justify-center rounded-xl bg-[var(--rc-primary)] px-6 py-3 text-sm font-semibold text-white hover:opacity-95">
              Start Free with Gmail Extension
            </a>
            <a href="/demo" className="inline-flex items-center justify-center rounded-xl border border-[color:var(--rc-border)] bg-white px-6 py-3 text-sm font-semibold hover:bg-slate-50">
              Watch Demo
            </a>
          </div>
          <div className="mt-3 text-center text-xs text-[color:var(--rc-muted)]">
            No credit card required. Cancel anytime. Bank level security.
          </div>
        </div>
      </section>
    </main>
  );
}