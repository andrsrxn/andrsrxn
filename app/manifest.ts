import type { MetadataRoute } from 'next'
import { getTranslations } from 'next-intl/server'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'
import { SITE } from '@/lib/constants/site'

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const locale = 'es'

  const t = await getTranslations({
    locale,
    namespace: 'company',
  })

  return {
    name: COMPANY.NAME,
    short_name: COMPANY.NAME,
    description: t('description'),
    start_url: '/',
    display: 'standalone',
    background_color: SITE.SEO.COLOR_BACKGROUND,
    theme_color: SITE.SEO.COLOR_BRAND,
    scope: SITE.BASE_URL,
    icons: [
      {
        src: IMAGES.BRAND.ICON.MANIFEST.X192.PNG.URL,
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: IMAGES.BRAND.ICON.MANIFEST.X512.PNG.URL,
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
