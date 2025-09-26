const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_HOMEPAGE_VARIANT: process.env.HOMEPAGE_VARIANT || 'A',
    NEXT_PUBLIC_ENABLE_TRIAL: process.env.ENABLE_TRIAL || 'false',
  },
}

module.exports = withNextIntl(nextConfig)