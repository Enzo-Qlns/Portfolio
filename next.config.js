/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'api.microlink.io', 'esgi.fr'],
  },
}

module.exports = nextConfig
