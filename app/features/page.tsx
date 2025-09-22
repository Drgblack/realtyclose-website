import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Features | RealtyClose",
  description: "14+ Powerful features for modern real estate agents. AI email assistant, deal management, smart templates, and more - all integrated into Gmail.",
};

export default function FeaturesPage() {
  return (
    <PageShell title="Features">
      {/* Features Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>14+ Powerful Features for Modern Agents</strong>
        </p>
        <p className="text-slate-300">
          Complete real estate workflow automation with AI email drafting, unified dashboard, deal pipeline management, AI insights, multilingual support, and advanced integrations
        </p>
      </div>

      {/* Core Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 not-prose">
        
        {/* AI Email Assistant */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🤖</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Email Assistant</h3>
          <p className="text-slate-300 text-sm mb-4">
            Generate personalized, professional emails in seconds with context-aware AI that understands real estate.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Context-aware email generation</li>
            <li>• Professional tone customization</li>
            <li>• Real estate industry knowledge</li>
            <li>• One-click email composition</li>
          </ul>
        </div>

        {/* Unified Dashboard */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Unified Dashboard</h3>
          <p className="text-slate-300 text-sm mb-4">
            See all your critical business metrics, deals, and tasks in one beautiful dashboard right inside Gmail.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Real-time deal pipeline</li>
            <li>• Performance analytics</li>
            <li>• Task management</li>
            <li>• Gmail integration</li>
          </ul>
        </div>

        {/* Deal Management */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🏠</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Deal Management</h3>
          <p className="text-slate-300 text-sm mb-4">
            Track every deal from initial lead to successful closing with automated workflows and intelligent reminders.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• End-to-end deal tracking</li>
            <li>• Automated workflows</li>
            <li>• Milestone notifications</li>
            <li>• Closing timeline management</li>
          </ul>
        </div>

        {/* Smart Templates */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">📄</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Smart Templates</h3>
          <p className="text-slate-300 text-sm mb-4">
            Access pre-built, compliance-ready templates that automatically customize with client and property details.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Compliance-ready templates</li>
            <li>• Auto-population of details</li>
            <li>• Customizable branding</li>
            <li>• Template library</li>
          </ul>
        </div>

        {/* AI Insights */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Insights</h3>
          <p className="text-slate-300 text-sm mb-4">
            Get personalized coaching and actionable insights to continuously improve your performance.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Performance analytics</li>
            <li>• Personalized coaching</li>
            <li>• Market insights</li>
            <li>• Improvement recommendations</li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🚀</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Quick Actions</h3>
          <p className="text-slate-300 text-sm mb-4">
            Streamline your workflow with one-click actions for common tasks like email composition, call logging, and scheduling.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• One-click email composition</li>
            <li>• Call logging</li>
            <li>• Meeting scheduling</li>
            <li>• Contact management</li>
          </ul>
        </div>

        {/* Deal Linking */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🔗</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Deal Linking</h3>
          <p className="text-slate-300 text-sm mb-4">
            Automatically connect email threads to specific deals for complete context and comprehensive tracking.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Automatic email-deal linking</li>
            <li>• Complete conversation history</li>
            <li>• Context preservation</li>
            <li>• Thread organization</li>
          </ul>
        </div>

        {/* Multilingual Support */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🌍</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Multilingual Support</h3>
          <p className="text-slate-300 text-sm mb-4">
            Communicate with clients in their preferred language with built-in translation and native-level quality drafting.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Real-time translation</li>
            <li>• Native-quality drafting</li>
            <li>• Multiple language support</li>
            <li>• Cultural context awareness</li>
          </ul>
        </div>

        {/* Document Checklist */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Document Checklist</h3>
          <p className="text-slate-300 text-sm mb-4">
            Automatically detect and track required documents throughout the closing process with intelligent monitoring.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Automatic document detection</li>
            <li>• Progress tracking</li>
            <li>• Missing document alerts</li>
            <li>• Compliance monitoring</li>
          </ul>
        </div>

        {/* Smart Nudges */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">🔔</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Smart Nudges</h3>
          <p className="text-slate-300 text-sm mb-4">
            Never miss a follow-up with intelligent reminders based on deal stage and client behavior patterns.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Intelligent follow-up reminders</li>
            <li>• Behavior-based timing</li>
            <li>• Deal stage awareness</li>
            <li>• Automated scheduling</li>
          </ul>
        </div>

        {/* Consent Guardrails */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-lime-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">✅</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Consent Guardrails</h3>
          <p className="text-slate-300 text-sm mb-4">
            Stay compliant with built-in consent tracking and privacy protection features for modern regulations.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Consent tracking</li>
            <li>• Privacy protection</li>
            <li>• Compliance automation</li>
            <li>• Audit trails</li>
          </ul>
        </div>

        {/* Advanced Sharing */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
          <div className="w-12 h-12 bg-violet-500/20 rounded-xl flex items-center justify-center mb-4">
            <span className="text-2xl">📤</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Advanced Sharing</h3>
          <p className="text-slate-300 text-sm mb-4">
            Share listings and updates across multiple channels with one click and smart positioning technology.
          </p>
          <ul className="text-slate-400 text-sm space-y-2">
            <li>• Multi-channel sharing</li>
            <li>• Smart positioning</li>
            <li>• Automated updates</li>
            <li>• Social media integration</li>
          </ul>
        </div>

      </div>

      {/* Feature Categories */}
      <div className="my-16">
        <h2 className="text-center mb-12">Feature Categories</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-blue-300 mb-6">Communication & AI</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• AI Email Assistant with context awareness</li>
              <li>• Smart Templates with auto-population</li>
              <li>• Multilingual Support & Translation</li>
              <li>• Quick Actions for common tasks</li>
              <li>• Advanced Sharing across channels</li>
            </ul>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-green-300 mb-6">Deal & Pipeline Management</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• Unified Dashboard with real-time metrics</li>
              <li>• End-to-end Deal Management</li>
              <li>• Deal Linking for email context</li>
              <li>• Document Checklist automation</li>
              <li>• Smart Nudges for follow-ups</li>
            </ul>
          </div>
          
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-purple-300 mb-6">Analytics & Insights</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• AI-powered performance insights</li>
              <li>• Market trend analysis</li>
              <li>• Client behavior tracking</li>
              <li>• Conversion optimization</li>
              <li>• Performance benchmarking</li>
            </ul>
          </div>
          
          <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-8">
            <h3 className="text-xl font-bold text-orange-300 mb-6">Compliance & Security</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• Consent Guardrails for privacy</li>
              <li>• Automated compliance checking</li>
              <li>• Audit trail maintenance</li>
              <li>• Data protection features</li>
              <li>• Regulatory requirement tracking</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Integration Highlights */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 my-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Seamless Gmail Integration</h2>
          <p className="text-slate-300 mb-6">
            All features work directly inside Gmail. No context switching, no new logins, no complicated workflows.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-blue-300">Lightning Fast</h4>
              <p className="text-slate-400 text-sm">Features load instantly within Gmail</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-green-300">Secure</h4>
              <p className="text-slate-400 text-sm">Bank-level security and privacy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold text-purple-300">Intuitive</h4>
              <p className="text-slate-400 text-sm">No learning curve required</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to experience all features?</h2>
        <p className="text-slate-300 mb-6">
          Install the Chrome extension and start using all 14+ features in your Gmail today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            Install Free Extension
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            Watch Features Demo
          </button>
        </div>
      </div>
    </PageShell>
  );
}