export default function ValueStrip() {
  return (
    <section className="bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            The Email Productivity Crisis
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-300">
            Real estate professionals waste hours rewriting the same emails, chasing missing follow ups,
            and fixing miscommunication. The result is lost deals, delayed closings, and constant stress.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Time Consuming Email Writing",
              desc: "Rewriting the same email five times to get the tone right while competitors meet with your potential clients."
            },
            {
              title: "Email Anxiety and Mistakes", 
              desc: "One poorly worded email can derail a deal or damage your reputation."
            },
            {
              title: "Language Barriers",
              desc: "Miss out on clients who prefer another language and lose momentum with cross border buyers."
            }
          ].map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold text-white">{point.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{point.desc}</p>
            </div>
          ))}
        </div>

        {/* Statistics strip */}
        <div className="mt-12 grid grid-cols-2 gap-4 text-center sm:grid-cols-4">
          {[
            { key: "49%", value: "Managers have seen a deal delayed by missed communication" },
            { key: "3.2 hrs", value: "Wasted daily on email by the average agent" },
            { key: "87%", value: "Say email is the top time waster" },
            { key: "23%", value: "Lower response rate if a reply takes more than one hour" }
          ].map((stat) => (
            <div 
              key={stat.key} 
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
            >
              <div className="text-2xl font-bold text-emerald-400">{stat.key}</div>
              <div className="mt-2 text-xs text-slate-400 leading-tight">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}