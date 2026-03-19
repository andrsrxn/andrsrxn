/** biome-ignore-all lint/style/noNonNullAssertion: accepted */

import { IconPlus } from '@tabler/icons-react'
import type { ComponentProps } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECT_TYPES } from '@/lib/constants/projects'
import { cn } from '@/lib/utils'

interface ResponsiveSheetContentProps extends ComponentProps<typeof DrawerContent> {
  title: string
  description?: string[]
  children: React.ReactNode
  client: string
  services: string[]
  bannerUrl: string
  bannerAlt: string
  projectType: string
  overflow?: boolean
}

export function ResponsiveSheet({ children, open, ...props }: ComponentProps<typeof Drawer>) {
  return (
    <Drawer open={open} {...props}>
      {children}
    </Drawer>
  )
}

export function ResponsiveSheetTrigger({
  className,
  size = 'base',
}: {
  className?: string
  size?: 'sm' | 'base'
}) {
  return (
    <DrawerTrigger asChild>
      {size === 'base' ? (
        <Button
          className={cn(
            'display:h-10 display:px-8 display:text-base display:bottom-6 absolute bottom-4 left-1/2 w-fit -translate-x-1/2 border-2 px-6!',
            className
          )}
          variant='secondary'>
          Ver proyecto completo <IconPlus />
        </Button>
      ) : (
        <Button
          className={cn(
            'desktop:text-base absolute bottom-4 left-1/2 w-fit -translate-x-1/2 px-6!',
            className
          )}
          variant='secondary'>
          Ver proyecto completo <IconPlus />
        </Button>
      )}
    </DrawerTrigger>
  )
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
  ...props
}: ResponsiveSheetContentProps) {
  return (
    <DrawerContent {...props} aria-describedby={undefined} className='max-w-5xl'>
      <div
        className='desktop:grid desktop:gap-12 desktop:grid-cols-2 desktop:mt-6 relative overflow-y-auto'
        data-lenis-prevent>
        <DrawerHeader className='desktop:sticky desktop:top-0 desktop:pt-0 desktop:h-max'>
          <span className='text-muted-foreground tablet:text-base desktop:text-lg flex text-left text-sm leading-tight'>
            {client}
          </span>
          <DrawerTitle className='tablet:text-5xl desktop:w-11/12 text-4xl'>{title}</DrawerTitle>
          <div className='tablet:mt-2 flex flex-wrap items-center gap-2'>
            {projectType !== PROJECT_TYPES.NORMAL ? (
              <Badge className='desktop:text-sm'>{projectType}</Badge>
            ) : null}
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
