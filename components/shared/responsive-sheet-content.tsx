'use client'

import { useTranslations } from 'next-intl'
import type { ComponentProps } from 'react'
import { ShareButton } from '@/components/shared/share-button'
import { Badge } from '@/components/ui/badge'
import { DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from '@/components/ui/drawer'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECT_TYPES, type ProjectType } from '@/lib/constants/projects'
import { SITE } from '@/lib/constants/site'
import { cn } from '@/lib/utils'

interface ResponsiveSheetContentProps extends ComponentProps<typeof DrawerContent> {
  title: string
  description?: string[]
  children: React.ReactNode
  client: string
  services: string[]
  bannerUrl: string
  bannerAlt: string
  projectType: ProjectType
  overflow?: boolean
  slug: string
}

export function ResponsiveSheetContent({
  title,
  children,
  overflow = false,
  client,
  projectType,
  description,
  services,
  bannerUrl,
  bannerAlt,
  slug,
  ...props
}: ResponsiveSheetContentProps) {
  const tProjects = useTranslations('projects')

  return (
    <DrawerContent
      onCloseAutoFocus={e => {
        e.preventDefault()
      }}
      {...props}
      aria-describedby={undefined}
      className='max-w-5xl'>
      <div
        className='desktop:grid desktop:gap-12 desktop:grid-cols-2 desktop:mt-6 relative overflow-y-auto'
        data-lenis-prevent>
        <DrawerHeader className='desktop:sticky desktop:top-0 desktop:pt-0 desktop:h-max'>
          <span className='text-muted-foreground tablet:text-base flex text-left text-sm leading-tight'>
            {client}
          </span>
          <DrawerTitle className='tablet:text-5xl desktop:w-11/12 text-4xl'>{title}</DrawerTitle>
          <DrawerDescription className='sr-only'>
            {tProjects('projectDescription')}
          </DrawerDescription>
          <div className='tablet:mt-2 flex flex-wrap items-center gap-2'>
            {projectType === PROJECT_TYPES.NORMAL ? null : (
              <Badge
                variant={projectType === PROJECT_TYPES.PROPOSAL ? 'destructive' : 'default'}
                className='desktop:text-sm'>
                {tProjects(`type.${projectType}`)}
              </Badge>
            )}
            {services.map(service => {
              return (
                <Badge variant='secondary' className='desktop:text-sm' key={service}>
                  {service}
                </Badge>
              )
            })}
          </div>

          <Image
            src={bannerUrl}
            alt={bannerAlt}
            className='bg-accent desktop:mx-0 desktop:w-11/12 tablet:mt-4 mt-2 aspect-video max-w-2xl object-cover'
          />
          <ShareButton
            copiedText={tProjects('linkCopied')}
            className='desktop:w-11/12 laptop:text-base laptop:h-10 mt-4 max-w-2xl'
            url={`${SITE.BASE_URL}#${slug}`}>
            {tProjects('copyLink')}
          </ShareButton>
        </DrawerHeader>
        <Separator className='desktop:hidden mx-auto my-4 w-11/12!' />

        <div
          className={cn(
            'desktop:mt-0 desktop:pt-0 relative pt-6 pb-20',
            overflow ? 'overflow-x-visible' : 'overflow-x-clip'
          )}
          data-responsive-sheet-overflow>
          <div className='mb-8 grid gap-4'>
            {description && description.length > 0
              ? description.map((text, i) => (
                  // biome-ignore lint/suspicious/noArrayIndexKey: wont change
                  <p className='text-muted-foreground max-w-prose text-base' key={i}>
                    {text}
                  </p>
                ))
              : null}
          </div>

          {children}

          <div
            aria-hidden
            className='ease-gradient-to-t desktop:block pointer-events-none fixed right-0 bottom-0 hidden h-24 w-1/2'
          />
        </div>
      </div>
    </DrawerContent>
  )
}
