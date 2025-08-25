import { withBotId } from 'botid/next/config'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    staleTimes: {
      static: 0,
      dynamic: 60,
    },
    devtoolSegmentExplorer: true,
  },
  typedRoutes: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dcopojqng/**',
        port: '',
        search: '',
      },
    ],
  },
}

export default withBotId(nextConfig)
