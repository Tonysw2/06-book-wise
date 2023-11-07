/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],

  images: {
    domains: [
      'images.unsplash.com',
      'lh3.googleusercontent.com',
      'm.media-amazon.com',
      'github.com',
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/signIn',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
