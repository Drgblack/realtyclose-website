import PageShell from "@/app/components/PageShell";

export const metadata = { 
  title: "Deal Tracking - RealtyClose",
  description: "Lightweight visibility on conversations and follow-ups. See what's waiting on you and what's done. Never lose track of deal progress."
};

export default function Page() {
  return (
    <PageShell title="Deal Tracking">
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          Keep email conversations and follow-ups visible so nothing falls through
        </p>
        
        <p>
          See blockers and next actions in one place. Know exactly what's waiting on you, 
          what's waiting on others, and what's already complete. Never wonder about deal status again.
        </p>

        <h2>Dashboard Overview</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📊 Deal Pipeline</h3>
            <p>Visual overview of all active transactions with status indicators, upcoming deadlines, and action items.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🚨 Priority Alerts</h3>
            <p>Immediate attention items: missed deadlines, unanswered emails, and critical action items.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>⏰ Timeline View</h3>
            <p>Chronological view of all deal activities, communications, and milestone achievements.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>👥 Team Activity</h3>
            <p>See who's working on what, recent updates from team members, and handoff status.</p>
          </div>
        </div>

        <h2>Email Integration</h2>
        
        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
          <h3>📧 Gmail-Native Tracking</h3>
          <p>Deal tracking works directly within Gmail:</p>
          <ul className="mt-3 space-y-2">
            <li><strong>Auto-Detection:</strong> Automatically identifies deal-related emails and associates them with transactions</li>
            <li><strong>Context Sidebar:</strong> See deal status, key dates, and team notes without leaving Gmail</li>
            <li><strong>Quick Actions:</strong> Update deal status, log activities, and set reminders directly from email</li>
            <li><strong>Thread Continuity:</strong> Maintain conversation history even when team members change</li>
          </ul>
        </div>

        <h2>Follow-up Management</h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">!</div>
            <div>
              <h4>Unanswered Email Alerts</h4>
              <p>Never miss a follow-up that could derail your deal. Get notified when important emails go unanswered for too long.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">📅</div>
            <div>
              <h4>Deadline Flags</h4>
              <p>Critical dates surface automatically in every email thread. Contract deadlines, inspection periods, and closing dates stay visible.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✓</div>
            <div>
              <h4>Completion Tracking</h4>
              <p>Mark tasks complete and see progress at a glance. Celebrate milestones and keep momentum going.</p>
            </div>
          </div>
        </div>

        <h2>Team Coordination</h2>
        
        <p>
          <strong>For transaction coordinators and team leads:</strong> Get visibility across 
          multiple deals and team members. See bottlenecks before they become problems.
        </p>

        <ul className="space-y-3">
          <li><strong>Multi-Deal View:</strong> Track 20, 50, or 100+ active transactions from one dashboard</li>
          <li><strong>Agent Performance:</strong> See which agents need support and which deals need attention</li>
          <li><strong>Handoff Management:</strong> Seamless transitions between agents, TCs, and other team members</li>
          <li><strong>Client Communication Log:</strong> Complete history of all client touchpoints and responses</li>
        </ul>

        <h2>Key Tracking Features</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3>📈 Progress Indicators</h3>
            <ul className="mt-3 space-y-2">
              <li>• Contract to closing timeline</li>
              <li>• Contingency removal status</li>
              <li>• Inspection and appraisal progress</li>
              <li>• Loan approval stages</li>
              <li>• Document collection status</li>
            </ul>
          </div>
          
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <h3>🎯 Action Items</h3>
            <ul className="mt-3 space-y-2">
              <li>• Outstanding client requests</li>
              <li>• Vendor coordination tasks</li>
              <li>• Document requirements</li>
              <li>• Follow-up reminders</li>
              <li>• Team assignments</li>
            </ul>
          </div>
        </div>

        <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-6">
          <h3>⚠️ Risk Prevention</h3>
          <p className="mb-0">
            <strong>49% of managers report deals delayed by communication failures.</strong> 
            Deal tracking helps you identify and resolve issues before they impact closing. 
            Get early warnings for potential problems and take proactive action.
          </p>
        </div>
      </div>
    </PageShell>
  );
}