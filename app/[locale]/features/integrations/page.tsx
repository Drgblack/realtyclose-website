import PageShell from "@/app/components/PageShell";

export const metadata = { 
  title: "Integrations - RealtyClose",
  description: "RealtyClose works inside Gmail and connects to other tools over time. Rollout is driven by customer demand."
};

export default function Page() {
  return (
    <PageShell title="Integrations">
      <div className="space-y-8">
        <p className="text-xl text-blue-300 font-medium">
          Works inside Gmail and connects to tools you already use
        </p>
        
        <p>
          RealtyClose works inside Gmail and connects to other tools over time. 
          Rollout is driven by customer demand and focuses on the integrations that 
          add the most value to your daily workflow.
        </p>

        <h2>Core Integration</h2>
        
        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
          <h3>📧 Gmail & Google Workspace</h3>
          <p><strong>Native Gmail integration provides the foundation for all features:</strong></p>
          <ul className="mt-3 space-y-2">
            <li><strong>Direct Access:</strong> All features work directly within Gmail - no context switching</li>
            <li><strong>Email Context:</strong> AI understands your email conversations and responds appropriately</li>
            <li><strong>Contact Integration:</strong> Automatic access to your Gmail contacts and conversation history</li>
            <li><strong>Google Drive:</strong> Seamless document sharing and storage integration</li>
            <li><strong>Calendar Integration:</strong> Schedule meetings and appointments directly from email threads</li>
          </ul>
        </div>

        <h2>Available Integrations</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📁 Document Storage</h3>
            <ul className="space-y-2 mt-3">
              <li>• Google Drive (Native)</li>
              <li>• Dropbox connections</li>
              <li>• OneDrive compatibility</li>
              <li>• Document signing platforms</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📱 Communication Tools</h3>
            <ul className="space-y-2 mt-3">
              <li>• SMS/Text messaging</li>
              <li>• WhatsApp Business</li>
              <li>• Slack notifications</li>
              <li>• Microsoft Teams</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>💰 Financial Services</h3>
            <ul className="space-y-2 mt-3">
              <li>• Lender portals</li>
              <li>• Mortgage calculators</li>
              <li>• Commission tracking</li>
              <li>• Transaction coordination</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3>📝 E-Signature Platforms</h3>
            <ul className="space-y-2 mt-3">
              <li>• DocuSign integration</li>
              <li>• Adobe Sign support</li>
              <li>• HelloSign compatibility</li>
              <li>• Custom signing workflows</li>
            </ul>
          </div>
        </div>

        <h2>Planned Integrations</h2>
        
        <div className="space-y-6">
          <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-6">
            <h3>🏢 CRM Platforms</h3>
            <p><strong>Customer demand drives our CRM integration roadmap:</strong></p>
            <ul className="mt-3 space-y-2">
              <li>• Top Tier: Salesforce, HubSpot, Pipedrive</li>
              <li>• Real Estate Specific: Chime, Follow Up Boss, kvCORE</li>
              <li>• Regional Platforms: Based on user concentration</li>
              <li>• Custom APIs: For larger brokerages with unique systems</li>
            </ul>
          </div>
          
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <h3>🏠 MLS & Listing Platforms</h3>
            <p><strong>Property data integration for enhanced email context:</strong></p>
            <ul className="mt-3 space-y-2">
              <li>• MLS data feeds for property details</li>
              <li>• Listing platform connections</li>
              <li>• Property photo and document access</li>
              <li>• Market data and comparative analysis</li>
            </ul>
          </div>
        </div>

        <h2>Integration Philosophy</h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">📧</div>
            <div>
              <h4>Gmail-First Approach</h4>
              <p>All integrations enhance the Gmail experience rather than pulling you away from it. Your email stays the central hub.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">👥</div>
            <div>
              <h4>User-Driven Development</h4>
              <p>Integration priorities are determined by user requests and usage patterns. The most valuable integrations get built first.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">🔒</div>
            <div>
              <h4>Security First</h4>
              <p>All integrations maintain the same security standards as Gmail. Your data stays protected across all connected tools.</p>
            </div>
          </div>
        </div>

        <h2>Enterprise Integrations</h2>
        
        <p>
          <strong>For larger brokerages and teams:</strong> Custom integration development 
          for enterprise systems and proprietary platforms.
        </p>

        <ul className="space-y-3">
          <li><strong>Custom APIs:</strong> Dedicated development for brokerage-specific systems</li>
          <li><strong>Single Sign-On (SSO):</strong> Enterprise authentication and user management</li>
          <li><strong>Data Synchronisation:</strong> Real-time data flow between RealtyClose and your systems</li>
          <li><strong>Compliance Integration:</strong> Connect with brokerage compliance and audit systems</li>
        </ul>

        <h2>Request an Integration</h2>
        
        <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-6">
          <h3>🚀 Integration Requests</h3>
          <p>
            <strong>Don't see the integration you need?</strong> Let us know! Integration development 
            is prioritised based on user demand and business impact.
          </p>
          <ul className="mt-3 space-y-2">
            <li><strong>Submit Requests:</strong> Tell us which tools you use most frequently</li>
            <li><strong>Business Case:</strong> Help us understand how the integration would improve your workflow</li>
            <li><strong>Beta Testing:</strong> Get early access to new integrations when they're ready</li>
          </ul>
        </div>

        <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
          <h3>🔧 Integration Support</h3>
          <p className="mb-0">
            <strong>Need help setting up integrations?</strong> Our support team provides 
            guidance for connecting your existing tools and optimising your workflow.
          </p>
        </div>
      </div>
    </PageShell>
  );
}