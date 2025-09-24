import Link from "next/link";

export default function HeroSimple() {
  return (
    <section className="relative overflow-hidden bg-[var(--rc-cream)]">
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
              className="inline-flex items-center justify-center rounded-2xl bg-[var(--rc-forest)] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[var(--rc-gold)] hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--rc-forest)]"
            >
              Start Free - No Credit Card Required
            </Link>
            <div className="mt-3 text-xs text-[var(--rc-muted)]">
              Works with your existing Gmail. No setup required.
            </div>
          </div>
        </div>

        {/* Product card */}
        <div className="rounded-2xl border border-[color:var(--rc-border)] bg-[var(--rc-surface)] p-6 shadow-[0_4px_20px_var(--rc-warm-shadow)]">
          <div className="rounded-xl border border-[color:var(--rc-border)] p-4">
            <div className="flex items-center justify-between text-xs text-[var(--rc-muted)]">
              <span>gmail.com · RealtyClose Extension</span><span>Ready</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white border border-[color:var(--rc-border)] p-4">
                <div className="text-2xl font-bold text-[var(--rc-gold)]">10</div>
                <div className="text-xs text-[var(--rc-muted)]">Daily Drafts</div>
              </div>
              <div className="rounded-lg bg-white border border-[color:var(--rc-border)] p-4">
                <div className="text-2xl font-bold text-[var(--rc-gold)]">5</div>
                <div className="text-xs text-[var(--rc-muted)]">Languages</div>
              </div>
            </div>
            <div className="mt-4 rounded-lg bg-gradient-to-r from-[var(--rc-sage)]/20 to-[var(--rc-sage)]/10 border border-[var(--rc-sage)]/30 p-4 text-sm text-[var(--rc-charcoal)] font-medium">
              Email draft set to professional tone. Compliance check passed.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}