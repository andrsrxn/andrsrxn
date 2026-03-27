'use client'

import { type ComponentProps, useEffect, useState } from 'react'
import { Drawer } from '@/components/ui/drawer'
import { useHash } from '@/lib/hooks/use-hash'

export function ResponsiveSheetWrapper({
  children,
  open,
  slug,
  ...props
}: ComponentProps<typeof Drawer> & { slug: string }) {
  const [_open, setOpen] = useState(open)
  const hashId = useHash()

  useEffect(() => {
    setOpen(hashId === slug)
  }, [hashId, slug])

  return (
    <Drawer open={_open} onOpenChange={setOpen} {...props}>
      {children}
    </Drawer>
  )
}
