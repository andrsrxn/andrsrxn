import { IconPlus } from '@tabler/icons-react'
import ReactLenis from 'lenis/react'
import Link from 'next/link'
import { InView } from '@/components/animated/in-view'
import { OrbitingLogos } from '@/components/animated/orbiting-logos'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { AtproyContent } from '@/components/projects/atproy-content'
import { BonzerContent } from '@/components/projects/bonzer-content'
import { IcemeneContent } from '@/components/projects/icemene-content'
import { IcpjsContent } from '@/components/projects/icpjs-content'
import { MoreProjects } from '@/components/projects/more-projects'
import { ThePrincipalContent } from '@/components/projects/theprincipal-content'
import { ContactForm } from '@/components/shared/contact-form'
import { ObfuscatedEmailLink } from '@/components/shared/obfuscated-email'
import { ResponsiveSheet, ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { IMAGES } from '@/lib/constants/paths'
import { PROJECTS } from '@/lib/constants/projects'
import { SERVICES } from '@/lib/constants/services'

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: required content
export default function Home() {
  return (
    <main className='relative z-50'>
      <div data-vaul-drawer-wrapper=''>
        <ReactLenis />
        <section className='relative'>
          <div className='h-20' />
          <div className='display-2xl:container display-2xl:left-[50%] display-2xl:translate-x-[-50%] animate-fade-down display-2xl:w-11/12 tablet:top-20 absolute top-18 left-0 isolate z-0 mx-auto w-full duration-300 ease-in'>
            <div className='ease-gradient-to-rt display-2xl:block absolute top-0 left-0 hidden h-full w-60' />
            <div className='ease-gradient-to-lt display-2xl:block absolute top-0 right-0 hidden h-full w-60' />
            <picture>
              <source srcSet={IMAGES.BRAND.GRADIENT_WIDE.WEBP.URL} media='(min-width: 64rem)' />

              <Image
                loading='eager'
                fetchPriority='high'
                decoding='sync'
                src={IMAGES.BRAND.GRADIENT.WEBP.URL}
                alt={IMAGES.BRAND.GRADIENT.WEBP.ALT}
                includePlaceholder={false}
                className='object-contain'
              />
            </picture>
          </div>
          <div className='tablet:gap-4 animate-fade tablet:mt-44 display:mt-50 relative container mx-auto mt-28 flex w-11/12 flex-col items-center gap-3 opacity-0 [animation-delay:500ms] [animation-duration:800ms]'>
            <h1 className='text-center'>
              <span className='font-body tablet:text-lg display:text-2xl laptop:text-xl block'>
                Andrés Raxón
              </span>
              <span className='font-heading display:text-9xl tablet:text-7xl laptop:text-8xl block text-6xl !leading-none'>
                Director Creativo
              </span>
            </h1>
            <p className='text-muted-foreground display:text-xl laptop:text-base text-sm !leading-none'>
              Obtén 10% de descuento en tu primera contratación
            </p>
            <Button asChild className='display:h-10 display:px-8 display:text-base mt-2 max-w-fit'>
              <Link href='#contacto'>Contratar Servicios</Link>
            </Button>
          </div>
          <div className='laptop:container laptop:w-11/12 laptop:mx-auto laptop:max-w-6xl desktop:max-w-7xl tablet:overflow-visible mt-10 overflow-x-clip'>
            <div
              className='no-scrollbar tablet:snap-none tablet:overflow-clip tablet:justify-center tablet:gap-3 laptop:gap-5 flex snap-x snap-mandatory gap-5 overflow-auto p-1'
              tabIndex={0}>
              <div className='tablet:w-[30%] desktop:pt-10 desktop:pb- tablet:pt-6 animate-fade laptop:w-[33%] tablet:m-0 relative ml-[calc(5%_+_2px)] flex w-[85%] shrink-0 snap-center justify-center border border-b-0 bg-gradient-to-b from-neutral-900 to-transparent p-4 pt-8 opacity-0 [animation-delay:750ms] [animation-duration:500ms]'>
                <div className='laptop:items-center laptop:gap-6 flex flex-col gap-4'>
                  <h2 className='font-heading tablet:text-3xl laptop:text-4xl desktop:text-5xl text-center text-4xl'>
                    {SERVICES.BRAND.TITLE}
                  </h2>
                  <ul className='pl-4'>
                    {Object.values(SERVICES.BRAND.SUBSERVICES).map(service => {
                      return (
                        <li
                          className='tablet:text-sm laptop:text-base desktop:text-lg list-disc leading-relaxed marker:text-neutral-600'
                          key={service.TITLE}>
                          {service.TITLE}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className='tablet:w-[30%] desktop:pt-10 desktop:pb- tablet:pt-6 animate-fade laptop:w-[33%] relative flex w-[85%] shrink-0 snap-center justify-center border border-b-0 bg-gradient-to-b from-neutral-900 to-transparent p-4 pt-8 opacity-0 [animation-delay:850ms] [animation-duration:500ms]'>
                <div className='laptop:items-center laptop:gap-6 flex flex-col gap-4'>
                  <h2 className='font-heading tablet:text-3xl laptop:text-4xl desktop:text-5xl text-center text-4xl'>
                    {SERVICES.WEB_DEV.TITLE}
                  </h2>
                  <ul className='pl-4'>
                    {Object.values(SERVICES.WEB_DEV.SUBSERVICES).map(service => {
                      return (
                        <li
                          className='tablet:text-sm laptop:text-base desktop:text-lg list-disc leading-relaxed marker:text-neutral-600'
                          key={service.TITLE}>
                          {service.TITLE}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
              <div className='tablet:w-[30%] desktop:pt-10 desktop:pb- tablet:pt-6 laptop:w-[33%] animate-fade tablet:m-0 relative mr-[calc(5%_+_2px)] flex w-[85%] shrink-0 snap-center justify-center border border-b-0 bg-gradient-to-b from-neutral-900 to-transparent p-4 pt-8 opacity-0 [animation-delay:950ms] [animation-duration:1000ms]'>
                <div className='laptop:items-center laptop:gap-6 flex flex-col gap-4'>
                  <h2 className='font-heading tablet:text-3xl laptop:text-4xl desktop:text-5xl text-center text-4xl'>
                    {SERVICES.MARKETING.TITLE}
                  </h2>
                  <ul className='pl-4'>
                    {Object.values(SERVICES.MARKETING.SUBSERVICES).map(service => {
                      return (
                        <li
                          className='tablet:text-sm laptop:text-base desktop:text-lg list-disc leading-relaxed marker:text-neutral-600'
                          key={service.TITLE}>
                          {service.TITLE}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Separator className='container mx-auto my-20 !w-11/12' />
        <section className='tablet:mt-20 laptop:w-11/12 mx-auto mt-12 max-w-6xl'>
          <div className='tablet:gap-20 desktop:gap-40 flex flex-col gap-16'>
            <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
              <InView>
                <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                  <span className='text-muted-foreground tablet:text-base desktop:text-lg flex text-sm leading-tight'>
                    {PROJECTS.ATPROY_BRAND_REFRESH.CLIENT} -{' '}
                    {PROJECTS.ATPROY_BRAND_REFRESH.INDUSTRY}
                  </span>
                  <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                    {PROJECTS.ATPROY_BRAND_REFRESH.SUMMARY}
                  </p>
                </div>
              </InView>
              <div className='relative'>
                <picture>
                  <source
                    srcSet={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />

                  <Image
                    src={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.ALT}
                    className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
                <ResponsiveSheet>
                  <InView
                    viewOptions={{
                      start: 'top 100%',
                    }}
                    to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                    <ResponsiveSheetTrigger>
                      <Button
                        className='display:h-10 display:px-8 display:text-base display:bottom-6 absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
                        variant='secondary'>
                        Ver proyecto completo <IconPlus />
                      </Button>
                    </ResponsiveSheetTrigger>
                  </InView>
                  <AtproyContent />
                </ResponsiveSheet>
              </div>
            </ScrollPolygonContainer>
            <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
              <InView>
                <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                  <span className='text-muted-foreground tablet:text-base desktop:text-lg flex text-sm leading-tight'>
                    {PROJECTS.ICPSJ_BRANDING.CLIENT} - {PROJECTS.ICPSJ_BRANDING.INDUSTRY}
                  </span>
                  <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                    {PROJECTS.ICPSJ_BRANDING.SUMMARY}
                  </p>
                </div>
              </InView>
              <div className='relative'>
                <video
                  autoPlay
                  muted
                  controls={false}
                  loop
                  playsInline
                  className='animated-polygon desktop:w-11/12 mx-auto aspect-video border object-cover p-0.5 opacity-95 will-change-[clip-path]'>
                  <source
                    src={PROJECTS.ICPSJ_BRANDING.IMAGES.LOGO_ANIMATION.URL}
                    type='video/mp4'
                  />
                </video>
                <ResponsiveSheet>
                  <InView
                    viewOptions={{
                      start: 'top 100%',
                    }}
                    to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                    <ResponsiveSheetTrigger>
                      <Button
                        className='display:h-10 display:px-8 display:text-base display:bottom-6 absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
                        variant='secondary'>
                        Ver proyecto completo <IconPlus />
                      </Button>
                    </ResponsiveSheetTrigger>
                  </InView>
                  <IcpjsContent />
                </ResponsiveSheet>
              </div>
            </ScrollPolygonContainer>
            <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
              <InView>
                <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                  <span className='text-muted-foreground tablet:text-base desktop:text-lg flex text-sm leading-tight'>
                    {PROJECTS.BONZER_BRANDING.CLIENT} - {PROJECTS.BONZER_BRANDING.INDUSTRY}
                  </span>
                  <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                    {PROJECTS.BONZER_BRANDING.SUMMARY}
                  </p>
                </div>
              </InView>
              <div className='relative'>
                <picture>
                  <source
                    srcSet={PROJECTS.BONZER_BRANDING.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />

                  <Image
                    src={PROJECTS.BONZER_BRANDING.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.BONZER_BRANDING.IMAGES.BANNER_SMALL.ALT}
                    className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
                <ResponsiveSheet>
                  <InView
                    viewOptions={{
                      start: 'top 100%',
                    }}
                    to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                    <ResponsiveSheetTrigger>
                      <Button
                        className='display:h-10 display:px-8 display:text-base display:bottom-6 absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
                        variant='secondary'>
                        Ver proyecto completo <IconPlus />
                      </Button>
                    </ResponsiveSheetTrigger>
                  </InView>
                  <BonzerContent />
                </ResponsiveSheet>
              </div>
            </ScrollPolygonContainer>
            <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
              <InView>
                <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                  <span className='text-muted-foreground tablet:text-base desktop:text-lg flex text-sm leading-tight'>
                    {PROJECTS.THEPRINCIPAL_BRANDING.CLIENT} -{' '}
                    {PROJECTS.THEPRINCIPAL_BRANDING.INDUSTRY}
                  </span>
                  <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                    {PROJECTS.THEPRINCIPAL_BRANDING.SUMMARY}
                  </p>
                </div>
              </InView>
              <div className='relative'>
                <picture>
                  <source
                    srcSet={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />

                  <Image
                    src={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.ALT}
                    className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
                <ResponsiveSheet>
                  <InView
                    viewOptions={{
                      start: 'top 100%',
                    }}
                    to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                    <ResponsiveSheetTrigger>
                      <Button
                        className='display:h-10 display:px-8 display:text-base display:bottom-6 absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
                        variant='secondary'>
                        Ver proyecto completo <IconPlus />
                      </Button>
                    </ResponsiveSheetTrigger>
                  </InView>
                  <ThePrincipalContent />
                </ResponsiveSheet>
              </div>
            </ScrollPolygonContainer>
            <ScrollPolygonContainer className='tablet:gap-6 laptop:hidden relative flex flex-col gap-4'>
              <InView>
                <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]'>
                  <span className='text-muted-foreground tablet:text-base desktop:text-lg flex text-sm leading-tight'>
                    {PROJECTS.ICEMENE_REBRANDING.CLIENT} - {PROJECTS.ICEMENE_REBRANDING.INDUSTRY}
                  </span>
                  <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>
                    {PROJECTS.ICEMENE_REBRANDING.SUMMARY}
                  </p>
                </div>
              </InView>
              <div className='relative'>
                <picture>
                  <source
                    srcSet={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />

                  <Image
                    src={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER_SMALL.ALT}
                    className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
                <ResponsiveSheet>
                  <InView
                    viewOptions={{
                      start: 'top 100%',
                    }}
                    to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                    <ResponsiveSheetTrigger>
                      <Button
                        className='display:h-10 display:px-8 display:text-base display:bottom-6 absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
                        variant='secondary'>
                        Ver proyecto completo <IconPlus />
                      </Button>
                    </ResponsiveSheetTrigger>
                  </InView>
                  <IcemeneContent />
                </ResponsiveSheet>
              </div>
            </ScrollPolygonContainer>
          </div>
          <Separator className='container mx-auto my-10 !w-11/12' />
        </section>
        <section>
          <MoreProjects className='-mt-1 mb-12' />
        </section>

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
            className='from-background pointer-events-none absolute top-0 left-0 z-200 h-40 w-full bg-gradient-to-b to-transparent'
          />

          <div
            aria-hidden
            className='from-background pointer-events-none absolute bottom-0 left-0 z-200 h-40 w-full bg-gradient-to-t to-transparent'
          />
          <OrbitingLogos />
        </section>

        <section className='mb-16 outline-none' id='contacto'>
          <div className='desktop:max-w-3xl container mx-auto mb-3 h-max w-4/5 max-w-xl'>
            <h2 className='font-heading laptop:text-center tablet:text-5xl desktop:text-7xl text-center text-4xl outline-none'>
              Comencemos a crear diseños memorables
            </h2>
          </div>
          <div>
            <div className='desktop:max-w-2xl desktop:w-full container mx-auto mb-12 flex w-11/12 max-w-sm items-center justify-center'>
              <p className='text-muted-foreground desktop:text-lg text-center text-pretty'>
                Comunícate conmigo por medio de: <ObfuscatedEmailLink /> o enviando el siguiente
                formulario.
              </p>
            </div>

            <InView>
              <ContactForm />
            </InView>
          </div>
        </section>
      </div>
    </main>
  )
}
