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
    title: "The Hidden Cost of Missed Emails",
    excerpt: "How 23 percent lower response rates and scattered follow-ups are costing agents deals and trust.",
    date: "January 24, 2025",
    readTime: "8 min read",
    category: "Productivity",
    slug: "hidden-cost-missed-emails",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial",
    featured: true
  },
  {
    id: 2,
    title: "Reclaim 30+ Hours Per Transaction By Fixing Email Chaos",
    excerpt: "A practical Gmail-first system to win back your week and keep deals on track.",
    date: "January 22, 2025",
    readTime: "6 min read",
    category: "Productivity",
    slug: "reclaim-30-hours-per-transaction",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 3,
    title: "The TC Survival Guide", 
    excerpt: "Seven systems that turn transaction coordination from chaos into a competitive advantage.",
    date: "January 25, 2025",
    readTime: "12 min read",
    category: "Operations",
    slug: "tc-survival-guide",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 4,
    title: "Never Lose A Deal To Missed Follow-ups Again",
    excerpt: "A follow-up framework that scales with your pipeline and protects your closings.",
    date: "January 22, 2025",
    readTime: "5 min read",
    category: "Systems",
    slug: "never-lose-a-deal-follow-up-system",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 5,
    title: "Consistent, Professional Tone At Scale",
    excerpt: "How to sound like the best version of yourself in every client message.",
    date: "January 22, 2025",
    readTime: "5 min read",
    category: "Brand",
    slug: "consistent-communication-builds-trust",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 6,
    title: "The TC Handoff Playbook",
    excerpt: "Four moves that remove friction between agents and coordinators.",
    date: "January 22, 2025",
    readTime: "6 min read",
    category: "Team",
    slug: "tc-handoff-playbook",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 7,
    title: "Why A Gmail-First Assistant Beats Heavy CRMs For Busy Teams",
    excerpt: "Faster setup, lower cost, zero disruption to your daily work.",
    date: "January 22, 2025",
    readTime: "5 min read",
    category: "Adoption",
    slug: "why-gmail-first-beats-crms",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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

// Get featured post and other posts
const featuredPost = blogPosts.find(post => post.featured);
const otherPosts = blogPosts.filter(post => !post.featured);

const categories = ["All", "Templates", "Industry Insights", "Productivity", "Security", "Best Practices", "Case Studies"];

export default function BlogPage() {
  return (
    <PageShell title="Real Estate Insights & Tips">
      {/* Blog Introduction */}
      <div className="mb-12 text-center max-w-[1200px] mx-auto">
        <p className="text-xl text-blue-300 font-medium mb-4">
          <strong>Expert insights for modern real estate professionals</strong>
        </p>
        <p className="text-slate-200">
          AI email strategies, productivity tips, and industry best practices to help you close more deals
        </p>
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-xl p-8 mb-12 max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-blue-300 text-sm font-medium">📌 Featured Post</span>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mt-2 mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-slate-100 mb-6 text-lg">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center text-slate-200 text-sm mb-6">
                <span>By {featuredPost.author}</span>
                <span className="mx-3">•</span>
                <span>{featuredPost.date}</span>
                <span className="mx-3">•</span>
                <span>{featuredPost.readTime}</span>
                <span className="mx-3">•</span>
                <span className={`text-xs font-medium px-2 py-1 rounded ${
                  featuredPost.category === "Productivity" ? "bg-red-500/20 text-red-300" :
                  featuredPost.category === "Templates" ? "bg-blue-500/20 text-blue-300" :
                  featuredPost.category === "Operations" ? "bg-purple-500/20 text-purple-300" :
                  "bg-orange-500/20 text-orange-300"
                }`}>
                  {featuredPost.category}
                </span>
              </div>
              <Link href={`/blog/${featuredPost.slug}`} className="rc-btn-primary inline-block">
                Read Full Article →
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⏰</span>
                </div>
                <h4 className="text-lg font-semibold text-blue-300 mb-2">Reclaim Your Time</h4>
                <p className="text-slate-100 text-sm">
                  A practical system to win back 30+ hours per transaction
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightweight Email Capture */}
      <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 border border-green-500/20 rounded-xl p-6 my-12 max-w-[1200px] mx-auto text-center">
        <h3 className="text-lg font-bold text-white mb-3">Get one practical email systems tip each week</h3>
        <p className="text-slate-100 mb-4 text-sm">No spam.</p>
        <div className="max-w-sm mx-auto flex gap-3">
          <input 
            type="email" 
            placeholder="Enter your email"
            className="flex-1 bg-slate-800/50 border border-slate-600/50 rounded-lg px-4 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 text-sm"
          />
          <button className="rc-btn-primary text-sm py-2 px-4">
            Subscribe
          </button>
        </div>
      </div>

      {/* Recent Posts Grid */}
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-8 text-center">Recent Posts</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherPosts.slice(0, 6).map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <article className="bg-slate-700/30 border border-slate-600/50 rounded-xl p-6 hover:bg-slate-600/30 transition-colors group cursor-pointer h-full">
                <div className="mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded ${
                    post.category === "Templates" ? "bg-blue-500/20 text-blue-300" :
                    post.category === "Industry Insights" ? "bg-green-500/20 text-green-300" :
                    post.category === "Productivity" ? "bg-purple-500/20 text-purple-300" :
                    post.category === "Security" ? "bg-red-500/20 text-red-300" :
                    post.category === "Best Practices" ? "bg-yellow-500/20 text-yellow-300" :
                    post.category === "Systems" ? "bg-teal-500/20 text-teal-300" :
                    post.category === "Brand" ? "bg-pink-500/20 text-pink-300" :
                    post.category === "Team" ? "bg-orange-500/20 text-orange-300" :
                    post.category === "Operations" ? "bg-purple-500/20 text-purple-300" :
                    post.category === "Adoption" ? "bg-indigo-500/20 text-indigo-300" :
                    "bg-slate-500/20 text-slate-300"
                  }`}>
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-slate-100 mb-4 text-sm leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-slate-200 text-xs mt-auto">
                  <div className="flex items-center">
                    <span>By {post.author}</span>
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
      </div>

      {/* Popular Topics */}
      <div className="my-16">
        <h2 className="text-center mb-8 text-white font-semibold text-2xl">Popular Topics</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">🤖</span>
            </div>
            <h4 className="font-semibold text-blue-300 mb-2">AI Email Writing</h4>
            <p className="text-slate-100 text-sm">Templates, tips, and best practices</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">📈</span>
            </div>
            <h4 className="font-semibold text-green-300 mb-2">Lead Conversion</h4>
            <p className="text-slate-100 text-sm">Strategies to close more deals</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">⚡</span>
            </div>
            <h4 className="font-semibold text-purple-300 mb-2">Productivity Hacks</h4>
            <p className="text-slate-100 text-sm">Workflow optimization techniques</p>
          </div>
          
          <div className="bg-slate-700/30 border border-slate-600/50 rounded-lg p-6 text-center">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
              <span className="text-xl">📊</span>
            </div>
            <h4 className="font-semibold text-orange-300 mb-2">Industry Trends</h4>
            <p className="text-slate-100 text-sm">Market insights and forecasts</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16 bg-blue-600/10 border border-blue-500/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to implement what you've learned?</h2>
        <p className="text-slate-100 mb-6">
          Start using AI-powered email assistance today and see the difference in your client communications
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/install" className="rc-btn-primary">
            🛒 Install RealtyClose Extension
          </a>
          <a href="/demo" className="rc-btn-secondary">
            📺 Watch Demo
          </a>
        </div>
      </div>
    </PageShell>
  );
}