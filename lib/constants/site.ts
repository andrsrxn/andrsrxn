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
  },
} as const
