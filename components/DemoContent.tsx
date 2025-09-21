'use client'

import { useState } from 'react'

export default function DemoContent() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [showInteractiveDemo, setShowInteractiveDemo] = useState(false)

  const handleVideoLoad = () => {
    setIsVideoLoaded(true)
    
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_demo_video_loaded', {
        event_category: 'engagement',
        event_label: 'demo_page'
      })
    }
  }

  const handleInstallClick = () => {
    // Analytics tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'rc_install_cta_click', {
        event_category: 'engagement',
        event_label: 'demo_page'
      })
    }
    // Redirect to extension landing page
    window.open('/extension', '_blank')
  }

  const demoSteps = [
    {
      title: "Install Extension",
      description: "Add RealtyClose to Chrome in under 60 seconds",
      screenshot: "/demo/step1-install.png",
      details: [
        "Click 'Add to Chrome' from the Chrome Web Store",
        "Grant necessary permissions for Gmail integration",
        "See the RealtyClose icon appear in your browser toolbar"
      ]
    },
    {
      title: "Compose Email",
      description: "Start writing an email in Gmail as usual",
      screenshot: "/demo/step2-compose.png", 
      details: [
        "Open Gmail and click 'Compose'",
        "Add recipient and subject line",
        "Notice the RealtyClose panel appears automatically"
      ]
    },
    {
      title: "Choose Template",
      description: "Select from 50+ real estate email templates",
      screenshot: "/demo/step3-templates.png",
      details: [
        "Browse categories: Listing Updates, Client Follow-ups, Closing Coordination",
        "Preview templates before applying",
        "Templates automatically adapt to your context"
      ]
    },
    {
      title: "AI Generation",
      description: "Watch AI generate a personalized email in seconds",
      screenshot: "/demo/step4-generation.png",
      details: [
        "AI analyzes your email context and recipient",
        "Generates professional content matching your tone",
        "Includes relevant property details and next steps"
      ]
    },
    {
      title: "Review & Send",
      description: "Edit if needed, then send with confidence",
      screenshot: "/demo/step5-send.png",
      details: [
        "Review the generated content",
        "Make any personal touches or edits",
        "Send immediately or schedule for later"
      ]
    }
  ]

  return (
    <main className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            See RealtyClose in Action
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            Watch how real estate professionals are saving hours every day with AI-powered email generation.
          </p>
          
          {/* Demo Type Selector */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setShowInteractiveDemo(false)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                !showInteractiveDemo
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🎥 Video Walkthrough
            </button>
            <button
              onClick={() => setShowInteractiveDemo(true)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                showInteractiveDemo
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🖱️ Interactive Demo
            </button>
          </div>
        </div>

        {!showInteractiveDemo ? (
          /* Video Player */
          <div className="mb-16">
            <div className="bg-slate-900 rounded-2xl p-8 text-center">
              <div className="aspect-video bg-slate-800 rounded-xl flex items-center justify-center">
                {!isVideoLoaded ? (
                  <div className="text-center">
                    <button 
                      onClick={handleVideoLoad}
                      className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </button>
                    <p className="text-white text-lg mb-2">RealtyClose Full Demo</p>
                    <p className="text-slate-400">Click to play (3:24)</p>
                  </div>
                ) : (
                  <div className="w-full h-full bg-slate-700 rounded-lg flex items-center justify-center relative">
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg mb-2">Full Product Walkthrough</p>
                      <p className="text-slate-400 mb-4">See RealtyClose in action from start to finish</p>
                      <div className="bg-blue-600/20 border border-blue-500 rounded-lg p-4 text-sm">
                        🎬 Professional demo video coming soon!<br/>
                        Contact us for a live demo in the meantime.
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Video Benefits */}
              <div className="grid md:grid-cols-3 gap-6 mt-8 text-left">
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">3-Minute Overview</h3>
                  <p className="text-slate-300 text-sm">Complete walkthrough from installation to sending your first AI-generated email</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Real Use Cases</h3>
                  <p className="text-slate-300 text-sm">See actual scenarios: listing updates, client follow-ups, closing coordination</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-6">
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center mb-3">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Quick Setup</h3>
                  <p className="text-slate-300 text-sm">Watch the 60-second installation process and immediate Gmail integration</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Interactive Step-by-Step Demo */
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
                Interactive Step-by-Step Walkthrough
              </h2>
              
              {/* Step Navigation */}
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {demoSteps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      activeStep === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700'
                    }`}
                  >
                    {index + 1}. {step.title}
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <div className="bg-white dark:bg-slate-800 rounded-xl p-8">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* Step Screenshot/Mockup */}
                  <div className="order-2 lg:order-1">
                    <div className="aspect-video bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center border border-slate-200 dark:border-slate-600">
                      <div className="text-center text-slate-500 dark:text-slate-400">
                        <div className="w-16 h-16 bg-slate-200 dark:bg-slate-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-sm">
                          Step {activeStep + 1} Screenshot<br/>
                          <span className="text-xs opacity-75">{demoSteps[activeStep].title}</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Step Details */}
                  <div className="order-1 lg:order-2">
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center mr-3 font-bold">
                        {activeStep + 1}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                          {demoSteps[activeStep].title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {demoSteps[activeStep].description}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {demoSteps[activeStep].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-slate-700 dark:text-slate-300">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Navigation Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                        disabled={activeStep === 0}
                        className="px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        ← Previous
                      </button>
                      <button
                        onClick={() => setActiveStep(Math.min(demoSteps.length - 1, activeStep + 1))}
                        disabled={activeStep === demoSteps.length - 1}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6">
                <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
                  <span>Step {activeStep + 1} of {demoSteps.length}</span>
                  <span>{Math.round(((activeStep + 1) / demoSteps.length) * 100)}% Complete</span>
                </div>
                <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((activeStep + 1) / demoSteps.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Use Case Scenarios */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Real-World Scenarios
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Client Follow-up</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                A busy agent needs to follow up with 15 potential buyers after a weekend of showings.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Without RealtyClose:</strong> 2+ hours writing personalized emails<br/>
                  <strong>With RealtyClose:</strong> 15 minutes using AI templates
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Listing Updates</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Market conditions change and you need to update 30 clients about their home search criteria.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Without RealtyClose:</strong> 3+ hours crafting individual updates<br/>
                  <strong>With RealtyClose:</strong> 20 minutes with smart templates
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Closing Coordination</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Two days before closing, you need to coordinate with buyers, sellers, lenders, and attorneys.
              </p>
              <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-4">
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  <strong>Without RealtyClose:</strong> 1+ hour per party, stress about details<br/>
                  <strong>With RealtyClose:</strong> 10 minutes total, all details covered
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features from Demo */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            What You'll See in the Demo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">60-Second Setup</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">From Chrome Web Store to first email in under a minute</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">AI Magic</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Watch AI understand context and generate perfect emails</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">50+ Templates</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Professional templates for every real estate scenario</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Your Brand</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">Customize templates to match your personal style</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Install RealtyClose today and start generating professional emails in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleInstallClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Install Free Extension
            </button>
            <a
              href="mailto:hello@realtyclose.com?subject=Demo%20Follow-up"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Schedule Personal Demo
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                How long does setup take?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Installation takes less than 60 seconds. Simply add the Chrome extension and you're ready to start generating emails.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Does it work with Outlook?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Currently, RealtyClose is optimized for Gmail. Outlook support is coming soon - join our waitlist to be notified.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Is my data secure?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Yes. We use bank-grade encryption and are GDPR compliant. Your data never leaves our secure servers.
              </p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                Can I customize the templates?
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Absolutely. You can customize templates, add your branding, and create custom templates for specific scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}