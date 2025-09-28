export const metadata = { title: "Features – RealtyClose" };
export default function Page() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Features</h1>
      <p className="mt-4 text-base text-white/80">
        RealtyClose helps real estate professionals manage email based work in Gmail with less stress and more clarity.
        Explore the core tools below.
      </p>
      <section className="mt-10 space-y-8">
        <article>
          <h2 className="text-xl font-semibold">AI Email Assistant</h2>
          <p className="mt-2 text-white/80">Draft, polish, and quality check messages in minutes. Keep deals moving and clients informed.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Smart Templates</h2>
          <p className="mt-2 text-white/80">Reusable templates for common messages across a deal. Start faster without losing your voice.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Deal Tracking</h2>
          <p className="mt-2 text-white/80">Lightweight visibility on conversations and follow ups. See what is waiting on you and what is done.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Compliance Guardrails</h2>
          <p className="mt-2 text-white/80">Helpful checks for tone, clarity, and privacy so your team communicates professionally.</p>
        </article>
        <article>
          <h2 className="text-xl font-semibold">Integrations</h2>
          <p className="mt-2 text-white/80">Works inside Gmail and connects to tools you already use. Rollout is progressive by demand.</p>
        </article>
      </section>
    </main>
  );
}