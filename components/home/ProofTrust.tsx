export default function ProofTrust() {
  const proofs = [
    { k: "500+", v: "active users" },
    { k: "10K+", v: "emails drafted" },
    { k: "5", v: "languages supported" },
    { k: "10 sec", v: "avg. draft time" },
  ];

  const quotes = [
    { q: "I cut my weekly client updates from 30 minutes to 5. Total gamechanger.", a: "Team Lead" },
    { q: "Our closing rate improved 15% in two months.", a: "Brokerage Ops Manager" },
    { q: "Audit prep time cut by 90%. Compliance officer loves it.", a: "Broker Owner" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Agents, Teams, and Brokerages Already Trust RealtyClose</h2>

        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {proofs.map(p => (
            <div key={p.k} className="rounded-xl border border-slate-200 bg-white p-6 text-center">
              <div className="text-2xl font-extrabold text-blue-600">{p.k}</div>
              <div className="text-sm text-slate-600">{p.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {quotes.map((t, i) => (
            <figure key={i} className="rounded-xl border border-slate-200 bg-white p-6">
              <blockquote className="text-slate-800">"{t.q}"</blockquote>
              <figcaption className="mt-2 text-sm text-slate-500">— {t.a}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}