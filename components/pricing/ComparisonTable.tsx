function Yes() {
  return (
    <div className="mx-auto flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/20">
      <span className="text-emerald-300 text-xs">✓</span>
    </div>
  );
}

export default function ComparisonTable() {
  return (
    <section id="comparison" className="mt-12">
      <h2 className="text-2xl font-semibold text-white">Feature comparison</h2>
      <p className="mt-1 text-sm text-white/70">What is included in each plan</p>

      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        <table className="min-w-full divide-y divide-white/10 text-sm text-white/90">
          <thead className="bg-white/5">
            <tr>
              <th className="px-4 py-3 text-left font-semibold">Feature</th>
              <th className="px-4 py-3 text-center font-semibold">Free</th>
              <th className="px-4 py-3 text-center font-semibold">Professional</th>
              <th className="px-4 py-3 text-center font-semibold">Team</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 bg-white/[0.03]">
            <tr>
              <td className="px-4 py-3">AI email generations</td>
              <td className="px-4 py-3 text-center">5 per month</td>
              <td className="px-4 py-3 text-center">Unlimited</td>
              <td className="px-4 py-3 text-center">Unlimited</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Premium real estate templates</td>
              <td className="px-4 py-3 text-center">Basic</td>
              <td className="px-4 py-3 text-center"><Yes /></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Quick Actions</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Custom tone and style</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Analytics and insights</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
              <td className="px-4 py-3 text-center">Team level</td>
            </tr>
            <tr>
              <td className="px-4 py-3">Shared template library</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Team collaboration tools</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Compliance and brand controls</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
            <tr>
              <td className="px-4 py-3">Dedicated account manager</td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"></td>
              <td className="px-4 py-3 text-center"><Yes /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-xs text-white/50">
        Feature availability can change as we improve the product. For details see the Features page.
      </p>
    </section>
  );
}