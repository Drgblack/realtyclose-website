import PageShell from "@/app/components/PageShell";

export const metadata = { 
  title: "Compliance Guardrails - RealtyClose",
  description: "Support professional, privacy-aware communication. Guardrails encourage clear language and reduce risk in sensitive moments."
};

export default function Page() {
  return (
    <PageShell title="Compliance Guardrails">
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          Support professional, privacy-aware communication with built-in safeguards
        </p>
        
        <p>
          Guardrails encourage clear language and reduce risk in sensitive moments. 
          Sleep better knowing every communication meets professional standards and regulatory requirements.
        </p>

        <div className="bg-yellow-600/10 border border-yellow-500/20 rounded-xl p-6">
          <h3>⚖️ Important Note</h3>
          <p className="mb-0">
            <strong>Guidance only.</strong> Please seek legal advice for policy and compliance questions. 
            RealtyClose provides helpful suggestions but does not replace professional legal counsel.
          </p>
        </div>

        <h2>Built-in Safeguards</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🛡️ Content Screening</h3>
            <p>Automatic detection of potentially problematic language and suggestions for improvement before sending.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📋 Required Disclosures</h3>
            <p>Reminders to include necessary legal disclosures, license information, and regulatory statements.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>🔒 Privacy Protection</h3>
            <p>Flags potential privacy violations and sensitive information that should not be shared via email.</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>💼 Professional Tone</h3>
            <p>Tone analysis to ensure communications maintain appropriate professionalism for client interactions.</p>
          </div>
        </div>

        <h2>Compliance Categories</h2>
        
        <div className="space-y-6">
          <div className="bg-red-600/10 border border-red-500/20 rounded-xl p-6">
            <h3>🚫 Fair Housing Compliance</h3>
            <p><strong>Identifies language that could violate fair housing laws:</strong></p>
            <ul className="mt-3 space-y-2">
              <li>• References to protected classes</li>
              <li>• Discriminatory preferences or restrictions</li>
              <li>• Inappropriate property descriptions</li>
              <li>• Biased language about neighbourhoods or communities</li>
            </ul>
          </div>
          
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <h3>📄 Document Handling</h3>
            <p><strong>Protects sensitive information and documents:</strong></p>
            <ul className="mt-3 space-y-2">
              <li>• Prevents sharing of confidential financial information</li>
              <li>• Flags incomplete or missing disclosures</li>
              <li>• Reminds about document retention requirements</li>
              <li>• Warns about sending documents to incorrect recipients</li>
            </ul>
          </div>
          
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3>💰 Financial Communication</h3>
            <p><strong>Ensures appropriate handling of financial discussions:</strong></p>
            <ul className="mt-3 space-y-2">
              <li>• Appropriate language around pricing and offers</li>
              <li>• Commission discussion guidelines</li>
              <li>• Financing and lending compliance</li>
              <li>• Clear documentation of financial agreements</li>
            </ul>
          </div>
        </div>

        <h2>Team Compliance Management</h2>
        
        <p>
          <strong>For brokerages and compliance officers:</strong> Maintain oversight 
          and ensure consistent compliance across all agents and transactions.
        </p>

        <ul className="space-y-3">
          <li><strong>Approval Workflows:</strong> Route sensitive communications through broker review before sending</li>
          <li><strong>Audit Trails:</strong> Complete records of all communications with compliance flags and resolutions</li>
          <li><strong>Training Integration:</strong> Connect compliance suggestions to relevant training materials and policies</li>
          <li><strong>Custom Rules:</strong> Set brokerage-specific compliance rules and automated enforcement</li>
        </ul>

        <h2>Proactive Prevention</h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">⚠️</div>
            <div>
              <h4>Pre-Send Warnings</h4>
              <p>Get alerts before sending emails that might contain compliance issues. Review and revise before potential problems arise.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">📚</div>
            <div>
              <h4>Educational Suggestions</h4>
              <p>Learn from compliance suggestions with explanations and alternative phrasing recommendations.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">✅</div>
            <div>
              <h4>Continuous Improvement</h4>
              <p>Compliance suggestions improve over time based on industry updates and regulatory changes.</p>
            </div>
          </div>
        </div>

        <h2>Audit Readiness</h2>
        
        <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
          <h3>📊 Compliance Reporting</h3>
          <p>Comprehensive compliance tracking and reporting features:</p>
          <ul className="mt-3 space-y-2">
            <li><strong>Compliance Score:</strong> Track compliance performance across teams and individuals</li>
            <li><strong>Issue Resolution:</strong> Document how compliance flags were addressed and resolved</li>
            <li><strong>Training Needs:</strong> Identify areas where additional compliance training is needed</li>
            <li><strong>Regulatory Updates:</strong> Stay informed about changes in real estate compliance requirements</li>
          </ul>
        </div>

        <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-6">
          <h3>🏆 Best Practices</h3>
          <p className="mb-0">
            <strong>Compliance guardrails reduce audit preparation time by 90%.</strong> 
            Build good habits from day one and maintain professional standards that protect 
            both your clients and your business.
          </p>
        </div>
      </div>
    </PageShell>
  );
}