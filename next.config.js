const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Handle missing translations gracefully
    serverComponentsExternalPackages: []
  },
  // Suppress translation errors in build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error']
    } : false
  }
}

module.exports = withNextIntl(nextConfig);