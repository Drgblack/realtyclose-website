import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import { routing } from '../../../routing';
import Link from "next/link";
import { ShinyCard } from "@/components/ui/shiny-card";
import { glowBtn } from "@/components/ui/shiny-card";
import Reveal from "@/components/ui/Reveal";

type Props = {
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale });
  
  return {
    title: locale === 'de' ? 'Blog | RealtyClose' : 'Blog | RealtyClose',
    description: locale === 'de' 
      ? 'Immobilien-Einblicke, KI-E-Mail-Tipps und bewährte Praktiken vom RealtyClose-Team.'
      : 'Real estate insights, AI email tips, and industry best practices from the RealtyClose team.',
    alternates: {
      languages: {
        'en': '/en/blog',
        'de': '/de/blog'
      }
    },
  }
}

// Blog post data (in a real app, this would come from a CMS or database)
const getBlogPosts = (locale: string) => [
  {
    id: 1,
    title: locale === 'de' ? "Die versteckten Kosten verpasster E-Mails" : "The Hidden Cost of Missed Emails",
    excerpt: locale === 'de' 
      ? "Wie 23% niedrigere Antwortquoten und verstreute Follow-ups Maklern Geschäfte und Vertrauen kosten."
      : "How 23 percent lower response rates and scattered follow-ups are costing agents deals and trust.",
    date: locale === 'de' ? "24. Januar 2025" : "January 24, 2025",
    readTime: locale === 'de' ? "8 Min. Lesezeit" : "8 min read",
    category: locale === 'de' ? "Produktivität" : "Productivity",
    slug: "hidden-cost-missed-emails",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial",
    featured: true
  },
  {
    id: 2,
    title: locale === 'de' ? "30+ Stunden pro Transaktion durch E-Mail-Chaos-Behebung zurückgewinnen" : "Reclaim 30+ Hours Per Transaction By Fixing Email Chaos",
    excerpt: locale === 'de'
      ? "Ein praktisches Gmail-first-System, um Ihre Woche zurückzugewinnen und Geschäfte auf Kurs zu halten."
      : "A practical Gmail-first system to win back your week and keep deals on track.",
    date: locale === 'de' ? "22. Januar 2025" : "January 22, 2025",
    readTime: locale === 'de' ? "6 Min. Lesezeit" : "6 min read",
    category: locale === 'de' ? "Produktivität" : "Productivity",
    slug: "reclaim-30-hours-per-transaction",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 3,
    title: locale === 'de' ? "Der TC Überlebensguide" : "The TC Survival Guide", 
    excerpt: locale === 'de'
      ? "Sieben Systeme, die Transaktionskoordination vom Chaos zu einem Wettbewerbsvorteil machen."
      : "Seven systems that turn transaction coordination from chaos into a competitive advantage.",
    date: locale === 'de' ? "25. Januar 2025" : "January 25, 2025",
    readTime: locale === 'de' ? "12 Min. Lesezeit" : "12 min read",
    category: locale === 'de' ? "Betrieb" : "Operations",
    slug: "tc-survival-guide",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 4,
    title: locale === 'de' ? "Nie wieder ein Geschäft durch verpasste Follow-ups verlieren" : "Never Lose A Deal To Missed Follow-ups Again",
    excerpt: locale === 'de'
      ? "Ein Follow-up-Framework, das mit Ihrer Pipeline skaliert und Ihre Abschlüsse schützt."
      : "A follow-up framework that scales with your pipeline and protects your closings.",
    date: locale === 'de' ? "22. Januar 2025" : "January 22, 2025",
    readTime: locale === 'de' ? "5 Min. Lesezeit" : "5 min read",
    category: locale === 'de' ? "Systeme" : "Systems",
    slug: "never-lose-a-deal-follow-up-system",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 5,
    title: locale === 'de' ? "Konsistenter, professioneller Ton im großen Maßstab" : "Consistent, Professional Tone At Scale",
    excerpt: locale === 'de'
      ? "Wie Sie in jeder Kundennachricht wie die beste Version Ihrer selbst klingen."
      : "How to sound like the best version of yourself in every client message.",
    date: locale === 'de' ? "22. Januar 2025" : "January 22, 2025",
    readTime: locale === 'de' ? "5 Min. Lesezeit" : "5 min read",
    category: locale === 'de' ? "Marke" : "Brand",
    slug: "consistent-communication-builds-trust",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  },
  {
    id: 6,
    title: locale === 'de' ? "Das TC Übergabe-Playbook" : "The TC Handoff Playbook",
    excerpt: locale === 'de'
      ? "Vier Schritte, die Reibung zwischen Maklern und Koordinatoren beseitigen."
      : "Four moves that remove friction between agents and coordinators.",
    date: locale === 'de' ? "22. Januar 2025" : "January 22, 2025",
    readTime: locale === 'de' ? "6 Min. Lesezeit" : "6 min read",
    category: locale === 'de' ? "Team" : "Team",
    slug: "tc-handoff-playbook",
    author: "Dr. Greg Blackburn",
    authorTitle: "RealtyClose Editorial"
  }
];

const getCategories = (locale: string) => locale === 'de' 
  ? ["Alle", "Vorlagen", "Brancheneinblicke", "Produktivität", "Sicherheit", "Best Practices", "Fallstudien"]
  : ["All", "Templates", "Industry Insights", "Productivity", "Security", "Best Practices", "Case Studies"];

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  setRequestLocale(locale);
  
  const t = await getTranslations();
  const blogPosts = getBlogPosts(locale);
  const categories = getCategories(locale);
  
  // Get featured post and other posts
  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = blogPosts.filter(post => !post.featured);
  
  return (
    <main className="bg-[var(--rc-bg)] text-[var(--rc-text)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--rc-bg)] rc-noise">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0"
               style={{background:
                 "radial-gradient(900px 520px at 8% -10%, rgba(37,99,235,.28), transparent 55%), radial-gradient(700px 420px at 95% -15%, rgba(124,58,237,.24), transparent 55%)"}} />
        </div>

        <div className="mx-auto max-w-6xl px-6 pt-28 pb-16 sm:pt-32 sm:pb-20">
          <Reveal>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-slate-900 mb-4">
              {locale === 'de' ? 'Immobilien-Einblicke & Tipps' : 'Real Estate Insights & Tips'}
            </h1>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mb-6" />
            <p className="text-lg text-[var(--rc-muted)] max-w-2xl">
              {locale === 'de' 
                ? 'KI-E-Mail-Strategien, Produktivitätstipps und bewährte Branchenpraktiken für mehr Geschäftsabschlüsse'
                : 'AI email strategies, productivity tips, and industry best practices to help you close more deals'
              }
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="rc-ambient py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <ShinyCard gradient="brand" padding="lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <span className="text-blue-600 text-sm font-medium mb-2 block">
                      📌 {locale === 'de' ? 'Hauptartikel' : 'Featured Post'}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--rc-text)] mt-2 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-[var(--rc-muted)] mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center text-[var(--rc-muted)] text-sm mb-6 gap-2">
                      <span>Von {featuredPost.author}</span>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                      <span>•</span>
                      <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700">
                        {featuredPost.category}
                      </span>
                    </div>
                    <Link 
                      href={`/blog/${featuredPost.slug}`}
                      className={`inline-flex items-center px-6 py-3 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-xl transition-all duration-200 ${glowBtn}`}
                    >
                      {locale === 'de' ? 'Vollständigen Artikel lesen →' : 'Read Full Article →'}
                    </Link>
                  </div>
                  <div className="hidden md:block">
                    <ShinyCard gradient="indigo">
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                          <span className="text-3xl">⏰</span>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-600 mb-2">
                          {locale === 'de' ? 'Zeit zurückgewinnen' : 'Reclaim Your Time'}
                        </h4>
                        <p className="text-[var(--rc-muted)] text-sm">
                          {locale === 'de' 
                            ? 'Ein praktisches System für 30+ Stunden pro Transaktion'
                            : 'A practical system to win back 30+ hours per transaction'
                          }
                        </p>
                      </div>
                    </ShinyCard>
                  </div>
                </div>
              </ShinyCard>
            </Reveal>
          </div>
        </section>
      )}

      {/* Email Capture */}
      <section className="rc-ambient py-16">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ShinyCard gradient="emerald" padding="lg" innerClassName="text-center">
              <h3 className="text-lg font-bold text-[var(--rc-text)] mb-3">
                {locale === 'de' 
                  ? 'Erhalten Sie jede Woche einen praktischen E-Mail-System-Tipp'
                  : 'Get one practical email systems tip each week'
                }
              </h3>
              <p className="text-[var(--rc-muted)] mb-4 text-sm">
                {locale === 'de' ? 'Kein Spam.' : 'No spam.'}
              </p>
              <div className="max-w-sm mx-auto flex gap-3">
                <input 
                  type="email" 
                  placeholder={locale === 'de' ? 'E-Mail eingeben' : 'Enter your email'}
                  className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-blue-500 text-sm"
                />
                <button className={`text-sm py-2 px-4 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-lg transition-all duration-200 ${glowBtn}`}>
                  {locale === 'de' ? 'Abonnieren' : 'Subscribe'}
                </button>
              </div>
            </ShinyCard>
          </Reveal>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--rc-text)] mb-8 text-center">
              {locale === 'de' ? 'Neueste Beiträge' : 'Recent Posts'}
            </h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-12" />
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.slice(0, 6).map((post, index) => (
              <Reveal key={post.id} delay={0.1 * index}>
                <Link href={`/blog/${post.slug}`}>
                  <ShinyCard className="h-full hover:scale-[1.02] transition-transform duration-200 cursor-pointer">
                    <div className="mb-4">
                      <span className="text-xs font-medium px-2 py-1 rounded bg-blue-100 text-blue-700">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--rc-text)] mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-[var(--rc-muted)] mb-4 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-[var(--rc-muted)] text-xs mt-auto">
                      <div className="flex items-center">
                        <span>Von {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <span className="text-blue-600 font-medium transition-colors">
                        {locale === 'de' ? 'Mehr lesen →' : 'Read more →'}
                      </span>
                    </div>
                  </ShinyCard>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="rc-ambient py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-center mb-8 text-[var(--rc-text)] font-semibold text-2xl">
              {locale === 'de' ? 'Beliebte Themen' : 'Popular Topics'}
            </h2>
            <div className="h-1 w-16 rounded-full bg-gradient-to-r from-indigo-500 via-sky-400 to-fuchsia-500 mx-auto mb-12" />
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🤖",
                title: locale === 'de' ? "KI E-Mail Schreiben" : "AI Email Writing",
                desc: locale === 'de' ? "Vorlagen, Tipps und Best Practices" : "Templates, tips, and best practices"
              },
              {
                icon: "📈",
                title: locale === 'de' ? "Lead-Konvertierung" : "Lead Conversion",
                desc: locale === 'de' ? "Strategien für mehr Abschlüsse" : "Strategies to close more deals"
              },
              {
                icon: "⚡",
                title: locale === 'de' ? "Produktivitäts-Hacks" : "Productivity Hacks",
                desc: locale === 'de' ? "Workflow-Optimierungstechniken" : "Workflow optimization techniques"
              },
              {
                icon: "📊",
                title: locale === 'de' ? "Branchentrends" : "Industry Trends",
                desc: locale === 'de' ? "Markteinblicke und Prognosen" : "Market insights and forecasts"
              }
            ].map((topic, index) => (
              <Reveal key={index} delay={0.1 * index}>
                <ShinyCard gradient="indigo" innerClassName="text-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <span className="text-xl">{topic.icon}</span>
                  </div>
                  <h4 className="font-semibold text-blue-600 mb-2">{topic.title}</h4>
                  <p className="text-[var(--rc-muted)] text-sm">{topic.desc}</p>
                </ShinyCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rc-ambient py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <ShinyCard gradient="brand" padding="lg" innerClassName="text-center">
              <h2 className="text-2xl font-bold text-[var(--rc-text)] mb-4">
                {locale === 'de' 
                  ? 'Bereit, das Gelernte umzusetzen?'
                  : 'Ready to implement what you\'ve learned?'
                }
              </h2>
              <p className="text-[var(--rc-muted)] mb-6">
                {locale === 'de'
                  ? 'Beginnen Sie noch heute mit KI-gestützter E-Mail-Unterstützung und sehen Sie den Unterschied in Ihrer Kundenkommunikation'
                  : 'Start using AI-powered email assistance today and see the difference in your client communications'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/install"
                  className={`inline-flex items-center px-6 py-3 bg-[#111] hover:bg-[#0c0c0c] text-white font-semibold rounded-xl transition-all duration-200 ${glowBtn}`}
                >
                  🛒 {locale === 'de' ? 'RealtyClose Extension installieren' : 'Install RealtyClose Extension'}
                </a>
                <a 
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-xl border border-[var(--rc-border)] hover:border-indigo-200 bg-white px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-slate-50"
                >
                  📺 {locale === 'de' ? 'Demo ansehen' : 'Watch Demo'}
                </a>
              </div>
            </ShinyCard>
          </Reveal>
        </div>
      </section>
    </main>
  );
}