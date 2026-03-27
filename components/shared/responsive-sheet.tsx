/** biome-ignore-all lint/style/noNonNullAssertion: accepted */

import { IconPlus } from '@tabler/icons-react'
import { ResponsiveSheetContent as ResponsiveSheetContentBase } from '@/components/shared/responsive-sheet-content'
import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'

import { cn } from '@/lib/utils'

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

export const ResponsiveSheetContent = ResponsiveSheetContentBase
