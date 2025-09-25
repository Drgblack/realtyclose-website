import Link from "next/link";

type Variant = "light" | "dark";
export default function SiteFooter({ variant = "dark" }: { variant?: Variant }) {
  const isLight = variant === "light";
  const bg = isLight ? "bg-white" : "bg-slate-950";
  const text = isLight ? "text-slate-900" : "text-slate-100";
  const muted = isLight ? "text-slate-600" : "text-slate-400";
  const border = isLight ? "border-slate-200" : "border-white/10";
  const card = `rounded-2xl border ${border} ${isLight ? "bg-white" : "bg-white/[0.03]"}`;

  const item = `text-sm ${muted} hover:text-current`;

  return (
    <footer className={`${bg} ${text} border-t ${border}`}>
      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* 4 columns */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand + Social */}
          <div className="space-y-3">
            <div className="text-base font-semibold">RealtyClose</div>
            <p className={`text-sm ${muted}`}>
              The Gmail first AI assistant for real estate communication.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://linkedin.com/company/zaza-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" 
                 className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white transition-all hover:bg-blue-700 hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/zazateachapp" target="_blank" rel="noopener noreferrer" aria-label="X" 
                 className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white transition-all hover:bg-black hover:scale-110">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
              <a href="https://tiktok.com/@zazatechnologies" target="_blank" rel="noopener noreferrer" aria-label="TikTok" 
                 className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 text-white transition-all hover:bg-gray-800 hover:scale-110">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Core Suite Products (ecosystem) */}
          <div className="space-y-3">
            <div className="text-sm font-semibold">Suite</div>
            <a href="https://www.zazateach.com" target="_blank" rel="noopener noreferrer" className={item}>Zaza Teach</a>
            <a href="https://www.zazapromptly.com" target="_blank" rel="noopener noreferrer" className={item}>Zaza Promptly</a>
            <a href="https://www.zazatechnologies.com" target="_blank" rel="noopener noreferrer" className={item}>Zaza Technologies</a>
            <a href="https://realtyclose.com" target="_blank" rel="noopener noreferrer" className={item}>RealtyClose</a>
          </div>

          {/* Pro Tools (on-site features) */}
          <div className="space-y-3">
            <div className="text-sm font-semibold">Pro Tools</div>
            <Link href="/features#ai-email-assistant" className={item}>AI Email Assistant</Link>
            <Link href="/features#smart-templates" className={item}>Smart Templates</Link>
            <Link href="/features#deal-tracking" className={item}>Deal Tracking</Link>
            <Link href="/features#compliance" className={item}>Compliance Guardrails</Link>
            <Link href="/features#integrations" className={item}>Integrations</Link>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <div className="text-sm font-semibold">Company</div>
            <Link href="/about" className={item}>About Us</Link>
            <Link href="/pricing" className={item}>Pricing</Link>
            <Link href="/blog" className={item}>Blog</Link>
            <Link href="/features" className={item}>Features</Link>
            <Link href="/faq" className={item}>FAQ</Link>
            <Link href="/contact" className={item}>Contact</Link>
          </div>
        </div>

        {/* bottom bar */}
        <div className={`mt-12 flex flex-col items-start justify-between gap-4 border-t ${border} pt-6 text-sm ${muted} sm:flex-row`}>
          <p>© {new Date().getFullYear()} RealtyClose (part of Zaza Technologies). All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className={item}>Privacy</Link>
            <Link href="/terms" className={item}>Terms</Link>
            <Link href="/cookies" className={item}>Cookies</Link>
            <a href="mailto:help@zazatechnologies.com" className={item}>help@zazatechnologies.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}