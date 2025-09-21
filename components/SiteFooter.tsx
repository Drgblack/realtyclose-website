import * as React from "react";

// Temporary mock footer until @drgblack/shared-ui is available
// TODO: Replace with actual shared-ui import once NPM_TOKEN is configured
export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                RC
              </div>
              <span className="text-xl font-bold">RealtyClose</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 max-w-prose">
              RealtyClose - Enterprise Real Estate Platform. Part of the Zaza Technologies family building trusted, AI-powered tools for professionals.
            </p>
            <p className="text-xs text-gray-500">
              🔧 Using temporary footer - will be replaced with @drgblack/shared-ui once NPM_TOKEN is configured
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="/help-center" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-400 text-sm">
            © 2025 RealtyClose. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
