/** biome-ignore-all lint/complexity/noExcessiveLinesPerFunction: One page */

import { IconBrandInstagram, IconBrandLinkedin, IconBrandWhatsapp } from '@tabler/icons-react'
import ReactLenis from 'lenis/react'
import Link from 'next/link'
import { InView } from '@/components/animated/in-view'
import { OrbitingLogos } from '@/components/animated/orbiting-logos'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { AtproyContent } from '@/components/projects/atproy-content'
import { IcpjsContent } from '@/components/projects/icpjs-content'
import { MoreProjects } from '@/components/projects/more-projects'
import { TheChoiceContent } from '@/components/projects/the-choice-content'
import { VIVETContent } from '@/components/projects/vivet-content'
import { ContactForm } from '@/components/shared/contact-form'
import { ObfuscatedEmailLink } from '@/components/shared/obfuscated-email'
import { ResponsiveSheet, ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { ServicesCarousel } from '@/components/shared/services-carousel'
import { VIVETVideo } from '@/components/shared/vivet-video'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'
import { PROJECTS } from '@/lib/constants/projects'
import { cn } from '@/lib/utils'

export default function Home() {
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
        <div className='tablet:gap-6 animate-fade tablet:mt-40 display:mt-50 animation-duration-[800ms] relative container mx-auto mt-28 flex w-11/12 flex-col items-center gap-4 opacity-0 [animation-delay:500ms]'>
          <h1 className='text-center'>
            <span className='font-body tablet:text-lg display:text-2xl laptop:text-xl mb-2 block'>
              Andrés Raxón
            </span>
            <span className='font-heading tablet:text-7xl desktop:max-w-4xl laptop:text-8xl desktop:text-9xl laptop:max-w-2xl block max-w-md text-6xl leading-none!'>
              Diseñador y Programador Web
            </span>
          </h1>
          <p className='text-muted-foreground desktop:text-xl tablet:text-base laptop:max-w-2xl desktop:max-w-3xl max-w-md text-center text-sm leading-normal text-pretty'>
            +2 años de experiencia como Profesional Independiente. Especializado en Branding
            moderno, Desarrollo Web de impacto y material de Marketing destacable.
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
                <Link href='#contacto'>Contratar Servicios</Link>
              </Button>
            </div>

            <div className='flex items-center gap-2'>
              <Button
                asChild
                variant={'secondary'}
                size='icon'
                className='display:h-10 relative shrink-0'>
                <Link
                  prefetch={false}
                  target='_blank'
                  title={COMPANY.SOCIAL_MEDIA.WHATSAPP.LABEL}
                  aria-label={COMPANY.SOCIAL_MEDIA.WHATSAPP.LABEL}
                  rel='noopener noreferrer'
                  href={COMPANY.SOCIAL_MEDIA.WHATSAPP.URL}>
                  <IconBrandWhatsapp className='size-6' />{' '}
                </Link>
              </Button>
              <Button
                asChild
                variant={'secondary'}
                size='icon'
                className='display:h-10 relative shrink-0'>
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
                className='display:h-10 relative shrink-0'>
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
            </div>
          </div>
        </div>
        <ServicesCarousel />
      </section>

      <Separator className='container mx-auto my-20 w-11/12!' />
      {/* Projects */}
      <section className='tablet:mt-20 laptop:w-11/12 mx-auto mt-12 max-w-6xl'>
        <div className='tablet:gap-20 desktop:gap-40 flex flex-col gap-16'>
          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg flex items-center gap-3 truncate text-sm leading-tight'>
                  <Badge className='desktop:text-sm'>
                    {PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.TYPE}
                  </Badge>{' '}
                  {PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.CLIENT} -{' '}
                  {PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.INDUSTRY}
                </span>
                <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                  {PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <picture>
                  <source
                    srcSet={PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />
                  <Image
                    src={PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.IMAGES.BANNER_SMALL.ALT}
                    loading='eager'
                    className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 105%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger />
                </InView>

                <TheChoiceContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>

          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg flex items-center gap-3 truncate text-sm leading-tight'>
                  <Badge variant='destructive' className='desktop:text-sm'>
                    {PROJECTS.VIVET_REBRANDING.TYPE}
                  </Badge>{' '}
                  {PROJECTS.VIVET_REBRANDING.CLIENT} - {PROJECTS.VIVET_REBRANDING.INDUSTRY}
                </span>
                <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                  {PROJECTS.VIVET_REBRANDING.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <VIVETVideo />
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 105%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger />
                </InView>

                <VIVETContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>

          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg flex truncate text-sm leading-tight'>
                  {PROJECTS.ATPROY_BRAND_REFRESH.CLIENT} - {PROJECTS.ATPROY_BRAND_REFRESH.INDUSTRY}
                </span>
                <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                  {PROJECTS.ATPROY_BRAND_REFRESH.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <picture>
                  <source
                    srcSet={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />
                  <Image
                    src={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.ALT}
                    loading='eager'
                    className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 105%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger />
                </InView>
                <AtproyContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>
          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg flex truncate text-sm leading-tight'>
                  {PROJECTS.ICPSJ_BRANDING.CLIENT} - {PROJECTS.ICPSJ_BRANDING.INDUSTRY}
                </span>
                <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                  {PROJECTS.ICPSJ_BRANDING.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <InView>
                <video
                  autoPlay
                  muted
                  controls={false}
                  loop
                  playsInline
                  className='bg-accent desktop:w-11/12 mx-auto aspect-video border object-cover will-change-[clip-path]'>
                  <source
                    src={PROJECTS.ICPSJ_BRANDING.IMAGES.LOGO_ANIMATION.URL}
                    type='video/mp4'
                  />
                </video>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 105%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger />
                </InView>
                <IcpjsContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>
        </div>

        <Separator className='container mx-auto my-20 w-11/12!' />
      </section>

      <section>
        <MoreProjects className='-mt-1 mb-12' />
      </section>

      {/* Tools */}
      <section className='desktop:my-36 relative isolate my-30 overflow-hidden'>
        <div className='wrapper tablet:w-1/2 laptop:w-full pointer-events-none absolute inset-0 z-500 mx-auto flex h-full w-4/5 flex-col items-center justify-center'>
          <h2 className='text-center'>
            <span className='text-muted-foreground tablet:text-xl desktop:text-2xl block text-lg'>
              Las mejores herramientas,
            </span>
            <span className='font-heading tablet:text-5xl desktop:text-6xl block text-4xl'>
              los mejores resultados
            </span>
          </h2>
        </div>
        <div
          aria-hidden
          className='from-background pointer-events-none absolute top-0 left-0 z-200 h-40 w-full bg-linear-to-b to-transparent'
        />

        <div
          aria-hidden
          className='from-background pointer-events-none absolute bottom-0 left-0 z-200 h-40 w-full bg-linear-to-t to-transparent'
        />
        <OrbitingLogos />
      </section>

      {/* Contact */}
      <section className='mb-16 outline-none' id='contacto'>
        <div className='desktop:max-w-3xl container mx-auto mb-3 h-max w-4/5 max-w-xl'>
          <h2 className='font-heading laptop:text-center tablet:text-5xl desktop:text-7xl text-center text-4xl outline-none'>
            Comencemos a crear diseños memorables
          </h2>
        </div>
        <div>
          <div className='desktop:max-w-2xl desktop:w-full container mx-auto mb-12 flex w-11/12 max-w-sm items-center justify-center'>
            <p className='text-muted-foreground desktop:text-lg text-center text-pretty'>
              Comunícate conmigo por medio de: <ObfuscatedEmailLink />,{' '}
              <Link
                prefetch={false}
                className='text-foreground inline-flex items-center gap-2 leading-none font-bold underline decoration-1 underline-offset-2'
                target='_blank'
                rel='noopener noreferrer'
                href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}>
                {COMPANY.SOCIAL_MEDIA.INSTAGRAM.LABEL}
              </Link>
              ,{' '}
              <Link
                prefetch={false}
                className='text-foreground inline-flex items-center gap-2 leading-none font-bold underline decoration-1 underline-offset-2'
                target='_blank'
                rel='noopener noreferrer'
                href={COMPANY.SOCIAL_MEDIA.WHATSAPP.URL}>
                {COMPANY.SOCIAL_MEDIA.WHATSAPP.LABEL}
              </Link>{' '}
              o llenando el siguiente formulario.
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
