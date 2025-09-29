import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from '../routing';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  let messages;
  try {
    messages = (await import(`../messages/${locale}.json`)).default;
  } catch (error) {
    // Fallback to English if locale messages don't exist
    console.warn(`Messages for locale ${locale} not found, falling back to English`);
    messages = (await import(`../messages/en.json`)).default;
  }

  return {
    locale,
    messages,
    onError: (error) => {
      // Just log warnings, don't fail the build
      console.warn('Translation warning:', error.message);
    },
    getMessageFallback: ({namespace, key}) => {
      // Return English fallback or simple fallback text
      return `[Missing: ${namespace ? `${namespace}.${key}` : key}]`;
    }
  };
});