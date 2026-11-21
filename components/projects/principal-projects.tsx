import { IconExternalLink } from '@andrsrxn/icons'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { ReactNode } from 'react'
import { InView } from '@/components/animated/in-view'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { IconXTwitter } from '@/components/icons/brands/x'
import { AtproyContent } from '@/components/projects/atproy-content'
import { BonzerContent } from '@/components/projects/bonzer-content'
import { IconsContent } from '@/components/projects/icons-content'
import { IcpsjContent } from '@/components/projects/icpsj-content'
import { TheChoiceContent } from '@/components/projects/the-choice-content'
import { ThePrincipalContent } from '@/components/projects/theprincipal-content'
import { VIVETContent } from '@/components/projects/vivet-content'
import { ZentroContent } from '@/components/projects/zentro-content'
import { ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { ResponsiveSheetWrapper } from '@/components/shared/responsive-sheet-wrapper'
import { VIVETVideo } from '@/components/shared/vivet-video'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image'
import { COMPANY } from '@/lib/constants/company'
import { PROJECT_TYPES, PROJECTS, type ProjectType } from '@/lib/constants/projects'
import { cn } from '@/lib/utils'

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
  className?: string
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
  className,
}: PrincipalProjectCardProps) => {
  const tProjects = await getTranslations('projects')
  return (
    <ScrollPolygonContainer className={cn('tablet:gap-6 relative flex flex-col gap-4', className)}>
      <InView>
        <div className='tablet:gap-3 flex flex-col gap-1 px-[5%]' id={slug}>
          <span className='text-muted-foreground tablet:text-base desktop:text-lg flex items-center gap-3 truncate text-sm leading-tight'>
            {type === PROJECT_TYPES.NORMAL ? null : (
              <Badge
                variant={type === PROJECT_TYPES.PROPOSAL ? 'destructive' : 'default'}
                className='desktop:text-sm'>
                {tProjects(`type.${type}`)}
              </Badge>
            )}{' '}
            {client} - {industry}
          </span>

          <h3 className='font-heading tablet:text-5xl desktop:text-6xl text-3xl'>{summary}</h3>
        </div>
      </InView>

      <div className='relative'>
        <InView from={{ opacity: 0 }} to={{ opacity: 1, duration: 0.5, ease: 'power1.inOut' }}>
          {(await videoComponent) ? (
            videoComponent
          ) : (
            <picture>
              <source srcSet={bannerUrl} media='(min-width: 64rem)' />
              <Image
                src={bannerSmallUrl}
                alt={bannerAlt}
                loading='eager'
                className='animated-polygon bg-accent mx-auto aspect-video object-cover will-change-[clip-path]'
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
  const tHomePage = await getTranslations('homePage.projects')
  return (
    <div className=''>
      <div className='tablet:gap-20 laptop:gap-y-40 desktop:gap-x-28 laptop:grid laptop: laptop:gap-x-16 flex grid-cols-2 flex-col gap-16'>
        <PrincipalProjectCard
          type={PROJECTS.ICONS.TYPE}
          slug={t('icons.slug')}
          client={t('icons.client')}
          industry={t('icons.industry')}
          summary={t('icons.summary')}
          bannerUrl={PROJECTS.ICONS.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.ICONS.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('icons.images.bannerSmall')}

          content={<IconsContent />}
        />
        <PrincipalProjectCard
          type={PROJECTS.ZENTRO.TYPE}
          slug={t('zentro.slug')}
          client={t('zentro.client')}
          industry={t('zentro.industry')}
          summary={t('zentro.summary')}
          bannerUrl={PROJECTS.ZENTRO.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.ZENTRO.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('zentro.images.bannerSmall')}
          content={<ZentroContent />}
        />

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
          type={PROJECTS.ATPROY_BRAND_REFRESH.TYPE}
          slug={t('atproy.slug')}
          client={t('atproy.client')}
          industry={t('atproy.industry')}
          summary={t('atproy.summary')}
          bannerUrl={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('atproy.images.bannerSmall')}
          content={<AtproyContent />}
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
              className='bg-accent animated-polygon aspect-video border contrast-85 will-change-[clip-path]'>
              <source src={PROJECTS.ICPSJ_BRANDING.IMAGES.LOGO_ANIMATION.URL} type='video/mp4' />
            </video>
          }
          content={<IcpsjContent />}
        />
        <PrincipalProjectCard
          type={PROJECTS.BONZER_BRANDING.TYPE}
          slug={t('bonzer.slug')}
          client={t('bonzer.client')}
          industry={t('bonzer.industry')}
          summary={t('bonzer.summary')}
          bannerUrl={PROJECTS.BONZER_BRANDING.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.BONZER_BRANDING.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('bonzer.images.bannerSmall')}
          content={<BonzerContent />}
        />
        <PrincipalProjectCard
          type={PROJECTS.THEPRINCIPAL_BRANDING.TYPE}
          slug={t('theprincipal.slug')}
          client={t('theprincipal.client')}
          industry={t('theprincipal.industry')}
          summary={t('theprincipal.summary')}
          bannerUrl={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER.URL}
          bannerSmallUrl={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.URL}
          bannerAlt={t('theprincipal.images.bannerSmall')}
          content={<ThePrincipalContent />}
        />
      </div>
      <div className='desktop:mt-28 mt-20 flex items-center justify-center'>
        <Link
          prefetch={false}
          className='text-foreground laptop:text-lg desktop:px-8 inline-flex items-center gap-3 rounded-full border-2 bg-neutral-900 px-6 py-3 text-base leading-none font-bold transition duration-75 hover:bg-neutral-800'
          target='_blank'
          rel='noopener noreferrer'
          href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}>
          <IconXTwitter className='size-[0.8em]' />
          {tHomePage('viewMoreX')} <IconExternalLink className='tablet:size-5 size-4' />
        </Link>
      </div>
    </div>
  )
}
