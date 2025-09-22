import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "The TC Handoff Playbook | RealtyClose Blog",
  description: "Four moves that remove friction between agents and coordinators.",
};

export default function TCHandoffPlaybookPost() {
  return (
    <PageShell title="The TC Handoff Playbook">
      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center text-slate-400 text-sm mb-4">
          <Link href="/blog" className="hover:text-blue-300 transition-colors">
            ← Back to Blog
          </Link>
          <span className="mx-3">•</span>
          <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">Team</span>
        </div>
        
        <h2 className="text-xl text-slate-300 mb-4">Four moves that remove friction between agents and coordinators</h2>
        
        <div className="flex items-center text-slate-400 text-sm mb-6">
          <span>By Dr. Greg Blackburn</span>
          <span className="mx-3">•</span>
          <span>January 22, 2025</span>
          <span className="mx-3">•</span>
          <span>6 min read</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="prose prose-invert prose-blue max-w-none">
        <p className="text-xl text-slate-300 mb-8">
          Handoffs are where deals get bumpy. Information scatters. Deadlines are assumed. Everyone is busy and no one is certain. Our research found that collaboration gaps slow teams and shake client confidence. This playbook turns handoffs into a strength.
        </p>

        <h2>Four Moves</h2>

        <h3>1. Name the owner for every thread</h3>
        <p>
          Put the accountable owner in the first line. If ownership changes, say it in the thread. Avoid "we thought they had it."
        </p>

        <div className="bg-slate-800/50 rounded-lg p-4 my-6">
          <h4 className="text-blue-300 font-semibold mb-3">Example Handoff Email:</h4>
          <p className="text-slate-300 text-sm">
            <strong>Subject:</strong> [Property Address] - TC Handoff - Sarah now managing<br/><br/>
            
            <strong>Hi everyone,</strong><br/><br/>
            
            <strong>Ownership change:</strong> Sarah Martinez (TC) is now managing day-to-day coordination for [Property Address]. I remain the listing agent and main client contact.<br/><br/>
            
            <strong>Going forward:</strong><br/>
            • Send all document requests to Sarah<br/>
            • Copy me on any client-facing communications<br/>
            • Escalate urgent issues to both of us<br/><br/>
            
            Sarah will send the first status update tomorrow.<br/><br/>
            
            Best regards,<br/>
            [Agent name]
          </p>
        </div>

        <h3>2. Pin a one-screen brief in the email chain</h3>
        <p>
          Property, parties, status, next deadlines, blockers. Keep it simple. Keep it in the conversation of record.
        </p>

        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 my-6">
          <h4 className="text-orange-300 font-semibold mb-3">📋 Standard Deal Brief Template:</h4>
          <div className="text-sm text-slate-300 space-y-2">
            <p><strong>Property:</strong> [Address, price, key details]</p>
            <p><strong>Buyer:</strong> [Name, agent, lender]</p>
            <p><strong>Seller:</strong> [Name, agent, key contact]</p>
            <p><strong>Status:</strong> [Current stage - inspection, appraisal, etc.]</p>
            <p><strong>Next deadlines:</strong> [Date and milestone]</p>
            <p><strong>Open items:</strong> [What needs attention]</p>
            <p><strong>Notes:</strong> [Special circumstances]</p>
          </div>
        </div>

        <h3>3. Automate the first status update</h3>
        <p>
          On handoff, send a templated status to all parties with your intro and next dates. This calms clients and aligns the team.
        </p>

        <div className="bg-slate-800/50 rounded-lg p-4 my-6">
          <h4 className="text-blue-300 font-semibold mb-3">TC Introduction Template:</h4>
          <p className="text-slate-300 text-sm">
            <strong>Subject:</strong> [Property Address] - Meet your transaction coordinator<br/><br/>
            
            <strong>Hi [Client names],</strong><br/><br/>
            
            I am Sarah Martinez, your transaction coordinator for [Property Address]. [Agent name] has brought me in to manage the details while they focus on your broader needs.<br/><br/>
            
            <strong>What this means for you:</strong><br/>
            • Faster response times on document requests<br/>
            • Proactive deadline management<br/>
            • Regular status updates every Tuesday<br/>
            • [Agent name] remains your main point of contact<br/><br/>
            
            <strong>This week's priorities:</strong><br/>
            • [Specific milestone] by [date]<br/>
            • [Specific milestone] by [date]<br/><br/>
            
            You can reach me at [contact info]. I will send our first detailed update tomorrow.<br/><br/>
            
            Looking forward to a smooth closing,<br/>
            Sarah Martinez, TC
          </p>
        </div>

        <h3>4. Use checklists for documents and dates</h3>
        <p>
          Missing disclosures and missed dates are the usual suspects. A checklist that lives beside the thread prevents both.
        </p>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 my-8">
          <h4 className="text-blue-300 font-semibold mb-3">💡 Clarity Beats Heroics</h4>
          <p className="text-slate-300 m-0">
            Teams that standardize handoffs report faster timelines and fewer internal escalations. This is how you scale quality.
          </p>
        </div>

        <h2>Common Handoff Mistakes to Avoid</h2>

        <div className="space-y-4 my-6">
          <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-300 font-semibold mb-2">❌ Assumption-Based Handoffs</h4>
            <p className="text-slate-300 text-sm m-0">"They will figure out what needs to be done" leads to duplicated work and missed deadlines.</p>
          </div>
          
          <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-300 font-semibold mb-2">❌ Incomplete Context Transfer</h4>
            <p className="text-slate-300 text-sm m-0">Not sharing client preferences, communication history, or special circumstances.</p>
          </div>
          
          <div className="bg-red-600/10 border border-red-500/20 rounded-lg p-4">
            <h4 className="text-red-300 font-semibold mb-2">❌ Delayed Client Introduction</h4>
            <p className="text-slate-300 text-sm m-0">Waiting days to introduce the TC creates confusion and erodes confidence.</p>
          </div>
        </div>

        <h2>Handoff Checklist</h2>
        <p>
          Use this checklist for every agent-to-TC handoff:
        </p>

        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 my-6">
          <h4 className="text-orange-300 font-semibold mb-3">✅ Pre-Handoff (Agent)</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>□ Deal brief document created and attached</li>
            <li>□ All parties contact info confirmed</li>
            <li>□ Critical deadlines highlighted</li>
            <li>□ Client communication preferences noted</li>
            <li>□ Open issues and concerns documented</li>
          </ul>
          
          <h4 className="text-orange-300 font-semibold mb-3 mt-6">✅ During Handoff (Both)</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>□ 15-minute call to review deal brief</li>
            <li>□ Access to all relevant email threads</li>
            <li>□ Calendar deadlines shared</li>
            <li>□ Emergency escalation process confirmed</li>
          </ul>
          
          <h4 className="text-orange-300 font-semibold mb-3 mt-6">✅ Post-Handoff (TC)</h4>
          <ul className="text-sm text-slate-300 space-y-1">
            <li>□ Introduction email sent within 2 hours</li>
            <li>□ First status update scheduled</li>
            <li>□ Document checklist created</li>
            <li>□ Next deadline reminder set</li>
          </ul>
        </div>

        <h2>Outcome</h2>
        <p>
          Clients experience a single, steady voice. Internally, you reduce friction and recover hours that used to vanish to rework and searching.
        </p>

        <h2>Measuring Handoff Success</h2>
        <p>
          Track these metrics to ensure your handoff process is working:
        </p>
        <ul>
          <li><strong>Time to first TC contact:</strong> Should be under 2 hours</li>
          <li><strong>Client confusion incidents:</strong> Track questions about "who is handling what"</li>
          <li><strong>Duplicate work events:</strong> Monitor overlapping efforts</li>
          <li><strong>Deadline adherence:</strong> Measure on-time completion rates</li>
        </ul>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-orange-600/10 to-blue-600/10 border border-orange-500/20 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-4">Seamless agent-TC coordination</h3>
        <p className="text-slate-300 mb-6">
          RealtyClose links each email to the right deal, applies checklists, and generates intros and status updates. That is how agents and TCs move as one.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/install" className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
            Install Free Extension
          </Link>
          <Link href="/blog/consistent-communication-builds-trust" className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
            Read: Consistent Communication
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