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
                  ✨ Gmail Extension Live Now
                </span>
              </div>
            </div>
            <h1 className="heading-xl text-gray-900 text-balance">
              The Enterprise Real Estate Platform{' '}
              <span className="gradient-text">Starting</span>{' '}
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
                    <span className="text-green-500 mr-2">✓</span> Multi-language drafting
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Timeline sharing
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span> Smart compliance checks
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                  <span className="text-blue-500 mr-2">🔜</span> Coming Soon
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">○</span> MLS Integration
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">○</span> eSignature Suite
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">○</span> Commission Tracking
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">○</span> Full CRM Platform
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:justify-start justify-center">
              <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg">
                Start Free with Gmail Extension
              </button>
              <button className="btn-secondary text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105">
                See Full Platform Roadmap →
              </button>
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
                        <div className="text-2xl font-bold text-blue-600">10</div>
                        <div className="text-sm text-blue-700">Daily Drafts</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">5</div>
                        <div className="text-sm text-green-700">Languages</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">Email Draft</div>
                          <div className="text-sm text-gray-600">Professional tone</div>
                        </div>
                        <div className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">Ready</div>
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