import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Install Extension | RealtyClose",
  description: "Install the RealtyClose Chrome extension in 3 simple steps. Start writing professional emails in seconds inside Gmail.",
};

export default function InstallPage() {
  return (
    <PageShell title="Install RealtyClose">
      {/* Installation Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>Get RealtyClose working in your Gmail in under 2 minutes</strong>
        </p>
        <p className="text-slate-300">
          Follow these 3 simple steps to start writing professional real estate emails in seconds
        </p>
      </div>

      {/* Installation Steps */}
      <div className="space-y-12 my-16">
        
        {/* Step 1 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                1
              </div>
              <h3 className="text-2xl font-bold text-white">Install from Chrome Web Store</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Click the button below to go to the Chrome Web Store and install the RealtyClose extension. 
              The installation takes just one click and is completely free.
            </p>
            <div className="space-y-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors inline-flex items-center">
                <span className="mr-2">🛒</span>
                Install from Chrome Web Store
              </button>
              <p className="text-slate-400 text-sm">
                ✓ Free to install • ✓ No credit card required • ✓ 30-second setup
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛒</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Chrome Web Store</h4>
                <p className="text-slate-400 text-sm">
                  Official extension verified by Google
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                2
              </div>
              <h3 className="text-2xl font-bold text-white">Connect Your Gmail</h3>
            </div>
            <p className="text-slate-300 mb-6">
              Open Gmail and you'll see the RealtyClose panel. Click "Connect Account" to securely link your Gmail. 
              We only request the minimum permissions needed for email composition and sending.
            </p>
            <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-4">
              <h4 className="text-blue-300 font-semibold mb-2">🔒 Privacy First</h4>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• We never read your existing emails</li>
                <li>• No data stored on our servers</li>
                <li>• Revoke access anytime</li>
                <li>• Bank-level security</li>
              </ul>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📧</span>
                </div>
                <h4 className="text-lg font-semibold text-green-300 mb-2">Gmail Integration</h4>
                <p className="text-slate-400 text-sm">
                  Seamless integration with your existing workflow
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                3
              </div>
              <h3 className="text-2xl font-bold text-white">Start Writing Better Emails</h3>
            </div>
            <p className="text-slate-300 mb-6">
              That's it! Open any email thread and you'll see RealtyClose suggestions. Generate professional 
              responses, use quick actions, and access smart templates - all without leaving Gmail.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">🤖 AI Email</h4>
                <p className="text-slate-400 text-sm">Generate responses in seconds</p>
              </div>
              <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
                <h4 className="text-purple-300 font-semibold mb-2">⚡ Quick Actions</h4>
                <p className="text-slate-400 text-sm">Log calls, schedule meetings</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🚀</span>
                </div>
                <h4 className="text-lg font-semibold text-purple-300 mb-2">Ready to Use</h4>
                <p className="text-slate-400 text-sm">
                  Start improving your email workflow immediately
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Browser Requirements */}
      <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 my-12">
        <h3 className="text-yellow-300 font-semibold mb-4">💻 Browser Requirements</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-white font-medium mb-2">Supported Browsers:</h4>
            <ul className="text-slate-300 space-y-1">
              <li>✅ Google Chrome (Recommended)</li>
              <li>✅ Microsoft Edge</li>
              <li>✅ Brave Browser</li>
              <li>✅ Any Chromium-based browser</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-2">System Requirements:</h4>
            <ul className="text-slate-300 space-y-1">
              <li>• Chrome version 88 or higher</li>
              <li>• Active Gmail account</li>
              <li>• Internet connection</li>
              <li>• 5MB free storage space</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="my-16">
        <h2 className="text-center mb-8">Need Help?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Extension not showing up?</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>1. Refresh your Gmail tab</li>
              <li>2. Check Chrome extensions page (chrome://extensions/)</li>
              <li>3. Make sure RealtyClose is enabled</li>
              <li>4. Try opening Gmail in an incognito window</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Permission issues?</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>1. Click the RealtyClose icon in Gmail</li>
              <li>2. Follow the authentication prompts</li>
              <li>3. Allow all requested permissions</li>
              <li>4. Contact support if issues persist</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Performance issues?</h3>
            <ul className="text-slate-300 text-sm space-y-2">
              <li>1. Disable other Gmail extensions temporarily</li>
              <li>2. Clear browser cache and cookies</li>
              <li>3. Restart your browser</li>
              <li>4. Check for Chrome updates</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">Still need help?</h3>
            <p className="text-slate-300 text-sm mb-3">
              Our support team is here to help you get set up successfully.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </div>

      {/* What's Next */}
      <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-xl p-8 my-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">🎉 What's Next?</h2>
          <p className="text-slate-300 mb-6">
            Once installed, here's how to get the most out of RealtyClose:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-green-300 mb-2">Watch the Tutorial</h4>
              <p className="text-slate-400 text-sm">5-minute video guide to all features</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📧</span>
              </div>
              <h4 className="font-semibold text-blue-300 mb-2">Try Your First Email</h4>
              <p className="text-slate-400 text-sm">Generate a professional response</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold text-purple-300 mb-2">Explore Quick Actions</h4>
              <p className="text-slate-400 text-sm">Streamline your daily workflow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to transform your email workflow?</h2>
        <p className="text-slate-300 mb-6">
          Join hundreds of real estate professionals saving 3+ hours daily
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            🛒 Install RealtyClose Extension
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            📺 Watch Demo First
          </button>
        </div>
      </div>
    </PageShell>
  );
}