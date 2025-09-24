export default function WhyCRM() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Why Not Just Use a CRM?</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold">CRMs</h3>
            <p className="mt-2 text-sm text-slate-700">
              Expensive, complicated, and force you out of Gmail.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold">Generic AI Tools</h3>
            <p className="mt-2 text-sm text-slate-700">
              Don't understand real estate compliance or deal timelines.
            </p>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white p-6">
            <h3 className="font-semibold">Email Alone</h3>
            <p className="mt-2 text-sm text-slate-700">
              Leads to missed follow-ups and untracked deals.
            </p>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-blue-50 p-5 text-sm text-blue-900">
          RealtyClose is purpose-built for real estate. Inside Gmail. AI-driven. Compliance-ready.
        </div>
      </div>
    </section>
  );
}