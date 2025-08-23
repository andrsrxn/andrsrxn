import type { ComponentProps } from 'react'
import { cn } from '@/lib/utils'

export interface ImageProps extends ComponentProps<'img'> {
  src?: string
  alt: string
  includePlaceholder?: boolean
}

export const Image = ({
  alt,
  decoding = 'async',
  className,
  loading = 'lazy',
  src,
  includePlaceholder = true,
  ...props
}: ImageProps) => {
  return (
    <img
      alt={alt}
      decoding={decoding}
      loading={loading}
      className={cn(includePlaceholder && 'bg-accent', className)}
      src={src}
      {...props}
    />
  )
}

Image.displayName = 'Image'
