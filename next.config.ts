import { withBotId } from 'botid/next/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  experimental: {
    staleTimes: {
      static: 30,
      dynamic: 60,
    },
  },
  typedRoutes: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dq5nfyajn/**',
        port: '',
        search: '',
      },
    ],
  },
}

export default withBotId(nextConfig)
