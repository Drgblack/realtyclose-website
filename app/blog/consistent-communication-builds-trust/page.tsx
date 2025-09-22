import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Consistent, Professional Tone At Scale | RealtyClose Blog",
  description: "How to sound like the best version of yourself in every client message.",
};

export default function ConsistentCommunicationPost() {
  return (
    <PageShell title="Consistent, Professional Tone At Scale">
      {/* Post Header */}
      <div className="mb-8">
        <div className="flex items-center text-slate-400 text-sm mb-4">
          <Link href="/blog" className="hover:text-blue-300 transition-colors">
            ← Back to Blog
          </Link>
          <span className="mx-3">•</span>
          <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Brand</span>
        </div>
        
        <h2 className="text-xl text-slate-300 mb-4">How to sound like the best version of yourself in every client message</h2>
        
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
          Clients judge quality by communication. When tone swings from rushed to polished, trust declines. Research links inconsistent messaging to lower satisfaction and more complaints. The fix is not more effort. It is systemized consistency.
        </p>

        <h2>The Repeatable Approach</h2>

        <h3>Decide your voice rules</h3>
        <p>
          Warm but concise. Clear next steps. No jargon. One topic per paragraph.
        </p>

        <h3>Lock down your visual brand</h3>
        <p>
          Signatures, disclaimers, and logo should be uniform across the team.
        </p>

        <h3>Template the top 20 scenarios</h3>
        <p>
          From first touch to closing day. Real language that reflects how you speak.
        </p>

        <h3>Coach with examples</h3>
        <p>
          Keep a living library of gold-standard replies that new agents can reuse.
        </p>

        <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 my-8">
          <blockquote className="text-lg italic text-slate-300 m-0">
            "Clients do not need poetry. They need clarity, empathy, and next steps they can trust."
          </blockquote>
        </div>

        <h2>Building Your Voice Guidelines</h2>

        <h3>1. Tone Consistency</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 my-6">
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="text-green-300 font-semibold mb-2">✅ Do This:</h4>
              <ul>
                <li>Use active voice</li>
                <li>Start with action items</li>
                <li>Include specific timelines</li>
                <li>End with clear next steps</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-300 font-semibold mb-2">❌ Avoid This:</h4>
              <ul>
                <li>Industry jargon without explanation</li>
                <li>Apologetic or uncertain language</li>
                <li>Walls of text without structure</li>
                <li>Leaving clients guessing what happens next</li>
              </ul>
            </div>
          </div>
        </div>

        <h3>2. Structural Consistency</h3>
        <p>
          Every client email should follow a predictable structure:
        </p>
        <ol>
          <li><strong>Quick context:</strong> Reference what we are discussing</li>
          <li><strong>Key information:</strong> The main update or request</li>
          <li><strong>Next steps:</strong> What happens next and when</li>
          <li><strong>Contact info:</strong> How to reach you with questions</li>
        </ol>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6 my-8">
          <h4 className="text-blue-300 font-semibold mb-3">🏢 Brand Consistency Is A Brokerage Asset</h4>
          <p className="text-slate-300 m-0">
            Leaders need visibility and auditability. A shared library and approval flow protects quality at scale.
          </p>
        </div>

        <h2>Template Examples That Work</h2>

        <h3>First Response to New Lead</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 my-6">
          <p className="text-slate-300 text-sm">
            <strong>Subject:</strong> Your inquiry about [Property Address] - Next steps<br/><br/>
            
            <strong>Hi [Name],</strong><br/><br/>
            
            Thank you for your interest in [Property Address]. I have reviewed your preferences and believe this property offers excellent value for your situation.<br/><br/>
            
            <strong>Next steps:</strong><br/>
            • I will send detailed property information within 2 hours<br/>
            • We can schedule a showing for [specific day/time options]<br/>
            • I will prepare a market analysis for your review<br/><br/>
            
            The best time to reach me is [time] at [phone]. Looking forward to helping you with this decision.<br/><br/>
            
            Best regards,<br/>
            [Your signature]
          </p>
        </div>

        <h3>Status Update Template</h3>
        <div className="bg-slate-800/50 rounded-lg p-4 my-6">
          <p className="text-slate-300 text-sm">
            <strong>Subject:</strong> [Property Address] - Week of [Date] Update<br/><br/>
            
            <strong>Hi everyone,</strong><br/><br/>
            
            Quick update on our progress with [Property Address]:<br/><br/>
            
            <strong>Completed this week:</strong><br/>
            • [Specific milestone]<br/>
            • [Specific milestone]<br/><br/>
            
            <strong>Coming up:</strong><br/>
            • [Next deadline] by [date]<br/>
            • [Next milestone] scheduled for [date]<br/><br/>
            
            <strong>Action needed:</strong><br/>
            • [Specific request] from [specific person] by [date]<br/><br/>
            
            I will send the next update on [day]. Please let me know if you have questions.<br/><br/>
            
            Best regards,<br/>
            [Your signature]
          </p>
        </div>

        <h2>Outcome</h2>
        <p>
          Your emails begin to feel like a concierge experience. Even when you are busy, clients read confidence and care. That is the foundation of referrals.
        </p>

        <h2>Implementation Strategy</h2>
        <ol>
          <li><strong>Audit your current emails:</strong> Review your last 20 client emails for tone inconsistencies</li>
          <li><strong>Define your voice:</strong> Write down 5 key characteristics of how you want to sound</li>
          <li><strong>Create templates:</strong> Build 10 core templates for your most common scenarios</li>
          <li><strong>Test and refine:</strong> Use templates for 2 weeks, then adjust based on client feedback</li>
          <li><strong>Train your team:</strong> Share successful templates and voice guidelines with colleagues</li>
        </ol>
      </div>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-xl p-8">
        <h3 className="text-xl font-bold text-white mb-4">Enforce brand consistency automatically</h3>
        <p className="text-slate-300 mb-6">
          RealtyClose helps teams enforce voice, disclaimers, and templates directly in Gmail so every agent sounds on brand without extra work.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/install" className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
            Install Free Extension
          </Link>
          <Link href="/blog/never-lose-a-deal-follow-up-system" className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-6 rounded-lg font-medium transition-colors text-center">
            Read: Follow-up Framework
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