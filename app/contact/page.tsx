import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Contact | RealtyClose",
  description: "Get in touch with the RealtyClose team.",
};

export default function ContactPage() {
  return (
    <PageShell title="Contact">
      <p>We'd love to help. Email us and we'll reply ASAP.</p>
      <ul>
        <li>Support: <a href="mailto:help@zazatechnologies.com">help@zazatechnologies.com</a></li>
        <li>Sales: <a href="mailto:sales@realtyclose.com">sales@realtyclose.com</a></li>
        <li>Legal: <a href="mailto:legal@realtyclose.com">legal@realtyclose.com</a></li>
      </ul>
      <h2>Registered Office</h2>
      <p>Gumbertstraße 150, 40229 Düsseldorf, Deutschland</p>
    </PageShell>
  );
}