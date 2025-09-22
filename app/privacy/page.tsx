import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | RealtyClose",
  description: "How RealtyClose collects, uses, and protects personal data.",
};

export default function PrivacyPage() {
  return (
    <PageShell title="Privacy Policy">
      {/* Last Updated Banner */}
      <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-4 mb-8">
        <p className="text-blue-300 text-sm font-medium mb-2">
          <strong>Last updated:</strong> January 1, 2025 | <strong>Effective:</strong> January 1, 2025
        </p>
        <p className="text-slate-300">
          Your privacy is our priority. Learn how we protect your personal information and ensure
          excellent data security in compliance with global privacy regulations.
        </p>
      </div>

      <h2>Account Information</h2>
      <p>
        When you create an account, we collect your name, email address, acknowledgement name, and role
        to enable proper function and billing.
      </p>

      <h2>Usage Data</h2>
      <p>
        We collect information about how you use our service, including features accessed, time spent, and
        performance metrics to improve functionality.
      </p>

      <h2>Transaction Data</h2>
      <p>
        We process real estate transaction data that you provide to facilitate closings, including property details,
        client information, and closing documents. This data is only processed with your explicit authorization.
      </p>

      <h2>Communication Information</h2>
      <p>
        We retain your account information, email communications, and session data for security, compliance,
        and technical optimization purposes.
      </p>

      <h2>How We Use Your Information</h2>

      {/* Usage Cards */}
      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Service Delivery
          </h3>
          <p className="text-slate-300 text-sm">Provide AI-powered real estate closing tools and automated communication workflows.</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Account Management
          </h3>
          <p className="text-slate-300 text-sm">Manage your subscriptions, billing, and support requests.</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Platform Improvement
          </h3>
          <p className="text-slate-300 text-sm">Analyze usage patterns to enhance features and user experience.</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            Communication
          </h3>
          <p className="text-slate-300 text-sm">Send important updates, notifications, and relevant service information.</p>
        </div>
      </div>

      <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-4 my-8">
        <h3 className="text-green-300 font-semibold mb-2">Legal Compliance</h3>
        <p className="text-slate-300 text-sm">Fulfill regulatory requirements including real estate compliance and ensure service integrity.</p>
      </div>

      <h2>Data Processing Legal Basis</h2>

      <h3>Legitimate Interest</h3>
      <p>
        All data is encrypted in transit using TLS 1.3 and at rest using AES 256 encryption.
      </p>

      <h3>Data Centers</h3>
      <p>
        Data is stored in secure, SOC 2 compliant data centers in the European Union and United States.
      </p>

      <h3>Access Controls</h3>
      <p>
        Strict access controls ensure only authorized personnel can access data for legitimate business
        purposes.
      </p>

      <h3>Regular Audits</h3>
      <p>
        We conduct regular security audits and penetration testing to identify and address vulnerabilities.
      </p>

      <h2>Your Rights</h2>
      <p>
        Under GDPR and other privacy regulations, you have the following rights:
      </p>

      <ul>
        <li><strong>Right to Access:</strong> Receive a copy of your personal data.</li>
        <li><strong>Right to Rectification:</strong> Correct inaccurate personal data.</li>
        <li><strong>Right to Erasure:</strong> Request deletion of your personal data.</li>
        <li><strong>Right to Portability:</strong> Export your data in a machine-readable format.</li>
        <li><strong>Right to Object:</strong> Object to processing of your personal data.</li>
        <li><strong>Right to Restrict:</strong> Request restriction of processing.</li>
      </ul>

      <p>
        To exercise these rights, contact us at <a href="mailto:help@zazatechnologies.com">help@zazatechnologies.com</a>.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain your data as follows:
      </p>

      <ul>
        <li><strong>Account Data:</strong> Retained until your account is active plus 30 days after cancellation.</li>
        <li><strong>Billing Data Messages:</strong> Automatically deleted after your feedback generation and export.</li>
        <li><strong>Usage Analytics:</strong> Aggregated and anonymized data retained for up to 3 years for platform improvement.</li>
        <li><strong>Financial Records:</strong> Billing information retained for 7 years to meet compliance.</li>
        <li><strong>Assessment Records:</strong> Retained as recommended guidance for legal defense.</li>
      </ul>

      <h2>AI Processing</h2>
      <p>
        Real estate transaction content and communications are AI processed to provide automated workflows and
        intelligent reminders. Additional details about our data processing agreements and AI partner data
        security are available upon request.
      </p>

      <h2>Cookies and Similar Technologies</h2>

      <h3>Essential Cookies</h3>
      <p>Required for website functionality.</p>

      <h3>Analytics Cookies</h3>
      <p>Understanding usage patterns (anonymized).</p>

      <h3>Performance Cookies</h3>
      <p>Understanding your settings and language preferences.</p>

      <p>
        See our <a href="/cookies">Cookie Policy</a> for detailed information on all our cookies.
      </p>

      <h2>International Data Transfers</h2>
      <p>
        We operate in compliance with GDPR while processing real estate transaction data.
        We utilize state-of-the-art encryption for data transfers and secure real estate communication workflows.
      </p>

      <p>
        If you're located outside the United States, your data may be transferred to and processed in the US.
        We only do so under appropriate protection through:
      </p>

      <ul>
        <li>Standard Contractual Clauses (SCCs) approved by the European Commission</li>
        <li>Adequacy directions where available</li>
        <li>Additional security measures and access controls</li>
      </ul>

      <h2>Contact Information</h2>
      <p>For privacy-related questions or to exercise your rights:</p>

      {/* Contact Card */}
      <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 my-8 not-prose">
        <div className="space-y-4">
          <div>
            <h4 className="text-blue-300 font-semibold mb-2">Privacy Contact</h4>
            <a href="mailto:greg@zazatechnologies.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              greg@zazatechnologies.com
            </a>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold mb-2">General Support</h4>
            <a href="mailto:help@zazatechnologies.com" className="text-blue-400 hover:text-blue-300 transition-colors">
              help@zazatechnologies.com
            </a>
          </div>
          <div>
            <h4 className="text-blue-300 font-semibold mb-2">Address</h4>
            <p className="text-slate-300 text-sm">
              Zaza Technologies<br />
              Gumbertstraße 150<br />
              40229 Düsseldorf, Deutschland
            </p>
          </div>
        </div>
      </div>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this privacy policy periodically. Any changes will be posted on this page with an updated
        effective date. Continued use of our service constitutes acceptance of any changes.
      </p>

      <p>
        If a significant change requires your consent, we'll obtain that separately. For material changes affecting
        data processing, we'll notify you via email at least 30 days in advance.
      </p>

      <h2>Additional Regional Privacy Disclosures</h2>

      <h3>California Residents (CCPA)</h3>
      <p>
        If you're a California resident, you have additional rights under the California Consumer Privacy Act
        (CCPA), including the right to know what personal information we've collected about you and to request
        deletion of your personal information.
      </p>

      <h3>Real Estate Professionals and Transaction Records</h3>
      <p>
        RealtyClose complies with applicable real estate privacy laws and regulations. We do not
        collect personal information from your clients without appropriate authorization and professional compliance.
      </p>
    </PageShell>
  );
}