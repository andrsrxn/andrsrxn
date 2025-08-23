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
  },
}

export default nextConfig
