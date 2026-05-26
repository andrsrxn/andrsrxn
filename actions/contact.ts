'use server'

import { checkBotId } from 'botid/server'
import { headers } from 'next/headers'
import { getTranslations } from 'next-intl/server'
import type { z } from 'zod'
import { ContactEmailTemplate } from '@/components/email/contact-email'
import { emailClient } from '@/lib/config/email'
import { isProductionEnv } from '@/lib/config/env'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'
import { getUserAgent } from '@/lib/headers'
import { contactSchema } from '@/lib/schemas/contact-schema'
import type { GeolocationAPIResponse } from '@/lib/types/geo'

const REGEX_IP = /, /u

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: allowed
export const SendContactMessage = async (values: z.infer<typeof contactSchema>) => {
  const tErrors = await getTranslations('homePage.contact.form.errors')
  try {
    const verification = await checkBotId()

    if (verification.isBot) {
      console.error('Bot detected', verification)
      return {
        success: false,
        message: tErrors('deviceDenied.title'),
        description: tErrors('deviceDenied.description'),
      }
    }

    const validatedValues = contactSchema.safeParse(values)
    if (!validatedValues.success) {
      console.error('Invalid values', validatedValues.error)
      return {
        success: false,
        message: tErrors('success.title'),
        description: tErrors('success.description'),
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
        message: tErrors('deviceDenied.title'),
        description: tErrors('deviceDenied.description'),
      }
    }
    const res = await fetch(`https://api.ipquery.io/${ip}?format=json`)
    if (!res.ok) {
      console.error('Invalid ip validation', 'ip:', ip)
      return {
        success: false,
        message: tErrors('deviceDenied.title'),
        description: tErrors('deviceDenied.description'),
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
        message: tErrors('deviceDenied.title'),
        description: tErrors('deviceDenied.description'),
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
        message: tErrors('unexpected.title'),
        description: tErrors('unexpected.description'),
      }
    }

    return {
      success: true,
      message: tErrors('success.title'),
      description: tErrors('success.description'),
    }
  } catch (error) {
    console.error(`Server error: ${error}`)

    return {
      success: false,
      message: tErrors('unexpected.title'),
      description: tErrors('unexpected.description'),
    }
  }
}
