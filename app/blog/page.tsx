import { Metadata } from 'next'
import Navigation from '@/components/ui/Navigation'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Blog - RealtyClose',
  description: 'Stay updated with the latest real estate closing tips, industry insights, and RealtyClose product updates.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "5 Common Closing Delays and How to Avoid Them",
      excerpt: "Learn about the most frequent causes of closing delays and practical strategies to prevent them from derailing your deals.",
      date: "March 15, 2024",
      category: "Tips & Guides",
      slug: "closing-delays-prevention"
    },
    {
      title: "The Ultimate Real Estate Closing Checklist",
      excerpt: "A comprehensive checklist to ensure nothing falls through the cracks during your next real estate closing.",
      date: "March 10, 2024",
      category: "Resources",
      slug: "ultimate-closing-checklist"
    },
    {
      title: "How Technology is Transforming Real Estate Closings",
      excerpt: "Explore how modern technology is making real estate closings faster, more secure, and less stressful for everyone involved.",
      date: "March 5, 2024",
      category: "Industry Insights",
      slug: "technology-transforming-closings"
    },
    {
      title: "Building Client Trust Through Better Communication",
      excerpt: "Discover communication strategies that keep clients informed, reduce anxiety, and build lasting relationships.",
      date: "February 28, 2024",
      category: "Client Relations",
      slug: "building-client-trust"
    },
    {
      title: "Document Management Best Practices for Agents",
      excerpt: "Organize, secure, and share closing documents efficiently with these proven document management strategies.",
      date: "February 22, 2024",
      category: "Best Practices",
      slug: "document-management-best-practices"
    },
    {
      title: "Understanding Closing Costs: A Complete Guide",
      excerpt: "Help your clients understand closing costs with this comprehensive breakdown of fees and expenses.",
      date: "February 15, 2024",
      category: "Education",
      slug: "understanding-closing-costs"
    }
  ]

  return (
    <main>
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            RealtyClose <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, tips, and best practices for real estate professionals.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-16">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              <span className="text-blue-100 mx-3">•</span>
              <span className="text-blue-100 text-sm">March 15, 2024</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">5 Common Closing Delays and How to Avoid Them</h2>
            <p className="text-blue-100 mb-6 text-lg">
              Learn about the most frequent causes of closing delays and practical strategies to prevent them from derailing your deals.
            </p>
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Read Article
            </button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-400 mx-3">•</span>
                    <span className="text-gray-500 text-sm">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get the latest real estate insights and RealtyClose updates delivered to your inbox.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}