import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Help Center - RealtyClose',
  description: 'Get help with RealtyClose. Find answers to common questions, installation guides, and troubleshooting tips.',
}

export default function HelpPage() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "New to RealtyClose? Start here for setup and basics",
      icon: "🚀",
      articles: [
        { title: "Installing the Chrome Extension", href: "/help/installation" },
        { title: "Setting Up Your Account", href: "/help/account-setup" },
        { title: "First Email in 60 Seconds", href: "/help/first-email" },
        { title: "Gmail Integration Guide", href: "/help/gmail-integration" }
      ]
    },
    {
      title: "Email Templates",
      description: "Master the art of AI-powered email generation",
      icon: "✉️",
      articles: [
        { title: "Using Pre-built Templates", href: "/help/templates" },
        { title: "Creating Custom Templates", href: "/help/custom-templates" },
        { title: "Template Variables & Personalization", href: "/help/personalization" },
        { title: "Best Practices for Real Estate Emails", href: "/help/best-practices" }
      ]
    },
    {
      title: "AI Features",
      description: "Get the most out of AI-powered email generation",
      icon: "🤖",
      articles: [
        { title: "How AI Understands Context", href: "/help/ai-context" },
        { title: "Training AI to Match Your Voice", href: "/help/ai-training" },
        { title: "Advanced AI Settings", href: "/help/ai-settings" },
        { title: "AI Suggestions and Improvements", href: "/help/ai-suggestions" }
      ]
    },
    {
      title: "Productivity Features",
      description: "Save time with automation and smart workflows",
      icon: "⚡",
      articles: [
        { title: "Follow-up Reminders", href: "/help/reminders" },
        { title: "Email Scheduling", href: "/help/scheduling" },
        { title: "Client Contact Management", href: "/help/contacts" },
        { title: "Analytics and Reporting", href: "/help/analytics" }
      ]
    },
    {
      title: "Troubleshooting",
      description: "Fix common issues and get back to work quickly",
      icon: "🛠️",
      articles: [
        { title: "Extension Not Loading", href: "/help/extension-loading" },
        { title: "Gmail Permission Issues", href: "/help/permissions" },
        { title: "Template Not Generating", href: "/help/generation-issues" },
        { title: "Account & Billing Questions", href: "/help/billing" }
      ]
    },
    {
      title: "Advanced Usage",
      description: "Power user tips and advanced configurations",
      icon: "⚙️",
      articles: [
        { title: "Team Management & Sharing", href: "/help/team-management" },
        { title: "Integration with CRM Systems", href: "/help/crm-integration" },
        { title: "Custom Branding & Signatures", href: "/help/branding" },
        { title: "API Access & Automation", href: "/help/api" }
      ]
    }
  ]

  const popularArticles = [
    {
      title: "How to install RealtyClose in 60 seconds",
      category: "Getting Started",
      readTime: "2 min read",
      href: "/help/installation"
    },
    {
      title: "Creating your first AI-generated email",
      category: "Email Templates", 
      readTime: "3 min read",
      href: "/help/first-email"
    },
    {
      title: "Best practices for real estate email communication", 
      category: "Email Templates",
      readTime: "5 min read",
      href: "/help/best-practices"
    },
    {
      title: "Troubleshooting Gmail permission issues",
      category: "Troubleshooting",
      readTime: "4 min read", 
      href: "/help/permissions"
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
              Help Center
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              Everything you need to know about RealtyClose. Get started quickly with our guides, 
              tutorials, and troubleshooting tips.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="search"
                  className="block w-full pl-10 pr-3 py-4 border border-slate-300 dark:border-slate-600 rounded-lg leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                  placeholder="Search help articles..."
                />
              </div>
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Popular Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.href}
                  className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
                >
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
                    <span className="text-blue-600 dark:text-blue-400">{article.category}</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Browse by Category</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start mb-6">
                    <span className="text-2xl mr-4">{category.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {category.articles.map((article, articleIndex) => (
                      <li key={articleIndex}>
                        <Link
                          href={article.href}
                          className="flex items-center text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                          <svg className="w-4 h-4 mr-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                    <Link
                      href={`/help/category/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      View all {category.title.toLowerCase()} articles →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Watch Video Tutorials</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Visual learner? Check out our video tutorials and walkthroughs.
              </p>
              <Link
                href="/demo"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                View Demo →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Live Chat Support</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Need immediate help? Chat with our support team in real-time.
              </p>
              <button
                onClick={() => {
                  // This would trigger the live chat widget
                  const chatButton = document.querySelector('[data-chat-trigger]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Start Chat →
              </button>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Prefer email? Send us your questions and we'll respond within 2 hours.
              </p>
              <Link
                href="mailto:support@realtyclose.com"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                Email Support →
              </Link>
            </div>
          </div>

          {/* Still Need Help */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed with RealtyClose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Contact Support
              </Link>
              <Link
                href="mailto:hello@realtyclose.com?subject=Schedule%20Demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}