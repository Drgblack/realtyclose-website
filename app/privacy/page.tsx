import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | RealtyClose",
  description: "How RealtyClose collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      <p><em>Last updated: 2025-09-22</em></p>

      <h2>Overview</h2>
      <p>
        This Privacy Policy explains how RealtyClose ("we", "us") collects, uses, and protects your
        information. We only collect what's necessary to deliver our service and comply with the law.
      </p>

      <h2>Data We Process</h2>
      <ul>
        <li>Account data (name, email, company)</li>
        <li>Billing & subscription details</li>
        <li>Product usage (aggregated/diagnostic; not used to identify you)</li>
        <li>Support communications you send us</li>
      </ul>

      <h2>How We Use Data</h2>
      <ul>
        <li>Authenticate your account and deliver the product</li>
        <li>Provide support and improve reliability, security, and performance</li>
        <li>Comply with legal obligations (e.g., tax, invoices)</li>
      </ul>

      <h2>Security</h2>
      <p>
        We apply industry practices to protect your data. Access is limited to personnel who need it to
        operate the service.
      </p>

      <h2>Your Rights</h2>
      <p>
        You may request access, correction, export, or deletion of your personal data where applicable.
        Contact: <a href="mailto:help@zazatechnologies.com">help@zazatechnologies.com</a>.
      </p>

      <h2>Contact</h2>
      <p>RealtyClose — Gumbertstraße 150, 40229 Düsseldorf, Deutschland</p>
    </PageShell>
  );
}