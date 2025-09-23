import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found | RealtyClose',
  description: 'The page you are looking for could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-6">
        <div className="mb-8">
          <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              RC
            </div>
          </div>
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-slate-300 mb-4">Page Not Found</h2>
          <p className="text-slate-400 mb-8">
            Sorry, we couldn't find the page you're looking for. The link might be broken, or the page may have been moved.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Return Home
          </Link>
          
          <div className="text-slate-400 text-sm">
            <p>Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-3">
              <Link href="/features" className="text-blue-400 hover:text-blue-300 transition-colors">Features</Link>
              <Link href="/pricing" className="text-blue-400 hover:text-blue-300 transition-colors">Pricing</Link>
              <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">Blog</Link>
              <Link href="/contact" className="text-blue-400 hover:text-blue-300 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
}