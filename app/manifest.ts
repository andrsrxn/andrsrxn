import type { MetadataRoute } from 'next'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: COMPANY.NAME,
    short_name: COMPANY.NAME,
    description: COMPANY.DESCRIPTION,
    start_url: '/',
    display: 'standalone',
    background_color: SITE.SEO.COLOR_BACKGROUND,
    theme_color: SITE.SEO.COLOR_BRAND,
    scope: SITE.BASE_URL,
    icons: [
      {
        src: SITE.SEO.IMAGES.ICON.MANIFEST.ICO_192,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: SITE.SEO.IMAGES.ICON.MANIFEST.ICO_512,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
