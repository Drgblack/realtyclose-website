export const metadata = { title: "AI Email Assistant – RealtyClose" };
export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-semibold">AI Email Assistant</h1>
      <p className="mt-4 text-white/80">
        Reply faster with professional, on brand emails. The assistant suggests phrasing, offers tone options,
        and flags unclear details before you send.
      </p>
      <ul className="mt-6 list-disc pl-6 text-white/80 space-y-2">
        <li>Fast first drafts and rewrites</li>
        <li>Tone support for different clients and partners</li>
        <li>Suggested next steps to reduce back and forth</li>
        <li>Translation support where needed</li>
      </ul>
    </main>
  );
}