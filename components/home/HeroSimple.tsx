import Link from "next/link";

export default function HeroSimple() {
  return (
    <section className="relative overflow-hidden bg-[var(--rc-warm)]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-20 sm:pt-40 sm:pb-28 md:grid-cols-2">
        {/* Copy */}
        <div>
          <h1 className="text-5xl font-extrabold tracking-tight text-[var(--rc-charcoal)] sm:text-6xl">
            Perfect real estate emails in 10 seconds
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[var(--rc-muted)]">
            Stop losing hours to email. RealtyClose drafts professional, on-brand replies inside Gmail in seconds.
          </p>
          <div className="mt-8">
            <Link
              id="cta-hero-startfree"
              href="/install"
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--rc-coral)] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rc-coral)]"
            >
              Start Free - No Credit Card Required
            </Link>
            <div className="mt-3 text-xs text-[var(--rc-muted)]">
              Works with your existing Gmail. No setup required.
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="rounded-2xl border border-[color:var(--rc-border)] bg-[var(--rc-surface)] p-6 shadow-sm">
          <div className="rounded-xl border border-[color:var(--rc-border)] p-4">
            <div className="flex items-center justify-between text-xs text-[var(--rc-muted)]">
              <span>gmail.com · RealtyClose Extension</span><span>Ready</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-2xl font-bold text-[var(--rc-charcoal)]">10</div>
                <div className="text-xs text-[var(--rc-muted)]">Daily Drafts</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-4">
                <div className="text-2xl font-bold text-[var(--rc-charcoal)]">5</div>
                <div className="text-xs text-[var(--rc-muted)]">Languages</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg border border-[var(--rc-sage)]/30 bg-[var(--rc-sage)]/15 p-4 text-sm text-[var(--rc-charcoal)]">
              Email draft set to professional tone. Compliance check passed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}