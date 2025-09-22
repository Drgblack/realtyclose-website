import * as React from "react";

// Temporary Footer component that matches shared-ui structure
// Will be replaced with actual @drgblack/shared-ui import once NPM_TOKEN is configured
function Footer({ config, locale }: { config: any; locale: string }) {
  const getSocialIcon = (type: string) => {
    switch (type) {
      case "tiktok":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        );
      case "x":
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-10 py-12">
        {/* Product Description */}
        <div className="mb-12 text-center border-b border-gray-800 pb-8">
          <h3 className="text-xl font-semibold text-white mb-3">RealtyClose</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4">
            RealtyClose is the AI-powered Gmail extension that helps real estate agents close deals faster with perfect client communication.
          </p>
          <p className="text-sm text-gray-500">
            Trusted by agents at leading brokerages.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Company */}
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/features" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2 - Legal */}
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-gray-400 hover:text-white transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="/impressum" className="text-gray-400 hover:text-white transition-colors">
                  Impressum
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Connect */}
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-400 text-sm mb-2">Email:</p>
                <a 
                  href="mailto:help@zazatechnologies.com" 
                  className="text-white hover:text-gray-300 transition-colors font-medium"
                >
                  help@zazatechnologies.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm mb-3">Follow Us:</p>
                <div className="flex space-x-4">
                  <a
                    href="https://www.tiktok.com/@zazatechnologies"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on TikTok"
                  >
                    {getSocialIcon("tiktok")}
                  </a>
                  <a
                    href="https://www.linkedin.com/company/zaza-technologies"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                  >
                    {getSocialIcon("linkedin")}
                  </a>
                  <a
                    href="https://twitter.com/zazatech"
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter/X"
                  >
                    {getSocialIcon("x")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © 2025 RealtyClose (part of Zaza Technologies). All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function SiteFooter() {
  return <Footer config={{}} locale="en" />;
}
