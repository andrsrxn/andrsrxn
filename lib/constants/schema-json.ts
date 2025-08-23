import type { Person, ProfessionalService, WebSite, WithContext } from 'schema-dts'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export const WEBSITE_SCHEMA: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
  description: COMPANY.DESCRIPTION,
  inLanguage: 'es',
}

export const PERSON_SCHEMA: WithContext<Person> = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
  description: COMPANY.DESCRIPTION,
  jobTitle: 'Director Creativo',
  knowsAbout: COMPANY.SERVICES_SUMMARY,
  knowsLanguage: ['es-419', 'en-US', 'en-GB'],
}

export const SERVICES_SCHEMA: WithContext<ProfessionalService> = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  url: SITE.BASE_URL,
  name: COMPANY.NAME,
  areaServed: 'Guatemala',
  currenciesAccepted: ['GTQ', 'USD'],
}
