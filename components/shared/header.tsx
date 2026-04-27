import { LanguageSwitcher } from '@/components/shared/language-switcher'
import { Image } from '@/components/ui/image'
import { Link } from '@/i18n/navigation'
import { IMAGES } from '@/lib/constants/paths'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-1000 flex h-12 w-full items-center justify-center mix-blend-difference'>
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
