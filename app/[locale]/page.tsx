/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: One page */

import { IconDownload, IconFilePdf } from '@andrsrxn/icons'
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
            <div className='relative overflow-hidden rounded-full p-0.5'>
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
                  <svg
                    className='size-5'
                    fill='#ffffff'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                  </svg>
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
                  <svg
                    className='size-4'
                    fill='#ffffff'
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'>
                    <path d='M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z' />
                  </svg>
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
                  <svg
                    role='img'
                    className='size-5'
                    fill='#ffffff'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'>
                    <title>GitHub</title>
                    <path d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12' />
                  </svg>
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
                    <IconFilePdf className='size-6' />
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
        <div className='desktop:max-w-3xl container mx-auto mb-6 h-max w-4/5 max-w-xl'>
          <h2 className='font-heading laptop:text-center tablet:text-5xl desktop:text-7xl text-center text-4xl text-balance outline-none'>
            {tHomePage('contact.title')}
          </h2>
        </div>

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
      </section>
    </main>
  )
}
