/** biome-ignore-all lint/style/noNonNullAssertion: accepted */
'use client'

import type { ComponentProps, ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'

interface ResponsiveSheetContentProps extends ComponentProps<typeof DrawerContent> {
  title: string
  description?: string
  children: React.ReactNode
  client: string
  services: string[]
  bannerUrl: string
  bannerAlt: string
}

export function ResponsiveSheet({ children, open, ...props }: ComponentProps<typeof Drawer>) {
  return (
    <Drawer open={open} {...props}>
      {children}
    </Drawer>
  )
}

export function ResponsiveSheetTrigger({ children }: { children: ReactNode }) {
  return <DrawerTrigger asChild>{children}</DrawerTrigger>
}

export function ResponsiveSheetContent({
  title,
  children,
  client,
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
            className='bg-accent desktop:mx-0 desktop:w-11/12 tablet:mt-4 mx-auto mt-2 aspect-video object-cover'
          />
        </DrawerHeader>
        <Separator className='desktop:hidden mx-auto my-4 w-11/12!' />

        <div className='desktop:mt-0 desktop:pt-0 relative overflow-x-clip pt-6 pb-20'>
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
