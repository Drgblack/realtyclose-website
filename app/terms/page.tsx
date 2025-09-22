import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Service | RealtyClose",
  description: "The terms that govern your use of RealtyClose.",
};

export default function TermsPage() {
  return (
    <PageShell title="Terms of Service">
      {/* Important Notice Banner */}
      <div className="bg-amber-600/10 border border-amber-500/20 rounded-lg p-4 mb-8">
        <p className="text-amber-300 text-sm font-medium mb-2">
          <strong>Last updated:</strong> January 1, 2025 | <strong>Effective:</strong> January 1, 2025
        </p>
        <p className="text-slate-300">
          These terms define how you can use our RealtyClose service. Please read them, as they contain
          important information about legal and financial responsibilities.
        </p>
      </div>

      <h2>Acceptance of Terms</h2>
      <p>
        By accessing or using RealtyClose online ("Service"), you agree to be bound by these Terms of
        Service ("Terms"). If you disagree with any part of these terms, you may not access the Service.
      </p>

      <h2>Description of Service</h2>
      <p>
        RealtyClose is an AI-powered platform designed to streamline real estate closing processes through
        automated communication, intelligent reminders, and secure document workflows.
      </p>

      <h2>User Accounts</h2>

      <h3>Registration</h3>
      <p>
        You must register for an account to use certain features. You agree to provide accurate information
        and keep your account secure.
      </p>

      <h3>Eligibility</h3>
      <p>
        You must be at least 18 years old and authorized to enter into agreements in your jurisdiction.
      </p>

      <h3>Account Security</h3>
      <p>
        You are responsible for maintaining account security and all activities under your account.
      </p>

      <h2>Acceptable Use</h2>

      <h3>Permitted Uses</h3>
      <ul>
        <li>Use RealtyClose for legitimate real estate closing activities</li>
        <li>Process real estate transaction data in compliance with applicable laws</li>
        <li>Collaborate with clients and partners through our platform features</li>
        <li>Access support and educational resources provided by our service</li>
      </ul>

      <h3>Prohibited Uses</h3>
      <p>You may not use our Service to:</p>
      <ul>
        <li>Violate laws or regulations</li>
        <li>Infringe on intellectual property rights</li>
        <li>Transmit malicious software or engage in hacking</li>
        <li>Spam, harass, or abuse other users</li>
        <li>Share account access or resell the service</li>
        <li>Use the service for non-real estate purposes without authorization</li>
      </ul>

      <h2>Subscriptions & Billing</h2>

      <h3>Subscription Plans</h3>
      <p>
        We offer various subscription plans. Pricing is subject to change with reasonable notice.
      </p>

      <h3>Payment Terms</h3>
      <ul>
        <li>Subscriptions are billed in advance on a recurring basis</li>
        <li>You authorize automatic charging to your payment method</li>
        <li>Failed payments may result in service suspension</li>
        <li>You're responsible for applicable taxes</li>
      </ul>

      <h3>Cancellation</h3>
      <p>
        You may cancel your subscription at any time. Cancellation takes effect at the end of your current
        billing period. No refunds for partial periods unless required by law.
      </p>

      <h2>Intellectual Property</h2>

      <h3>Our Rights</h3>
      <p>
        RealtyClose retains ownership of our platform, software, and proprietary content. You receive a
        limited license to use our service.
      </p>

      <h3>Your Content</h3>
      <p>
        You retain ownership of content you submit. You grant us necessary rights to provide our service,
        including processing and storing your real estate data.
      </p>

      <h3>User License</h3>
      <p>
        We grant you a limited, non-exclusive license to access and use RealtyClose in accordance with
        these terms.
      </p>

      <h2>Data Processing & Privacy</h2>
      <p>
        Our collection and use of personal information is governed by our Privacy Policy. By using our
        service, you consent to our data practices as described in our Privacy Policy.
      </p>

      <h2>Service Availability</h2>

      <h3>Uptime</h3>
      <p>
        We strive for high availability but cannot guarantee uninterrupted service. Maintenance and updates
        may require temporary downtime.
      </p>

      <h3>Support</h3>
      <p>
        We provide customer support through email and our platform. Response times vary by subscription
        plan and issue complexity.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law:
      </p>
      <ul>
        <li>Our service is provided "as is" without warranties</li>
        <li>We disclaim liability for indirect, incidental, or consequential damages</li>
        <li>Our total liability is limited to amounts paid by you in the 12 months preceding the claim</li>
        <li>We are not liable for third-party actions or data loss beyond our control</li>
      </ul>

      <h2>Professional Responsibility</h2>
      <p>RealtyClose is a tool to assist real estate professionals. You remain responsible for:</p>

      {/* Professional Responsibility Cards */}
      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-5">
          <h4 className="text-purple-300 font-semibold mb-3">Legal Compliance</h4>
          <p className="text-slate-300 text-sm">Compliance with real estate laws and regulations in your jurisdiction</p>
        </div>
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-5">
          <h4 className="text-purple-300 font-semibold mb-3">Professional Conduct</h4>
          <p className="text-slate-300 text-sm">Professional conduct and client relationships</p>
        </div>
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-5">
          <h4 className="text-purple-300 font-semibold mb-3">Data Accuracy</h4>
          <p className="text-slate-300 text-sm">Accuracy of information entered into our system</p>
        </div>
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-5">
          <h4 className="text-purple-300 font-semibold mb-3">Licensing</h4>
          <p className="text-slate-300 text-sm">Maintaining appropriate professional licenses and certifications</p>
        </div>
      </div>

      <h2>Indemnification</h2>
      <p>
        You agree to indemnify and hold us harmless from claims arising from your use of our service,
        violation of these terms, or infringement of third-party rights.
      </p>

      <h2>Termination</h2>

      <h3>By You</h3>
      <p>
        You may terminate your account at any time through account settings or by contacting support.
      </p>

      <h3>By Us</h3>
      <p>
        We may terminate or suspend accounts for violations of these terms, non-payment, or other
        legitimate business reasons.
      </p>

      <h3>Effect of Termination</h3>
      <p>
        Upon termination, your access ends, and you may lose data. We may retain some information as
        required by law or legitimate business purposes.
      </p>

      <h2>Modifications</h2>
      <p>
        We may update these terms periodically. Material changes will be communicated with reasonable
        advance notice. Continued use constitutes acceptance of updated terms.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by German law. Disputes will be resolved in German courts, except where
        prohibited by local law.
      </p>

      <h2>Severability</h2>
      <p>
        If any provision is found unenforceable, the remainder of these terms remains in effect.
      </p>

      <h2>Contact Information</h2>
      <p>
        Questions about these terms:
      </p>
      <ul>
        <li>Email: <a href="mailto:legal@realtyclose.com">legal@realtyclose.com</a></li>
        <li>Address: Zaza Technologies, Gumbertstraße 150, 40229 Düsseldorf, Deutschland</li>
      </ul>

      <h2>Additional Terms by Region</h2>

      <h3>European Union</h3>
      <p>
        EU users have additional rights under GDPR and consumer protection laws. Nothing in these terms
        limits statutory rights that cannot be waived.
      </p>

      <h3>United States</h3>
      <p>
        US users may have additional rights under state consumer protection laws. Some warranty
        disclaimers may not apply in certain states.
      </p>

      <h3>Real Estate Licensing</h3>
      <p>
        Use of RealtyClose does not constitute legal, financial, or real estate advice. Users must
        maintain appropriate professional licensing and follow applicable real estate regulations.
      </p>
    </PageShell>
  );
}