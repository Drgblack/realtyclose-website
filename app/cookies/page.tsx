import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Cookie Policy | RealtyClose",
  description: "How RealtyClose uses cookies and similar technologies.",
};

export default function CookiesPage() {
  return (
    <PageShell title="Cookie Policy">
      {/* Info Banner */}
      <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-4 mb-8">
        <p className="text-green-300 text-sm font-medium mb-2">
          <strong>Last updated:</strong> January 1, 2025 | <strong>Effective:</strong> January 1, 2025
        </p>
        <p className="text-slate-300">
          Learn about how we use cookies and similar technologies to improve your experience, ensure
          security, and provide our real estate closing services effectively.
        </p>
      </div>

      <h2>What Are Cookies</h2>
      <p>
        Cookies are small files that websites place on your device (computer, tablet, or mobile device)
        when you visit them. They help websites remember information about your visit and can help make your
        experience smoother and more personalized.
      </p>

      <h2>Similar Technologies</h2>
      <p>
        In addition to cookies, we may use other similar technologies including:
      </p>
      <ul>
        <li><strong>Local Storage:</strong> Stores data locally on your browser</li>
        <li><strong>Web Beacons:</strong> Small tracking pixels for analytics</li>
        <li><strong>Third Party Tools:</strong> Social plugins and analytics tools</li>
        <li><strong>First Party Data:</strong> Data we collect directly from your interactions</li>
      </ul>

      <h2>Types of Cookies We Use</h2>

      {/* Cookie Type Cards */}
      <div className="space-y-6 my-8 not-prose">
        <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-6">
          <h3 className="text-red-300 font-semibold mb-3 flex items-center">
            <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
            Essential Cookies
          </h3>
          <p className="text-slate-300 mb-4">Required for basic website functionality, security, and user authentication.</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="text-sm text-slate-400">• Login status, security tokens, language preferences</div>
            <div className="text-sm text-slate-400">• Shopping cart content and user preferences</div>
            <div className="text-sm text-slate-400">• Anti-fraud protection and security measures</div>
            <div className="text-sm text-slate-400">• Load balancing and server functionality</div>
          </div>
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6">
          <h3 className="text-blue-300 font-semibold mb-3 flex items-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
            Analytics and Performance Cookies
          </h3>
          <p className="text-slate-300 mb-4">Monitor website performance and identify areas for improvement.</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="text-sm text-slate-400">• Page views and popular content</div>
            <div className="text-sm text-slate-400">• User journey and navigation patterns</div>
            <div className="text-sm text-slate-400">• Performance metrics and error tracking</div>
            <div className="text-sm text-slate-400">• A/B testing and feature optimization</div>
          </div>
        </div>

        <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-6">
          <h3 className="text-purple-300 font-semibold mb-3 flex items-center">
            <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
            Functionality Cookies
          </h3>
          <p className="text-slate-300 mb-4">Enable enhanced features and personalized content.</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="text-sm text-slate-400">• Remember your preferences and settings</div>
            <div className="text-sm text-slate-400">• Provide personalized content and recommendations</div>
            <div className="text-sm text-slate-400">• Enable social sharing and commenting features</div>
            <div className="text-sm text-slate-400">• Support customer service chat functions</div>
          </div>
        </div>
      </div>

      <h2>Third-Party Cookies</h2>
      <p>
        Some cookies are placed by third-party services that appear on our pages. We may also provide
        advertising through third-party advertising networks.
      </p>

      <h3>Enhanced Features</h3>
      <ul>
        <li>Authentication and single sign-on services</li>
        <li>Social media integration and sharing</li>
        <li>Customer support chat functionality</li>
        <li>Video and multimedia content delivery</li>
        <li>Analytics and performance monitoring</li>
        <li>Advertising and marketing optimization</li>
      </ul>

      <h2>Cookie Consent Banner</h2>
      <p>
        When you visit our website, you'll see a cookie banner where you can:</p>
      <ul>
        <li>Accept all cookies</li>
        <li>Reject non-essential cookies</li>
        <li>Customize your preferences</li>
        <li>Learn more about each cookie type</li>
      </ul>

      <h2>Managing Your Cookie Preferences</h2>

      <h3>Browser Settings</h3>
      <p>
        Most web browsers allow you to control cookies through their settings. You can:
      </p>
      <ul>
        <li>View which cookies are stored and delete them individually</li>
        <li>Block third-party cookies</li>
        <li>Block all cookies from specific sites</li>
        <li>Block all cookies from being set</li>
        <li>Delete all cookies when you close your browser</li>
      </ul>

      <p>
        <strong>Note:</strong> If you disable essential cookies, some features may not work as expected, and you may need to re-enter your
        information each time you visit.
      </p>

      <h3>Third-Party Opt-Out</h3>
      <p>
        You can opt out of certain third-party advertising cookies by visiting:
      </p>
      <ul>
        <li>Digital Advertising Alliance: <a href="http://optout.aboutads.info/" target="_blank" rel="noopener noreferrer">http://optout.aboutads.info/</a></li>
        <li>Network Advertising Initiative: <a href="http://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org/</a></li>
        <li>Google Ads Settings: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer">https://adssettings.google.com/</a></li>
      </ul>

      <h2>Cookie Retention</h2>
      <p>
        Cookies have different lifespans:
      </p>
      <ul>
        <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
        <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 1-24 months)</li>
        <li><strong>Essential Cookies:</strong> May persist longer for security purposes</li>
        <li><strong>Analytics Cookies:</strong> Usually expire after 2 years</li>
      </ul>

      <h2>Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or
        legal requirements. We'll post the updated version on this page with a new effective date.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions about our use of cookies or this Cookie Policy, please contact us:
      </p>
      <ul>
        <li>Email: <a href="mailto:help@zazatechnologies.com">help@zazatechnologies.com</a></li>
        <li>Address: Zaza Technologies, Gumbertstraße 150, 40229 Düsseldorf, Deutschland</li>
      </ul>

      <p>
        For more information about our privacy practices, please see our <a href="/privacy">Privacy Policy</a>.
      </p>
    </PageShell>
  );
}