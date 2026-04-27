import { getTranslations } from 'next-intl/server'
import { ParticlesBackground } from '@/components/backgrounds/particles'
import { Image } from '@/components/ui/image'
import { Link } from '@/i18n/navigation'
import { COMPANY } from '@/lib/constants/company'
import { IMAGES } from '@/lib/constants/paths'

export const Footer = async () => {
  const privacyTranslation = await getTranslations('privacyPage')
  const termsTranslation = await getTranslations('termsPage')

  return (
    <footer className='relative z-0 mt-20 max-h-[700px] overflow-x-clip py-6'>
      <ParticlesBackground className='laptop:w-full absolute bottom-0 left-0 z-0 h-[1000px] w-[220%] origin-center' />

      <div className='container mx-auto flex h-full w-11/12 flex-col justify-end gap-4'>
        <div className='flex items-center justify-center'>
          <Image
            includePlaceholder={false}
            fetchPriority='high'
            className='relative z-1000 aspect-square w-9'
            src={IMAGES.BRAND.SYMBOL.SVG.URL}
            alt={IMAGES.BRAND.SYMBOL.SVG.ALT}
          />
        </div>
        <ul className='flex w-full items-center justify-center gap-4'>
          <li>
            <Link
              prefetch={false}
              className='text-sm underline decoration-1 underline-offset-2'
              href='/politica-de-privacidad'>
              {privacyTranslation('link')}
            </Link>
          </li>
          <li>
            <Link
              prefetch={false}
              className='text-sm underline decoration-1 underline-offset-2'
              href='/terminos-y-condiciones'>
              {termsTranslation('link')}
            </Link>
          </li>
        </ul>
        <div className='flex flex-wrap items-center justify-center gap-2'>
          <p className='text-muted-foreground shrink-0 text-center text-sm'>
            &copy; {new Date().getFullYear()}. {COMPANY.NAME}
          </p>

          <Image
            src={IMAGES.FLAGS.GT.URL}
            alt={IMAGES.FLAGS.GT.ALT}
            title='Guatemala'
            className='inline h-3 w-auto'
            includePlaceholder={false}
          />
        </div>
      </div>
    </footer>
  )
}
