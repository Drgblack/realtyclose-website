import { Metadata } from 'next'
import Link from 'next/link'
import HeaderLegacy from '../../../components/HeaderLegacy'
import { Footer } from '../../../components/Footer'

export const metadata: Metadata = {
  title: 'Creating Your First AI Email - RealtyClose Help',
  description: 'Learn how to generate your first professional email using RealtyClose AI in Gmail.',
}

export default function FirstEmailGuide() {
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
                  <span className="text-slate-500 dark:text-slate-400">First Email</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Article HeaderLegacy */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Creating Your First AI Email
            </h1>
            <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm mb-6">
              <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1 rounded-full mr-4">
                Getting Started
              </span>
              <span>Last updated: January 15, 2024</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
            </div>
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
              Ready to experience the magic of AI-powered email generation? This guide will walk you through 
              creating your first professional email using RealtyClose in just a few clicks.
            </p>
          </div>

          {/* Article Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Prerequisites */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Before You Start
              </h2>
              <ul className="text-blue-800 dark:text-blue-200 space-y-2">
                <li>• RealtyClose extension installed and active</li>
                <li>• Logged into Gmail or Google Workspace</li>
                <li>• Have a specific email scenario in mind (client follow-up, listing update, etc.)</li>
              </ul>
              <p className="text-blue-800 dark:text-blue-200 mt-3 text-sm">
                <strong>Don't have the extension yet?</strong> <Link href="/help/installation" className="underline">Install it here</Link> - takes less than 60 seconds!
              </p>
            </div>

            {/* Step 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">1</span>
                Open Gmail and Compose
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Navigate to Gmail and click the "Compose" button to start a new email.
              </p>
              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4 mb-4">
                <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-slate-500 dark:text-slate-400">
                    <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm">Gmail Compose Window</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  As soon as you click compose, you should notice the RealtyClose panel appear on the right side of your screen.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">2</span>
                Add Recipient and Subject
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Fill in the recipient's email address and add a subject line. This helps RealtyClose understand the context.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-4">
                <h3 className="font-semibold text-green-800 dark:text-green-200 mb-2">💡 Pro Tips for Better AI Results:</h3>
                <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                  <li>• Use descriptive subject lines: "Follow-up on 123 Main St showing"</li>
                  <li>• Include contact names if you know them: "John Smith - Mortgage update"</li>
                  <li>• Add context in subject: "Price reduction - Downtown condo listing"</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">3</span>
                Choose Your Email Type
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                In the RealtyClose panel, you'll see different email categories. Choose the one that best fits your situation:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">📧 Client Communication</h4>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                    <li>• Follow-up after showing</li>
                    <li>• Market updates</li>
                    <li>• New listing alerts</li>
                    <li>• Check-in messages</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-2">🏠 Transaction Management</h4>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                    <li>• Closing coordination</li>
                    <li>• Inspection updates</li>
                    <li>• Contract notifications</li>
                    <li>• Lender communication</li>
                  </ul>
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
                <p className="text-purple-800 dark:text-purple-200 text-sm">
                  <strong>First time?</strong> Try "Client Follow-up" - it's the most popular template and works great for getting started!
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">4</span>
                Provide Context (Optional)
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Add any specific details you want included in the email. The more context you provide, the better the AI result!
              </p>
              
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Example Context for Client Follow-up:</h4>
                <div className="bg-white dark:bg-slate-700 rounded border border-slate-200 dark:border-slate-600 p-3">
                  <code className="text-sm text-slate-700 dark:text-slate-300">
                    "Showed 3 properties yesterday including the Victorian on Oak Street. 
                    Client loved the kitchen but concerned about the basement. 
                    New listing came up this morning that might be perfect - 
                    ranch style on Maple Avenue, no basement issues."
                  </code>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ Good Context Examples:</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Property addresses or descriptions</li>
                    <li>• Client preferences or concerns</li>
                    <li>• Next steps or timeline</li>
                    <li>• Specific questions to address</li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
                  <h4 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Avoid Including:</h4>
                  <ul className="text-amber-700 dark:text-amber-300 text-sm space-y-1">
                    <li>• Personal financial information</li>
                    <li>• Social security numbers</li>
                    <li>• Private client details</li>
                    <li>• Confidential negotiations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">5</span>
                Generate Your Email
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Click the "Generate Email" button and watch the AI create a professional message in seconds!
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 mb-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">🎯 What Happens Next:</h4>
                <ol className="text-slate-700 dark:text-slate-300 space-y-2 list-decimal list-inside">
                  <li>AI analyzes your recipient, subject, and context</li>
                  <li>Selects the most appropriate template and tone</li>
                  <li>Generates personalized content in 3-5 seconds</li>
                  <li>Inserts the email directly into your Gmail compose window</li>
                </ol>
              </div>

              <div className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Sample Generated Email:</h4>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded p-4 text-sm">
                  <div className="text-slate-600 dark:text-slate-400 mb-2">
                    <strong>Subject:</strong> Follow-up on yesterday's showings
                  </div>
                  <div className="text-slate-700 dark:text-slate-300">
                    <p className="mb-3">Hi Sarah,</p>
                    <p className="mb-3">I hope you enjoyed touring the properties yesterday! I could tell you were particularly drawn to the Victorian on Oak Street, especially that beautiful kitchen renovation.</p>
                    <p className="mb-3">I understand your concerns about the basement, and I completely agree that's an important consideration for your family. Speaking of which, I have exciting news - a new listing just came on the market that I think you'll love.</p>
                    <p className="mb-3">The ranch on Maple Avenue checks all your boxes: updated kitchen, no basement concerns, and it's in your preferred neighborhood. Would you like to schedule a showing this weekend?</p>
                    <p>Best regards,<br/>Alex Johnson</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">6</span>
                Review and Customize
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                The AI does great work, but always review and personalize before sending. Add your personal touch!
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">🔍 Quick Review Checklist:</h4>
                  <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                    <li>• Recipient name is correct</li>
                    <li>• All details are accurate</li>
                    <li>• Tone matches your style</li>
                    <li>• Call-to-action is clear</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✨ Personalization Ideas:</h4>
                  <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                    <li>• Add a personal greeting or memory</li>
                    <li>• Include your direct phone number</li>
                    <li>• Mention mutual connections</li>
                    <li>• Add your signature style</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 7 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">7</span>
                Send with Confidence
              </h2>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Once you're happy with the email, hit send! RealtyClose also offers helpful follow-up features.
              </p>
              
              <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-6">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-3">🚀 Pro Features to Try Next:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-1">Follow-up Reminders</h5>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Set automatic reminders if you don't hear back</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-1">Email Scheduling</h5>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">Schedule emails for optimal delivery times</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-1">Template Learning</h5>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">AI learns your preferences over time</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-slate-900 dark:text-white mb-1">Analytics Tracking</h5>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">See open rates and response tracking</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Congratulations */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">🎉 Congratulations!</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                You've just sent your first AI-generated email with RealtyClose. You're now part of a community 
                of real estate professionals saving 15+ hours per week on email communication.
              </p>
              
              <h3 className="font-semibold text-slate-900 dark:text-white mb-3">Ready for More?</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <Link 
                  href="/help/templates"
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow text-center"
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Explore Templates</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Discover 50+ professional email templates
                  </p>
                </Link>
                <Link 
                  href="/help/ai-training"
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow text-center"
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Train Your AI</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Customize AI to match your voice perfectly
                  </p>
                </Link>
                <Link 
                  href="/help/best-practices"
                  className="bg-white dark:bg-slate-800 p-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:shadow-md transition-shadow text-center"
                >
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Best Practices</h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm">
                    Master real estate email communication
                  </p>
                </Link>
              </div>
            </div>

            {/* Common Questions */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Common Questions</h2>
              
              <div className="space-y-4">
                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    How does the AI know what to write?
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      RealtyClose AI analyzes your recipient, subject line, any context you provide, and your email history to generate relevant, professional content. It's trained specifically on real estate communication patterns and best practices.
                    </p>
                  </div>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Can I edit the generated email?
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      Absolutely! The AI-generated email appears in your Gmail compose window just like any other email. You can edit, add, or remove any content before sending. Think of it as a smart first draft that saves you time.
                    </p>
                  </div>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    What if I don't like the generated email?
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      No problem! You can click "Generate Again" to get a different version, provide more specific context, or choose a different template type. You can also manually edit the content or start fresh.
                    </p>
                  </div>
                </details>

                <details className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <summary className="p-4 cursor-pointer font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                    Is my email data private and secure?
                  </summary>
                  <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-slate-700 dark:text-slate-300 text-sm">
                      Yes! RealtyClose uses bank-grade encryption and is GDPR compliant. We only process the specific email content you choose to enhance, and we never store sensitive client information. Your privacy and your clients' privacy are our top priorities.
                    </p>
                  </div>
                </details>
              </div>
            </div>

            {/* Get Help */}
            <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 text-center">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Need More Help?</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our team is here to help you master RealtyClose and transform your email workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/demo"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Watch Video Demo
                </Link>
                <Link
                  href="/contact"
                  className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-6 py-3 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors font-medium"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}