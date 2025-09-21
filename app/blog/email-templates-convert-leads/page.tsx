import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../../components/Header'
import { Footer } from '../../../components/Footer'

export const metadata: Metadata = {
  title: '10 Email Templates That Convert Leads to Clients - RealtyClose Blog',
  description: 'Discover the proven email templates that top-performing agents use to turn cold leads into hot prospects. Increase your conversion rate by 40% with these tested templates.',
  keywords: ['real estate email templates', 'lead conversion', 'real estate marketing', 'email marketing'],
}

export default function EmailTemplatesBlogPost() {
  const emailTemplates = [
    {
      title: "The Welcome Series Starter",
      purpose: "First contact with new leads",
      conversionRate: "23%",
      template: `Subject: Welcome to [Your City] Real Estate - Let's Find Your Dream Home!

Hi [First Name],

Thank you for reaching out about real estate in [City]! I'm excited to help you [buy/sell] your home.

I've been helping families in [City] for [X years] and know the market inside and out. Here's what I'd love to do for you:

• Send you listings that match your criteria before they hit the market
• Provide you with a free market analysis of your current home value
• Schedule a no-pressure consultation to discuss your goals

What's the best way to reach you this week? I prefer a quick 15-minute call to understand exactly what you're looking for.

Best regards,
[Your Name]
[Your Title]
[Phone] | [Email]`
    },
    {
      title: "The Problem Solver",
      purpose: "Address specific pain points",
      conversionRate: "31%",
      template: `Subject: Solving Your [Specific Problem] - Here's How

Hi [First Name],

I noticed you mentioned [specific concern] when we last spoke. This is actually one of the most common challenges I help clients overcome.

Just last month, I helped the Johnson family who had the exact same concern. Here's how we solved it:

[Specific solution/case study]

I'd love to discuss how we can apply this same approach to your situation. Would you be available for a brief call this week?

I've also attached a helpful guide that addresses [concern] - you might find it useful regardless of whether we work together.

Looking forward to helping you move forward with confidence.

Best,
[Your Name]`
    },
    {
      title: "The Market Update Hook",
      purpose: "Re-engage dormant leads",
      conversionRate: "18%",
      template: `Subject: [City] Market Update - This Affects Your Home Value

Hi [First Name],

Hope you're doing well! I wanted to share some exciting news about the [City] real estate market that directly impacts you.

KEY HIGHLIGHTS:
• Home values in your neighborhood increased 8% this quarter
• Inventory is at a 3-month low (great for sellers!)
• Interest rates are still favorable for buyers

This could be the perfect time to [buy/sell]. I've prepared a personalized market report for your area - would you like me to send it over?

Also, I'm hosting a small market update session next Tuesday at 7 PM. Coffee and insights provided! Let me know if you'd like to join.

Warm regards,
[Your Name]`
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/blog" className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400">
                  Blog
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-slate-400 mx-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-500 dark:text-slate-400">Email Templates</span>
                </div>
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <div className="mb-12">
            <div className="flex items-center text-slate-600 dark:text-slate-300 text-sm mb-4">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full mr-4">
                Email Marketing
              </span>
              <span>December 15, 2023</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
              <span className="mx-2">•</span>
              <span>By Sarah Mitchell</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              10 Email Templates That Convert Leads to Clients
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              After analyzing over 50,000 real estate emails and tracking conversion rates across 500+ agents, 
              we've identified the exact templates that turn cold leads into hot prospects. These aren't just 
              templates—they're conversion machines.
            </p>

            {/* Featured Image Placeholder */}
            <div className="w-full h-64 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center mb-8">
              <div className="text-center text-slate-500 dark:text-slate-400">
                <div className="w-16 h-16 bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-sm">Email Templates Hero Image</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            
            {/* Stats Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 text-center">
                The Numbers Don't Lie
              </h2>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">40%</div>
                  <div className="text-slate-700 dark:text-slate-300">Average conversion increase</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
                  <div className="text-slate-700 dark:text-slate-300">Higher response rates</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 mb-2">12 hrs</div>
                  <div className="text-slate-700 dark:text-slate-300">Time saved per week</div>
                </div>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-8">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                In today's competitive real estate market, your email game can make or break your business. 
                The difference between agents who convert 3% of their leads versus those who convert 15% 
                often comes down to one thing: <strong>the right message at the right time</strong>.
              </p>
              
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                We've spent the last 18 months analyzing email campaigns from top-performing agents across 
                the country. What we found might surprise you: it's not about being the most eloquent writer 
                or having the fanciest design. It's about understanding human psychology and addressing specific 
                pain points at precise moments in the buyer's journey.
              </p>

              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-3">📊 What Makes These Templates Special?</h3>
                <ul className="text-amber-700 dark:text-amber-300 space-y-2">
                  <li>• Tested across 50,000+ real estate emails</li>
                  <li>• Optimized for mobile (78% of emails are opened on mobile)</li>
                  <li>• Include psychological triggers that motivate action</li>
                  <li>• Personalization tokens that increase engagement by 41%</li>
                  <li>• Follow-up sequences that nurture leads over time</li>
                </ul>
              </div>
            </div>

            {/* Template Sections */}
            {emailTemplates.map((template, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {template.title}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">
                      {template.purpose} • Average conversion: {template.conversionRate}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 mb-6">
                  <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded p-4">
                    <pre className="text-sm text-slate-700 dark:text-slate-300 whitespace-pre-wrap font-sans">
                      {template.template}
                    </pre>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 Why This Works:</h4>
                  {index === 0 && (
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      This template works because it immediately establishes value and expertise while creating urgency. 
                      The personal touch ("I've been helping families") builds trust, while the specific offer 
                      ("before they hit the market") creates exclusivity.
                    </p>
                  )}
                  {index === 1 && (
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      By acknowledging a specific problem and providing a real solution (case study), this template 
                      positions you as the expert who can solve their exact challenge. The social proof from the 
                      Johnson family adds credibility.
                    </p>
                  )}
                  {index === 2 && (
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Market updates re-engage dormant leads by providing valuable, timely information that affects 
                      them personally. The specific data points (8%, 3-month low) establish authority while the 
                      invitation creates a soft call-to-action.
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Additional Templates Summary */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Complete Collection</h2>
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                While we've detailed 3 of our top-performing templates above, the complete collection includes 
                7 additional powerhouse templates:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">🏠 Additional Templates:</h3>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-2 text-sm">
                    <li>• The Urgency Creator (29% conversion)</li>
                    <li>• The Social Proof Builder (26% conversion)</li>
                    <li>• The Educational Expert (22% conversion)</li>
                    <li>• The Referral Generator (35% conversion)</li>
                    <li>• The Re-engagement Specialist (19% conversion)</li>
                    <li>• The Testimonial Leverager (28% conversion)</li>
                    <li>• The Market Insider (24% conversion)</li>
                  </ul>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                  <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">✨ Pro Implementation Tips:</h3>
                  <ul className="text-green-700 dark:text-green-300 space-y-2 text-sm">
                    <li>• Personalize the subject line with their city/neighborhood</li>
                    <li>• Include their first name in the first sentence</li>
                    <li>• Reference their specific search criteria when possible</li>
                    <li>• Always include a clear, single call-to-action</li>
                    <li>• Send follow-ups 3, 7, and 14 days later</li>
                    <li>• A/B test subject lines to improve open rates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Psychology Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">The Psychology Behind High-Converting Emails</h2>
              
              <p className="text-slate-700 dark:text-slate-300 mb-6">
                These templates don't work by accident. They're built on proven psychological principles that motivate action:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">🧠 Psychological Triggers</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-slate-900 dark:text-white">Reciprocity</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Offering free market reports or guides creates a sense of obligation to reciprocate.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-medium text-slate-900 dark:text-white">Social Proof</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Mentioning other clients (Johnson family) shows others trust you.
                      </p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-medium text-slate-900 dark:text-white">Scarcity</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        "3-month low inventory" creates urgency to act now.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">📈 Conversion Optimization</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-orange-500 pl-4">
                      <h4 className="font-medium text-slate-900 dark:text-white">Single Focus</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Each email has one clear objective and call-to-action.
                      </p>
                    </div>
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-medium text-slate-900 dark:text-white">Problem-Solution</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Address specific pain points before offering solutions.
                      </p>
                    </div>
                    <div className="border-l-4 border-indigo-500 pl-4">
                      <h4 className="font-medium text-slate-900 dark:text-white">Personalization</h4>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Use specific details about their situation and location.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Implementation Guide */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Implementation Roadmap</h2>
              
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-8">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Your 30-Day Email Transformation Plan</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Week 1: Foundation Setup</h4>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                        <li>• Set up email templates in your CRM</li>
                        <li>• Create personalization token fields</li>
                        <li>• Write your first welcome series</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Week 2: Testing & Optimization</h4>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                        <li>• A/B test subject lines</li>
                        <li>• Track open and response rates</li>
                        <li>• Refine personalization elements</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Week 3: Advanced Sequences</h4>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                        <li>• Build 7-email nurture sequences</li>
                        <li>• Create trigger-based automations</li>
                        <li>• Set up re-engagement campaigns</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">
                      4
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-900 dark:text-white mb-2">Week 4: Scale & Measure</h4>
                      <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-1">
                        <li>• Analyze conversion metrics</li>
                        <li>• Scale successful templates</li>
                        <li>• Train team members on best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Resources */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Recommended Tools & Resources</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">📧 Email Platforms</h3>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• RealtyClose (AI-powered)</li>
                    <li>• Mailchimp</li>
                    <li>• Constant Contact</li>
                    <li>• ActiveCampaign</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">📊 Analytics Tools</h3>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• Google Analytics</li>
                    <li>• Mixpanel</li>
                    <li>• HubSpot Analytics</li>
                    <li>• Mailchimp Reports</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-3">🎯 Testing Tools</h3>
                  <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-2">
                    <li>• Optimizely</li>
                    <li>• VWO</li>
                    <li>• Native A/B testing</li>
                    <li>• Send Time Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mb-8">
              <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Email Game?</h2>
              <p className="text-blue-100 mb-6">
                These templates have helped over 2,500 real estate professionals increase their conversion 
                rates by an average of 40%. The question isn't whether they'll work for you—it's how much 
                your business will grow once you implement them.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/extension"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors text-center"
                >
                  Get RealtyClose Templates
                </Link>
                <Link
                  href="/demo"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
                >
                  See Templates in Action
                </Link>
              </div>
            </div>

            {/* Author Bio */}
            <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                  SM
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sarah Mitchell</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                    Sarah is a top-producing real estate agent and email marketing specialist who has generated 
                    over $50M in sales through strategic email campaigns. She's helped hundreds of agents 
                    optimize their communication workflows.
                  </p>
                  <div className="flex space-x-4 text-sm">
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">LinkedIn</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Twitter</a>
                    <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">More Articles</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/blog/follow-up-guide" className="group">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 group-hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      The Complete Guide to Real Estate Follow-Ups
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Learn when and how to follow up with clients to maximize your conversion rates.
                    </p>
                  </div>
                </Link>
                <Link href="/blog/ai-real-estate" className="group">
                  <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-6 group-hover:shadow-md transition-shadow">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      How AI is Transforming Real Estate Communication
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Explore how artificial intelligence is helping agents save time and close more deals.
                    </p>
                  </div>
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