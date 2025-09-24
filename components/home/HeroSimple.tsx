import ShimmerButton from "@/components/ui/ShimmerButton";
import GradientUnderline from "@/components/ui/GradientUnderline";

export default function HeroSimple() {
  return (
    <section className="relative overflow-hidden bg-[var(--rc-bg)]">
      <div aria-hidden
        className="pointer-events-none absolute inset-0 -z-10
        bg-[radial-gradient(900px_520px_at_10%_-10%,rgba(37,99,235,.18),transparent_60%),radial-gradient(700px_420px_at_92%_-18%,rgba(124,58,237,.14),transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 sm:pt-40 sm:pb-28 md:grid-cols-2">
        {/* Copy */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl xl:text-7xl hero-tight">
            Perfect real estate emails in <span className="relative">
              <span className="relative z-10">10 seconds</span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-2 w-full rounded-md" style={{background:"var(--rc-cta-grad)"}} />
            </span>
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
        <div className="relative rounded-2xl border border-[var(--rc-border)] bg-white shadow-[0_10px_30px_rgba(2,6,23,0.08)] transition will-change-transform hover:translate-y-[1px] p-6">
          <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[2px] rounded-t-2xl" style={{background:"var(--rc-cta-grad)"}} />
          <div className="flex items-center justify-between text-xs text-[var(--rc-muted)]">
            <span>gmail.com · RealtyClose Extension</span><span>Ready</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-2xl font-extrabold text-[var(--rc-blue-700)]">10</div>
              <div className="text-xs text-[var(--rc-muted)]">Daily Drafts</div>
            </div>
            <div className="rounded-lg bg-slate-50 p-4">
              <div className="text-2xl font-extrabold text-[var(--rc-blue-700)]">5</div>
              <div className="text-xs text-[var(--rc-muted)]">Languages</div>
            </div>
          </div>
          <div className="mt-4 rounded-lg border border-emerald-300 bg-emerald-50 p-4 text-sm text-emerald-900">
            Email draft set to professional tone. Compliance check passed.
          </div>
        </div>
      </div>
    </section>
  );
}