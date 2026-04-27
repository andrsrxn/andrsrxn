import type { useTranslations } from 'next-intl'
import { z } from 'zod'
import { SERVICES } from '@/lib/constants/services'
import type { Service } from '@/lib/types/services'

const REGEX_EMAIL_TAGS = /(^[^+]+)@/

const CLIENT_TYPE = {
  freelancer: 'freelancer',
  company: 'company',
} as const

type ClientType = keyof typeof CLIENT_TYPE
const CLIENT_TYPE_KEYS = Object.keys(CLIENT_TYPE) as [ClientType, ...ClientType[]]
const SERVICES_SLUGS = Object.values(SERVICES).map(service => service.SLUG) as [
  Service,
  ...Service[],
]

export const FORM_ERROR_KEYS = [
  'invalidType',
  'clientType.required',
  'fullName.required',
  'fullName.max',
  'fullName.invalid',
  'email.required',
  'email.invalid',
  'email.noTags',
  'services.required',
  'services.invalid',
  'comments.max',
] as const

export type FormErrorKey = (typeof FORM_ERROR_KEYS)[number]

type TFunction = ReturnType<typeof useTranslations<'homePage.contact.form.errors.fields'>>

export const translateError = (t: TFunction, message: string | undefined): string | null => {
  if (!(message && FORM_ERROR_KEYS.includes(message as FormErrorKey))) {
    return null
  }
  return t(message as FormErrorKey)
}

const msg = (key: FormErrorKey) => key

export const contactSchema = z.object({
  clientType: z.enum(CLIENT_TYPE_KEYS, {
    message: msg('clientType.required'),
  }),
  fullName: z
    .string({ message: msg('invalidType'), invalid_type_error: msg('invalidType') })
    .min(1, { message: msg('fullName.required') })
    .max(50, { message: msg('fullName.max') })
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/, { message: msg('fullName.invalid') }),
  email: z
    .string({ message: msg('invalidType'), invalid_type_error: msg('invalidType') })
    .email({ message: msg('email.invalid') })
    .min(1, { message: msg('email.required') })
    .regex(REGEX_EMAIL_TAGS, { message: msg('email.noTags') }),
  services: z
    .array(z.enum(SERVICES_SLUGS, { message: msg('services.invalid') }))
    .min(1, { message: msg('services.required') }),
  comments: z
    .string({ message: msg('invalidType'), invalid_type_error: msg('invalidType') })
    .max(500, { message: msg('comments.max') })
    .optional(),
})
