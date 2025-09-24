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
            <div className="flex gap-3 pt-1">
              <a href="https://linkedin.com/company/zaza-technologies" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={item}>LinkedIn</a>
              <a href="https://x.com/zazateachapp" target="_blank" rel="noopener noreferrer" aria-label="X" className={item}>X</a>
              <a href="https://tiktok.com/@zazatechnologies" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className={item}>TikTok</a>
            </div>
          </div>

          {/* Core Suite Products (ecosystem) */}
          <div className="space-y-3">
            <div className="text-sm font-semibold">Suite</div>
            <a href="https://zazateach.com" target="_blank" rel="noopener noreferrer" className={item}>Zaza Teach</a>
            <a href="https://zazapromptly.com" target="_blank" rel="noopener noreferrer" className={item}>Zaza Promptly</a>
            <a href="https://zazatechnologies.com" target="_blank" rel="noopener noreferrer" className={item}>Zaza Technologies</a>
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