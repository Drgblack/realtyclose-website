import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Case Studies - RealtyClose Success Stories',
  description: 'Real results from real estate professionals using RealtyClose. See how agents increased their close rates by 23% and saved 15+ hours per week.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "How Sarah Mitchell Increased Her Close Rate by 35% in 6 Months",
      agent: "Sarah Mitchell",
      brokerage: "Coldwell Banker San Francisco",
      location: "San Francisco, CA",
      timeframe: "6 months",
      avatar: "SM",
      metrics: {
        timesSaved: "18 hours/week",
        closeRateIncrease: "35%",
        additionalRevenue: "$284,000",
        emailResponseRate: "67%"
      },
      challenge: "Spending 25+ hours per week on email communication, struggling to maintain consistent follow-up with 150+ active leads",
      solution: "Implemented AI-powered email templates and automated follow-up sequences using RealtyClose",
      results: [
        "Reduced email writing time from 25 hours to 7 hours per week",
        "Increased email response rate from 12% to 67%",
        "Improved close rate from 8% to 35%",
        "Generated an additional $284,000 in commission revenue"
      ],
      testimonial: "RealtyClose has been a complete game-changer for my business. I've gone from spending my entire evening writing emails to having intelligent, personalized emails generated in seconds. My clients can't tell the difference, but my bank account sure can!"
    },
    {
      id: 2,
      title: "Team of 5 Agents Saves 90 Hours Weekly with AI Email Automation",
      agent: "Jennifer Chen",
      brokerage: "Keller Williams Seattle",
      location: "Seattle, WA",
      timeframe: "4 months",
      avatar: "JC",
      metrics: {
        timesSaved: "90 hours/week (team)",
        closeRateIncrease: "28%",
        additionalRevenue: "$750,000",
        emailResponseRate: "71%"
      },
      challenge: "5-person team struggling with inconsistent email communication, missed follow-ups, and maintaining brand voice across all agents",
      solution: "Deployed RealtyClose Team plan with shared templates, automated sequences, and team analytics dashboard",
      results: [
        "Team-wide time savings of 90 hours per week",
        "Standardized brand voice across all team communications",
        "Zero missed follow-ups with automated reminder system",
        "Team close rate increased from 11% to 28%"
      ],
      testimonial: "Managing email consistency across our team was a nightmare before RealtyClose. Now we have a unified voice, automated follow-ups, and our junior agents sound like seasoned professionals from day one."
    },
    {
      id: 3,
      title: "Luxury Agent Doubles High-End Sales with Premium Email Sequences",
      agent: "Marcus Rodriguez",
      brokerage: "RE/MAX Austin Luxury",
      location: "Austin, TX",
      timeframe: "8 months",
      avatar: "MR",
      metrics: {
        timesSaved: "22 hours/week",
        closeRateIncrease: "42%",
        additionalRevenue: "$1.2M",
        emailResponseRate: "78%"
      },
      challenge: "Luxury clients expected highly personalized, sophisticated communication. Manual email crafting was time-intensive and inconsistent",
      solution: "Customized RealtyClose AI with luxury market templates and high-end personalization features",
      results: [
        "Doubled luxury property sales from $2.1M to $4.3M annually",
        "Achieved 78% email response rate (industry average: 18%)",
        "Reduced time per email from 45 minutes to 3 minutes",
        "Maintained premium brand positioning with AI assistance"
      ],
      testimonial: "My luxury clients expect perfection in every interaction. RealtyClose helps me deliver that level of sophistication at scale, while giving me back my evenings and weekends."
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Real Success Stories
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              See how real estate professionals across the country are using RealtyClose to transform 
              their businesses, save time, and dramatically increase their close rates.
            </p>
            
            {/* Aggregate Stats */}
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2,500+</div>
                <div className="text-slate-600 dark:text-slate-300">Agents Using RealtyClose</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">$50M+</div>
                <div className="text-slate-600 dark:text-slate-300">Additional Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">15hrs</div>
                <div className="text-slate-600 dark:text-slate-300">Average Weekly Time Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">23%</div>
                <div className="text-slate-600 dark:text-slate-300">Average Close Rate Increase</div>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {study.avatar}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                          {study.title}
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                          {study.agent} • {study.brokerage} • {study.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                        {study.timeframe} study
                      </div>
                    </div>
                  </div>

                  {/* Key Metrics */}
                  <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{study.metrics.timesSaved}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">Time Saved</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">{study.metrics.closeRateIncrease}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">Close Rate Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">{study.metrics.additionalRevenue}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">Additional Revenue</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">{study.metrics.emailResponseRate}</div>
                      <div className="text-slate-600 dark:text-slate-400 text-sm">Email Response Rate</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                          <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                          </svg>
                          The Challenge
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                          <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                          The Solution
                        </h3>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                          {study.solution}
                        </p>
                      </div>
                    </div>

                    {/* Results */}
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        The Results
                      </h3>
                      <ul className="space-y-3">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-slate-700 dark:text-slate-300">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="mt-8 bg-slate-50 dark:bg-slate-700/50 rounded-xl p-6">
                    <div className="flex items-start space-x-4">
                      <svg className="w-8 h-8 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                      <div>
                        <blockquote className="text-slate-700 dark:text-slate-300 italic text-lg leading-relaxed mb-4">
                          "{study.testimonial}"
                        </blockquote>
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                            {study.avatar}
                          </div>
                          <div>
                            <div className="font-semibold text-slate-900 dark:text-white">{study.agent}</div>
                            <div className="text-slate-600 dark:text-slate-400 text-sm">{study.brokerage}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ROI Calculator Section */}
          <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Calculate Your Potential ROI</h2>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto">
                Based on data from 2,500+ agents, here's what RealtyClose could mean for your business:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">15 Hours</div>
                <div className="text-blue-100 text-sm mb-3">Weekly time savings</div>
                <div className="text-blue-200 text-xs">@ $100/hour = $1,500/week</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">23%</div>
                <div className="text-blue-100 text-sm mb-3">Average close rate increase</div>
                <div className="text-blue-200 text-xs">3 more deals/month = $9,000</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold mb-2">$84,000</div>
                <div className="text-blue-100 text-sm mb-3">Average annual ROI</div>
                <div className="text-blue-200 text-xs">Cost: $348/year | Return: 24,000%</div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-blue-100 mb-6 text-lg">
                <strong>Conservative estimate:</strong> RealtyClose pays for itself in the first week
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/extension"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg"
                >
                  Start Your Success Story
                </Link>
                <Link
                  href="/demo"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
                >
                  See Live Demo
                </Link>
              </div>
            </div>
          </div>

          {/* Additional Success Metrics */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Success Across All Markets
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-blue-600 mb-2">92%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">of agents see results in first month</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">67%</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">average email response rate improvement</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-purple-600 mb-2">4.9/5</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">average user satisfaction score</div>
              </div>
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 text-center">
                <div className="text-2xl font-bold text-orange-600 mb-2">6 min</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">average time to see first results</div>
              </div>
            </div>
          </div>

          {/* Industries Served */}
          <div className="mt-16">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white text-center mb-8">
              Trusted by Professionals in Every Market Segment
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Residential Sales",
                "Luxury Properties", 
                "Commercial Real Estate",
                "Property Management",
                "Real Estate Investment",
                "New Construction"
              ].map((segment, index) => (
                <div key={index} className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 text-center">
                  <div className="text-slate-700 dark:text-slate-300 text-sm font-medium">
                    {segment}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join 2,500+ real estate professionals who are already transforming their businesses with RealtyClose.
            </p>
            <Link
              href="/extension"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Started Free Today
            </Link>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}