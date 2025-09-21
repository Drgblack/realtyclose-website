import { Metadata } from 'next'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Blog - RealtyClose',
  description: 'Latest insights and tips for real estate professionals using AI-powered tools.',
}

export default function BlogPage() {
  return (
    <main>
      <Navigation />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">RealtyClose Blog</h1>
          <p className="text-xl text-gray-600 mb-8">
            Insights and tips for real estate professionals.
          </p>
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <p className="text-gray-600">Blog content coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  )
}