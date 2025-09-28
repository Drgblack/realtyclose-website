import PageShell from "@/app/components/PageShell";

export const metadata = { 
  title: "AI Email Assistant - RealtyClose",
  description: "Professional email drafting powered by AI. Reply faster with on-brand emails, tone suggestions, and smart templates for real estate communication."
};

export default function Page() {
  return (
    <PageShell title="AI Email Assistant">
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          Professional email drafting that saves hours and keeps deals moving
        </p>
        
        <p>
          Reply faster with professional, on-brand emails. The AI assistant suggests phrasing, offers tone options, 
          and flags unclear details before you send. Stop rewriting the same message five times.
        </p>

        <h2>Core Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>⚡ Fast First Drafts</h3>
            <p>Generate professional email responses in seconds. No more staring at blank screens or struggling with the right words.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🎨 Tone Control</h3>
            <p>Choose the right tone for different clients and situations. Professional, friendly, urgent, or empathetic - the AI adapts to your needs.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🔄 Smart Rewrites</h3>
            <p>Polish existing drafts with suggestions for clarity, professionalism, and impact. Perfect messages every time.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🌍 Translation Support</h3>
            <p>Communicate with international clients in their language. Translate messages while maintaining professional tone and context.</p>
          </div>
        </div>

        <h2>How It Works</h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <div>
              <h4>Open Gmail and compose or reply</h4>
              <p>The RealtyClose assistant appears in your Gmail sidebar, ready to help with any email.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <div>
              <h4>Provide context or select a template</h4>
              <p>Tell the AI what you want to communicate, or choose from smart templates for common scenarios.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <div>
              <h4>Review and send</h4>
              <p>The AI generates a professional draft. Make any adjustments and send with confidence.</p>
            </div>
          </div>
        </div>

        <h2>Perfect For</h2>
        
        <ul className="space-y-3">
          <li><strong>Client Updates:</strong> Keep clients informed about transaction progress, next steps, and important deadlines</li>
          <li><strong>Vendor Coordination:</strong> Professional communication with inspectors, appraisers, lenders, and title companies</li>
          <li><strong>Team Handoffs:</strong> Seamless communication when transferring deals between agents and transaction coordinators</li>
          <li><strong>Follow-up Sequences:</strong> Consistent, timely follow-ups that nurture leads and maintain client relationships</li>
        </ul>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
          <h3>💡 Time Savings</h3>
          <p className="mb-0">
            <strong>Average time savings:</strong> 2-3 hours per day on email composition. 
            Transform 30-minute email sessions into 5-minute professional communications.
          </p>
        </div>
      </div>
    </PageShell>
  );
}