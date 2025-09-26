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
  title: 'RealtyClose – The enterprise real estate platform starting with Gmail',
  description: 'AI-powered email assistant and deal tools for real estate professionals. Write perfect emails in seconds and close with confidence.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },        // primary (transparent)
      { url: '/brand/z-mark-32.png', sizes: '32x32', type: 'image/png' }, // fallback
      { url: '/brand/z-mark-16.png', sizes: '16x16', type: 'image/png' }, // fallback
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },   // no transparency
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#2563eb' }, // pinned tabs (monotone)
    ],
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