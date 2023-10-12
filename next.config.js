/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts', 'api.tsx'],

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/a/AGNmyxY6s42Nh0DR947VhvBWPy9G44DmHx9CqvAkhlP4QzE=s96-c',
      },
    ],
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
