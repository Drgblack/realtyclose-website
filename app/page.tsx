import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import FAQSection from '@/components/FAQSection'

export const metadata: Metadata = {
  title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
  description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon. Build trust through transparent development.',
}

export default function HomePage() {
  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="inline-flex items-center glass-card text-blue-700 px-6 py-3 rounded-full text-sm font-semibold animate-fade-in">
                  <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot mr-3"></div>
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                    ✨ Gmail Extension Live Now
                  </span>
                </div>
              </div>
              <h1 className="heading-xl text-gray-900 text-balance">
                The Enterprise Real Estate Platform 
                <span className="gradient-text"> Starting</span> 
                With Your Gmail
              </h1>
              <p className="subtitle text-gray-600 text-balance">
                While others promise everything and deliver nothing, we're building the complete real estate operating system one powerful feature at a time. Start with our AI email assistant today.
              </p>
              
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-green-500 mr-2">✅</span> Available Now
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Gmail AI Assistant
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Email Generation
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Tone Controls
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span> Multi-language Support
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="text-blue-500 mr-2">🚧</span> Coming Soon
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span> Complete CRM Platform
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span> MLS Integration
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span> Commission Tracking
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-500 mr-2">○</span> FinCEN Compliance
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="cta-button text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>Start Free with Gmail Extension</span>
                  </button>
                  <button className="btn-secondary px-8 py-4 rounded-xl font-semibold text-lg text-gray-900 hover:scale-105 transition-all duration-300">
                    See Full Platform Roadmap
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Free forever • No credit card required • 500+ agents already using
                </p>
              </div>
            </div>
            
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="dashboard-preview floating">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-500 ml-4">Gmail + RealtyClose AI</span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <div className="text-sm font-medium text-blue-900">New listing inquiry from Sarah</div>
                      <div className="text-xs text-blue-600 mt-1">AI suggests: Professional, warm tone</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="text-sm text-gray-700">Hi Sarah! Thank you for your interest in the beautiful 3BR home on Maple Street. I'd love to schedule a showing for you this week...</div>
                      <div className="flex justify-between items-center mt-3">
                        <span className="text-xs text-green-600">✓ Generated in 2 seconds</span>
                        <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded">Send</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #fef2f2 0%, #fce7e7 100%)' }}>
        <div className="max-w-7xl mx-auto container-spacing">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6 text-balance">
              Real Estate Agents Spend 3+ Hours Daily Writing Emails
            </h2>
            <p className="subtitle text-gray-700 max-w-3xl mx-auto text-balance">
              Every minute you spend crafting the perfect email is a minute you're not selling homes. 
              Here's what's killing your productivity:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">⏱️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Time-Consuming Email Writing</h3>
              <p className="text-gray-600 mb-4">You rewrite the same email 5 times to get the tone right. Meanwhile, competitors are meeting with your potential clients.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm font-medium">💸 Cost: 3 hours/day = $75,000 in lost productivity annually</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">😰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Anxiety & Mistakes</h3>
              <p className="text-gray-600 mb-4">Worried about sounding unprofessional? One poorly worded email can kill a deal or damage your reputation permanently.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm font-medium">💸 Cost: Lost deals from communication errors</p>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl hover:shadow-2xl transition-all duration-500">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Language Barriers</h3>
              <p className="text-gray-600 mb-4">Miss out on 40% of potential clients because you can't communicate effectively in their preferred language.</p>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm font-medium">💸 Cost: Losing multilingual markets</p>
              </div>
            </div>
          </div>

          <div className="text-center glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Email Productivity Crisis</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">3.2 hrs</div>
                <div className="text-gray-700">Average time agents spend on email daily</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">87%</div>
                <div className="text-gray-700">Of agents say email is their #1 time waster</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">23%</div>
                <div className="text-gray-700">Response rate drops after 1 hour delay</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 mt-2">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600 mt-2">Emails Drafted Daily</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">5</div>
              <div className="text-gray-600 mt-2">Languages Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600">10 sec</div>
              <div className="text-gray-600 mt-2">Avg. Draft Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Write Perfect Real Estate Emails in 10 Seconds
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple 3-step process that turns hours of email writing into seconds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Install in Chrome</h3>
              <p className="text-gray-600 mb-6">Add RealtyClose to Chrome in one click. Works instantly with your Gmail - no setup required.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">✅ One-click installation</div>
                <div className="text-sm text-gray-600">✅ Works with existing Gmail</div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Select Your Context</h3>
              <p className="text-gray-600 mb-6">Choose your situation: first contact, follow-up, listing update, or contract question. Pick your tone and language.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">✅ Context-aware suggestions</div>
                <div className="text-sm text-gray-600">✅ Multiple languages supported</div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Perfect Email</h3>
              <p className="text-gray-600 mb-6">Review the AI-generated email, make any tweaks, and send. Professional, compliant, and perfectly toned every time.</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="text-sm text-gray-600">✅ Professional tone guaranteed</div>
                <div className="text-sm text-gray-600">✅ Compliance checks included</div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg">
              Try It Free - Install Extension
            </button>
            <p className="text-sm text-gray-500 mt-3">No credit card required • Free forever plan available</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-spacing">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4 text-balance">
              Simple, Transparent Pricing
            </h2>
            <p className="subtitle text-gray-600 text-balance">
              Start free, upgrade when you're ready to scale
            </p>
          </div>
          
          <div className="card-grid md:grid-cols-3 max-w-5xl mx-auto">
            {/* Free Plan */}
            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Free</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$0</div>
                <div className="text-gray-600 mb-6">Forever</div>
                <button className="w-full btn-secondary text-gray-900 py-3 rounded-xl font-semibold">
                  Install Extension
                </button>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">10 AI drafts per day</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">All tone controls</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">5 languages</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-3">✓</span>
                  <span className="text-gray-600">Basic support</span>
                </li>
              </ul>
            </div>

            {/* Pro Plan */}
            <div className="bg-brand text-white p-8 rounded-2xl shadow-xl border-4 border-brand transform scale-105">
              <div className="text-center">
                <div className="bg-white text-brand px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-xl font-semibold mb-4">Professional</h3>
                <div className="text-4xl font-bold mb-2">$19</div>
                <div className="opacity-90 mb-6">per month</div>
                <button className="w-full bg-white text-brand py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                  Start Free Trial
                </button>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="opacity-90">Unlimited AI drafts</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="opacity-90">All tone controls</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="opacity-90">5 languages</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="opacity-90">Timeline sharing</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="opacity-90">Zara AI insights</span>
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-3">✓</span>
                  <span className="opacity-90">Priority support</span>
                </li>
              </ul>
            </div>

            {/* Enterprise Plan */}
            <div className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-500">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Full Platform</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">$179</div>
                <div className="text-gray-600 mb-6">when available</div>
                <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                  Join Waitlist
                </button>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">○</span>
                  <span className="text-gray-600">Everything in Pro</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">○</span>
                  <span className="text-gray-600">MLS Integration</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">○</span>
                  <span className="text-gray-600">eSignature Suite</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">○</span>
                  <span className="text-gray-600">Commission Tracking</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">○</span>
                  <span className="text-gray-600">FinCEN Compliance</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-3">○</span>
                  <span className="text-gray-600">Complete CRM Platform</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Risk Reversal Elements */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">100% Risk-Free Guarantee</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">30-Day Money Back</h4>
                  <p className="text-gray-600 text-sm">Not satisfied? Get a full refund, no questions asked</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3a4 4 0 118 0v4m-4 12v-2m-6 2h12M6 21V9a2 2 0 012-2h8a2 2 0 012 2v12"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Cancel Anytime</h4>
                  <p className="text-gray-600 text-sm">No contracts, no cancellation fees, keep your data</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">Instant Setup</h4>
                  <p className="text-gray-600 text-sm">Start using in 30 seconds - no technical setup required</p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="font-semibold text-green-800">Free Forever Plan Available</span>
                </div>
                <p className="text-green-700 text-sm">Try RealtyClose with up to 10 emails/day at no cost, forever. No credit card required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="section-padding bg-green-50">
        <div className="max-w-7xl mx-auto container-spacing">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-6 text-balance">
              Real Results from Real Estate Professionals
            </h2>
            <p className="subtitle text-gray-600 text-balance">
              Join 500+ agents who've transformed their email productivity and increased their closing rates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "RealtyClose saved me 2.5 hours daily. I went from spending my mornings writing emails to having coffee and reviewing listings. 
                <span className="font-semibold text-blue-600"> My response time improved 4x and I closed 3 more deals this quarter.</span>"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Sarah Martinez</div>
                  <div className="text-gray-600 text-sm">Top Producer, Coldwell Banker</div>
                  <div className="text-gray-500 text-sm">San Francisco, CA</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "The multilingual support changed my business. I can now serve Spanish-speaking clients professionally. 
                <span className="font-semibold text-blue-600">Gained 40% more clients and my confidence skyrocketed.</span>"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                  <div className="text-gray-600 text-sm">Senior Agent, RE/MAX</div>
                  <div className="text-gray-500 text-sm">Austin, TX</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-gray-700 mb-6">
                "No more email anxiety! Every message is professional and perfectly toned. 
                <span className="font-semibold text-blue-600">Zero email anxiety and better client relationships.</span>"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <div className="font-semibold text-gray-900">Jennifer Kim</div>
                  <div className="text-gray-600 text-sm">Team Leader, Keller Williams</div>
                  <div className="text-gray-500 text-sm">Seattle, WA</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2.5 hrs</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Daily Time Saved</div>
              <div className="text-sm text-gray-600">Average per user</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Active Users</div>
              <div className="text-sm text-gray-600">And growing fast</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">User Satisfaction</div>
              <div className="text-sm text-gray-600">Agents love the time savings</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Average Rating</div>
              <div className="text-sm text-gray-600">From 500+ active users</div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* CTA Section */}
      <section className="py-24 bg-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Stop Wasting Hours on Email. Start Selling More Homes.
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 500+ agents who save 3+ hours daily with AI-powered email assistance
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-brand px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg group flex items-center justify-center space-x-3">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <span>Install Free Gmail Extension</span>
              <div className="bg-brand/10 text-brand text-xs px-2 py-1 rounded-full">500+ users</div>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-brand transition-colors flex items-center justify-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          
          <div className="mt-8 text-blue-100 text-sm">
            ✓ One-click installation • ✓ Works with existing Gmail • ✓ 10 free drafts daily forever
          </div>
          
          <div className="mt-6 bg-white/10 rounded-lg p-4 inline-block">
            <div className="flex items-center justify-center text-white text-sm font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              30-day money-back guarantee • No credit card required • Cancel anytime
            </div>
          </div>
        </div>
      </section>

      {/* Footer now handled by shared SiteFooter component in layout.tsx */}
    </main>
  )
}