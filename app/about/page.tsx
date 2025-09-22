import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "About Us | RealtyClose",
  description: "RealtyClose is part of Zaza Technologies. We build trusted, AI-powered workflow tools for professionals.",
};

export default function AboutPage() {
  return (
    <PageShell title="About Us">
      <p>
        <strong>RealtyClose</strong> simplifies real estate closings with automated communication,
        intelligent reminders, and secure workflows. We're part of the Zaza Technologies family,
        building trusted, AI-powered tools for professionals.
      </p>
      <h2>Our Mission</h2>
      <p>
        Help professionals focus on high-value work by removing the friction of repetitive tasks
        and admin overhead — while keeping data secure and compliant.
      </p>
      <h2>What We Build</h2>
      <ul>
        <li>Automated messaging and reminders for closing workflows</li>
        <li>Secure document and task coordination</li>
        <li>Clear visibility for clients and partners</li>
      </ul>
      <h2>Backed by Zaza Technologies</h2>
      <p>
        Zaza Technologies provides shared design systems, security practices, and platform
        infrastructure so we can ship fast and safely.
      </p>
      <h2>Contact</h2>
      <p>
        Questions? Reach us at <a href="mailto:support@realtyclose.com">support@realtyclose.com</a>.
      </p>
    </PageShell>
  );
}