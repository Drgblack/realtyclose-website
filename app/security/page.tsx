import Link from 'next/link'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata = {
  title: 'Privacy & Security - RealtyClose',
  description: 'Learn how RealtyClose protects your data with bank-grade security, GDPR compliance, and FinCEN-aware processes.',
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Privacy & Security
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Built for trust and compliance with bank-grade security, GDPR-ready workflows, and FinCEN-aware processes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Bank-grade security</h3>
              <p className="text-slate-600 dark:text-slate-300">Enterprise-level encryption protects all data transmission and storage.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m15 13 3-3m0 0-3-3m3 3H9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">GDPR-ready workflows</h3>
              <p className="text-slate-600 dark:text-slate-300">Built-in privacy controls ensure full compliance with global privacy regulations.</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">FinCEN-aware processes</h3>
              <p className="text-slate-600 dark:text-slate-300">Automated compliance tracking for financial crime prevention requirements.</p>
            </div>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2>Our Commitment to Security</h2>
            <p>
              At RealtyClose, we understand that real estate professionals handle sensitive financial and personal information every day. 
              That's why we've built our platform with security and compliance as foundational requirements, not afterthoughts.
            </p>

            <h3>Data Protection</h3>
            <ul>
              <li>End-to-end encryption for all data transmission</li>
              <li>AES-256 encryption for data at rest</li>
              <li>Regular security audits and penetration testing</li>
              <li>SOC 2 Type II compliance</li>
            </ul>

            <h3>Privacy Controls</h3>
            <ul>
              <li>User consent management for all data processing</li>
              <li>Data retention policies and automated deletion</li>
              <li>Right to access, rectify, and delete personal data</li>
              <li>Data portability and export capabilities</li>
            </ul>

            <h3>Compliance Framework</h3>
            <ul>
              <li>GDPR compliance for European data protection</li>
              <li>CCPA compliance for California privacy rights</li>
              <li>FinCEN reporting awareness and tracking</li>
              <li>Real estate specific compliance monitoring</li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-8">
              <h4 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Questions about security?</h4>
              <p className="text-blue-800 dark:text-blue-200 mb-4">
                Our security team is here to help. Contact us for detailed security documentation, 
                compliance certificates, or to discuss your specific security requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
              >
                Contact Security Team
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}