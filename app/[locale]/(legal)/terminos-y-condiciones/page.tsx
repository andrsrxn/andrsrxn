import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ObfuscatedEmailLink } from '@/components/shared/obfuscated-email'
import { Separator } from '@/components/ui/separator'
import { routing } from '@/i18n/routing'
import { COMPANY } from '@/lib/constants/company'
import { baseMetadata } from '@/lib/constants/metadata'

interface PageProps {
  params: Promise<{ locale: Locale }>
}
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  setRequestLocale(locale)

  const t = await getTranslations({ locale, namespace: 'privacyPage' })

  const title = t('title')
  const description = t('metadata.description')

  return {
    title,
    description,
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
    },
  }
}
export default async function Page({ params }: PageProps) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const t = await getTranslations('termsPage')

  return (
    <main className='laptop:mt-30 mt-24'>
      <div className='prose desktop:prose-xl numbered-heading font-body text-muted-foreground container mx-auto w-11/12'>
        <h1 className='text-foreground font-heading laptop:text-7xl! eading-none mb-8! text-6xl font-normal!'>
          {t('title')}
        </h1>

        <p>
          {t.rich('content.intro1', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>
        <p>
          {t.rich('content.intro2', {
            legalName: COMPANY.LEGAL_NAME,
            nit: COMPANY.NIT,
            country: COMPANY.ADDRESS.COUNTRY,
          })}
        </p>

        <Separator className='mt-12' />

        <h2 className='text-foreground font-bold uppercase'>{t('content.services.title')}</h2>
        <p>
          {t.rich('content.services.description', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>
          {t('content.intellectualProperty.title')}
        </h2>
        <p>
          {t.rich('content.intellectualProperty.description1', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>
        <p>
          {t.rich('content.intellectualProperty.description2', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.siteUse.title')}</h2>
        <p>{t('content.siteUse.intro')}</p>
        <ul>
          <li>{t('content.siteUse.item1')}</li>
          <li>{t('content.siteUse.item2')}</li>
          <li>{t('content.siteUse.item3')}</li>
          <li>{t('content.siteUse.item4')}</li>
        </ul>

        <h2 className='text-foreground font-bold uppercase'>
          {t('content.thirdPartyLinks.title')}
        </h2>
        <p>
          {t.rich('content.thirdPartyLinks.description', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.userContent.title')}</h2>
        <p>
          {t.rich('content.userContent.description', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.disclaimer.title')}</h2>
        <p>{t('content.disclaimer.description1')}</p>
        <p>
          {t.rich('content.disclaimer.description2', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>
          {t('content.indemnification.title')}
        </h2>
        <p>
          {t.rich('content.indemnification.description', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.governingLaw.title')}</h2>
        <p>{t('content.governingLaw.description')}</p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.severability.title')}</h2>
        <p>{t('content.severability.description')}</p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.noWaiver.title')}</h2>
        <p>
          {t.rich('content.noWaiver.description', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.termination.title')}</h2>
        <p>{t('content.termination.description')}</p>

        <h2 className='text-foreground font-bold uppercase'>
          {t('content.generalProvisions.title')}
        </h2>
        <p>
          {t.rich('content.generalProvisions.description', {
            commercialName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>
        <h2 className='text-foreground font-bold uppercase'>{t('content.modifications.title')}</h2>
        <p>{t('content.modifications.description')}</p>
        <h2 className='text-foreground font-bold uppercase'>{t('content.changes.title')}</h2>
        <p>{t('content.changes.description')}</p>
        <h2 className='text-foreground font-bold uppercase'>{t('content.contact.title')}</h2>
        <p>
          {t('content.contact.description')}
          <ObfuscatedEmailLink />
        </p>
      </div>
    </main>
  )
}
