import PageShell from "@/app/components/PageShell";

export const metadata = { 
  title: "Smart Templates - RealtyClose",
  description: "Reusable email templates that auto-fill client details, property information, and dates. Start faster without losing your professional voice."
};

export default function Page() {
  return (
    <PageShell title="Smart Templates">
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          Proven email structures for every stage of the transaction process
        </p>
        
        <p>
          Use proven structures for common messages across a transaction. Personalise fields, keep consistency, 
          and save time for the work that needs you. No more starting from scratch.
        </p>

        <h2>Template Categories</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📝 Client Communication</h3>
            <ul className="space-y-2 mt-3">
              <li>• Listing agreement follow-up</li>
              <li>• Showing feedback requests</li>
              <li>• Offer presentation updates</li>
              <li>• Contract milestone notifications</li>
              <li>• Closing preparation checklist</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🏠 Transaction Coordination</h3>
            <ul className="space-y-2 mt-3">
              <li>• Inspection scheduling</li>
              <li>• Appraisal coordination</li>
              <li>• Loan status updates</li>
              <li>• Title and escrow communication</li>
              <li>• Final walkthrough scheduling</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>👥 Team Handoffs</h3>
            <ul className="space-y-2 mt-3">
              <li>• Agent to TC transition</li>
              <li>• Client introduction templates</li>
              <li>• Deal summary handover</li>
              <li>• Contact information sharing</li>
              <li>• Process expectations</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🔄 Follow-up Sequences</h3>
            <ul className="space-y-2 mt-3">
              <li>• Lead nurturing series</li>
              <li>• Post-closing follow-up</li>
              <li>• Referral requests</li>
              <li>• Market update newsletters</li>
              <li>• Anniversary reminders</li>
            </ul>
          </div>
        </div>

        <h2>Smart Field Auto-Fill</h2>
        
        <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
          <h3>⚡ Automatic Personalisation</h3>
          <p>Templates automatically insert:</p>
          <ul className="mt-3 space-y-2">
            <li><strong>Client Names:</strong> Proper salutations and personalized greetings</li>
            <li><strong>Property Details:</strong> Address, price, square footage, and key features</li>
            <li><strong>Important Dates:</strong> Contract dates, inspection deadlines, closing schedules</li>
            <li><strong>Agent Information:</strong> Your contact details, license numbers, and brokerage</li>
            <li><strong>Next Steps:</strong> Context-aware action items and timeline expectations</li>
          </ul>
        </div>

        <h2>Template Management</h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
            <div>
              <h4>Choose from library or create custom</h4>
              <p>Start with proven templates or build your own. Save your best-performing messages for reuse.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
            <div>
              <h4>AI fills in the details</h4>
              <p>Smart fields pull from your Gmail context, CRM data, and previous conversations automatically.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
            <div>
              <h4>Review and send</h4>
              <p>Verify the details, make any personal touches, and send with confidence.</p>
            </div>
          </div>
        </div>

        <h2>Team Templates</h2>
        
        <p>
          <strong>For brokerages and teams:</strong> Create shared template libraries that ensure 
          consistent messaging across all agents. Maintain brand voice and compliance while 
          allowing personal customisation.
        </p>

        <ul className="space-y-3">
          <li><strong>Brand Consistency:</strong> Approved messaging that reflects your brokerage's professional standards</li>
          <li><strong>Compliance Built-in:</strong> Templates include required disclosures and legal language</li>
          <li><strong>Performance Tracking:</strong> See which templates generate the best client responses</li>
          <li><strong>Easy Updates:</strong> Update templates once and they refresh for the entire team</li>
        </ul>

        <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
          <h3>📊 Template Analytics</h3>
          <p className="mb-0">
            Track open rates, response rates, and client engagement to optimise your templates. 
            See which messages work best for different client types and transaction stages.
          </p>
        </div>
      </div>
    </PageShell>
  );
}