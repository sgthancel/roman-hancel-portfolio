/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel handles Next.js optimally, so we can simplify the config
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ["your-image-hosting-service.com"], // Add any external domains you'll use for images
    unoptimized: true,
    // No need for unoptimized: true on Vercel
  },
  // No need for output: "export" or basePath on Vercel
}

module.exports = nextConfig
