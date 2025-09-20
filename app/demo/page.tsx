import { Metadata } from 'next'
import Header from '../../components/Header'
import { Footer } from '../../components/Footer'
import DemoContent from '../../components/DemoContent'

export const metadata: Metadata = {
  title: 'Watch Demo - RealtyClose',
  description: 'See RealtyClose in action. Watch how real estate professionals save hours every day with AI-powered email generation.',
}

export default function DemoPage() {

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <DemoContent />
      <Footer product="realtyclose" />
    </div>
  )
}