'use client'

import { IconRefresh } from '@tabler/icons-react'
import { Button } from '@/components/ui/button'
import { fontBody, fontHeading } from '@/lib/fonts'

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang='es' className='dark'>
      <body className={`${fontHeading.variable} ${fontBody.variable} antialiased`}>
        <main className='container mx-auto w-11/12'>
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
        </main>
      </body>
    </html>
  )
}
