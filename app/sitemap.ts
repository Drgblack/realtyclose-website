import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://realtyclose.com'
  
  // Static pages
  const staticPages = [
    '',
    '/features',
    '/pricing',
    '/demo',
    '/about',
    '/contact',
    '/install',
    '/blog',
    '/faq',
    '/privacy',
    '/terms',
    '/cookies',
    '/security',
    '/impressum',
  ]

  // Blog posts
  const blogPosts = [
    '/blog/reclaim-30-hours-per-transaction',
    '/blog/never-lose-a-deal-follow-up-system',
    '/blog/consistent-communication-builds-trust',
    '/blog/tc-handoff-playbook',
    '/blog/why-gmail-first-beats-crms',
    '/blog/ai-email-templates-close-deals',
    '/blog/future-real-estate-communication',
    '/blog/gmail-integration-best-practices',
    '/blog/protecting-client-privacy',
    '/blog/automating-followups-personal-touch',
    '/blog/realtyclose-vs-traditional-email-roi',
    '/blog/hidden-cost-missed-emails',
    '/blog/tc-survival-guide',
  ]

  const staticSitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' || path === '/blog' ? 'weekly' as const : 'monthly' as const,
    priority: path === '' ? 1 : path === '/features' || path === '/pricing' ? 0.9 : 0.8,
  }))

  const blogSitemap = blogPosts.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticSitemap, ...blogSitemap]
}