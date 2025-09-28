export const metadata = { title: "Terms of Service – RealtyClose" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Terms of Service</h1>
      <ul className="mt-6 list-disc pl-6 text-white/80 space-y-2">
        <li>Use the service responsibly and within the law</li>
        <li>Subscriptions renew until cancelled</li>
        <li>Services are provided as is to the extent permitted by law</li>
      </ul>
      <p className="mt-8 text-sm text-white/60">This text is informational and does not replace legal advice.</p>
    </main>
  );
}