export const metadata = { title: "Integrations – RealtyClose" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Integrations</h1>
      <p className="mt-4 text-white/80">
        RealtyClose works inside Gmail and connects to other tools over time. Rollout is driven by customer demand.
      </p>
      <ul className="mt-6 list-disc pl-6 text-white/80 space-y-2">
        <li>Gmail and Google Workspace</li>
        <li>Document storage providers</li>
        <li>CRM and lead tools</li>
        <li>Payment and e-sign tooling where relevant</li>
      </ul>
    </main>
  );
}