import { IconPlus } from '@tabler/icons-react'
import type { ComponentProps } from 'react'
import { InView } from '@/components/animated/in-view'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { IcemeneContent } from '@/components/projects/icemene-content'
import { PinalzaContent } from '@/components/projects/pinalza-content'
import { SolarGroupContent } from '@/components/projects/solar-group-content'
import { TransportiisaContent } from '@/components/projects/transportiisa-content'
import { ResponsiveSheet, ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
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
          <ScrollPolygonContainer className='laptop:flex tablet:gap-6 relative hidden flex-col gap-4'>
            <InView>
              <div className='tablet:gap-3 desktop:px-0 flex w-full flex-col gap-1 px-[5%]'>
                <span className='text-muted-foreground tablet:text-base desktop:text-lg block w-full truncate text-sm leading-tight'>
                  {PROJECTS.ICEMENE_REBRANDING.CLIENT} - {PROJECTS.ICEMENE_REBRANDING.INDUSTRY}
                </span>
                <p className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.ICEMENE_REBRANDING.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <Image
                src={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER.URL}
                alt={PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER.ALT}
                includePlaceholder={false}
                className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
              />
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
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
                <p className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <Image
                src={PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.IMAGES.BANNER.URL}
                alt={PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY.IMAGES.BANNER.ALT}
                includePlaceholder={false}
                className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
              />
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
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
                  {PROJECTS.PINALZA_VISUAL_IDENTITY.CLIENT} -{' '}
                  {PROJECTS.PINALZA_VISUAL_IDENTITY.INDUSTRY}
                </span>
                <p className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.PINALZA_VISUAL_IDENTITY.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <Image
                src={PROJECTS.PINALZA_VISUAL_IDENTITY.IMAGES.BANNER_COMPARISON.URL}
                alt={PROJECTS.PINALZA_VISUAL_IDENTITY.IMAGES.BANNER_COMPARISON.ALT}
                includePlaceholder={false}
                className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
              />
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
                      variant='secondary'>
                      Ver proyecto completo <IconPlus />
                    </Button>
                  </ResponsiveSheetTrigger>
                </InView>
                <PinalzaContent />
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
                <p className='font-heading laptop:text-5xl desktop:text-6xl text-3xl'>
                  {PROJECTS.SOLAR_GROUP_REBRANDING.SUMMARY}
                </p>
              </div>
            </InView>
            <div className='relative'>
              <Image
                src={PROJECTS.SOLAR_GROUP_REBRANDING.IMAGES.BANNER.URL}
                alt={PROJECTS.SOLAR_GROUP_REBRANDING.IMAGES.BANNER.ALT}
                includePlaceholder={false}
                className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
              />
              <ResponsiveSheet>
                <InView
                  viewOptions={{
                    start: 'top 100%',
                  }}
                  to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
                  <ResponsiveSheetTrigger>
                    <Button
                      className='absolute bottom-4 left-1/2 w-fit -translate-x-1/2 !px-6'
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
    </div>
  )
}
