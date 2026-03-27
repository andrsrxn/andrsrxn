'use client'

import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { PROJECTS } from '@/lib/constants/projects'

export const DesignSystemContent = () => {
  const project = PROJECTS.DESIGN_SYSTEM

  return (
    <ResponsiveSheetContent
      slug={project.SLUG}
      projectType={project.TYPE}
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div className='relative isolate grid gap-8 overflow-x-visible'>
        <div className='-mt-2 block'>
          <p className='text-foreground text-base italic'>Próximamente URL disponible...</p>
        </div>
        <Separator className='my-6' />
        <h3 className='text-foreground mb-4 block text-2xl font-semibold'>
          Showcase de algunos componentes
        </h3>

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            Video Player estilo YouTube
          </span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.VIDEO_PLAYER.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Synced Tabs</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.SYNCED_TABS.URL} type='video/webm' />
            </video>
          </div>
        </div>

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Autocomplete</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.AUTOCOMPLETE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Dropdown</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.DROPDOWN.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Form</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.FORM.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Calendar Range</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.CALENDAR_RANGE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Accordion</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.ACCORDION.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Choicebox</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.CHOICEBOX.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Tree View</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.TREE_VIEW.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Multi Select</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.MULTI_SELECT.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>Alert Dialog</span>
          <div>
            <video
              autoPlay
              muted
              controls={false}
              poster={project.IMAGES.BANNER.URL}
              loop
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.ALERT_DIALOG.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <Separator className='my-8' />

        <div className='relative overflow-x-clip'>
          <div>
            <div className='absolute inset-0 flex size-full items-center justify-center bg-black/60'>
              <span className='text-foreground mb-4 block text-3xl font-medium italic'>
                Proximamente...
              </span>
            </div>
            <video
              autoPlay
              muted
              controls={false}
              loop
              poster={project.IMAGES.BANNER.URL}
              playsInline
              className='bg-accent aspect-video object-cover'>
              <source src={project.IMAGES.BANNER_ANIMATION.URL} type='video/webm' />
            </video>
          </div>
        </div>
      </div>
      <Separator className='my-16' />

      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>{COMPANY.COMMERCIAL_NAME}</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
