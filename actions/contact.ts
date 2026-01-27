'use server'

import { headers } from 'next/headers'
import { verifyTurnstile } from 'nextjs-turnstile'
import type { z } from 'zod'
import { ContactEmailTemplate } from '@/components/email/contact-email'
import { emailClient } from '@/lib/config/email'
import { env, isProductionEnv } from '@/lib/config/env'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'
import { getUserAgent } from '@/lib/headers'
import { contactSchemaWithBotTurnstile } from '@/lib/schemas/contact-schema'
import type { GeolocationAPIResponse } from '@/lib/types/geo'

const REGEX_IP = /, /

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: allowed
export const SendContactMessage = async (values: z.infer<typeof contactSchemaWithBotTurnstile>) => {
  console.log('CLOUDFLARE SERVER: ', values.CFTurnstileToken)
  try {
    const isHuman = await verifyTurnstile(values.CFTurnstileToken, {
      secretKey: env.TURNSTILE_SECRET_KEY,
    })

    if (!isHuman) {
      console.error('Bot detected', isHuman)
      return {
        success: false,
        message: 'Acceso denegado',
        description: 'Dispositivo no autorizado para enviar mensajes',
      }
    }

    const validatedValues = contactSchemaWithBotTurnstile.safeParse(values)
    if (!validatedValues.success) {
      console.error('Invalid values', validatedValues.error)
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
      console.error('Invalid ip or user agent', 'ip:', ip, 'userAgent:', userAgent)
      return {
        success: false,
        message: 'Dispositivo no aceptado',
        description: 'No se puede enviar el mensaje desde este dispositivo',
      }
    }
    const res = await fetch(`https://api.ipquery.io/${ip}?format=json`)
    if (!res.ok) {
      console.error('Invalid ip validation', 'ip:', ip)
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
      console.error(
        'Invalid geolocation',
        'ip:',
        ip,
        'country:',
        country,
        'city:',
        city,
        'state:',
        state
      )
      return {
        success: false,
        message: 'Dispositivo no aceptado',
        description: 'No se puede enviar el mensaje desde este dispositivo',
      }
    }

    const { error } = await emailClient.emails.send({
      from: `${fullName} <${isProductionEnv() ? `web@${COMPANY.EMAIL_ADDRESSES.VERIFIED_SENDING}.${SITE.DOMAIN}` : 'onboarding@resend.dev'}>`,

      to: isProductionEnv()
        ? `${COMPANY.EMAIL_ADDRESSES.VERIFIED_RECEIVING}@${SITE.DOMAIN}`
        : 'andresraxon.art@gmail.com',

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
