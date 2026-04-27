'use client'

import { type Locale, useLocale } from 'next-intl'
import { useTransition } from 'react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
import { cn } from '@/lib/utils'

const LOCALE_LABELS: Record<(typeof routing.locales)[number], string> = {
  es: 'Español',
  en: 'English',
}

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const onSelect = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          disabled={isPending}
          aria-label='Switch language'
          className={cn(
            'h-8 w-20 rounded-none px-2 text-xs font-semibold tracking-widest',
            isPending && 'opacity-50',
            className
          )}>
          {LOCALE_LABELS[locale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' side='bottom' className='min-w-20'>
        {routing.locales.map(l => (
          <DropdownMenuItem
            key={l}
            onSelect={() => onSelect(l as Locale)}
            className={cn(
              'justify-center text-xs font-semibold tracking-widest',
              l === locale && 'text-muted-foreground pointer-events-none'
            )}>
            {LOCALE_LABELS[l]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
