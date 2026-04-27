import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
  locales: ['es', 'en'],

  defaultLocale: 'es',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/politica-de-privacidad': {
      en: '/privacy-policy',
    },
    '/terminos-y-condiciones': {
      en: '/terms-and-conditions',
    },
  },
})
