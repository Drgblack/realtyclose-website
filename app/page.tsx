import HeroNeon from "@/components/home/HeroNeon";
import EmailTransform from "@/components/home/EmailTransform";
import { ShinyCard } from "@/components/ui/shiny-card";
import { glowBtn } from "@/components/ui/shiny-card";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";

export default function HomePage() {
  return (
    <main className="bg-[var(--rc-bg)] text-[var(--rc-text)]">
      <HeroNeon />

      {/* Trust bar - reduced padding */}
      <section className="border-t border-[color:var(--rc-border)] bg-[var(--rc-surface)] py-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
          <span className="text-sm text-[var(--rc-muted)]">Trusted by solo agents, teams, and brokerages</span>
          <div className="flex items-center gap-6">
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
            <div className="h-6 w-20 rounded bg-slate-200 opacity-70"></div>
          </div>
        </div>
      </section>

      {/* Value strip - Features row with ShinyCard */}
      <section className="rc-ambient py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 sm:grid-cols-3">
          {[
            { t: "Save hours", d: "Reply in seconds with AI assisted drafting and templates." },
            { t: "Protect deals", d: "Follow up nudges and timeline alerts stop slips." },
            { t: "Stay compliant", d: "Audit trails and approved templates keep messages safe." }
          ].map((i, index) => (
            <Reveal key={i.t} delay={0.1 * index}>
              <ShinyCard>
                <h3 className="text-lg font-bold text-[var(--rc-text)]">{i.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--rc-muted)]">{i.d}</p>
              </ShinyCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How it works with ShinyCard steps */}
      <section id="how-it-works" className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Write perfect real estate emails in 10 seconds</h2>
            <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500" />
            <p className="mt-4 text-base leading-relaxed text-[var(--rc-muted)] max-w-2xl">Our AI understands real estate context, compliance requirements, and professional communication standards.</p>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { n: 1, t: "Install in Chrome", d: "Works instantly with Gmail. No setup required." },
              { n: 2, t: "Select context", d: "First contact, follow up, listing update, or client question." },
              { n: 3, t: "Send perfect email", d: "AI generates professional and compliant drafts in seconds." }
            ].map((s, index) => (
              <Reveal key={s.n} delay={0.1 * index}>
                <ShinyCard padding="lg" innerClassName="text-center">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 text-white text-lg font-bold">
                    {s.n}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--rc-text)]">{s.t}</h4>
                  <p className="mt-2 text-sm text-[var(--rc-muted)]">{s.d}</p>
                </ShinyCard>
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

      {/* Why not CRM with ShinyCard */}
      <section className="rc-ambient relative isolate overflow-hidden py-20">
        <div className="absolute inset-0 -z-10 opacity-[.9]"
             style={{ background: "linear-gradient(180deg,#f8fbff 0%,#f5f3ff 100%)" }} />
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Why not just use a CRM</h2>
            <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500" />
            <p className="mt-4 text-base leading-relaxed text-[var(--rc-muted)] max-w-2xl">Most tools force you out of Gmail and add complexity. We integrate where you already work.</p>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {[
              { h:"CRMs", p:"Expensive and complicated. Force you out of Gmail and add extra steps." },
              { h:"Generic AI tools", p:"Do not understand real estate compliance or deal timelines." },
              { h:"Email alone", p:"Leads to missed follow ups and untracked details across transactions." }
            ].map((c, index)=>(
              <Reveal key={c.h} delay={0.1 * index}>
                <ShinyCard gradient="indigo">
                  <h3 className="text-lg font-bold text-[var(--rc-text)]">{c.h}</h3>
                  <p className="mt-3 text-sm text-[var(--rc-muted)]">{c.p}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <ShinyCard gradient="emerald" padding="sm" className="mt-6">
              <div className="font-semibold text-emerald-800 mb-1">RealtyClose Advantage</div>
              <div className="text-emerald-700 text-sm">Purpose built for real estate. Inside Gmail. AI driven. Compliance ready.</div>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Social proof + closing CTA with ShinyCard */}
      <section className="rc-ambient py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Agents, teams, and brokerages trust RealtyClose</h2>
            <div className="h-1 w-16 mt-4 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500" />
            <p className="mt-4 text-base leading-relaxed text-[var(--rc-muted)] max-w-2xl">Join thousands of real estate professionals who've already transformed their email workflow.</p>
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k:1250, suffix:"+", v:"active users" },
              { k:25000, suffix:"+", v:"emails drafted" },
              { k:8, suffix:"", v:"languages supported" },
              { k:12, suffix:" sec", v:"average draft time" },
            ].map((p, index)=>(
              <Reveal key={p.v} delay={0.1 * index}>
                <ShinyCard padding="lg" innerClassName="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-sky-500 to-fuchsia-600 bg-clip-text text-transparent">
                    <CountUp to={p.k} suffix={p.suffix} />
                  </div>
                  <div className="text-sm text-[var(--rc-muted)] mt-2">{p.v}</div>
                </ShinyCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { 
                q:"I cut weekly client updates from 30 minutes to 5. Complete gamechanger for my workflow.", 
                name:"Sarah M.", 
                role:"Team Lead", 
                company:"Compass",
                photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face"
              },
              { 
                q:"Our closing rate improved 18% in two months. The follow-up automation is incredible.", 
                name:"Michael R.", 
                role:"Brokerage Operations", 
                company:"RE/MAX",
                photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              },
              { 
                q:"Audit prep time cut by 90%. Compliance officer can't believe the organization.", 
                name:"Jennifer L.", 
                role:"Independent Broker", 
                company:"JL Properties",
                photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
              },
            ].map((t,i)=>(
              <Reveal key={i} delay={0.1 * i}>
                <ShinyCard className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={t.photo}
                      alt={`${t.name} headshot`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-[var(--rc-text)]">{t.name}</div>
                      <div className="text-xs text-[var(--rc-muted)]">{t.role} @ {t.company}</div>
                    </div>
                  </div>
                  <blockquote className="text-sm leading-relaxed text-[var(--rc-muted)]">"{t.q}"</blockquote>
                </ShinyCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-3">
              <a 
                href="/install" 
                className={`inline-flex items-center px-6 py-3 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-xl transition-all duration-200 ${glowBtn}`}
              >
                Start Free with Gmail Extension
              </a>
              <a 
                href="/demo" 
                className="inline-flex items-center justify-center rounded-xl border border-[var(--rc-border)] hover:border-indigo-200 bg-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-slate-50"
              >
                Watch Demo
              </a>
            </div>
            <div className="mt-4 text-center text-xs text-[var(--rc-muted)]">No credit card required. Cancel anytime. Bank level security.</div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}