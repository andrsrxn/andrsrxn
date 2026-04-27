import type { Person, ProfessionalService, WebSite } from 'schema-dts'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'
import { SITE } from '@/lib/constants/site'

export const WEBSITE_SCHEMA: WebSite = {
  '@type': 'WebSite',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
} as const

export const PERSON_SCHEMA: Person = {
  '@type': 'Person',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
  jobTitle: 'Diseñador y Programador Web',
  image: IMAGES.BRAND.LOGO.PNG.URL,
  knowsLanguage: ['es-419', 'es', 'en-US', 'en-GB'],
} as const

export const SERVICES_SCHEMA: ProfessionalService = {
  '@type': 'ProfessionalService',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
  areaServed: 'Guatemala',
  currenciesAccepted: ['GTQ', 'USD'],
  image: IMAGES.BRAND.LOGO.PNG.URL,

  address: {
    '@type': 'PostalAddress',
    availableLanguage: ['es-419', 'es', 'en-US', 'en-GB'],
    postalCode: COMPANY.ADDRESS.POSTAL_CODE,
    addressRegion: COMPANY.ADDRESS.REGION,
    addressLocality: COMPANY.ADDRESS.LOCALITY,
    addressCountry: COMPANY.ADDRESS.COUNTRY,
  },
  priceRange: '$$$',
} as const
