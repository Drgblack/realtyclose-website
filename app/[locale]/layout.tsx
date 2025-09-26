import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../routing';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import Header from '@/components/layout/Header';
import SiteFooter from '@/components/layout/SiteFooter';

type Props = {
  children: ReactNode;
  params: Promise<{locale: string}>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: 'RealtyClose - Enterprise Real Estate Platform Starting With Gmail',
  description: 'The enterprise real estate platform starting with Gmail. AI-powered email assistant available now, comprehensive CRM coming soon. Build trust through transparent development.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: '/apple-icon.png',
  },
};

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <SiteFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}