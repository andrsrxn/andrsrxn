/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: One page */

import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconDownload,
  IconFileCv,
} from '@tabler/icons-react'
import ReactLenis from 'lenis/react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { hasLocale, type Locale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { InView } from '@/components/animated/in-view'
import { OrbitingLogos } from '@/components/animated/orbiting-logos'
import { MoreProjects } from '@/components/projects/more-projects'
import { PrincipalProjects } from '@/components/projects/principal-projects'
import { ContactForm } from '@/components/shared/contact-form'
import { ObfuscatedEmailLink } from '@/components/shared/obfuscated-email'
import { ServicesCarousel } from '@/components/shared/services-carousel'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { routing } from '@/i18n/routing'
import { COMPANY } from '@/lib/constants/company'
import { baseMetadata } from '@/lib/constants/metadata'
import { IMAGES } from '@/lib/constants/paths'
import { SITE } from '@/lib/constants/site'
import { cn } from '@/lib/utils'

interface PageProps {
  params: Promise<{ locale: Locale }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params

  setRequestLocale(locale)

  const tCompany = await getTranslations({ locale, namespace: 'company' })
  const tHomePage = await getTranslations({ locale, namespace: 'homePage' })

  const jobPosition = tCompany('jobPosition')
  const description = tCompany('description')
  const keywords = tHomePage('metadata.keywords')

  const title = `${jobPosition} | ${COMPANY.NAME}`
  return {
    title,
    description,
    keywords: keywords.split(',').map(keyword => keyword.trim()),
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

export default async function Home({ params }: PageProps) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)
  const tCompany = await getTranslations('company')
  const tHomePage = await getTranslations('homePage')

  return (
    <main className='relative z-50'>
      <ReactLenis />
      {/* Main and services */}
      <section className='relative'>
        <div className='h-20' />
        <div className='display-2xl:container display-2xl:left-[50%] display-2xl:translate-x-[-50%] animate-fade-down display-2xl:w-11/12 tablet:top-20 absolute top-18 left-0 isolate z-0 mx-auto w-full duration-300 ease-in'>
          <div className='ease-gradient-to-rt display-2xl:block absolute top-0 left-0 hidden h-full w-60' />
          <div className='ease-gradient-to-lt display-2xl:block absolute top-0 right-0 hidden h-full w-60' />
          <picture aria-hidden className='pointer-events-none'>
            <source srcSet={IMAGES.BRAND.GRADIENT_WIDE.WEBP.URL} media='(min-width: 64rem)' />

            <Image
              loading='lazy'
              fetchPriority='high'
              decoding='sync'
              src={IMAGES.BRAND.GRADIENT.WEBP.URL}
              alt={IMAGES.BRAND.GRADIENT.WEBP.ALT}
              includePlaceholder={false}
              className='object-contain'
            />
          </picture>
        </div>
        <div className='tablet:gap-6 animate-fade tablet:mt-36 animation-duration-[800ms] relative container mx-auto mt-28 flex w-11/12 flex-col items-center gap-4 opacity-0 [animation-delay:500ms]'>
          <h1 className='text-center'>
            <span className='font-body tablet:text-lg display:text-2xl laptop:text-xl mb-2 block'>
              {COMPANY.NAME}
            </span>
            <span className='font-heading tablet:text-7xl laptop:text-8xl laptop:max-w-2xl block max-w-md text-6xl leading-none!'>
              {tCompany('jobPosition')}
            </span>
          </h1>
          <p className='text-muted-foreground desktop:text-xl tablet:text-base laptop:max-w-2xl desktop:max-w-3xl max-w-md text-center text-sm leading-normal text-pretty'>
            {tCompany('description')}
          </p>
          <div className='mt-4 flex flex-wrap items-center gap-2'>
            <div className='relative overflow-hidden rounded-full p-[2px]'>
              <span
                className={cn(
                  'absolute inset-0 scale-[500%] animate-[spin_2s_linear_infinite]',
                  'bg-[conic-gradient(from_90deg_at_50%_50%,#e300bf_0%,#0f00d3_50%,#e300bf_100%)]'
                )}
              />

              <Button
                asChild
                size='default'
                className='display:h-10 display:px-8 display:text-base relative max-w-fit'>
                <a href={`${SITE.BASE_URL}#contacto`}>{tHomePage('hero.cta')}</a>
              </Button>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                asChild
                variant={'secondary'}
                size='icon'
                className='display:size-10 relative shrink-0'>
                <Link
                  prefetch={false}
                  target='_blank'
                  title={COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}
                  rel='noopener noreferrer'
                  href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}>
                  <IconBrandInstagram className='size-6' />{' '}
                </Link>
              </Button>
              <Button
                asChild
                variant={'secondary'}
                size='icon'
                className='display:size-10 relative shrink-0'>
                <Link
                  prefetch={false}
                  target='_blank'
                  title={COMPANY.SOCIAL_MEDIA.LINKEDIN.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.LINKEDIN.LABEL}
                  rel='noopener noreferrer'
                  href={COMPANY.SOCIAL_MEDIA.LINKEDIN.URL}>
                  <IconBrandLinkedin className='size-6' />{' '}
                </Link>
              </Button>
              <Button
                asChild
                variant={'secondary'}
                size='icon'
                className='display:size-10 relative shrink-0'>
                <Link
                  prefetch={false}
                  target='_blank'
                  title={COMPANY.SOCIAL_MEDIA.GITHUB.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.GITHUB.LABEL}
                  rel='noopener noreferrer'
                  href={COMPANY.SOCIAL_MEDIA.GITHUB.URL}>
                  <IconBrandGithub className='size-6' />{' '}
                </Link>
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant={'secondary'}
                    size='icon'
                    aria-label='Curriculum Vitae'
                    title='Curriculum Vitae'
                    className='display:size-10 relative shrink-0'>
                    <IconFileCv className='size-6' />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='bottom' align='start' className='w-full'>
                  <DropdownMenuItem asChild>
                    <Link
                      prefetch={false}
                      download={COMPANY.DOCS.CV.LABEL}
                      href={COMPANY.DOCS.CV.URL}
                      className='flex w-full items-center gap-2'>
                      <IconDownload className='size-6' /> {tHomePage('hero.ctaCV')}
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link
                      prefetch={false}
                      download={COMPANY.DOCS.CV_EN.LABEL}
                      href={COMPANY.DOCS.CV_EN.URL}
                      className='flex w-full items-center gap-2'>
                      <IconDownload className='size-6' /> {tHomePage('hero.ctaCVEnglish')}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <ServicesCarousel />
      </section>

      <Separator className='container mx-auto my-24 w-11/12! max-w-7xl' />

      {/* Projects */}
      <section className='tablet:mt-20 laptop:w-11/12 mx-auto mt-12 max-w-6xl'>
        <div className='tablet:gap-20 desktop:gap-40 flex flex-col gap-16'>
          <PrincipalProjects />
        </div>
      </section>

      <section className='laptop:mt-28 mt-24'>
        <MoreProjects />
      </section>

      {/* Tools */}
      <section className='desktop:my-36 relative isolate my-30 overflow-hidden'>
        <div className='wrapper tablet:w-70 laptop:w-full pointer-events-none absolute inset-0 z-500 mx-auto flex h-full w-[60%] flex-col items-center justify-center'>
          <h2 className='text-center'>
            <span className='text-muted-foreground tablet:text-xl desktop:text-2xl mb-2 block text-lg'>
              {tHomePage('designTools.title1')}
            </span>
            <span className='font-heading tablet:text-5xl desktop:text-6xl desktop:scale-105 block text-4xl'>
              {tHomePage('designTools.title2')}
            </span>
          </h2>
        </div>
        <div
          aria-hidden
          className='from-background pointer-events-none absolute top-0 left-0 z-200 h-20 w-full bg-linear-to-b to-transparent'
        />

        <div
          aria-hidden
          className='from-background pointer-events-none absolute bottom-0 left-0 z-200 h-20 w-full bg-linear-to-t to-transparent'
        />
        <OrbitingLogos />
      </section>

      {/* Contact */}
      <section className='mb-16 outline-none' id='contacto'>
        <div className='desktop:max-w-3xl container mx-auto mb-3 h-max w-4/5 max-w-xl'>
          <h2 className='font-heading laptop:text-center tablet:text-5xl desktop:text-7xl text-center text-4xl outline-none'>
            {tHomePage('contact.title')}
          </h2>
        </div>
        <div>
          <div className='desktop:max-w-2xl desktop:w-full container mx-auto mb-12 flex w-11/12 max-w-sm items-center justify-center'>
            <p className='text-muted-foreground desktop:text-lg text-center text-pretty'>
              {tHomePage.rich('contact.description', {
                email: () => <ObfuscatedEmailLink />,
                instagram: () => (
                  <Link
                    prefetch={false}
                    className='text-foreground inline-flex items-center gap-2 leading-none font-bold underline decoration-1 underline-offset-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}>
                    {COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}
                  </Link>
                ),
                whatsapp: () => (
                  <Link
                    prefetch={false}
                    className='text-foreground inline-flex items-center gap-2 leading-none font-bold underline decoration-1 underline-offset-2'
                    target='_blank'
                    rel='noopener noreferrer'
                    href={COMPANY.SOCIAL_MEDIA.WHATSAPP.URL}>
                    {COMPANY.SOCIAL_MEDIA.WHATSAPP.LABEL}
                  </Link>
                ),
              })}
            </p>
          </div>

          <InView>
            <ContactForm />
          </InView>
        </div>
      </section>
    </main>
  )
}
