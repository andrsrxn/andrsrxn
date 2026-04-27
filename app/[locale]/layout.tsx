import '../globals.css'
import { Analytics } from '@vercel/analytics/next'
import { notFound } from 'next/navigation'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import type { ReactNode } from 'react'
import { preconnect, preload } from 'react-dom'
import { LenisScroll } from '@/components/animated/lenis'
import { Footer } from '@/components/shared/footer'
import { Header } from '@/components/shared/header'
import { JsonLd } from '@/components/shared/json-ld'
import { Toaster } from '@/components/ui/sonner'
import { routing } from '@/i18n/routing'
import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import { IMAGES } from '@/lib/constants/paths'
import { PERSON_SCHEMA, SERVICES_SCHEMA, WEBSITE_SCHEMA } from '@/lib/constants/schema-json'
import { fontBody, fontHeading } from '@/lib/fonts'

export const metadata = baseMetadata
export const viewport = baseViewport

interface LayoutProps {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export default async function RootLayout({ children, params }: Readonly<LayoutProps>) {
  preconnect('https://res.cloudinary.com')

  preload(IMAGES.BRAND.SYMBOL.SVG.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })
  preload(IMAGES.BRAND.GRADIENT.WEBP.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })

  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()
  const tCompany = await getTranslations({ locale, namespace: 'company' })
  const personSchema = {
    // @ts-expect-error is not a string
    ...PERSON_SCHEMA,
    description: tCompany('description'),
    knowsAbout: tCompany('servicesSummary'),
  }

  const websiteSchema = {
    ...WEBSITE_SCHEMA,
    inLanguage: locale,
    description: tCompany('description'),
  }

  return (
    <html lang={locale} className='dark' data-scroll-behavior='smooth'>
      <body className={`${fontHeading.variable} ${fontBody.variable} isolate antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />

          <LenisScroll />
          <Toaster />
          <JsonLd schema={websiteSchema} />
          <JsonLd schema={personSchema} />
          <JsonLd schema={SERVICES_SCHEMA} />

          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
