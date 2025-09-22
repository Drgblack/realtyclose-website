import React from "react";
import Link from "next/link";

export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-800/90 backdrop-blur-md border-b border-slate-700/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                  RC
                </div>
                <span className="text-xl font-bold text-white">RealtyClose</span>
              </Link>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/features" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Features</Link>
                <Link href="/pricing" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Pricing</Link>
                <Link href="/blog" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Blog</Link>
                <Link href="/demo" className="text-slate-300 hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">Demo</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-slate-300 hover:text-white p-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
              
              <Link href="/install" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
                Install Extension
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-slate-700/50">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 py-20">
        <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="prose prose-invert prose-slate max-w-none text-slate-300
                          prose-headings:text-white prose-headings:font-semibold
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 
                          prose-h2:border-b prose-h2:border-slate-600/50 prose-h2:text-white
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-blue-300
                          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-blue-300
                          prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                          prose-li:text-slate-300 prose-li:mb-2
                          prose-strong:text-white prose-strong:font-semibold
                          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                          prose-a:transition-colors prose-a:duration-200
                          prose-ul:space-y-2 prose-ol:space-y-2
                          prose-em:text-slate-400 prose-em:italic">
              {children}
            </div>
          </div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-16"></div>
      </div>
      </main>
    </div>
  );
}