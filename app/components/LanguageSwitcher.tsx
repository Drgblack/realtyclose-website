'use client';

import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {useLocale} from 'next-intl';

const locales = ['en','de'] as const;

export default function LanguageSwitcher({className=""}:{className?:string}) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();

  // Strip the current locale prefix from the path (App Router format: /[locale]/...)
  const segments = pathname?.split('/').filter(Boolean) || [];
  const currentLocale = segments[0];
  const rest = currentLocale && locales.includes(currentLocale as any)
    ? '/' + segments.slice(1).join('/')
    : pathname || '/';

  const qs = searchParams?.toString() || '';
  const withQS = (p:string) => qs ? `${p}?${qs}` : p;

  const linkFor = (targetLocale:string) =>
    targetLocale === 'en' ? withQS(rest || '/') : withQS('/' + targetLocale + (rest === '/' ? '' : rest));

  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Language switcher">
      {(['en','de'] as const).map(code => {
        const active = code === locale;
        return (
          <a
            key={code}
            href={linkFor(code)}
            lang={code}
            hrefLang={code}
            aria-current={active ? 'true' : undefined}
            className={`px-1 hover:underline ${active ? 'font-semibold underline' : 'opacity-80'}`}
          >
            {code.toUpperCase()}
          </a>
        );
      })}
      <span className="opacity-40">|</span>
      {/* Keeps layout balanced; EN and DE render around this divider */}
    </nav>
  );
}