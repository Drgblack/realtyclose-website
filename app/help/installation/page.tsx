import { Metadata } from 'next'
import Link from 'next/link'
import HeaderLegacy from '../../../components/HeaderLegacy'
import { Footer } from '../../../components/Footer'
import ChatButton from '../../../components/ChatButton'

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export const metadata: Metadata = {
  title: 'Installing the Chrome Extension - RealtyClose Help',
  description: 'Step-by-step guide to install the RealtyClose Chrome extension and start generating AI-powered emails.',
}

export default function InstallationGuide() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderLegacy />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/help" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Help Center
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-slate-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-400">Getting Started</span>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-slate-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-400">Installation</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Article HeaderLegacy */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Installing the Chrome Extension
            </h1>
            <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm mb-6">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full mr-4">
                Getting Started
              </span>
              <span>Last updated: January 15, 2024</span>
              <span className="mx-2">•</span>
              <span>2 min read</span>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Get RealtyClose up and running in under 60 seconds. This guide walks you through 
              the simple installation process and initial setup.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Prerequisites */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Before You Start
              </h2>
              <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                <li>• Google Chrome browser (version 90 or higher)</li>
                <li>• Active Gmail or Google Workspace account</li>
                <li>• Chrome Web Store access (not blocked by corporate policy)</li>
              </ul>
            </div>

            {/* Step 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Visit the Chrome Web Store
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Click the "Install Free Extension" button on our homepage, or visit the Chrome Web Store directly.
              </p>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <strong>Chrome Web Store URL:</strong>
                </p>
                <code className="text-blue-600 dark:text-blue-400 bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-sm">
                  chrome.google.com/webstore/detail/realtyclose
                </code>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Add to Chrome
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Click the blue "Add to Chrome" button on the extension page.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-slate-500 dark:text-slate-400">
                    <div className="w-16 h-16 bg-slate-300 dark:bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Chrome Web Store Screenshot</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Look for the "Add to Chrome" button in the top-right area of the extension page.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Grant Permissions
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Chrome will ask you to confirm the installation and grant necessary permissions.
              </p>
              
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">Permissions Explained:</h3>
                <ul className="text-amber-700 dark:text-amber-300 text-sm space-y-1">
                  <li>• <strong>Read and change data on mail.google.com:</strong> To integrate with Gmail</li>
                  <li>• <strong>Display notifications:</strong> For follow-up reminders</li>
                  <li>• <strong>Store data:</strong> To save your templates and preferences</li>
                </ul>
              </div>
              
              <p className="text-slate-700 dark:text-slate-300">
                Click "Add extension" to complete the installation.
              </p>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Verify Installation
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                You should see the RealtyClose icon appear in your browser toolbar.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Success Signs:</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• RealtyClose icon in toolbar</li>
                    <li>• Welcome notification</li>
                    <li>• Extension badge showing "RC"</li>
                  </ul>
                </div>
                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-700 dark:text-slate-300 mb-2">💡 Pro Tip:</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Pin the extension to your toolbar for easy access. Right-click the extension icon and select "Pin".
                  </p>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎉 You're All Set!</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                RealtyClose is now installed and ready to help you generate professional emails in seconds.
              </p>
              
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">What's Next?</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link 
                  href="/help/first-email"
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Send Your First Email</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Learn how to compose your first AI-generated email in Gmail.
                  </p>
                </Link>
                <Link 
                  href="/help/account-setup"
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Set Up Your Account</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Customize your profile and preferences for better AI results.
                  </p>
                </Link>
              </div>
            </div>

            {/* Troubleshooting */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Troubleshooting</h2>
              
              <div className="space-y-4">
                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Extension not appearing in toolbar
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 mb-2">Try these steps:</p>
                    <ol className="text-slate-600 dark:text-slate-400 text-sm space-y-1 list-decimal list-inside">
                      <li>Check if the extension is hidden: Click the puzzle piece icon in Chrome toolbar</li>
                      <li>Look for RealtyClose in the extensions menu and click the pin icon</li>
                      <li>Restart Chrome browser</li>
                      <li>Check Chrome://extensions to ensure it's enabled</li>
                    </ol>
                  </div>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Installation blocked by organization
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 mb-2">If you're on a work computer:</p>
                    <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 list-disc list-inside">
                      <li>Contact your IT administrator about adding RealtyClose to approved extensions</li>
                      <li>Try installing on a personal device or browser</li>
                      <li>Use our web app version (coming soon)</li>
                    </ul>
                  </div>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Chrome version compatibility
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 mb-2">RealtyClose requires Chrome 90+:</p>
                    <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1 list-disc list-inside">
                      <li>Check your Chrome version: Chrome menu → Help → About Google Chrome</li>
                      <li>Update Chrome if needed</li>
                      <li>Restart browser after updating</li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>

            {/* Still Need Help */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Still Having Issues?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our support team is here to help you get up and running.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Contact Support
                </Link>
                <ChatButton className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium">
                  Live Chat
                </ChatButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}