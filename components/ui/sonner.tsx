'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, toast as sonnerToast, type ToasterProps } from 'sonner'

export const toast = sonnerToast

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      position='top-right'
      duration={4500}
      closeButton
      richColors
      theme={theme as ToasterProps['theme']}
      className='toaster group [&_[data-sonner-toast][data-styled=true]]:!items-start [&_[data-sonner-toast][data-styled=true]]:!gap-4 [&_[data-sonner-toast][data-styled=true]_[data-icon]_svg]:!mt-2'
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }
