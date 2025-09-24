import ShimmerButton from "@/components/ui/ShimmerButton";
import GradientUnderline from "@/components/ui/GradientUnderline";

export default function HeroSimple() {
  return (
    <section className="relative overflow-hidden bg-[var(--rc-bg)]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_520px_at_10%_-10%,rgba(37,99,235,.10),transparent_60%),radial-gradient(700px_420px_at_90%_-20%,rgba(124,58,237,.08),transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 sm:pt-40 sm:pb-28 md:grid-cols-2">
        {/* Copy */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[var(--rc-text)] sm:text-6xl">
            Perfect real estate emails in <GradientUnderline>10 seconds</GradientUnderline>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--rc-muted)]">
            Stop losing hours to email. RealtyClose drafts professional, on-brand replies inside Gmail in seconds.
          </p>
          <div className="mt-8">
            <ShimmerButton id="cta-hero-startfree" href="/install">
              Start Free - No Credit Card Required
            </ShimmerButton>
            <div className="mt-3 text-xs text-[var(--rc-muted)]">
              Works with your existing Gmail. No setup required.
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="rounded-[16px] border border-[color:var(--rc-border)] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)] transition hover:translate-y-[1px] p-6">
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
          <div className="mt-4 rounded-lg border border-[color:var(--rc-success)]/25 bg-[color:var(--rc-success)]/10 p-4 text-sm text-[var(--rc-text)]">
            Email draft set to professional tone. Compliance check passed.
          </div>
        </div>
      </div>
    </section>
  );
}