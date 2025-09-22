import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/app/components/PageShell";

export const metadata: Metadata = {
  title: "Blog | RealtyClose",
  description: "Real estate insights, AI email tips, and industry best practices from the RealtyClose team.",
};

// Blog post data (in a real app, this would come from a CMS or database)
const blogPosts = [
  {
    id: 1,
    title: "10 AI Email Templates That Close More Deals",
    excerpt: "Discover proven email templates powered by AI that convert leads into clients faster than traditional approaches.",
    date: "January 15, 2025",
    readTime: "6 min read",
    category: "Templates",
    slug: "ai-email-templates-close-deals",
    author: "Sarah Chen",
    authorTitle: "Real Estate Tech Consultant"
  },
  {
    id: 2,
    title: "The Future of Real Estate Communication",
    excerpt: "How AI is revolutionizing client communication in real estate and what it means for your business.",
    date: "January 10, 2025",
    readTime: "4 min read",
    category: "Industry Insights",
    slug: "future-real-estate-communication",
    author: "Michael Torres",
    authorTitle: "Senior Product Manager"
  },
  {
    id: 3,
    title: "Gmail Integration Best Practices for Agents",
    excerpt: "Maximize your productivity with these Gmail workflow optimizations specifically designed for real estate professionals.",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Productivity",
    slug: "gmail-integration-best-practices",
    author: "Jessica Park",
    authorTitle: "Productivity Coach"
  },
  {
    id: 4,
    title: "Protecting Client Privacy in Digital Communications",
    excerpt: "Essential security measures every real estate agent should implement when communicating with clients online.",
    date: "December 28, 2024",
    readTime: "5 min read",
    category: "Security",
    slug: "protecting-client-privacy",
    author: "David Kim",
    authorTitle: "Security Specialist"
  },
  {
    id: 5,
    title: "Automating Follow-ups Without Losing Personal Touch",
    excerpt: "Strike the perfect balance between efficiency and personalization in your client follow-up strategy.",
    date: "December 20, 2024",
    readTime: "7 min read",
    category: "Best Practices",
    slug: "automating-followups-personal-touch",
    author: "Elena Rodriguez",
    authorTitle: "Real Estate Coach"
  },
  {
    id: 6,
    title: "RealtyClose vs Traditional Email: ROI Analysis",
    excerpt: "A comprehensive breakdown of time savings and increased conversion rates with AI-powered email assistance.",
    date: "December 15, 2024",
    readTime: "9 min read",
    category: "Case Studies",
    slug: "realtyclose-vs-traditional-email-roi",
    author: "Alex Johnson",
    authorTitle: "Data Analyst"
  }
];

const categories = ["All", "Templates", "Industry Insights", "Productivity", "Security", "Best Practices", "Case Studies"];

export default function BlogPage() {
  return (
    <PageShell title="Real Estate Insights & Tips">
      {/* Blog Introduction */}
      <div className="mb-12 text-center">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>Expert insights for modern real estate professionals</strong>
        </p>
        <p className="text-slate-300">
          AI email strategies, productivity tips, and industry best practices to help you close more deals
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "All" 
                  ? "bg-blue-500 text-white" 
                  : "bg-slate-700/30 border border-slate-600/50 text-slate-300 hover:bg-slate-600/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <span className="text-blue-300 text-sm font-medium">📌 Featured Post</span>
            <h2 className="text-2xl font-bold text-white mt-2 mb-4">
              10 AI Email Templates That Close More Deals
            </h2>
            <p className="text-slate-300 mb-6">
              Discover proven email templates powered by AI that convert leads into clients faster than traditional approaches. These templates have been tested with over 500 real estate professionals.
            </p>
            <div className="flex items-center text-slate-400 text-sm mb-6">
              <span>By Sarah Chen</span>
              <span className="mx-3">•</span>
              <span>January 15, 2025</span>
              <span className="mx-3">•</span>
              <span>6 min read</span>
              <span className="mx-3">•</span>
              <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Templates</span>
            </div>
            <Link href="/blog/ai-email-templates-close-deals" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition-colors inline-block">
              Read Full Article →
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📧</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-300 mb-2">AI-Powered Templates</h4>
              <p className="text-slate-400 text-sm">
                Proven email templates that convert 3x better than generic messages
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-xl p-8 my-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">📰 Stay Updated</h2>
          <p className="text-slate-300 mb-6">
            Get the latest real estate AI insights and productivity tips delivered to your inbox weekly
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-medium transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-slate-400 text-xs mt-3">
            No spam. Unsubscribe anytime. 2,000+ agents already subscribed.
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 not-prose">
        {blogPosts.slice(1).map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <article className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 hover:bg-slate-600/30 transition-colors group cursor-pointer">
              <div className="mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  post.category === "Templates" ? "bg-blue-500/20 text-blue-300" :
                  post.category === "Industry Insights" ? "bg-green-500/20 text-green-300" :
                  post.category === "Productivity" ? "bg-purple-500/20 text-purple-300" :
                  post.category === "Security" ? "bg-red-500/20 text-red-300" :
                  post.category === "Best Practices" ? "bg-yellow-500/20 text-yellow-300" :
                  "bg-orange-500/20 text-orange-300"
                }`}>
                  {post.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {post.title}
              </h3>
              
              <p className="text-slate-300 mb-4 text-sm leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <div className="flex items-center">
                  <span>By {post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="text-blue-400 group-hover:text-blue-300 font-medium transition-colors">
                  Read more →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Popular Topics */}
      <div className="my-16">
        <h2 className="text-center mb-8">Popular Topics</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🤖</span>
            </div>
            <h4 className="font-semibold text-blue-300 mb-2">AI Email Writing</h4>
            <p className="text-slate-400 text-sm">Templates, tips, and best practices</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">📈</span>
            </div>
            <h4 className="font-semibold text-green-300 mb-2">Lead Conversion</h4>
            <p className="text-slate-400 text-sm">Strategies to close more deals</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="font-semibold text-purple-300 mb-2">Productivity Hacks</h4>
            <p className="text-slate-400 text-sm">Workflow optimization techniques</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">📊</span>
            </div>
            <h4 className="font-semibold text-orange-300 mb-2">Industry Trends</h4>
            <p className="text-slate-400 text-sm">Market insights and forecasts</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to implement what you've learned?</h2>
        <p className="text-slate-300 mb-6">
          Start using AI-powered email assistance today and see the difference in your client communications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            🛒 Install RealtyClose Extension
          </button>
          <button className="bg-slate-600 hover:bg-slate-500 text-white py-3 px-8 rounded-lg font-medium transition-colors">
            📺 Watch Demo
          </button>
        </div>
      </div>
    </PageShell>
  );
}