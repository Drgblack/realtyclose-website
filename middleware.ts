import createMiddleware from 'next-intl/middleware';
import { routing } from './routing';

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - /api (API routes)
  // - /_next (Next.js internals)
  // - /_vercel (Vercel internals)
  // - /favicon.ico, /sitemap.xml, /robots.txt, /logo (static files)
  matcher: ['/((?!api|_next|_vercel|favicon.ico|sitemap.xml|robots.txt|logo).*)']
};