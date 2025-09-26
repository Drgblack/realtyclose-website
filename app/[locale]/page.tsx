import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
import HomePage from '../../components/HomePage'
import { routing } from '../../routing'

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
  const t = await getTranslations({ locale, namespace: 'home' })
  
  return {
    title: t('hero.title'),
    description: t('hero.subtitle'),
    alternates: {
      languages: {
        'en': '/',
        'de': '/de'
      }
    },
    openGraph: {
      title: t('hero.title'),
      description: t('hero.subtitle'),
      type: 'website',
    },
  }
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  
  // Enable static rendering
  setRequestLocale(locale);
  
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <HomePage locale={locale} />
      <Footer product="realtyclose" />
    </div>
  )
}