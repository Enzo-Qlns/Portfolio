/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
        {
            protocol: 'https',
            hostname: 'api.microlink.io',
        },
        {
            protocol: 'https',
            hostname: 'esgi.fr',
        },
    ]
  },
}

module.exports = nextConfig
