import { IconExternalLink } from '@tabler/icons-react'
import Link from 'next/link'
import type { ComponentProps } from 'react'
import { InView } from '@/components/animated/in-view'
import { ScrollPolygonContainer } from '@/components/animated/polygon-card'
import { IconInstagram } from '@/components/icons/brands/instagram'
import { AtproyContent } from '@/components/projects/atproy-content'
import { BonzerContent } from '@/components/projects/bonzer-content'
import { IcemeneContent } from '@/components/projects/icemene-content'
import { ThePrincipalContent } from '@/components/projects/theprincipal-content'
import { ResponsiveSheet, ResponsiveSheetTrigger } from '@/components/shared/responsive-sheet'
import { Badge } from '@/components/ui/badge'
import { Image } from '@/components/ui/image'
import { COMPANY } from '@/lib/constants/company'
import { PROJECT_TYPES, PROJECTS } from '@/lib/constants/projects'
import { cn } from '@/lib/utils'

interface MoreProyectsProps extends ComponentProps<'div'> {}

interface ProjectSecondary {
  bannerUrl: string
  bannerAlt: string
  bannerSmallUrl: string
  client: string
  type: (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES]
  industry: string
  summary: string
  content: React.ReactNode
}

export const MoreProjectsCard = ({
  project: { bannerUrl, bannerAlt, bannerSmallUrl, client, type, industry, summary, content },
}: {
  project: ProjectSecondary
}) => {
  return (
    <div className='laptop:gap-8 laptop:flex-col laptop:w-full container mx-auto flex w-11/12 gap-4'>
      <ScrollPolygonContainer className='laptop:w-full w-[40%] shrink-0'>
        <InView>
          <picture>
            <source srcSet={bannerUrl} media='(min-width: 64rem)' />
            <Image
              src={bannerSmallUrl}
              alt={bannerAlt}
              loading='eager'
              className='bg-accent animated-polygon aspect-video object-cover'
            />
          </picture>
        </InView>
      </ScrollPolygonContainer>

      <div className='flex w-fit flex-1 flex-col gap-1'>
        <span className='text-muted-foreground tablet:text-base desktop:text-lg flex w-full items-center gap-3 text-sm leading-tight'>
          {type !== PROJECT_TYPES.NORMAL ? (
            <Badge
              variant={type === PROJECT_TYPES.PROPOSAL ? 'destructive' : 'secondary'}
              className='desktop:text-sm'>
              {type}
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
          <ResponsiveSheet>
            <ResponsiveSheetTrigger
              className='tablet:text-sm laptop:text-base relative bottom-0 left-0 translate-none border-2 text-xs'
              size='sm'
            />

            {content}
          </ResponsiveSheet>
        </div>
      </div>
    </div>
  )
}

export const MoreProjects = ({ className, ...props }: MoreProyectsProps) => {
  return (
    <div
      className={cn(
        'animate-fade-up desktop:container desktop:w-11/12 laptop:overflow-visible mx-auto overflow-x-clip',
        className
      )}
      {...props}>
      <div className='tablet:gap-20 laptop:gap-x-16 laptop:gap-y-24 laptop:grid-cols-2 laptop:grid desktop:gap-y-24 desktop:max-w-7xl desktop:gap-x-20 desktop:mx-auto grid gap-16'>
        <MoreProjectsCard
          project={{
            type: PROJECTS.ATPROY_BRAND_REFRESH.TYPE,
            bannerAlt: PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER.ALT,
            bannerSmallUrl: PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER_SMALL.URL,
            bannerUrl: PROJECTS.ATPROY_BRAND_REFRESH.IMAGES.BANNER.URL,
            client: PROJECTS.ATPROY_BRAND_REFRESH.CLIENT,
            industry: PROJECTS.ATPROY_BRAND_REFRESH.INDUSTRY,
            summary: PROJECTS.ATPROY_BRAND_REFRESH.SUMMARY,
            content: <AtproyContent />,
          }}
        />

        <MoreProjectsCard
          project={{
            type: PROJECTS.BONZER_BRANDING.TYPE,
            bannerAlt: PROJECTS.BONZER_BRANDING.IMAGES.BANNER.ALT,
            bannerSmallUrl: PROJECTS.BONZER_BRANDING.IMAGES.BANNER_SMALL.URL,
            bannerUrl: PROJECTS.BONZER_BRANDING.IMAGES.BANNER.URL,
            client: PROJECTS.BONZER_BRANDING.CLIENT,
            industry: PROJECTS.BONZER_BRANDING.INDUSTRY,
            summary: PROJECTS.BONZER_BRANDING.SUMMARY,
            content: <BonzerContent />,
          }}
        />

        <MoreProjectsCard
          project={{
            type: PROJECTS.THEPRINCIPAL_BRANDING.TYPE,
            bannerAlt: PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER.ALT,
            bannerSmallUrl: PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER_SMALL.URL,
            bannerUrl: PROJECTS.THEPRINCIPAL_BRANDING.IMAGES.BANNER.URL,
            client: PROJECTS.THEPRINCIPAL_BRANDING.CLIENT,
            industry: PROJECTS.THEPRINCIPAL_BRANDING.INDUSTRY,
            summary: PROJECTS.THEPRINCIPAL_BRANDING.SUMMARY,
            content: <ThePrincipalContent />,
          }}
        />

        <MoreProjectsCard
          project={{
            type: PROJECTS.ICEMENE_REBRANDING.TYPE,
            bannerAlt: PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER.ALT,
            bannerSmallUrl: PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER_SMALL.URL,
            bannerUrl: PROJECTS.ICEMENE_REBRANDING.IMAGES.BANNER.URL,
            client: PROJECTS.ICEMENE_REBRANDING.CLIENT,
            industry: PROJECTS.ICEMENE_REBRANDING.INDUSTRY,
            summary: PROJECTS.ICEMENE_REBRANDING.SUMMARY,
            content: <IcemeneContent />,
          }}
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
          Ver más en Instagram <IconExternalLink className='tablet:size-5 size-4' />
        </Link>
      </div>
    </div>
  )
}
