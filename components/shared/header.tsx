import { getTranslations } from 'next-intl/server'
import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { Button } from '@/components/ui/button'
import { Image } from '@/components/ui/image'
import { Link } from '@/i18n/navigation'
import { IMAGES } from '@/lib/constants/paths'
import { cn } from '@/lib/utils'

export const Header = async () => {
  const tNav = await getTranslations('homePage.navigation')

  return (
    <header className='fixed top-0 left-0 z-1000 flex h-12 w-full items-center justify-center mix-blend-difference'>
      <Button
        variant='ghost'
        size='sm'
        asChild
        className={cn(
          'absolute top-4 left-4 z-1000 h-8 rounded-none px-3 text-xs font-semibold tracking-widest'
        )}>
        <a href='https://resources.andrsrxn.com' target='_blank' rel='noopener noreferrer'>
          {tNav('resources')}
        </a>
      </Button>
      <Link href='/' aria-label='Ir al inicio'>
        <Image
          includePlaceholder={false}
          fetchPriority='high'
          className='relative z-1000 aspect-square w-9'
          src={IMAGES.BRAND.SYMBOL.SVG.URL}
          alt={IMAGES.BRAND.SYMBOL.SVG.ALT}
        />
      </Link>
      <LanguageSwitcher className='absolute top-4 right-4 z-1000' />
    </header>
  )
}
