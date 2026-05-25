'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { IconGithub } from '@/components/icons/brands/github'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const ZentroContent = () => {
  const project = PROJECTS.ZENTRO
  const t = useTranslations('projects.zentro')
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
            href='https://zentro.andrsrxn.com'>
            https://zentro.andrsrxn.com
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
            {t('images.signIn')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.SIGN_IN.URL}
            alt={t('images.signIn')}
          />
        </div>

        <div className='laptop:grid laptop:grid-cols-2 laptop:gap-6 contents'>
          <div className='relative overflow-x-clip'>
            <span className='text-foreground mb-4 block text-lg font-semibold'>
              {t('images.accountDialog')}
            </span>
            <Image
              includePlaceholder={false}
              className='aspect-square object-cover'
              src={project.IMAGES.ACCOUNT_DIALOG.URL}
              alt={t('images.accountDialog')}
            />
          </div>
          <div className='relative overflow-x-clip'>
            <span className='text-foreground mb-4 block text-lg font-semibold'>
              {t('images.shortcutsDialog')}
            </span>
            <Image
              includePlaceholder={false}
              className='aspect-square object-cover'
              src={project.IMAGES.SHORTCUTS_DIALOG.URL}
              alt={t('images.shortcutsDialog')}
            />
          </div>
        </div>
        <div className='laptop:grid laptop:grid-cols-2 laptop:gap-6 contents'>
          <div className='relative overflow-x-clip'>
            <span className='text-foreground mb-4 block text-lg font-semibold'>
              {t('images.emptyState')}
            </span>
            <Image
              includePlaceholder={false}
              className='aspect-square object-cover'
              src={project.IMAGES.EMPTY_STATE.URL}
              alt={t('images.emptyState')}
            />
          </div>
          <div className='relative overflow-x-clip'>
            <span className='text-foreground mb-4 block text-lg font-semibold'>
              {t('images.errorState')}
            </span>
            <Image
              includePlaceholder={false}
              className='aspect-square object-cover'
              src={project.IMAGES.ERROR_STATE.URL}
              alt={t('images.errorState')}
            />
          </div>
        </div>

        <Separator className='my-2' />

        <h3 className='text-foreground block text-2xl font-semibold'>{t('content.features')}</h3>

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.reorder')}
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
              <source src={project.IMAGES.REORDER.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.dragDelete')}
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
              <source src={project.IMAGES.DRAG_DELETE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.create')}
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
              <source src={project.IMAGES.CREATE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.update')}
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
              <source src={project.IMAGES.UPDATE.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.keyboard')}
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
              <source src={project.IMAGES.KEYBOARD.URL} type='video/webm' />
            </video>
          </div>
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.signOut')}
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
              <source src={project.IMAGES.SIGN_OUT.URL} type='video/webm' />
            </video>
          </div>
        </div>

        <Separator className='my-2' />

        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.logoConstruction')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.LOGO_CONSTRUCTION.URL}
            alt={t('images.logoConstruction')}
          />
        </div>
        <div className='relative overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('images.visualIdentity')}
          </span>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.VISUAL_IDENTITY.URL}
            alt={t('images.visualIdentity')}
          />
        </div>
      </div>
      <Separator className='my-16' />

      <Signature />
    </ResponsiveSheetContent>
  )
}
