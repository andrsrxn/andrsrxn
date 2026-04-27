'use client'

import { useTranslations } from 'next-intl'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const DesignSystemContent = () => {
  const project = PROJECTS.DESIGN_SYSTEM
  const t = useTranslations('projects.designSystem')
  const tServices = useTranslations('services')

  const services = project.SERVICES.map(service => tServices(service))

  const paragraphs = [
    t('description.paragraph1'),
    t('description.paragraph2'),
    t('description.paragraph3'),
    t('description.paragraph4'),
  ]

  return (
    <ResponsiveSheetContent
      slug={t('slug')}
      projectType={project.TYPE}
      client={`${t('client')} - ${t('industry')}`}
      services={services}
      title={t('summary')}
      description={paragraphs}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={t('images.bannerSmall')}>
      <div className='relative isolate grid gap-8 overflow-x-visible'>
        <div className='-mt-2 block'>
          <p className='text-foreground text-base italic'>{t('content.urlSoon')}</p>
        </div>
        <Separator className='my-6' />

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.icons')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.ICONS.URL}
            alt={t('images.icons')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.palette')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.PALETTE.URL}
            alt={t('images.palette')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.typography')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.TYPOGRAPHY.URL}
            alt={t('images.typography')}
          />
        </div>
        <Separator className='my-8' />

        <h3 className='text-foreground mb-4 block text-2xl font-semibold'>
          {t('content.components')}
        </h3>

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.videoPlayer')}
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
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.syncedTabs')}
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
              <source src={project.IMAGES.SYNCED_TABS.URL} type='video/webm' />
            </video>
          </div>
        </div>

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.autocomplete')}
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
              <source src={project.IMAGES.AUTOCOMPLETE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.dropdown')}
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
              <source src={project.IMAGES.DROPDOWN.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.form')}
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
              <source src={project.IMAGES.FORM.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.calendarRange')}
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
              <source src={project.IMAGES.CALENDAR_RANGE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.accordion')}
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
              <source src={project.IMAGES.ACCORDION.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.choiceBox')}
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
              <source src={project.IMAGES.CHOICEBOX.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.treeView')}
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
              <source src={project.IMAGES.TREE_VIEW.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.multiSelect')}
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
              <source src={project.IMAGES.MULTI_SELECT.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.alertDialog')}
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
              <source src={project.IMAGES.ALERT_DIALOG.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <Separator className='my-8' />

        <div className='relative overflow-x-clip'>
          <div>
            <div className='absolute inset-0 flex size-full items-center justify-center bg-black/60'>
              <span className='text-foreground mb-4 block text-3xl font-medium italic'>
                {t('content.soon')}
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

      <Signature />
    </ResponsiveSheetContent>
  )
}
