'use server'

import { headers } from 'next/headers'
import type { z } from 'zod'
import { ContactEmailTemplate } from '@/components/email/contact-email'
import { emailClient } from '@/lib/config/email'
import { isProductionEnv } from '@/lib/config/env'
import { getUserAgent } from '@/lib/headers'
import { contactSchema } from '@/lib/schemas/contact-schema'
import type { GeolocationAPIResponse } from '@/lib/types/geo'

const REGEX_IP = /, /

export const SendContactMessage = async (values: z.infer<typeof contactSchema>) => {
  try {
    const validatedValues = contactSchema.safeParse(values)
    if (!validatedValues.success) {
      return {
        success: false,
        message: 'Mensaje enviado con éxito',
        description: 'Nuestro equipo se comunicará contigo lo más pronto posible',
      }
    }

    const {
      data: { clientType, email, services, fullName, comments },
    } = validatedValues

    const ip = isProductionEnv()
      ? (await headers()).get('x-forwarded-for')?.split(REGEX_IP)[0]
      : '186.151.92.13'
    const userAgent = await getUserAgent()

    if (ip === undefined || userAgent === null) {
      return {
        success: false,
        message: 'Dispositivo no aceptado',
        description: 'No se puede enviar el mensaje desde este dispositivo',
      }
    }
    const res = await fetch(`https://api.ipquery.io/${ip}?format=json`)
    if (!res.ok) {
      return {
        success: false,
        message: 'Dispositivo no aceptado',
        description: 'No se puede enviar el mensaje desde este dispositivo',
      }
    }
    const {
      location: { country, city, state },
    }: GeolocationAPIResponse = await res.json()

    if (country === '' || city === '' || state === '') {
      return {
        success: false,
        message: 'Dispositivo no aceptado',
        description: 'No se puede enviar el mensaje desde este dispositivo',
      }
    }

    const { error } = await emailClient.emails.send({
      // from: `${fullName} <${isProductionEnv() ? email : 'onboarding@resend.dev'}>`,
      from: `${fullName} <onboarding@resend.dev>`,
      // to: isProductionEnv() ? COMPANY.EMAIL_ADDRESES.SALES : 'carlosraxon019@gmail.com',
      to: 'andresraxon.creativo@gmail.com',
      subject: 'Contacto web para cotización',
      react: ContactEmailTemplate({
        ip,
        clientType,
        email,
        services,
        fullName,
        comments,

        country,
        city,
        state,
        browser: userAgent.fullBrowser,
        device: userAgent.fullDevice,
      }),
    })

    if (error !== null) {
      console.error('Resend error: ', error)

      return {
        success: false,
        message: 'No se pudo enviar tu mensaje',
        description: 'Ocurrió un error inesperado. Por favor, intentalo más tarde',
      }
    }

    return {
      success: true,
      message: 'Mensaje enviado con éxito',
      description: 'Me comunicaré contigo lo más pronto posible.',
    }
  } catch (error) {
    console.error(`Server error: ${error}`)

    return {
      success: false,
      message: 'No se pudo enviar tu mensaje',
      description: 'Ocurrió un error inesperado. Por favor, intentalo más tarde',
    }
  }
}
