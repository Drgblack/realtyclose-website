'use client'

import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="glass-card sticky top-0 z-50 blur-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                RC
              </div>
              <span className="text-xl font-bold text-gray-900">RealtyClose</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#features" className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#dashboard" className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">Dashboard</a>
              <a href="#pricing" className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">Pricing</a>
              <Link href="/blog" className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">Blog</Link>
              <a href="#demo" className="text-gray-600 hover:text-brand px-3 py-2 text-sm font-medium transition-colors">Demo</a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="btn-primary text-white px-6 py-2 rounded-lg font-medium">
              Install Extension
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}