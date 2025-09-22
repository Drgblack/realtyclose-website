import React from "react";

export default function PageShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border-b border-slate-700/50">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-4xl px-6 py-16">
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
  );
}