export default function HomePage() {
  return (
    <main className="text-slate-900">
      {/* HERO — light surface */}
      <section className="home-hero relative mx-auto max-w-6xl px-6 pt-16 pb-12 sm:pt-24">
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
              Agents lose 30+ hours per transaction to email chaos. RealtyClose
              gives you that time back with AI powered, Gmail first communication.
            </p>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-700">
              <li>
                <span className="font-semibold text-slate-900">500+</span> active agents
              </li>
              <li>
                <span className="font-semibold text-slate-900">10K+</span> emails drafted
              </li>
              <li>
                <span className="font-semibold text-slate-900">3+</span> hours saved daily
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                id="cta-hero-install"
                href="/install"
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Start Free with Gmail Extension
              </a>
              <a
                id="cta-hero-demo"
                href="/demo"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                Watch Demo
              </a>
            </div>

            {/* Trust row */}
            <div className="mt-4 flex items-center gap-6 text-sm text-slate-600">
              <span>Trusted by solo agents, teams, and brokerages</span>
              <div className="flex items-center gap-4 opacity-70">
                <div className="h-6 w-20 rounded bg-slate-200" aria-hidden="true" />
                <div className="h-6 w-20 rounded bg-slate-200" aria-hidden="true" />
                <div className="h-6 w-20 rounded bg-slate-200" aria-hidden="true" />
              </div>
            </div>
          </div>

          {/* Simple product shot placeholder */}
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

      {/* Gradient divider from light hero to dark site surface */}
      <div aria-hidden="true" className="h-16 bg-gradient-to-b from-[#eef4ff] to-[#0E121B]" />

      {/* BELOW HERO — dark surface matches Blog/Features/Pricing */}
      <section className="bg-slate-900 py-16 text-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">The Email Productivity Crisis</h2>
          <p className="mt-3 max-w-3xl text-slate-300">
            Real estate professionals waste hours rewriting the same emails, chasing missing follow ups,
            and fixing miscommunication. The result is lost deals, delayed closings, and constant stress.
          </p>

          {/* Pain cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Time Consuming Email Writing",
                desc: "Rewriting the same email five times to get the tone right while competitors meet with your potential clients."
              },
              {
                title: "Email Anxiety and Mistakes",
                desc: "One poorly worded email can derail a deal or damage your reputation."
              },
              {
                title: "Language Barriers",
                desc: "Miss out on clients who prefer another language and lose momentum with cross border buyers."
              }
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-sm transition hover:translate-y-px"
              >
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div className="mt-8 grid grid-cols-2 gap-4 text-center text-sm sm:grid-cols-4">
            {[
              { k: "49%", v: "Managers have seen a deal delayed by missed communication" },
              { k: "3.2 hrs", v: "Wasted daily on email by the average agent" },
              { k: "87%", v: "Say email is the top time waster" },
              { k: "23%", v: "Lower response rate if a reply takes more than one hour" }
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="text-2xl font-extrabold text-emerald-400">{s.k}</div>
                <div className="mt-1 text-slate-300">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why not CRM */}
      <section className="bg-slate-900 py-16 text-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Why Not Just Use a CRM</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold text-white">CRMs</h3>
              <p className="mt-2 text-sm text-slate-300">
                Expensive and complicated. Force you out of Gmail and add extra steps to simple communication.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold text-white">Generic AI Tools</h3>
              <p className="mt-2 text-sm text-slate-300">
                Do not understand real estate compliance or deal timelines. Miss key context.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="font-semibold text-white">Email Alone</h3>
              <p className="mt-2 text-sm text-slate-300">
                Leads to missed follow ups and untracked details across transactions.
              </p>
            </div>
          </div>
          <div className="mt-6 rounded-2xl bg-blue-500/10 p-5 text-sm text-blue-200 ring-1 ring-inset ring-blue-400/20">
            RealtyClose is purpose built for real estate. Inside Gmail. AI driven. Compliance ready.
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-900 py-16 text-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Write Perfect Real Estate Emails in 10 Seconds</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
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
            ].map((s) => (
              <div
                key={s.num}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:translate-y-px"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white ring-1 ring-white/20">
                  {s.num}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
              </div>
            ))}
          </div>

          <figure className="mt-8 rounded-xl border border-white/10 bg-white/[0.04] p-6 text-slate-200">
            <blockquote>
              "We closed three deals that were about to fall apart because RealtyClose kept us on top of every follow up."
            </blockquote>
            <figcaption className="mt-2 text-xs text-slate-400">— Transaction Coordinator</figcaption>
          </figure>
        </div>
      </section>

      {/* Proof and closing CTA */}
      <section className="bg-slate-900 py-16 text-slate-100">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold tracking-tight">Agents, Teams, and Brokerages Trust RealtyClose</h2>

          <div className="mt-6 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
            {[
              { k: "500+", v: "active users" },
              { k: "10K+", v: "emails drafted" },
              { k: "5", v: "languages supported" },
              { k: "10 sec", v: "average draft time" }
            ].map((p) => (
              <div key={p.k} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-2xl font-extrabold text-white">{p.k}</div>
                <div className="text-sm text-slate-400">{p.v}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { q: "I cut my weekly client updates from 30 minutes to 5. Gamechanger.", a: "Team Lead" },
              { q: "Our closing rate improved 15 percent in two months.", a: "Brokerage Ops Manager" },
              { q: "Audit prep time cut by 90 percent. Compliance officer loves it.", a: "Broker Owner" }
            ].map((t, i) => (
              <figure key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
                <blockquote className="text-slate-100">"{t.q}"</blockquote>
                <figcaption className="mt-2 text-xs text-slate-400">— {t.a}</figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              id="cta-bottom-install"
              href="/install"
              className="inline-flex items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-emerald-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              Start Free with Gmail Extension
            </a>
            <a
              id="cta-bottom-demo"
              href="/demo"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            >
              Watch Demo
            </a>
          </div>
          <div className="mt-3 text-center text-xs text-slate-400">
            No credit card required. Cancel anytime. Bank level security.
          </div>
        </div>
      </section>
    </main>
  )
}