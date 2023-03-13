/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'res.cloudinary.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.staticflickr.com'
      },
    ],
  },
  async redirects() 
  {
    return [
      {
        source: '/landscapes',
        destination: '/gallery',
        permanent: false
      }
    ]
  }
}

module.exports = nextConfig
