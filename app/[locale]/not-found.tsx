import { IconArrowRight } from '@tabler/icons-react'
import { getTranslations } from 'next-intl/server'
import { Link } from '@/i18n/navigation'

export default async function NotFoundPage() {
  const t = await getTranslations('notFoundPage')

  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='text-muted-foreground tablet:text-xl desktop:text-2xl text-lg leading-none'>
        404
      </span>
      <h1 className='font-heading desktop:text-7xl text-center text-6xl'>{t('title')}</h1>
      <Link
        className='mt-2 flex items-center justify-center gap-1.5 text-lg underline decoration-1 underline-offset-2'
        href='/'>
        {t('link')} <IconArrowRight className='size-4' />
      </Link>
    </div>
  )
}
