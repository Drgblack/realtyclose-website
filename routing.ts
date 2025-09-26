import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de'],
  
  // Used when no locale matches
  defaultLocale: 'en',
  
  // Always use locale prefix (even for default locale)
  localePrefix: 'always'
});