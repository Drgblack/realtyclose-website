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
  description: 'AI-powered email assistant and deal tools for real estate professionals. Write perfect emails in seconds and close with confidence.',
  icons: {
    // Primary favicons – use the PNGs under /public/logo
    icon: [
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      // keep .ico if present and good quality
      { url: '/logo/favicon.ico', rel: 'icon' },
    ],
    // iOS home screen
    apple: [{ url: '/logo/apple-touch-icon.png', sizes: '180x180' }],
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