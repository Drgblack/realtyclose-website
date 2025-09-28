export const metadata = { title: "FAQs – RealtyClose" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">FAQs</h1>
      <div className="mt-6 space-y-6 text-white/80">
        <section>
          <h2 className="text-lg font-semibold">Who is RealtyClose for?</h2>
          <p>Transaction coordinators, team leads, and solo agents who live in Gmail.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Does it replace my CRM?</h2>
          <p>No. RealtyClose focuses on email based workflows. It complements your existing tools.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">How do you handle data?</h2>
          <p>We minimise data collection, use reputable providers, and apply sensible safeguards.</p>
        </section>
        <section>
          <h2 className="text-lg font-semibold">Can I cancel any time?</h2>
          <p>Yes. You can cancel your subscription at any time.</p>
        </section>
      </div>
    </main>
  );
}