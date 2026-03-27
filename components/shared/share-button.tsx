'use client'

import { IconCheck, IconShare } from '@tabler/icons-react'
import { type ComponentProps, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ShareButtonProps extends ComponentProps<typeof Button> {
  url: string
}

export const ShareButton = ({ url, className, children, ...props }: ShareButtonProps) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <Button
      className={cn('border-2', className)}
      variant='secondary'
      onClick={handleCopy}
      {...props}>
      {copied ? (
        <IconCheck className='animate-in fade-in duration-300 ease-in-out' />
      ) : (
        <IconShare className='animate-in fade-in duration-300 ease-in-out' />
      )}

      {copied ? 'Copiado' : children}
    </Button>
  )
}
