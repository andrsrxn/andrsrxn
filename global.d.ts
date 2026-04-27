/** biome-ignore-all lint/style/useNamingConvention: API convention */
import type { formats } from '@/i18n/request'
import type { routing } from '@/i18n/routing'
import messages from './i18n/messages/es.json' with { type: 'json' }

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number]
    Messages: typeof messages
    Formats: typeof formats
  }
}
