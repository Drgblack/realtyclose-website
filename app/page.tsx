import GradientUnderline from "@/components/ui/GradientUnderline";
import ShimmerButton from "@/components/ui/ShimmerButton";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import Parallax from "@/components/ui/Parallax";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import StickyCTA from "@/components/ui/StickyCTA";

export default function HomePage() {
  return (
    <main className="bg-[var(--rc-bg)] text-[color:var(--rc-text)]">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Enhanced gradient blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(700px_420px_at_20%_-10%,rgba(37,99,235,.15),transparent_60%),radial-gradient(600px_360px_at_90%_-20%,rgba(16,185,129,.12),transparent_55%)]" />
        <div className="mx-auto grid max-w-6xl gap-8 px-6 pb-16 pt-16 md:gap-10 md:grid-cols-2 sm:pt-28">
          <div>
            <Reveal>
              <div className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-200">
                Gmail Extension Live Now
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Turn messy real estate emails into{" "}
                <GradientUnderline>perfect client communication</GradientUnderline>.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-4 max-w-xl text-lg text-[color:var(--rc-muted)]">
                Agents lose 30+ hours per transaction to email chaos. RealtyClose gives you that time back with AI powered, Gmail first communication.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[color:var(--rc-muted)]">
                <li><span className="font-semibold text-[color:var(--rc-text)]">500+</span> active agents</li>
                <li><span className="font-semibold text-[color:var(--rc-text)]">10K+</span> emails drafted</li>
                <li><span className="font-semibold text-[color:var(--rc-text)]">3+</span> hours saved daily</li>
              </ul>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ShimmerButton id="cta-hero-install" href="/install">Start Free with Gmail Extension</ShimmerButton>
                <a href="/demo" className="group inline-flex items-center justify-center rounded-xl border border-[color:var(--rc-border)] bg-white px-5 py-3 text-sm font-semibold transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                  <span className="group-hover:scale-105 transition-transform">Watch Demo</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <div className="mt-8">
                <span className="block mb-4 text-sm font-medium text-[color:var(--rc-muted)] md:inline md:mb-0 md:mr-6">Trusted by solo agents, teams, and brokerages</span>
                <div className="flex items-center gap-4 opacity-75 md:gap-6">
                  <div className="flex items-center justify-center h-7 w-20 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs font-bold md:h-8 md:w-24">RE/MAX</div>
                  <div className="flex items-center justify-center h-7 w-20 rounded-lg bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-xs font-bold md:h-8 md:w-24">Century21</div>
                  <div className="flex items-center justify-center h-7 w-20 rounded-lg bg-gradient-to-r from-violet-600 to-violet-700 text-white text-xs font-bold md:h-8 md:w-24">Keller W.</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Enhanced product card with parallax and improved styling */}
          <Parallax offset={30}>
            <Reveal delay={0.2}>
              <div className="group rounded-[var(--rc-radius)] border border-[color:var(--rc-border)] bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="rounded-xl border border-[color:var(--rc-border)] bg-gradient-to-br from-slate-50 to-white p-6 transition-all duration-300 group-hover:border-blue-200">
                  <div className="flex items-center justify-between text-xs text-[color:var(--rc-muted)]">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="font-medium">gmail.com · RealtyClose Extension</span>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-2 py-1 text-emerald-700 font-semibold">Ready</span>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-5 transition-transform hover:scale-105">
                      <div className="text-3xl font-black text-blue-600">10</div>
                      <div className="text-xs font-medium text-blue-700">Daily Drafts</div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-br from-violet-50 to-violet-100 p-5 transition-transform hover:scale-105">
                      <div className="text-3xl font-black text-violet-600">5</div>
                      <div className="text-xs font-medium text-violet-700">Languages</div>
                    </div>
                  </div>
                  <div className="mt-6 rounded-lg bg-emerald-50 p-5 text-sm text-emerald-700 ring-1 ring-emerald-200 border-l-4 border-emerald-400">
                    <div className="flex items-start gap-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 mt-2 animate-pulse"></div>
                      <span className="typewriter font-medium">Email draft set to professional tone. Compliance check passed.</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </Parallax>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-y border-[color:var(--rc-border)] bg-white py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 sm:grid-cols-3">
          {[
            { t: "Save hours", d: "Reply in seconds with AI assisted drafting and templates." },
            { t: "Protect deals", d: "Follow up nudges and timeline alerts stop slips." },
            { t: "Stay compliant", d: "Audit trails and approved templates keep messages safe." }
          ].map((i, index) => (
            <Reveal key={i.t} delay={0.1 * index}>
              <div className="card-3d rounded-[var(--rc-radius)] p-6">
                <div className="text-lg font-bold text-[color:var(--rc-text)]">{i.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--rc-muted)]">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Write perfect real estate emails in 10 seconds</h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: 1, t: "Install in Chrome", d: "Works instantly with Gmail. No setup required." },
              { n: 2, t: "Select context", d: "First contact, follow up, listing update, or client question." },
              { n: 3, t: "Send perfect email", d: "AI generates professional and compliant drafts in seconds." }
            ].map((s, index) => (
              <Reveal key={s.n} delay={0.1 * index}>
                <div className="card-3d rounded-[var(--rc-radius)] p-7">
                  <div className="group inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--rc-primary)] to-blue-700 text-white font-bold shadow-lg hover:scale-110 transition-transform duration-200">
                    <span className="group-hover:animate-pulse">{s.n}</span>
                  </div>
                  <div className="mt-5 text-xl font-bold text-[color:var(--rc-text)]">{s.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[color:var(--rc-muted)]">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-8">
              <TestimonialCarousel />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why not CRM */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Why not just use a CRM</h2>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { h:"CRMs", p:"Expensive and complicated. Force you out of Gmail and add extra steps." },
              { h:"Generic AI tools", p:"Do not understand real estate compliance or deal timelines." },
              { h:"Email alone", p:"Leads to missed follow ups and untracked details across transactions." }
            ].map((c, index)=>(
              <Reveal key={c.h} delay={0.1 * index}>
                <div className="card-3d rounded-[var(--rc-radius)] p-6">
                  <div className="text-lg font-bold text-[color:var(--rc-text)]">{c.h}</div>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--rc-muted)]">{c.p}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-6 rounded-[var(--rc-radius)] border border-blue-200 bg-blue-50 p-4 text-sm text-blue-800">
              RealtyClose is purpose built for real estate. Inside Gmail. AI driven. Compliance ready.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Social proof + closing CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight">Agents, teams, and brokerages trust RealtyClose</h2>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k:1250, suffix:"+", v:"active users" },
              { k:25000, suffix:"+", v:"emails drafted" },
              { k:8, suffix:"", v:"languages supported" },
              { k:12, suffix:" sec", v:"average draft time" },
            ].map((p, index)=>(
              <Reveal key={p.v} delay={0.1 * index}>
                <div className="card-3d rounded-[var(--rc-radius)] p-7 text-center">
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-[var(--rc-primary)] to-[var(--rc-violet)] bg-clip-text">
                    <CountUp to={p.k} suffix={p.suffix} />
                  </div>
                  <div className="mt-2 text-sm font-medium text-[color:var(--rc-muted)] uppercase tracking-wide">{p.v}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { q:"I cut weekly client updates from 30 minutes to 5. Complete gamechanger for my workflow.", a:"Sarah M., Team Lead at Compass" },
              { q:"Our closing rate improved 18% in two months. The follow-up automation is incredible.", a:"Michael R., Brokerage Operations" },
              { q:"Audit prep time cut by 90%. Compliance officer can't believe the organization.", a:"Jennifer L., Independent Broker" },
            ].map((t,i)=>(
              <Reveal key={i} delay={0.1 * i}>
                <figure className="card-3d rounded-[var(--rc-radius)] p-6">
                  <blockquote className="text-[color:var(--rc-text)] font-medium leading-relaxed">"{t.q}"</blockquote>
                  <figcaption className="mt-3 text-sm font-semibold text-[color:var(--rc-muted)]">&mdash; {t.a}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
              <ShimmerButton href="/install">Start Free with Gmail Extension</ShimmerButton>
              <a href="/demo" className="group inline-flex items-center justify-center rounded-xl border border-[color:var(--rc-border)] bg-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-slate-50 hover:border-slate-300 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                <span className="group-hover:scale-105 transition-transform">Watch Demo</span>
              </a>
            </div>
            <div className="mt-3 text-center text-xs text-[color:var(--rc-muted)]">
              No credit card required. Cancel anytime. Bank level security.
            </div>
          </Reveal>
        </div>
      </section>

      {/* Sticky CTA */}
      <StickyCTA />
    </main>
  );
}