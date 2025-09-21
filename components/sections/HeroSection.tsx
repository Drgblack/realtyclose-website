export default function HeroSection() {
  return (
    <section className="relative overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="inline-flex items-center glass-card text-blue-700 px-6 py-3 rounded-full text-sm font-semibold animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot mr-3"></div>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-medium">
                  ✨ Join 2,500+ Agents Saving 15 Hours/Week
                </span>
              </div>
            </div>
            
            <h1 className="heading-xl text-gray-900 text-balance">
              Stop Spending 3 Hours Daily on Emails.{' '}
              <span className="gradient-text">Generate Professional</span>{' '}
              Real Estate Emails in 10 Seconds
            </h1>
            
            <p className="subtitle text-gray-600 text-balance">
              From 3 hours to 10 seconds. RealtyClose AI writes perfect real estate emails instantly. 
              No setup required - works directly in your Gmail. Join agents increasing their closing rate by 23%.
            </p>
            
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-green-500 mr-2">✅</span> Available Now (FREE)
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> AI Gmail Assistant
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> 5 Language Support
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Real Estate Compliance
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> No Credit Card Required
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-blue-500 mr-2">🚀</span> Proven Results
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">📈</span> 23% Higher Close Rate
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">⏰</span> 15 Hours Saved/Week
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">💰</span> $75K+ Productivity Gained
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">⚡</span> 10 Second Email Creation
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg">
                Install Free Chrome Extension →
              </button>
              <button className="btn-secondary text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                Watch 2-Minute Demo
              </button>
            </div>
            
            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Forever Plan
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                30-Day Money Back
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 text-green-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Works with Existing Gmail
              </span>
            </div>
          </div>
          
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
            <div className="relative floating">
              <div className="dashboard-preview">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-1 bg-gray-100 rounded-lg px-4 py-2 text-sm text-gray-600">
                      gmail.com - RealtyClose Extension
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">47</div>
                        <div className="text-sm text-blue-700">Emails Today</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">8m</div>
                        <div className="text-sm text-green-700">Time Saved</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Listing Follow-up</div>
                          <div className="text-sm text-gray-600">Professional tone • Spanish</div>
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Ready</div>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Contract Update</div>
                          <div className="text-sm text-gray-600">Generating...</div>
                        </div>
                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">2s</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}