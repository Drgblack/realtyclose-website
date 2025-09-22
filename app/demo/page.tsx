import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Demo | RealtyClose",
  description: "See RealtyClose in action. Watch how real estate professionals use AI to write better emails and close more deals.",
};

export default function DemoPage() {
  return (
    <PageShell title="See RealtyClose in Action">
      {/* Demo Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>Watch how RealtyClose transforms your email workflow</strong>
        </p>
        <p className="text-slate-300">
          See real examples of agents using AI to write professional emails, manage deals, and close more transactions
        </p>
      </div>

      {/* Video Demo Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">📺 5-Minute Product Demo</h2>
          <p className="text-slate-300 mb-6">
            Watch a real estate agent use RealtyClose to handle client communications, generate responses, and manage deals
          </p>
          
          {/* Video Placeholder */}
          <div className="bg-slate-800/50 border border-slate-600/50 rounded-xl p-12 mb-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-4xl">▶️</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Interactive Product Demo</h3>
              <p className="text-slate-400 mb-4">See RealtyClose in action with real Gmail examples</p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
                ▶️ Watch Demo (5 min)
              </button>
            </div>
          </div>
          
          <p className="text-slate-400 text-sm">
            💡 Demo shows actual Gmail interface with RealtyClose features
          </p>
        </div>
      </div>

      {/* Live Demo Scenarios */}
      <div className="my-16">
        <h2 className="text-center mb-8">Demo Scenarios</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Scenario 1 */}
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">🏠</span>
              </div>
              <h3 className="text-xl font-bold text-white">New Listing Follow-up</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Watch how an agent receives a listing inquiry and uses RealtyClose to generate a professional, 
              personalized response in under 10 seconds.
            </p>
            <ul className="text-slate-400 text-sm space-y-2 mb-4">
              <li>• AI analyzes the client's original message</li>
              <li>• Suggests property details and next steps</li>
              <li>• Generates warm, professional tone</li>
              <li>• Adds automatic follow-up reminder</li>
            </ul>
            <button className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors">
              Watch This Scenario →
            </button>
          </div>

          {/* Scenario 2 */}
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">📅</span>
              </div>
              <h3 className="text-xl font-bold text-white">Closing Coordination</h3>
            </div>
            <p className="text-slate-300 mb-4">
              See how RealtyClose helps coordinate a complex closing with multiple parties, 
              automated document tracking, and smart deadline reminders.
            </p>
            <ul className="text-slate-400 text-sm space-y-2 mb-4">
              <li>• Multi-party email threading</li>
              <li>• Document checklist automation</li>
              <li>• Deadline tracking and nudges</li>
              <li>• Status update generation</li>
            </ul>
            <button className="text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors">
              Watch This Scenario →
            </button>
          </div>

          {/* Scenario 3 */}
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-white">Price Negotiation</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Watch an agent handle a delicate price negotiation using AI-generated responses 
              that maintain professionalism while advocating for their client.
            </p>
            <ul className="text-slate-400 text-sm space-y-2 mb-4">
              <li>• Diplomatic language suggestions</li>
              <li>• Market data integration</li>
              <li>• Counter-offer templates</li>
              <li>• Relationship preservation focus</li>
            </ul>
            <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
              Watch This Scenario →
            </button>
          </div>

          {/* Scenario 4 */}
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center mr-4">
                <span className="text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-white">Quick Actions Demo</h3>
            </div>
            <p className="text-slate-300 mb-4">
              See the full suite of Quick Actions in Gmail: logging calls, scheduling appointments, 
              adding contacts, and generating reports without leaving your inbox.
            </p>
            <ul className="text-slate-400 text-sm space-y-2 mb-4">
              <li>• One-click call logging</li>
              <li>• Calendar integration</li>
              <li>• Contact management</li>
              <li>• Report generation</li>
            </ul>
            <button className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors">
              Watch This Scenario →
            </button>
          </div>
        </div>
      </div>

      {/* Before & After Comparison */}
      <div className="my-16">
        <h2 className="text-center mb-8">Before vs After RealtyClose</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-red-300 mb-6">❌ Before RealtyClose</h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Email Writing</h4>
                <p className="text-slate-400 text-sm">15-20 minutes per professional email, frequent writer's block, inconsistent tone</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Deal Tracking</h4>
                <p className="text-slate-400 text-sm">Scattered across spreadsheets, missed follow-ups, lost context between emails</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Client Communication</h4>
                <p className="text-slate-400 text-sm">Delayed responses, generic templates, manual scheduling and follow-ups</p>
              </div>
            </div>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-6">✅ After RealtyClose</h3>
            <div className="space-y-4">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Email Writing</h4>
                <p className="text-slate-400 text-sm">10-30 seconds per email, AI-generated drafts, consistent professional tone</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Deal Tracking</h4>
                <p className="text-slate-400 text-sm">Unified dashboard in Gmail, automated follow-ups, complete email context</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <h4 className="text-white font-medium mb-2">Client Communication</h4>
                <p className="text-slate-400 text-sm">Instant responses, personalized messages, automated scheduling and reminders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Demo CTA */}
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Try RealtyClose Yourself</h2>
          <p className="text-slate-300 mb-6">
            The best way to understand RealtyClose is to try it in your own Gmail with your real emails
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🆓</span>
              </div>
              <h4 className="font-semibold text-green-300 mb-2">Free to Try</h4>
              <p className="text-slate-400 text-sm">No credit card required</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">Instant Setup</h4>
              <p className="text-slate-400 text-sm">Working in under 2 minutes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔒</span>
              </div>
              <h4 className="font-semibold text-purple-300 mb-2">Secure</h4>
              <p className="text-slate-400 text-sm">Bank-level privacy protection</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="my-16">
        <h2 className="text-center mb-8">What Agents Say</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <p className="text-slate-300 mb-4 italic">
              "I was skeptical about AI for emails, but after seeing the demo and trying it myself, 
              I'm saving 3+ hours daily and my clients love the quick, professional responses."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-300 font-bold">SM</span>
              </div>
              <div>
                <p className="text-white font-medium">Sarah Martinez</p>
                <p className="text-slate-400 text-sm">Residential Agent, Austin TX</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <p className="text-slate-300 mb-4 italic">
              "The demo convinced me instantly. Now our whole team uses RealtyClose and 
              our response times have improved by 80%. Clients notice the difference."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-300 font-bold">MJ</span>
              </div>
              <div>
                <p className="text-white font-medium">Mike Johnson</p>
                <p className="text-slate-400 text-sm">Team Lead, Phoenix Realty</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to see it in your Gmail?</h2>
        <p className="text-slate-300 mb-6">
          Install the free extension and start writing better emails in the next 2 minutes
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            🛒 Install Free Extension
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            📅 Schedule Personal Demo
          </button>
        </div>
      </div>
    </PageShell>
  );
}