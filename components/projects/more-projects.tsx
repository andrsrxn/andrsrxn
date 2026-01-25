import { IconExternalLink, IconPlus } from '@tabler/icons-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { InView } from '@/components/animated/in-view'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { IconInstagram } from '@/components/icons/brands/instagram'
import { IcemeneContent } from '@/components/projects/icemene-content'
import { SolarGroupContent } from '@/components/projects/solar-group-content'
import { ThePrincipalContent } from '@/components/projects/theprincipal-content'
import { TransportiisaContent } from '@/components/projects/transportiisa-content'
import { ResponsiveSheet, ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { COMPANY } from '@/lib/constants/company'
import { PROJECTS } from '@/lib/constants/projects'
import { cn } from '@/lib/utils'

interface MoreProyectsProps extends ComponentProps<'div'> {}

export const MoreProjects = ({ className, ...props }: MoreProyectsProps) => {
  return (
    <div
      className={cn('animate-fade-up desktop:container desktop:w-11/12 mx-auto', className)}
      {...props}>
      <InView>
        <div className='tablet:grid-cols-2 tablet:gap-y-20 tablet:gap-x-12 desktop:gap-y-32 desktop:gap-x-16 grid gap-12'>
          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 desktop:px-0 flex w-full flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg block w-full truncate text-sm leading-tight'>
                  {PROJECTS.THEPRINCIPAL_BRANDING.CLIENT} -{' '}
                  {PROJECTS.THEPRINCIPAL_BRANDING.INDUSTRY}
                </span>
                <h3 className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.THEPRINCIPAL_BRANDING.SUMMARY}
                </h3>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <picture>
                  <source
                    srcSet={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />
                  <Image
                    src={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.ALT}
                    loading='eager'
                    className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='desktop:text-base absolute bottom-4 left-1/2 w-fit -translate-x-1/2 px-6!'
                      variant='secondary'>
                      Ver proyecto completo <IconPlus />
                    </Button>
                  </ResponsiveSheetTrigger>
                </InView>
                <ThePrincipalContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>
          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 desktop:px-0 flex w-full flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg block w-full truncate text-sm leading-tight'>
                  {PROJECTS.ICEMENE_REBRANDING.CLIENT} - {PROJECTS.ICEMENE_REBRANDING.INDUSTRY}
                </span>
                <h3 className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.ICEMENE_REBRANDING.SUMMARY}
                </h3>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <picture>
                  <source
                    srcSet={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />
                  <Image
                    src={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER_SMALL.ALT}
                    loading='eager'
                    className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='desktop:text-base absolute bottom-4 left-1/2 w-fit -translate-x-1/2 px-6!'
                      variant='secondary'>
                      Ver proyecto completo <IconPlus />
                    </Button>
                  </ResponsiveSheetTrigger>
                </InView>
                <IcemeneContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>
          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 desktop:px-0 flex w-full flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg block w-full truncate text-sm leading-tight'>
                  {PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.CLIENT} -{' '}
                  {PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.INDUSTRY}
                </span>
                <h3 className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.SUMMARY}
                </h3>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <picture>
                  <source
                    srcSet={PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />
                  <Image
                    src={PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.IMAGES.BANNER_SMALL.ALT}
                    loading='eager'
                    className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='desktop:text-base absolute bottom-4 left-1/2 w-fit -translate-x-1/2 px-6!'
                      variant='secondary'>
                      Ver proyecto completo <IconPlus />
                    </Button>
                  </ResponsiveSheetTrigger>
                </InView>
                <TransportiisaContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>

          <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 desktop:px-0 flex w-full flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg block w-full truncate text-sm leading-tight'>
                  {PROJECTS.SOLAR_GROUP_REBRANDING.CLIENT} -{' '}
                  {PROJECTS.SOLAR_GROUP_REBRANDING.INDUSTRY}
                </span>
                <h3 className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.SOLAR_GROUP_REBRANDING.SUMMARY}
                </h3>
              </div>
            </InView>
            <div className='relative'>
              <InView
                from={{ opacity: 0 }}
                to={{ opacity: 1, duration: 0.3, ease: 'power1.inOut' }}>
                <picture>
                  <source
                    srcSet={PROJECTS.SOLAR_GROUP_REBRANDING.IMAGES.BANNER.URL}
                    media='(min-width: 64rem)'
                  />
                  <Image
                    src={PROJECTS.SOLAR_GROUP_REBRANDING.IMAGES.BANNER_SMALL.URL}
                    alt={PROJECTS.SOLAR_GROUP_REBRANDING.IMAGES.BANNER_SMALL.ALT}
                    loading='eager'
                    className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
                  />
                </picture>
              </InView>
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='desktop:text-base absolute bottom-4 left-1/2 w-fit -translate-x-1/2 px-6!'
                      variant='secondary'>
                      Ver proyecto completo <IconPlus />
                    </Button>
                  </ResponsiveSheetTrigger>
                </InView>
                <SolarGroupContent />
              </ResponsiveSheet>
            </div>
          </ScrollPolygonContainer>
        </div>
      </InView>
      <InView>
        <div className='desktop:mt-24 desktop:mb-12 mt-18 mb-6 flex items-center justify-center'>
          <Link
            className='text-foreground laptop:text-lg desktop:px-8 inline-flex items-center gap-1 rounded-full bg-neutral-900 px-6 py-3 text-base leading-none font-bold transition duration-75 hover:bg-neutral-800'
            target='_blank'
            rel='noopener noreferrer'
            href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}>
            <IconInstagram className='mr-1 size-[0.8em] scale-125' />
            Ver más en Instagram <IconExternalLink className='tablet:size-5 size-4' />
          </Link>
        </div>
      </InView>
    </div>
  )
}
