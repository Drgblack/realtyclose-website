import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service | RealtyClose",
  description: "The terms that govern your use of RealtyClose.",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service">
      <h2>Use of Service</h2>
      <p>
        By using RealtyClose, you agree to these terms. Don't misuse the service or attempt to disrupt it.
      </p>

      <h2>Subscriptions & Billing</h2>
      <ul>
        <li>Subscriptions renew automatically unless cancelled</li>
        <li>Taxes may apply</li>
        <li>Refunds follow the plan's refund policy, if applicable</li>
      </ul>

      <h2>Liability</h2>
      <p>
        The service is provided "as is" without warranties. To the extent permitted by law, our
        liability is limited to amounts paid in the 12 months prior to the claim.
      </p>

      <h2>Contact</h2>
      <p>Questions: <a href="mailto:legal@realtyclose.com">legal@realtyclose.com</a></p>
    </PageShell>
  );
}