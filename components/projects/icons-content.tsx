'use client'

import { IconExternalLink } from '@andrsrxn/icons'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { IconGithub } from '@/components/icons/brands/github'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const IconsContent = () => {
  const project = PROJECTS.ICONS
  const t = useTranslations('projects.icons')
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
      <div className='relative isolate grid gap-12 overflow-x-visible'>
        <div className='-mt-2 flex flex-wrap items-center gap-6'>
          <Link
            prefetch={false}
            className='text-foreground inline-flex shrink-0 items-center gap-2 text-base leading-none font-medium underline decoration-1 underline-offset-2'
            target='_blank'
            rel='noopener noreferrer'
            href='https://icons.andrsrxn.com'>
            https://icons.andrsrxn.com
            <IconExternalLink className='size-4' />
          </Link>
          <Link
            prefetch={false}
            className='text-foreground inline-flex shrink-0 items-center gap-2 text-base leading-none font-medium underline decoration-1 underline-offset-2'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/andrsrxn/zentro'>
            <IconGithub className='size-4' /> {t('content.seeRepository')}
          </Link>
        </div>
        <Separator className='my-2' />

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.iconKeyline')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-square lg:w-1/2'
            src={project.IMAGES.ICON_KEYLINE.URL}
            alt={t('images.iconKeyline')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.iconFlag')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.ICON_FLAG.URL}
            alt={t('images.iconFlag')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.iconGrid')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.ICON_GRID.URL}
            alt={t('images.iconGrid')}
          />
        </div>

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.flags')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.FLAGS.URL}
            alt={t('images.flags')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.iconModal')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.ICON_MODAL.URL}
            alt={t('images.iconModal')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.iconCustomization')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.ICON_CUSTOMIZATION.URL}
            alt={t('images.iconCustomization')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.rtl')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.RTL_ICON.URL}
            alt={t('images.rtl')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.examples')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.EXAMPLES.URL}
            alt={t('images.examples')}
          />
        </div>
      </div>

      <Separator className='my-16' />

      <Signature />
    </ResponsiveSheetContent>
  )
}
