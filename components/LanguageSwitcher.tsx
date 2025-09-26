'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    // Create the new path with the new locale
    const newPath = `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 text-sm">
      <button
        onClick={() => switchLanguage('en')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'en' 
            ? 'text-blue-600 font-medium' 
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-current={locale === 'en' ? 'page' : undefined}
      >
        EN
      </button>
      <span className="text-slate-400">|</span>
      <button
        onClick={() => switchLanguage('de')}
        className={`px-2 py-1 rounded transition-colors ${
          locale === 'de' 
            ? 'text-blue-600 font-medium' 
            : 'text-slate-600 hover:text-slate-900'
        }`}
        aria-current={locale === 'de' ? 'page' : undefined}
      >
        DE
      </button>
    </div>
  );
}