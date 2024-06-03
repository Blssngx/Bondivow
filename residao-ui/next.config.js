/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "lh3.googleusercontent.com", "s3.us-west-2.amazonaws.com",],
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false
    }
    return config
  }
}

module.exports = nextConfig
