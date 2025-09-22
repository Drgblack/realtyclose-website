import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Never Lose A Deal To Missed Follow-ups Again | RealtyClose Blog",
  description: "A follow-up framework that scales with your pipeline and protects your closings.",
};

export default function FollowUpSystemPost() {
  return (
    <PageShell title="Never Lose A Deal To Missed Follow-ups Again">
      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center text-slate-400 text-sm mb-4">
          <Link href="/blog" className="hover:text-blue-300 transition-colors">
            ← Back to Blog
          </Link>
          <span className="mx-3">•</span>
          <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Systems</span>
        </div>
        
        <h2 className="text-xl text-slate-300 mb-4">A follow-up framework that scales with your pipeline</h2>
        
        <div className="flex items-center text-slate-400 text-sm mb-6">
          <span>By Dr. Greg Blackburn</span>
          <span className="mx-3">•</span>
          <span>January 22, 2025</span>
          <span className="mx-3">•</span>
          <span>5 min read</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="prose prose-invert prose-blue max-w-none">
        <p className="text-xl text-slate-300 mb-8">
          Missed follow-ups are the silent killers of otherwise healthy deals. Leaders report frequent delays and even failed transactions tied to simple communication gaps. Let us fix that with a repeatable system you can run from your inbox.
        </p>

        <h2>The Follow-up Framework</h2>

        <h3>Define the critical moments</h3>
        <p>
          Offer sent, counter in play, financing doc requests, inspection findings, contingency deadlines. These are not optional. They need tracked follow-ups.
        </p>

        <h3>Create trigger phrases inside Gmail</h3>
        <p>
          If a thread includes "appraisal," "disclosure," or "funds," apply a label and an automatic reminder for 24 to 72 hours. You are building a safety net that does not rely on memory.
        </p>

        <h3>Use templated micro-updates</h3>
        <p>
          Short is powerful.
        </p>

        <div className="bg-slate-800/50 rounded-lg p-4 my-6">
          <p className="text-slate-300 mb-2">
            <strong>Example 1:</strong> "Quick update. Appraisal scheduled for Thursday. I will confirm time tomorrow."
          </p>
          <p className="text-slate-300 m-0">
            <strong>Example 2:</strong> "Thanks for the counter. I will revert by 2 pm tomorrow with buyer feedback."
          </p>
        </div>

        <p>
          Uniform micro-updates prevent anxiety and keep momentum.
        </p>

        <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-xl p-6 my-8">
          <h4 className="text-yellow-300 font-semibold mb-3">💰 Follow-ups Protect Your Earnings</h4>
          <p className="text-slate-300 m-0">
            Missed communication is a leading cause of delays, which can cost buyers fees and agents commissions. A simple nudge system prevents that cascade.
          </p>
        </div>

        <h3>Escalate by channel only when needed</h3>
        <p>
          Keep the record in email. If you text or call, send a one-line recap back to the thread so the source of truth stays intact.
        </p>

        <h2>Outcome</h2>
        <p>
          Teams that standardize follow-ups report fewer surprises, more confidence at the table, and better client satisfaction. The consistency itself builds trust.
        </p>

        <h2>Implementation Tips</h2>
        <ul>
          <li><strong>Start small:</strong> Pick your top 5 critical moments and build templates for those first</li>
          <li><strong>Use your calendar:</strong> Set recurring reminders for standard timelines (inspection deadlines, loan commitment dates)</li>
          <li><strong>Train your team:</strong> Make sure everyone knows which threads need follow-ups and when</li>
          <li><strong>Track results:</strong> Monitor how follow-up consistency affects your closing timelines</li>
        </ul>

        <h2>Common Follow-up Scenarios</h2>
        <div className="space-y-4 my-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-2">Offer Submitted</h4>
            <p className="text-sm text-slate-300 m-0">Follow-up in 24 hours if no response, then every 12 hours until acknowledged.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-2">Inspection Period</h4>
            <p className="text-sm text-slate-300 m-0">Check-in 48 hours before deadline, final reminder 24 hours before.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-4">
            <h4 className="text-blue-300 font-semibold mb-2">Financing Deadlines</h4>
            <p className="text-sm text-slate-300 m-0">Weekly status updates, escalate to daily in final week before commitment deadline.</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-4">Automate your follow-up system</h3>
        <p className="text-slate-300 mb-6">
          Use RealtyClose to tag high-risk threads and generate the next follow-up in one click. The assistant removes the cognitive load so you stay focused on people, not process.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/install" className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
            Install Free Extension
          </Link>
          <Link href="/blog/reclaim-30-hours-per-transaction" className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
            Read: Reclaim 30+ Hours
          </Link>
        </div>
      </div>

      {/* Back to Blog */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to All Posts
        </Link>
      </div>
    </PageShell>
  );
}