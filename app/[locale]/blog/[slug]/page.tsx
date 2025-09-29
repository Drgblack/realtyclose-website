import { notFound, redirect } from 'next/navigation';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  
  // List of valid blog post slugs that exist in /blog directory
  const validSlugs = [
    'hidden-cost-missed-emails',
    'reclaim-30-hours-per-transaction', 
    'tc-survival-guide',
    'never-lose-a-deal-follow-up-system',
    'consistent-communication-builds-trust',
    'tc-handoff-playbook',
    'ai-email-templates-close-deals',
    'automating-followups-personal-touch',
    'future-real-estate-communication',
    'gmail-integration-best-practices',
    'protecting-client-privacy',
    'realtyclose-vs-traditional-email-roi',
    'why-gmail-first-beats-crms'
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  // Redirect to the actual blog post in the /blog directory
  redirect(`/blog/${slug}`);
}