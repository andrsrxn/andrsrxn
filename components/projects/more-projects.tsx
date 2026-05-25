import { IconExternalLink } from '@tabler/icons-react'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import type { ComponentProps, ReactNode } from 'react'
import { InView } from '@/components/animated/in-view'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { IconInstagram } from '@/components/icons/brands/instagram'
import { AtproyContent } from '@/components/projects/atproy-content'
import { BonzerContent } from '@/components/projects/bonzer-content'
import { IcpsjContent } from '@/components/projects/icpsj-content'
import { ThePrincipalContent } from '@/components/projects/theprincipal-content'
import { ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { ResponsiveSheetWrapper } from '@/components/shared/responsive-sheet-wrapper'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image'
import { COMPANY } from '@/lib/constants/company'
import { PROJECT_TYPES, PROJECTS, type ProjectType } from '@/lib/constants/projects'
import { cn } from '@/lib/utils'

interface MoreProyectsProps extends ComponentProps<'div'> {}

interface ProjectSecondary {
  bannerUrl: string
  bannerAlt: string
  bannerSmallUrl: string
  client: string
  type: ProjectType
  industry: string
  summary: string
  content: ReactNode
  slug: string
  videoComponent?: ReactNode
}

const MoreProjectsCard = async ({
  bannerUrl,
  videoComponent,
  bannerAlt,
  bannerSmallUrl,
  client,
  type,
  industry,
  summary,
  content,
  slug,
}: ProjectSecondary) => {
  const tProjects = await getTranslations('projects')
  return (
    <div className='laptop:gap-8 laptop:flex-col laptop:w-full container mx-auto flex w-11/12 gap-4'>
      <ScrollPolygonContainer className='laptop:w-full w-[40%] shrink-0'>
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
                className='bg-accent animated-polygon aspect-video object-cover will-change-[clip-path]'
              />
            </picture>
          )}
        </InView>
      </ScrollPolygonContainer>

      <div className='flex w-fit flex-1 flex-col gap-1'>
        <span className='text-muted-foreground tablet:text-base desktop:text-lg flex w-full items-center gap-3 text-sm leading-tight'>
          {type !== PROJECT_TYPES.NORMAL ? (
            <Badge
              variant={type === PROJECT_TYPES.PROPOSAL ? 'destructive' : 'secondary'}
              className='desktop:text-sm'>
              {tProjects(`type.${type}`)}
            </Badge>
          ) : null}
          <span className='truncate'>
            {client} - {industry}
          </span>
        </span>
        <h3 className='font-heading tablet:text-4xl desktop:text-5xl desktop:line-clamp-1 line-clamp-2 text-2xl leading-tight!'>
          {summary}
        </h3>
        <div className='laptop:mt-4 mt-2 -ml-1'>
          <ResponsiveSheetWrapper slug={slug}>
            <ResponsiveSheetTrigger
              className='tablet:text-sm laptop:text-base relative bottom-0 left-0 translate-none border-2 text-xs'
              size='sm'
            />

            {content}
          </ResponsiveSheetWrapper>
        </div>
      </div>
    </div>
  )
}

export const MoreProjects = async ({ className, ...props }: MoreProyectsProps) => {
  const tProjects = await getTranslations('projects')
  const tHomePage = await getTranslations('homePage.projects')

  return (
    <div
      className={cn(
        'animate-fade-up desktop:container desktop:w-11/12 laptop:overflow-visible mx-auto overflow-x-clip',
        className
      )}
      {...props}>
      <div className='tablet:gap-20 laptop:gap-x-16 laptop:gap-y-24 laptop:grid-cols-2 laptop:grid desktop:gap-y-24 desktop:max-w-7xl desktop:gap-x-20 desktop:mx-auto grid gap-16'>
        <MoreProjectsCard
          slug={tProjects('atproy.slug')}
          type={PROJECTS.ATPROY_BRAND_REFRESH.TYPE}
          bannerAlt={tProjects('atproy.images.bannerSmall')}
          bannerSmallUrl={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.URL}
          bannerUrl={PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER.URL}
          client={tProjects('atproy.client')}
          industry={tProjects('atproy.industry')}
          summary={tProjects('atproy.summary')}
          content={<AtproyContent />}
        />
        <MoreProjectsCard
          slug={tProjects('icpsj.slug')}
          type={PROJECTS.ICPSJ_BRANDING.TYPE}
          bannerAlt={tProjects('icpsj.images.bannerSmall')}
          bannerSmallUrl={PROJECTS.ICPSJ_BRANDING.IMAGES.BANNER_SMALL.URL}
          bannerUrl={PROJECTS.ICPSJ_BRANDING.IMAGES.BANNER.URL}
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
          client={tProjects('icpsj.client')}
          industry={tProjects('icpsj.industry')}
          summary={tProjects('icpsj.summary')}
          content={<IcpsjContent />}
        />

        <MoreProjectsCard
          slug={tProjects('bonzer.slug')}
          type={PROJECTS.BONZER_BRANDING.TYPE}
          bannerAlt={tProjects('bonzer.images.bannerSmall')}
          bannerSmallUrl={PROJECTS.BONZER_BRANDING.IMAGES.BANNER_SMALL.URL}
          bannerUrl={PROJECTS.BONZER_BRANDING.IMAGES.BANNER.URL}
          client={tProjects('bonzer.client')}
          industry={tProjects('bonzer.industry')}
          summary={tProjects('bonzer.summary')}
          content={<BonzerContent />}
        />

        <MoreProjectsCard
          slug={tProjects('theprincipal.slug')}
          type={PROJECTS.THEPRINCIPAL_BRANDING.TYPE}
          bannerAlt={tProjects('theprincipal.images.bannerSmall')}
          bannerSmallUrl={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.URL}
          bannerUrl={PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER.URL}
          client={tProjects('theprincipal.client')}
          industry={tProjects('theprincipal.industry')}
          summary={tProjects('theprincipal.summary')}
          content={<ThePrincipalContent />}
        />
      </div>

      <div className='desktop:mt-28 desktop:mb-12 mt-20 mb-6 flex items-center justify-center'>
        <Link
          prefetch={false}
          className='text-foreground laptop:text-lg desktop:px-8 inline-flex items-center gap-1 rounded-full border-2 bg-neutral-900 px-6 py-3 text-base leading-none font-bold transition duration-75 hover:bg-neutral-800'
          target='_blank'
          rel='noopener noreferrer'
          href={COMPANY.SOCIAL_MEDIA.INSTAGRAM.URL}>
          <IconInstagram className='mr-1 size-[0.8em] scale-125' />
          {tHomePage('viewMoreInstagram')} <IconExternalLink className='tablet:size-5 size-4' />
        </Link>
      </div>
    </div>
  )
}
