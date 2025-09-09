import { Metadata } from 'next'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'

// A/B Test Configuration
const HOMEPAGE_VARIANT = process.env.NEXT_PUBLIC_HOMEPAGE_VARIANT || 'A'

export const metadata: Metadata = {
  title: HOMEPAGE_VARIANT === 'B' ? 
    'Close More Deals. Write Emails In Seconds. - RealtyClose' : 
    'The Enterprise Real Estate Platform Starting With Your Gmail - RealtyClose',
  description: 'RealtyClose is the smart platform designed to remove stress from real estate closings. Generate professional emails in seconds and keep every deal on track.',
  openGraph: {
    title: HOMEPAGE_VARIANT === 'B' ? 
      'Close More Deals. Write Emails In Seconds. - RealtyClose' : 
      'The Enterprise Real Estate Platform Starting With Your Gmail - RealtyClose',
    description: 'RealtyClose is the smart platform designed to remove stress from real estate closings.',
    type: 'website',
    url: 'https://realtyclose.com',
  },
}

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <HomePage variant={HOMEPAGE_VARIANT} />
      <Footer />
    </div>
  )
}