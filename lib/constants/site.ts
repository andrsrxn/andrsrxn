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
      BANNER_SOCIAL:
        'https://res.cloudinary.com/dcopojqng/image/upload/v1756165838/banner-og_x5ds5e.png',
      SYMBOL: 'https://res.cloudinary.com/dcopojqng/image/upload/v1755992561/symbol_noz7xs.svg',
      ICON: {
        ICO_SVG: 'https://res.cloudinary.com/dcopojqng/image/upload/v1755992561/symbol_noz7xs.svg',
        APPLE:
          'https://res.cloudinary.com/dcopojqng/image/upload/v1756165838/apple-touch-icon_fvport.png',
        MANIFEST: {
          ICO_192:
            'https://res.cloudinary.com/dcopojqng/image/upload/v1756165838/web-app-manifest-192x192_igbr0z.png',
          ICO_512:
            'https://res.cloudinary.com/dcopojqng/image/upload/v1756165838/web-app-manifest-512x512_gg8no7.png',
        },
      },
    },
  },
} as const
