'use client'

import { IconRefresh } from '@andrsrxn/icons'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const t = useTranslations('errorPage')
  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='text-muted-foreground tablet:text-xl desktop:text-2xl text-lg leading-none'>
        500
      </span>
      <h1 className='font-heading tablet:text-7xl desktop:text-8xl text-center text-6xl'>
        {t('title')}
      </h1>
      <Button className='mt-2' onClick={reset}>
        {t('action')} <IconRefresh className='size-4' />
      </Button>
    </div>
  )
}
