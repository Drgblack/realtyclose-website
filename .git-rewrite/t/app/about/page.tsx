import { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'About - RealtyClose',
  description: 'Learn about RealtyClose and our mission to help real estate professionals.',
}

export default function AboutPage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About RealtyClose</h1>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600 mb-4">
              RealtyClose is the smart platform designed to remove stress from real estate closings. 
              We help agents, brokers, and clients stay in sync with automated communication, 
              intelligent reminders, and secure document management.
            </p>
            <p className="text-gray-600">
              Our goal is simple - make every closing flawless so you can focus on growing 
              relationships and earning referrals.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}