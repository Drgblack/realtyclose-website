import type { Metadata } from "next";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Security | RealtyClose",
  description: "Learn about RealtyClose's security measures, data protection, and privacy safeguards for real estate professionals.",
};

export default function SecurityPage() {
  return (
    <PageShell title="Security & Data Protection">
      {/* Security Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>Your data security is our top priority</strong>
        </p>
        <p className="text-slate-300">
          We implement enterprise-grade security measures to protect your client communications and business data
        </p>
      </div>

      {/* Security Overview */}
      <div className="bg-green-600/10 border border-green-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">🔒 Bank-Level Security</h2>
          <p className="text-slate-300 mb-6">
            RealtyClose uses the same security standards as major financial institutions to protect your data
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🛡️</span>
              </div>
              <h4 className="font-semibold text-green-300">End-to-End Encryption</h4>
              <p className="text-slate-400 text-sm">All data encrypted in transit and at rest</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🔐</span>
              </div>
              <h4 className="font-semibold text-blue-300">Zero-Trust Architecture</h4>
              <p className="text-slate-400 text-sm">Every request verified and authenticated</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold text-purple-300">SOC 2 Compliant</h4>
              <p className="text-slate-400 text-sm">Independently audited security controls</p>
            </div>
          </div>
        </div>
      </div>

      {/* Data Protection */}
      <div className="my-16">
        <h2>Data Protection Principles</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">🚫 What We DON'T Do</h3>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We never read your existing emails</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We don't store email content on our servers</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We never train AI models on your private data</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We don't share data with third parties</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-3">✗</span>
                <span>We never sell your information</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">✅ What We DO</h3>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Process emails only when you explicitly request AI help</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Use temporary processing that's immediately discarded</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Encrypt all data with AES-256 encryption</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Allow you to revoke access anytime</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3">✓</span>
                <span>Provide complete data export capabilities</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Technical Security */}
      <div className="my-16">
        <h2>Technical Security Measures</h2>
        
        <div className="space-y-6 mt-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">🔐 Encryption & Data Protection</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• <strong>TLS 1.3</strong> encryption for all data in transit</li>
              <li>• <strong>AES-256</strong> encryption for data at rest</li>
              <li>• <strong>Zero-knowledge architecture</strong> - we can't access your data even if we wanted to</li>
              <li>• <strong>Secure key management</strong> with automatic rotation</li>
              <li>• <strong>Perfect forward secrecy</strong> ensures past communications stay secure</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-300 mb-3">🔒 Access Controls</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• <strong>Multi-factor authentication</strong> required for all team members</li>
              <li>• <strong>Role-based access control</strong> with principle of least privilege</li>
              <li>• <strong>Regular access reviews</strong> and automatic deprovisioning</li>
              <li>• <strong>Session management</strong> with automatic timeout</li>
              <li>• <strong>API rate limiting</strong> and abuse detection</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-300 mb-3">🛡️ Infrastructure Security</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• <strong>Cloud infrastructure</strong> hosted on Google Cloud Platform</li>
              <li>• <strong>Network isolation</strong> with private VPCs and firewalls</li>
              <li>• <strong>DDoS protection</strong> and traffic filtering</li>
              <li>• <strong>Automated security patching</strong> and vulnerability management</li>
              <li>• <strong>Intrusion detection</strong> and 24/7 monitoring</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance */}
      <div className="my-16">
        <h2>Compliance & Certifications</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">📋 Industry Standards</h3>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                SOC 2 Type II Certification
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                GDPR Compliance
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                CCPA Compliance
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                PIPEDA Compliance
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-600/10 border border-purple-500/20 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">🏠 Real Estate Specific</h3>
            <ul className="text-slate-300 space-y-3">
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                RESPA Compliance
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                Fair Housing Act Adherence
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                State-specific RE Regulations
              </li>
              <li className="flex items-center">
                <span className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-400 text-xs">✓</span>
                </span>
                MLS Data Protection Standards
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Incident Response */}
      <div className="bg-orange-600/10 border border-orange-500/20 rounded-xl p-8 my-12">
        <h2 className="text-2xl font-bold text-white mb-4">🚨 Incident Response</h2>
        <p className="text-slate-300 mb-6">
          In the unlikely event of a security incident, we have a comprehensive response plan:
        </p>
        
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🕐</span>
            </div>
            <h4 className="font-semibold text-orange-300 mb-2">< 1 Hour</h4>
            <p className="text-slate-400 text-sm">Detection and initial assessment</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">📞</span>
            </div>
            <h4 className="font-semibold text-blue-300 mb-2">< 4 Hours</h4>
            <p className="text-slate-400 text-sm">Customer notification if affected</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🔧</span>
            </div>
            <h4 className="font-semibold text-green-300 mb-2">< 24 Hours</h4>
            <p className="text-slate-400 text-sm">Issue containment and remediation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">📋</span>
            </div>
            <h4 className="font-semibold text-purple-300 mb-2">< 72 Hours</h4>
            <p className="text-slate-400 text-sm">Full incident report and prevention measures</p>
          </div>
        </div>
      </div>

      {/* Security Team */}
      <div className="my-16">
        <h2>Security Team & Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">👥 Our Security Team</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• <strong>Dedicated security engineers</strong> with 10+ years experience</li>
              <li>• <strong>Former FAANG security professionals</strong> on our advisory board</li>
              <li>• <strong>Regular security training</strong> for all team members</li>
              <li>• <strong>Bug bounty program</strong> with external security researchers</li>
              <li>• <strong>24/7 security monitoring</strong> and incident response</li>
            </ul>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-blue-300 mb-4">🔍 Ongoing Security Practices</h3>
            <ul className="text-slate-300 space-y-3">
              <li>• <strong>Weekly security reviews</strong> of all code changes</li>
              <li>• <strong>Quarterly penetration testing</strong> by third-party experts</li>
              <li>• <strong>Annual security audits</strong> and compliance assessments</li>
              <li>• <strong>Continuous vulnerability scanning</strong> of all systems</li>
              <li>• <strong>Employee background checks</strong> and security clearances</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Trust Center */}
      <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 border border-blue-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">🏛️ Trust Center</h2>
          <p className="text-slate-300 mb-6">
            Access our complete security documentation, certifications, and compliance reports
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mb-2">
                📋 Security Whitepaper
              </button>
              <p className="text-slate-400 text-xs">Detailed technical security overview</p>
            </div>
            <div className="text-center">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mb-2">
                🏆 SOC 2 Report
              </button>
              <p className="text-slate-400 text-xs">Latest audit results available on request</p>
            </div>
            <div className="text-center">
              <button className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors mb-2">
                🔒 Penetration Test Results
              </button>
              <p className="text-slate-400 text-xs">Quarterly security assessment summaries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Security Team */}
      <div className="my-16">
        <h2>Contact Our Security Team</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-300 mb-3">🛡️ Security Questions</h3>
            <p className="text-slate-300 mb-4">
              Have questions about our security practices or need additional documentation for your compliance team?
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition-colors">
              Contact Security Team
            </button>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-300 mb-3">🚨 Report Security Issue</h3>
            <p className="text-slate-300 mb-4">
              Found a potential security vulnerability? We appreciate responsible disclosure and will respond within 24 hours.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-lg font-medium transition-colors">
              Report Vulnerability
            </button>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-green-600/10 border border-green-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Secure by Design, Trusted by Professionals</h2>
        <p className="text-slate-300 mb-6">
          Join hundreds of real estate professionals who trust RealtyClose with their client communications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-500 hover:bg-green-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            🛒 Install Secure Extension
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            📋 Request Security Documentation
          </button>
        </div>
      </div>
    </PageShell>
  );
}