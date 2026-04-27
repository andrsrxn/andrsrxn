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

  const t = await getTranslations('privacyPage')

  return (
    <main className='laptop:mt-30 mt-24'>
      <div className='prose numbered-heading desktop:prose-xl font-body text-muted-foreground container mx-auto w-11/12'>
        <h1 className='text-foreground font-heading laptop:text-7xl! eading-none mb-8! text-6xl font-normal!'>
          {t('title')}
        </h1>

        <p>
          {t.rich('content.intro', {
            legalName: COMPANY.COMMERCIAL_NAME,
          })}
        </p>
        <Separator className='mt-12' />

        <h2 className='text-foreground font-bold uppercase'>{t('content.identity.title')}</h2>
        <p>
          {t.rich('content.identity.description', {
            legalName: COMPANY.LEGAL_NAME,
            country: COMPANY.ADDRESS.COUNTRY,
            nit: COMPANY.NIT,
          })}
        </p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.dataCollection.title')}</h2>
        <p>{t('content.dataCollection.intro')}</p>

        <h3 className='text-foreground font-bold uppercase'>
          {t('content.dataCollection.direct.title')}
        </h3>
        <p>{t('content.dataCollection.direct.description')}</p>
        <ul>
          <li>{t('content.dataCollection.direct.item1')}</li>
          <li>{t('content.dataCollection.direct.item2')}</li>
          <li>{t('content.dataCollection.direct.item3')}</li>
          <li>{t('content.dataCollection.direct.item4')}</li>
          <li>{t('content.dataCollection.direct.item5')}</li>
        </ul>

        <p>{t('content.dataCollection.direct.footer')}</p>

        <h3 className='text-foreground font-bold uppercase'>
          {t('content.dataCollection.automatic.title')}
        </h3>
        <p>{t('content.dataCollection.automatic.description')}</p>
        <ul>
          <li>{t('content.dataCollection.automatic.item1')}</li>
          <li>{t('content.dataCollection.automatic.item2')}</li>
          <li>{t('content.dataCollection.automatic.item3')}</li>
          <li>{t('content.dataCollection.automatic.item4')}</li>
        </ul>

        <h2 className='text-foreground font-bold uppercase'>{t('content.dataUsage.title')}</h2>
        <p>{t('content.dataUsage.intro')}</p>
        <ul>
          <li>{t('content.dataUsage.item1')}</li>
          <li>{t('content.dataUsage.item2')}</li>
          <li>{t('content.dataUsage.item3')}</li>
          <li>{t('content.dataUsage.item4')}</li>
        </ul>

        <h2 className='text-foreground font-bold uppercase'>{t('content.dataSharing.title')}</h2>
        <p>{t('content.dataSharing.description')}</p>
        <h2 className='text-foreground font-bold uppercase'>{t('content.cookies.title')}</h2>
        <p>{t('content.cookies.description')}</p>

        <h3 className='text-foreground font-bold uppercase'>
          {t('content.cookies.thirdParty.title')}
        </h3>
        <p>{t('content.cookies.thirdParty.intro')}</p>
        <ul>
          <li>
            <strong className='text-foreground'>Cloudflare:</strong>{' '}
            {t('content.cookies.thirdParty.cloudflare')}
          </li>
          <li>
            <strong className='text-foreground'>Vercel:</strong>{' '}
            {t('content.cookies.thirdParty.vercel')}
          </li>
        </ul>
        <p>{t('content.cookies.thirdParty.footer')}</p>
        <h2 className='text-foreground font-bold uppercase'>{t('content.dataSecurity.title')}</h2>
        <p>{t('content.dataSecurity.description')}</p>

        <h2 className='text-foreground font-bold uppercase'>{t('content.yourRights.title')}</h2>
        <p>{t('content.yourRights.description')}</p>

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
