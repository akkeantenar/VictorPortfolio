/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Optimize images for Vercel
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Ensure static assets are served correctly
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig

