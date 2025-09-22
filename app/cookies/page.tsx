import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie Policy | RealtyClose",
  description: "How RealtyClose uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <PageShell title="Cookie Policy">
      <p>We use essential cookies for security/session and optional analytics to improve the product.</p>
      <h2>Categories</h2>
      <ul>
        <li><strong>Essential</strong>: authentication, CSRF, load balancing</li>
        <li><strong>Analytics (optional)</strong>: product usage insights</li>
      </ul>
      <p>You can control analytics consent in your browser or through our product settings (if available).</p>
    </PageShell>
  );
}