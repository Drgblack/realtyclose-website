import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Brand + Social */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <span className="text-2xl font-bold">RealtyClose</span>
            </Link>
            <p className="text-sm text-gray-400 mb-6">
              AI-powered tools that help real estate professionals close more deals and streamline their workflows.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/zaza-technologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in a new tab)"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://x.com/zazateachapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (opens in a new tab)"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@zazatechnologies"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok (opens in a new tab)"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0011.14-4.02v-6.95a8.16 8.16 0 004.65 1.46v-3.28a4.84 4.84 0 01-1.2-.62z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Core Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Core Suite</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/products/agent" className="text-gray-400 hover:text-white transition-colors">
                  RealtyClose Agent
                </Link>
              </li>
              <li>
                <Link href="/products/inbox" className="text-gray-400 hover:text-white transition-colors">
                  RealtyClose Inbox
                </Link>
              </li>
              <li>
                <Link href="/install" className="text-gray-400 hover:text-white transition-colors">
                  RealtyClose Extension
                </Link>
              </li>
              <li>
                <span className="text-gray-400 opacity-70 cursor-not-allowed">Deal Pipeline</span>
                <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
              </li>
              <li className="pt-2">
                <Link href="/products/core" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  View All Core Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pro Tools */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Pro Tools</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-gray-400 opacity-70 cursor-not-allowed">Lead Manager</span>
                <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
              </li>
              <li>
                <span className="text-gray-400 opacity-70 cursor-not-allowed">Market Analytics</span>
                <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
              </li>
              <li>
                <Link href="/features#crm" className="text-gray-400 hover:text-white transition-colors">
                  CRM Integration
                </Link>
              </li>
              <li>
                <span className="text-gray-400 opacity-70 cursor-not-allowed">Mobile App</span>
                <span className="ml-2 text-xs text-gray-500">(Coming Soon)</span>
              </li>
              <li className="pt-2">
                <Link href="/products/pro" className="text-gray-400 hover:text-white transition-colors flex items-center gap-1">
                  View All Pro Tools
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li className="pt-2">
                <a 
                  href="mailto:help@zazatechnologies.com"
                  className="text-gray-400 hover:text-white transition-colors text-xs"
                >
                  help@zazatechnologies.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright and Family Sites */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-sm text-gray-400">
              <p>© 2025 RealtyClose. All rights reserved.</p>
              <div className="hidden sm:block text-gray-600">|</div>
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1">
                <span>Family sites:</span>
                <a
                  href="https://realtyclose.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="RealtyClose (opens in a new tab)"
                  className="hover:text-white hover:underline transition-colors"
                >
                  RealtyClose
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://zazateach.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zaza Teach (opens in a new tab)"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Zaza Teach
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://zazapromptly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zaza Promptly (opens in a new tab)"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Zaza Promptly
                </a>
                <span className="text-gray-600">•</span>
                <a
                  href="https://zazatechnologies.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Zaza Technologies (opens in a new tab)"
                  className="hover:text-white hover:underline transition-colors"
                >
                  Zaza Technologies
                </a>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link href="/impressum" className="hover:text-white transition-colors">
                Impressum
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
