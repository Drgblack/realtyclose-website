export default function EmailCrisis() {
  return (
    <section className="bg-rose-50/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold tracking-tight">The Email Productivity Crisis</h2>
        <p className="mt-3 max-w-3xl text-slate-700">
          Real estate professionals waste hours rewriting the same emails, chasing missing follow-ups, and fixing miscommunication.
          The result? Lost deals, delayed closings, and constant stress.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Time-Consuming Email Writing",
              desc: "Rewriting the same email 5 times to get the tone right."
            },
            {
              title: "Email Anxiety & Mistakes",
              desc: "One poorly worded email can kill a deal."
            },
            {
              title: "Language Barriers",
              desc: "Miss out on 40% of potential clients who prefer another language."
            }
          ].map((c) => (
            <div key={c.title} className="rounded-xl border border-rose-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 text-center text-sm text-rose-900 sm:grid-cols-4">
          <div className="rounded-lg bg-white p-4">
            <div className="text-2xl font-bold text-rose-600">49%</div>
            <div>of managers have seen a deal delayed by missed communication</div>
          </div>
          <div className="rounded-lg bg-white p-4">
            <div className="text-2xl font-bold text-rose-600">3.2</div>
            <div>hours wasted daily per agent on email</div>
          </div>
          <div className="rounded-lg bg-white p-4">
            <div className="text-2xl font-bold text-rose-600">87%</div>
            <div>of agents say email is their #1 time waster</div>
          </div>
          <div className="rounded-lg bg-white p-4">
            <div className="text-2xl font-bold text-rose-600">23%</div>
            <div>lower response rate if a reply takes more than one hour</div>
          </div>
        </div>
      </div>
    </section>
  );
}