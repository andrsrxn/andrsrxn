import { z } from 'zod'
import { SERVICES } from '@/lib/constants/services'
import type { Service } from '@/lib/types/services'

const services = Object.values(SERVICES).map(service => service.TITLE) as [Service, ...Service[]]

const REGEX_EMAIL_TAGS = /(^[^+]+)@/
export const contactSchema = z.object({
  clientType: z.enum(['Freelancer', 'Empresa'], {
    message: 'Selecciona una de las opciones',
  }),
  fullName: z
    .string({ message: 'Tipo no aceptado', invalid_type_error: 'Tipo no aceptado' })
    .min(1, { message: 'Agrega tu nombre o el de la empresa' }),
  email: z
    .string({ message: 'Tipo no aceptado', invalid_type_error: 'Tipo no aceptado' })
    .min(1, { message: 'Agrega tu correo electrónico' })
    .regex(REGEX_EMAIL_TAGS, { message: 'No se permiten tags en el correo' }),
  services: z
    .array(z.enum(services, { message: 'Servicio no aceptado' }))
    .min(1, { message: 'Selecciona al menos una opción' }),
  comments: z
    .string({ message: 'Tipo no aceptado', invalid_type_error: 'Tipo no aceptado' })
    .max(500, { message: 'Máximo de 500 characteres' })
    .optional(),
})
