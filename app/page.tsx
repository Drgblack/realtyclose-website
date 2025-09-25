import HeroNeon from "@/components/home/HeroNeon";
import EmailTransform from "@/components/home/EmailTransform";
import GradientUnderline from "@/components/ui/GradientUnderline";
import ShimmerButton from "@/components/ui/ShimmerButton";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import Parallax from "@/components/ui/Parallax";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import StickyCTA from "@/components/ui/StickyCTA";
import StickyFloatingCTA from "@/components/ui/StickyFloatingCTA";

export default function HomePage() {
  return (
    <main className="bg-[var(--rc-bg)] text-[var(--rc-text)]">
      <HeroNeon />

      {/* Trust bar */}
      <section className="border-t border-[color:var(--rc-border)] bg-[var(--rc-surface)] py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
          <span className="text-sm text-[var(--rc-muted)]">Trusted by solo agents, teams, and brokerages</span>
          <div className="flex items-center gap-6">
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Value strip - Features row */}
      <section className="tint-blue rc-noise py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          {[
            { t: "Save hours", d: "Reply in seconds with AI assisted drafting and templates." },
            { t: "Protect deals", d: "Follow up nudges and timeline alerts stop slips." },
            { t: "Stay compliant", d: "Audit trails and approved templates keep messages safe." }
          ].map((i, index) => (
            <Reveal key={i.t} delay={0.1 * index}>
              <div className="rc-holo elevated-lg rounded-2xl bg-white transition will-change-transform p-6 group">
                <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-0.5 rounded-t-2xl" style={{background:"var(--rc-cta-grad)"}} />
                <div className="text-lg font-bold text-[color:var(--rc-text)] group-hover:text-blue-600 transition-colors duration-300">{i.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--rc-muted)]">{i.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="tint-mint rc-noise py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">Write perfect real estate emails in 10 seconds</h2>
            <p className="mt-4 text-lg text-[color:var(--rc-muted)] max-w-2xl">Our AI understands real estate context, compliance requirements, and professional communication standards.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: 1, t: "Install in Chrome", d: "Works instantly with Gmail. No setup required." },
              { n: 2, t: "Select context", d: "First contact, follow up, listing update, or client question." },
              { n: 3, t: "Send perfect email", d: "AI generates professional and compliant drafts in seconds." }
            ].map((s, index) => (
              <Reveal key={s.n} delay={0.1 * index}>
                <div className="rc-holo elevated-lg relative rounded-2xl bg-white transition will-change-transform p-7 group">
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{background:"var(--rc-cta-grad)"}} />
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full animated-gradient text-white font-bold shadow-xl hover:scale-125 transition-all duration-300 hover:shadow-2xl">
                    <span className="relative z-10 text-lg group-hover:animate-pulse">{s.n}</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="mt-5 text-xl font-bold text-[color:var(--rc-text)] group-hover:text-blue-600 transition-colors duration-300">{s.t}</div>
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
          
          <Reveal delay={0.4}>
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-[var(--rc-text)] mb-4">See the transformation</h3>
              <EmailTransform />
            </div>
          </Reveal>
          
          {/* Gradient divider */}
          <div className="my-16">
            <div className="h-px w-full" style={{background:"linear-gradient(90deg,transparent,var(--rc-blue) 20%, var(--rc-violet) 80%, transparent)"}} />
          </div>
        </div>
      </section>

      {/* Why not CRM */}
      <section className="relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 opacity-80"
             style={{ background: "linear-gradient(180deg,#f7fbff 0%,#f6f3ff 100%)" }} />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">Why not just use a CRM</h2>
            <p className="mt-4 text-lg text-[color:var(--rc-muted)] max-w-2xl">Most tools force you out of Gmail and add complexity. We integrate where you already work.</p>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { h:"CRMs", p:"Expensive and complicated. Force you out of Gmail and add extra steps." },
              { h:"Generic AI tools", p:"Do not understand real estate compliance or deal timelines." },
              { h:"Email alone", p:"Leads to missed follow ups and untracked details across transactions." }
            ].map((c, index)=>(
              <Reveal key={c.h} delay={0.1 * index}>
                <div className="rc-holo elevated-lg relative rounded-2xl bg-white transition will-change-transform p-6">
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{background:"var(--rc-cta-grad)"}} />
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
      <section className="py-24 bg-gradient-to-t from-slate-50/30 to-white">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">Agents, teams, and brokerages trust RealtyClose</h2>
            <p className="mt-4 text-lg text-[color:var(--rc-muted)] max-w-2xl">Join thousands of real estate professionals who've already transformed their email workflow.</p>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k:1250, suffix:"+", v:"active users" },
              { k:25000, suffix:"+", v:"emails drafted" },
              { k:8, suffix:"", v:"languages supported" },
              { k:12, suffix:" sec", v:"average draft time" },
            ].map((p, index)=>(
              <Reveal key={p.v} delay={0.1 * index}>
                <div className="rc-holo elevated-lg p-6 text-center transition will-change-transform">
                  <div className="stat-num">
                    <CountUp to={p.k} suffix={p.suffix} />
                  </div>
                  <div className="stat-label text-sm uppercase tracking-wider mt-3">{p.v}</div>
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
                <figure className="rc-holo elevated-lg relative rounded-2xl bg-white transition will-change-transform p-6">
                  <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{background:"var(--rc-cta-grad)"}} />
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
      
      {/* Floating CTA */}
      <StickyFloatingCTA />
    </main>
  );
}