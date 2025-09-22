import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "About Us | RealtyClose",
  description: "RealtyClose is part of Zaza Technologies. We build trusted, AI-powered workflow tools for professionals.",
};

export default function AboutPage() {
  return (
    <PageShell title="About RealtyClose">
      <div className="mb-8">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>The enterprise real estate platform—starting with your Gmail.</strong>
        </p>
        <p>
          RealtyClose helps agents, teams, and brokerages close more deals with less stress by turning messy email threads and scattered tools into clear, consistent, and professional client communication.
        </p>
      </div>

      <h2>Our Mission</h2>
      <p>
        Make real estate closings seamless for everyone involved—buyers, sellers, agents, coordinators, and lenders—by automating the parts of work that are repetitive, error-prone, and time-consuming, while keeping humans in full control of tone, accuracy, and compliance.
      </p>

      <h2>What We Do</h2>
      <div className="space-y-6">
        <div>
          <h3>Gmail Extension (available now)</h3>
          <p>
            Write polished, on-brand emails in seconds, pull context from threads, surface smart templates, and take quick actions (log call, add contact, schedule, generate report, etc.)—all without leaving Gmail.
          </p>
        </div>
        <div>
          <h3>Connected Platform (rolling out)</h3>
          <p>
            A unified workspace for timelines, nudges, document checklists, and deal health. The goal: keep every deal on track, every stakeholder aligned, and every deadline met.
          </p>
        </div>
        <div>
          <h3>AI that's practical, not magical</h3>
          <p>
            Our models are tuned for real estate workflows—email drafting, status updates, reminders, and summaries. They're guard-railed, editable, and explain what data they used so you can trust the result.
          </p>
        </div>
      </div>

      <h2>The Problem We're Solving</h2>
      <p>
        Real estate professionals spend <strong>3+ hours/day</strong> in email. That time goes to chasing details, re-writing similar messages, and keeping everyone updated. Missed follow-ups and inconsistent language lead to delays, confusion, and sometimes lost deals.
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
        <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-6">
          <h4 className="text-red-300 font-semibold mb-4">Before RealtyClose</h4>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• 3+ hours/day writing emails</li>
            <li>• Inconsistent follow-ups and tone</li>
            <li>• Fragmented tools and manual data re-entry</li>
          </ul>
        </div>
        <div className="bg-green-600/10 border border-green-500/20 rounded-lg p-6">
          <h4 className="text-green-300 font-semibold mb-4">With RealtyClose</h4>
          <ul className="text-slate-300 text-sm space-y-2">
            <li>• 10-second smart replies</li>
            <li>• On-brand, compliant templates</li>
            <li>• One place to take action and keep deals moving</li>
          </ul>
        </div>
      </div>

      <h2>Who We Help</h2>
      <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h4 className="text-blue-300 font-semibold mb-3">Solo Agents</h4>
          <p className="text-slate-300 text-sm">Win back time, respond faster, and maintain a consistently professional voice.</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h4 className="text-blue-300 font-semibold mb-3">Teams & Brokerages</h4>
          <p className="text-slate-300 text-sm">Standardize templates and compliance, measure communication quality, and keep every transaction aligned.</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h4 className="text-blue-300 font-semibold mb-3">Transaction Coordinators</h4>
          <p className="text-slate-300 text-sm">Cut the back-and-forth, automate reminders, and keep timelines crystal-clear.</p>
        </div>
        <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
          <h4 className="text-blue-300 font-semibold mb-3">Lenders & Partners</h4>
          <p className="text-slate-300 text-sm">Keep communication organized and predictable so everyone gets to the closing table on schedule.</p>
        </div>
      </div>

      <h2>Outcomes You Can Expect</h2>
      <ul>
        <li><strong>Faster replies:</strong> agents generate professional drafts in seconds.</li>
        <li><strong>Fewer mistakes:</strong> standardized, role-based templates reduce risk.</li>
        <li><strong>Happier clients:</strong> consistent tone and proactive updates build trust.</li>
        <li><strong>More closings:</strong> less time in email, more time with clients.</li>
      </ul>

      <div className="bg-blue-600/10 border border-blue-500/20 rounded-lg p-6 my-8">
        <p className="text-blue-300 text-sm">
          As of 2025 (pilot cohort): <strong>500+</strong> agents have used RealtyClose, reporting <strong>95%</strong> satisfaction and an average rating of <strong>4.9/5</strong>.
        </p>
      </div>

      <h2>How It Works (Today)</h2>
      <div className="space-y-4">
        <div>
          <h3>1. Install the Chrome Extension</h3>
          <p>Connect Gmail. Your privacy settings are transparent and adjustable.</p>
        </div>
        <div>
          <h3>2. Open a Thread</h3>
          <p>RealtyClose analyzes context you see and offers draft replies, suggested actions, and relevant templates.</p>
        </div>
        <div>
          <h3>3. Edit & Send</h3>
          <p>You're always in control. One click to copy/send, add to timeline, or trigger a follow-up reminder.</p>
        </div>
        <div>
          <h3>4. Keep Deals Moving</h3>
          <p>Quick Actions: Add Property, New Contact, Schedule, Generate Report, Templates, Commission Calculator—right inside Gmail.</p>
        </div>
      </div>

      <h2>Product Pillars</h2>
      <ul>
        <li><strong>Clarity over clutter:</strong> show only what's needed in the moment.</li>
        <li><strong>Speed with control:</strong> AI drafts that are instantly editable.</li>
        <li><strong>Consistency at scale:</strong> shared templates and tone guidelines for teams.</li>
        <li><strong>Security by design:</strong> principle of least privilege; no surprise scopes.</li>
        <li><strong>Open by default:</strong> APIs and export paths so your data isn't trapped.</li>
      </ul>

      <h2>Our Story</h2>
      <p>
        RealtyClose is part of the <strong>Zaza Technologies</strong> family—builders of AI-powered tools that reduce busywork so professionals can do their best work.
      </p>
      <p>
        We started with a simple observation: <strong>email is the operating system of real estate</strong>, but it isn't built for it. Agents spent hours rewriting nearly identical messages, manually stitching together information from MLS, lenders, inspectors, and clients. We built RealtyClose to <strong>bring structure to communication</strong>, not the other way around.
      </p>
      <ul>
        <li><strong>2024:</strong> Early prototypes for AI-assisted email writing.</li>
        <li><strong>2025:</strong> Chrome extension MVP; Quick Actions integrated; website launch.</li>
        <li><strong>Next:</strong> Full platform with timelines, nudges, document checkpoints, and analytics.</li>
      </ul>
      <div className="bg-purple-600/10 border border-purple-500/20 rounded-lg p-6 my-8">
        <p className="text-purple-300">
          <strong>Zaza Technologies</strong> invests in pragmatic AI: human-in-the-loop, measurable outcomes, and a clear respect for privacy. RealtyClose and <strong>Zaza Promptly</strong> (our other product line) share this same DNA.
        </p>
      </div>

      <h2>Data Privacy & Security</h2>
      <ul>
        <li><strong>Minimal Scopes:</strong> Gmail access is limited to email drafting/sending scopes you explicitly grant.</li>
        <li><strong>Your Data, Your Control:</strong> Options to disable features, revoke tokens, and export your data.</li>
        <li><strong>No shadow training:</strong> We don't train foundation models on your private client data.</li>
        <li><strong>Compliance-minded:</strong> We design for brokerage and regulator expectations from day one.</li>
      </ul>
      <p>
        For specifics, see <a href="/privacy">Privacy Policy</a> and <a href="/security">Security</a> pages.
      </p>

      <h2>Our Values</h2>
      <ul>
        <li><strong>Earn trust daily</strong> — privacy, reliability, and useful defaults.</li>
        <li><strong>Be clear</strong> — in UI, copy, and commitments.</li>
        <li><strong>Small, sharp tools</strong> — solve real problems end-to-end.</li>
        <li><strong>Humans first</strong> — AI should assist, not replace judgment.</li>
        <li><strong>Bias to ship</strong> — iterate with customers, measure outcomes, improve.</li>
      </ul>

      <h2>Partners & Community</h2>
      <p>
        We collaborate with brokerages, MLS partners, and coaching groups to craft templates, tone, and checklists that reflect <strong>how real deals actually work</strong>. Interested in partnering? Let's talk.
      </p>

      <h2>Roadmap Snapshot</h2>
      <ul>
        <li>Shared template libraries for teams</li>
        <li>Timeline view + "smart nudges" for upcoming deadlines</li>
        <li>Role-aware summaries for buyers/sellers/lenders</li>
        <li>Deeper CRM/MLS integrations</li>
        <li>Mobile companion for on-the-go approvals</li>
      </ul>
      <p className="text-sm text-slate-400">
        <em>(Public roadmap coming soon—ask for early access.)</em>
      </p>

      <h2>Press & Media</h2>
      <p>
        Need a logo, brand guidelines, or a product demo?
        Contact <a href="mailto:press@realtyclose.com">press@realtyclose.com</a> and we'll send a media kit.
      </p>

      <h2>Get Started</h2>
      <ul>
        <li><strong>Install the Free Extension</strong> — write your next client email in seconds.</li>
        <li><strong>Watch the Demo</strong> — see how agents use RealtyClose day-to-day.</li>
        <li><strong>Talk to Sales</strong> — teams and brokerages: standardize templates and compliance.</li>
      </ul>

      <div className="bg-slate-700/50 border border-slate-600/50 rounded-lg p-8 my-8">
        <h3 className="text-blue-300 mb-4">Fast Facts (TL;DR)</h3>
        <ul className="text-slate-300 space-y-2">
          <li>• Built by <strong>Zaza Technologies</strong></li>
          <li>• Starting with Gmail; expanding to a complete closing platform</li>
          <li>• Designed for <strong>agents, teams, brokerages, and coordinators</strong></li>
          <li>• Focused on <strong>speed, consistency, and client experience</strong></li>
          <li>• Privacy-first and human-in-the-loop by design</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <p className="text-xl text-blue-300 font-semibold">
          <strong>RealtyClose</strong> — communicate like a pro, close with confidence.
        </p>
      </div>
    </PageShell>
  );
}