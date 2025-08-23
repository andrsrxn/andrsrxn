'use client'

import { IconRefresh } from '@tabler/icons-react'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { fontBody, fontHeading } from '@/lib/fonts'

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
    <html lang='es' className='dark'>
      <body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
        <main className='container mx-auto w-11/12'>
          <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
            <span className='text-muted-foreground text-lg leading-none'>500</span>
            <h1 className='font-heading text-center text-6xl'>Error Crítico</h1>
            <Button className='mt-2' onClick={reset}>
              Volver a intentar <IconRefresh className='size-4' />
            </Button>
          </div>
        </main>
      </body>
    </html>
  )
}
