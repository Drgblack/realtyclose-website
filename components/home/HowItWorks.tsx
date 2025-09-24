export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Install in Chrome",
      desc: "Works instantly with Gmail."
    },
    {
      num: "2",
      title: "Select Your Context",
      desc: "First contact, follow-up, listing update, or client question."
    },
    {
      num: "3",
      title: "Send Perfect Email",
      desc: "AI generates professional, compliant, and on-brand replies every time."
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">Write Perfect Real Estate Emails in 10 Seconds</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {steps.map(s => (
            <div key={s.num} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                {s.num}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{s.desc}</p>
            </div>
          ))}
        </div>
        <figure className="mt-8 rounded-xl bg-slate-50 p-6 text-slate-700">
          <blockquote className="text-lg">
            "We closed three deals that were about to fall apart because RealtyClose kept us on top of every follow-up."
          </blockquote>
          <figcaption className="mt-2 text-sm text-slate-500">— Transaction Coordinator</figcaption>
        </figure>
      </div>
    </section>
  );
}