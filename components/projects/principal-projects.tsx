import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import { InView } from '@/components/animated/in-view'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { DesignSystemContent } from '@/components/projects/design-system-content'
import { IcpsjContent } from '@/components/projects/icpsj-content'
import { TheChoiceContent } from '@/components/projects/the-choice-content'
import { VIVETContent } from '@/components/projects/vivet-content'
import { ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { ResponsiveSheetWrapper } from '@/components/shared/responsive-sheet-wrapper'
import { VIVETVideo } from '@/components/shared/vivet-video'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image'
import { PROJECT_TYPES, PROJECTS, type ProjectType } from '@/lib/constants/projects'

interface PrincipalProjectCardProps {
  slug: string
  type: ProjectType
  client: string
  industry: string
  summary: string
  bannerUrl: string
  bannerSmallUrl: string
  bannerAlt: string
  videoComponent?: ReactNode
  content: ReactNode
}

const PrincipalProjectCard = async ({
  slug,
  type,
  client,
  industry,
  summary,
  bannerUrl,
  bannerSmallUrl,
  bannerAlt,
  videoComponent,
  content,
}: PrincipalProjectCardProps) => {
  const tProjects = await getTranslations('projects')
  return (
    <ScrollPolygonContainer className='tablet:gap-6 relative flex flex-col gap-4'>
      <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]' id={slug}>
        <span className='text-muted-foreground tablet:text-base desktop:text-lg flex items-center gap-3 truncate text-sm leading-tight'>
          {type !== PROJECT_TYPES.NORMAL ? (
            <Badge
              variant={type === PROJECT_TYPES.PROPOSAL ? 'destructive' : 'default'}
              className='desktop:text-sm'>
              {tProjects(`type.${type}`)}
            </Badge>
          ) : null}{' '}
          {client} - {industry}
        </span>
        <p className='font-heading tablet:text-5xl desktop:text-7xl text-3xl'>{summary}</p>
      </div>

      <div className='relative'>
        <InView from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.5, ease: 'power1.inOut' }}>
          {videoComponent ? (
            videoComponent
          ) : (
            <picture>
              <source srcSet={bannerUrl} media='(min-width: 64rem)' />
              <Image
                src={bannerSmallUrl}
                alt={bannerAlt}
                loading='eager'
                className='animated-polygon desktop:w-11/12 bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
              />
            </picture>
          )}
        </InView>

        <ResponsiveSheetWrapper slug={slug}>
          <InView
            viewOptions={{ once: false, start: 'top 105%' }}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0, duration: 0.3, ease: 'power1.inOut' }}>
            <ResponsiveSheetTrigger />
          </InView>

          {content}
        </ResponsiveSheetWrapper>
      </div>
    </ScrollPolygonContainer>
  )
}

export const PrincipalProjects = async () => {
  const t = await getTranslations('projects')
  return (
    <section className='tablet:mt-20 desktop:w-11/12 mx-auto mt-12 max-w-6xl'>
      <div className='tablet:gap-20 desktop:gap-40 flex flex-col gap-16'>
        <PrincipalProjectCard
          type={PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.TYPE}
          slug={t('thechoice.slug')}
          client={t('thechoice.client')}
          industry={t('thechoice.industry')}
          summary={t('thechoice.summary')}
          bannerUrl={PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('thechoice.images.bannerSmall')}
          content={<TheChoiceContent />}
        />

        <PrincipalProjectCard
          type={PROJECTS.DESIGN_SYSTEM.TYPE}
          slug={t('designSystem.slug')}
          client={t('designSystem.client')}
          industry={t('designSystem.industry')}
          summary={t('designSystem.summary')}
          bannerUrl={PROJECTS.DESIGN_SYSTEM.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.DESIGN_SYSTEM.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('designSystem.images.bannerSmall')}
          videoComponent={
            <video
              autoPlay
              muted
              controls={false}
              loop
              playsInline
              poster={PROJECTS.DESIGN_SYSTEM.IMAGES.BANNER.URL}
              className='bg-accent animated-polygon desktop:w-11/12 mx-auto aspect-video border object-cover contrast-85 will-change-[clip-path]'>
              <source src={PROJECTS.DESIGN_SYSTEM.IMAGES.BANNER_ANIMATION.URL} type='video/mp4' />
            </video>
          }
          content={<DesignSystemContent />}
        />

        <PrincipalProjectCard
          type={PROJECTS.VIVET_REBRANDING.TYPE}
          slug={t('vivet.slug')}
          client={t('vivet.client')}
          industry={t('vivet.industry')}
          summary={t('vivet.summary')}
          bannerUrl={PROJECTS.VIVET_REBRANDING.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.VIVET_REBRANDING.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('vivet.images.bannerSmall')}
          videoComponent={<VIVETVideo />}
          content={<VIVETContent />}
        />

        <PrincipalProjectCard
          type={PROJECTS.ICPSJ_BRANDING.TYPE}
          slug={t('icpsj.slug')}
          client={t('icpsj.client')}
          industry={t('icpsj.industry')}
          summary={t('icpsj.summary')}
          bannerUrl={PROJECTS.ICPSJ_BRANDING.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.ICPSJ_BRANDING.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('icpsj.images.bannerSmall')}
          videoComponent={
            <video
              autoPlay
              muted
              controls={false}
              loop
              playsInline
              poster={PROJECTS.ICPSJ_BRANDING.IMAGES.BANNER.URL}
              className='bg-accent animated-polygon desktop:w-11/12 mx-auto aspect-video border object-cover contrast-85 will-change-[clip-path]'>
              <source src={PROJECTS.ICPSJ_BRANDING.IMAGES.LOGO_ANIMATION.URL} type='video/mp4' />
            </video>
          }
          content={<IcpsjContent />}
        />
      </div>
    </section>
  )
}
