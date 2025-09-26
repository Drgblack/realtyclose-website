import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
import HomePage from '../../components/HomePage'

type Props = {
  params: { locale: string }
}

export async function generateMetadata({
  params: { locale }
}: Props): Promise<Metadata> {
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

export default function Page({ params: { locale } }: Props) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <HomePage locale={locale} />
      <Footer product="realtyclose" />
    </div>
  )
}