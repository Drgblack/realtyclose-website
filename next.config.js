/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_HOMEPAGE_VARIANT: process.env.HOMEPAGE_VARIANT || 'A',
    NEXT_PUBLIC_ENABLE_TRIAL: process.env.ENABLE_TRIAL || 'false',
  },
}

module.exports = nextConfig