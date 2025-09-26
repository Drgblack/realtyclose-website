import { Metadata } from 'next'
import Link from 'next/link'
import HeaderLegacy from '../../components/HeaderLegacy'
import { Footer } from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Blog & Resources - RealtyClose',
  description: 'Expert tips, industry insights, and best practices for real estate professionals.',
}

const blogPosts = [
  {
    id: 1,
    title: '10 Email Templates That Convert Leads to Clients',
    excerpt: 'Discover the proven email templates that top-performing agents use to turn cold leads into hot prospects.',
    category: 'Email Marketing',
    date: 'Dec 15, 2023',
    readTime: '5 min read',
    image: '/blog/email-templates.jpg'
  },
  {
    id: 2,
    title: 'The Complete Guide to Real Estate Follow-Ups',
    excerpt: 'Learn when and how to follow up with clients to maximize your conversion rates without being pushy.',
    category: 'Best Practices',
    date: 'Dec 10, 2023',
    readTime: '7 min read',
    image: '/blog/follow-ups.jpg'
  },
  {
    id: 3,
    title: 'How AI is Transforming Real Estate Communication',
    excerpt: 'Explore how artificial intelligence is helping agents save time and close more deals than ever before.',
    category: 'Technology',
    date: 'Dec 5, 2023',
    readTime: '6 min read',
    image: '/blog/ai-real-estate.jpg'
  },
  {
    id: 4,
    title: '5 Mistakes That Kill Real Estate Deals',
    excerpt: 'Avoid these common communication mistakes that can derail your transactions at the last minute.',
    category: 'Tips & Tricks',
    date: 'Nov 30, 2023',
    readTime: '4 min read',
    image: '/blog/mistakes.jpg'
  },
  {
    id: 5,
    title: 'Building Trust Through Email: A Real Estate Guide',
    excerpt: 'Master the art of building client relationships through effective email communication strategies.',
    category: 'Relationship Building',
    date: 'Nov 25, 2023',
    readTime: '8 min read',
    image: '/blog/trust-building.jpg'
  },
  {
    id: 6,
    title: 'The Power of Personalization in Real Estate Emails',
    excerpt: 'Why personalized emails get 6x higher transaction rates and how to implement them at scale.',
    category: 'Email Marketing',
    date: 'Nov 20, 2023',
    readTime: '5 min read',
    image: '/blog/personalization.jpg'
  }
]

const categories = ['All', 'Email Marketing', 'Best Practices', 'Technology', 'Tips & Tricks', 'Relationship Building']

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <HeaderLegacy />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Blog & Resources
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Expert tips, industry insights, and best practices to help you succeed in real estate.
            </p>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-16 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-3">Get Weekly Tips & Updates</h2>
              <p className="text-blue-100 mb-6">
                Join 10,000+ real estate professionals who receive our weekly newsletter.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                />
                <button
                  type="submit"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-slate-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {post.category}
                    </span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Resources Section */}
          <div className="border-t border-slate-200 dark:border-slate-700 pt-16">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              Free Resources
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Email Templates Pack
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  50+ proven email templates for every real estate scenario.
                </p>
                <button className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
                  Download Free →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-2xl">
                <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H4a1 1 0 100-2zm10 0a2 2 0 00-2 2v6a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2h-4zm2 8a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Client Follow-Up Guide
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Complete timeline and scripts for perfect follow-ups.
                </p>
                <button className="text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300 font-medium">
                  Get Guide →
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  Email Mastery Course
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Free 5-day email course to level up your communication.
                </p>
                <button className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300 font-medium">
                  Start Course →
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer product="realtyclose" />
    </div>
  )
}