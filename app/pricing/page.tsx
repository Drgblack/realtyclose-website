import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Pricing | RealtyClose",
  description: "Simple, transparent pricing for real estate professionals. Start free, scale with your business.",
};

export default function PricingPage() {
  return (
    <PageShell title="Pricing">
      {/* Pricing Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          Simple, transparent pricing for real estate professionals
        </p>
        <p className="text-slate-300">
          Start free and scale with your business. No hidden fees, no long-term contracts.
        </p>
      </div>

      {/* Pricing Tiers */}
      <div className="grid md:grid-cols-3 gap-8 my-12 not-prose">
        {/* Free Tier */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Free</h3>
            <div className="text-4xl font-bold text-blue-300 mb-2">$0</div>
            <p className="text-slate-400">Perfect for trying RealtyClose</p>
          </div>
          
          <ul className="text-slate-300 space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              5 AI email generations per month
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Basic email templates
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Gmail integration
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Community support
            </li>
          </ul>
          
          <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Get Started Free
          </button>
        </div>

        {/* Professional Tier - Most Popular */}
        <div className="bg-blue-600/10 border border-blue-500/50 rounded-xl p-8 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>
          
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
            <div className="text-4xl font-bold text-blue-300 mb-2">$29</div>
            <p className="text-slate-400">per month • billed monthly</p>
          </div>
          
          <ul className="text-slate-300 space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Unlimited AI email generations
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Premium email templates
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Quick Actions suite
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Custom tone & style settings
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Priority email support
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Analytics & insights
            </li>
          </ul>
          
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Start 14-Day Free Trial
          </button>
        </div>

        {/* Team Tier */}
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">Team</h3>
            <div className="text-4xl font-bold text-purple-300 mb-2">$49</div>
            <p className="text-slate-400">per user/month • billed monthly</p>
          </div>
          
          <ul className="text-slate-300 space-y-3 mb-8">
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Everything in Professional
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Shared template library
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Team collaboration tools
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Compliance & brand controls
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Team analytics dashboard
            </li>
            <li className="flex items-center">
              <span className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-400 text-xs">✓</span>
              </span>
              Dedicated account manager
            </li>
          </ul>
          
          <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
            Contact Sales
          </button>
        </div>
      </div>

      {/* Enterprise Option */}
      <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
          <p className="text-slate-300 mb-6">
            Custom solutions for large brokerages and organizations with 50+ agents
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="text-left">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Everything in Team, plus:</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Custom integrations (MLS, CRM)</li>
                <li>• Advanced compliance controls</li>
                <li>• White-label options</li>
                <li>• API access</li>
              </ul>
            </div>
            <div className="text-left">
              <h4 className="text-lg font-semibold text-purple-300 mb-3">Enterprise Support:</h4>
              <ul className="text-slate-300 space-y-2">
                <li>• Dedicated success manager</li>
                <li>• Priority phone support</li>
                <li>• Custom training sessions</li>
                <li>• SLA guarantees</li>
              </ul>
            </div>
          </div>
          <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-all">
            Schedule Enterprise Demo
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-center mb-8">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Can I cancel anytime?</h3>
            <p className="text-slate-300">
              Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.
            </p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Is there a free trial?</h3>
            <p className="text-slate-300">
              Yes! Professional and Team plans include a 14-day free trial. No credit card required to start.
            </p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">What happens to my data if I cancel?</h3>
            <p className="text-slate-300">
              You can export your data at any time. After cancellation, we keep your data for 30 days in case you want to reactivate, then it's permanently deleted.
            </p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Do you offer discounts for annual billing?</h3>
            <p className="text-slate-300">
              Yes! Save 20% when you pay annually. Contact our sales team for annual pricing details.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
        <p className="text-slate-300 mb-6">
          Join hundreds of real estate professionals who save 3+ hours daily with RealtyClose
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            Start Free Trial
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </PageShell>
  );
}