import { envClient } from '@/lib/config/env.client'

export const SITE = {
  BASE_URL: envClient.NEXT_PUBLIC_SITE_URL,
  DOMAIN: new URL(envClient.NEXT_PUBLIC_SITE_URL).hostname,
  SEO: {
    COLOR_BACKGROUND: '#000000',
    COLOR_BRAND: '#000000',
    FILES: {
      MANIFEST: '/manifest.webmanifest',
      SITEMAP: '/sitemap.xml',
    },
    IMAGES: {
      BANNER_SOCIAL: '/banner-og.png',
      SYMBOL: '/brand/symbol.svg',
      ICON: {
        ICO_SVG: '/favicon.svg',
        APPLE: '/apple-touch-icon.png',
        MANIFEST: {
          ICO_192: '/web-app-manifest-192x192.png',
          ICO_512: '/web-app-manifest-512x512.png',
        },
      },
    },
  },
} as const
