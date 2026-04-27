import type { MetadataRoute } from 'next'
import { getPathname } from '@/i18n/navigation'
import { SITE } from '@/lib/constants/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          es: SITE.BASE_URL + getPathname({ locale: 'es', href: '/' }),
          en: SITE.BASE_URL + getPathname({ locale: 'en', href: '/' }),
        },
      },
    },
    {
      url: `${SITE.BASE_URL}/politica-de-privacidad`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: {
        languages: {
          es: SITE.BASE_URL + getPathname({ locale: 'es', href: '/politica-de-privacidad' }),
          en: SITE.BASE_URL + getPathname({ locale: 'en', href: '/politica-de-privacidad' }),
        },
      },
    },
    {
      url: `${SITE.BASE_URL}/terminos-y-condiciones`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
      alternates: {
        languages: {
          es: SITE.BASE_URL + getPathname({ locale: 'es', href: '/terminos-y-condiciones' }),
          en: SITE.BASE_URL + getPathname({ locale: 'en', href: '/terminos-y-condiciones' }),
        },
      },
    },
  ]
}
