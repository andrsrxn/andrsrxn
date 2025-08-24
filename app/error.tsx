'use client'

import { IconRefresh } from '@tabler/icons-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='text-muted-foreground tablet:text-xl desktop:text-2xl text-lg leading-none'>
        500
      </span>
      <h1 className='font-heading tablet:text-7xl desktop:text-8xl text-center text-6xl'>
        Error Crítico
      </h1>
      <Button className='mt-2' onClick={reset}>
        Volver a intentar <IconRefresh className='size-4' />
      </Button>
    </div>
  )
}
