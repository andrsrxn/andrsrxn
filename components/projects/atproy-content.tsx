import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { SafariWindow } from '@/components/backgrounds/safari-mockup'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const AtproyContent = () => {
  const project = PROJECTS.ATPROY_BRAND_REFRESH
  const tServices = useTranslations('services')
  const t = useTranslations('projects.atproy')

  const services = project.SERVICES.map(service => tServices(service))

  const paragraphs = [t('description.paragraph1'), t('description.paragraph2')]
  return (
    <ResponsiveSheetContent
      slug={t('slug')}
      projectType={project.TYPE}
      client={`${t('client')} - ${t('industry')}`}
      services={services}
      title={t('summary')}
      description={paragraphs}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={t('images.bannerSmall')}>
      <div>
        <div className='-mt-2 mb-12 block'>
          <p>
            <Link
              prefetch={false}
              className='text-foreground inline-flex items-center gap-2 leading-none font-medium underline decoration-1 underline-offset-2'
              target='_blank'
              rel='noopener noreferrer'
              href='https://atproy.vercel.app/'>
              https://atproy.vercel.app/
            </Link>
          </p>
        </div>
        <div className='bg-[#002F6D] p-8 pb-28'>
          <Image
            includePlaceholder={false}
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_1.URL}
            alt={t('images.color1')}
          />
        </div>
        <div className='bg-[#00A6E2] p-8 pb-20'>
          <Image
            includePlaceholder={false}
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_2.URL}
            alt={t('images.color2')}
          />
        </div>
        <div className='bg-[#00943C] p-8 pb-16'>
          <Image
            includePlaceholder={false}
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_3.URL}
            alt={t('images.color3')}
          />
        </div>
        <div className='bg-[#AAC8B9] p-8'>
          <Image
            includePlaceholder={false}
            className='h-28 w-auto invert'
            src={project.IMAGES.COLOR_4.URL}
            alt={t('images.color4')}
          />
        </div>
      </div>
      <div className='overflow-x-hidden py-30 pb-20'>
        <Image
          includePlaceholder={false}
          className='w-4/5 max-w-xs'
          src={project.IMAGES.TYPOGRAPHY_WHITE.URL}
          alt={t('images.typographyWhite')}
        />
        <div className='mx-auto my-14 grid origin-center scale-[120%] overflow-hidden'>
          <Image
            includePlaceholder={false}
            className='h-10 mask-x-from-70% mask-x-to-90% object-cover object-left'
            src={project.IMAGES.ABC_WHITE.URL}
            alt={t('images.abcWhite')}
          />
          <Image
            includePlaceholder={false}
            className='h-10 mask-x-from-70% mask-x-to-90% object-cover object-right'
            src={project.IMAGES.ABC_WHITE.URL}
            alt={t('images.abcWhite')}
          />
        </div>
      </div>
      <div className='mx-auto w-11/12'>
        <Image
          includePlaceholder={false}
          src={project.IMAGES.LOGO_RESPONSIVE_VERTICAL.URL}
          alt={t('images.logoResponsiveVertical')}
          className='laptop:hidden mx-auto max-w-md'
        />
        <Image
          includePlaceholder={false}
          src={project.IMAGES.LOGO_RESPONSIVE.URL}
          alt={t('images.logoResponsive')}
          className='laptop:block hidden'
        />
      </div>
      <Separator className='my-16' />
      <div className='grid gap-6'>
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.BUSINESS_CARD.URL}
          alt={t('images.businessCard')}
        />
        <Image
          className='aspect-square'
          src={project.IMAGES.POLO_FRONT.URL}
          alt={t('images.poloFront')}
        />
        <Image
          className='aspect-video'
          src={project.IMAGES.BILLBOARD.URL}
          alt={t('images.billboard')}
        />
        <div>
          <Image
            className='aspect-video object-cover object-left'
            src={project.IMAGES.FAVICON_DARK.URL}
            alt={t('images.faviconDark')}
          />
          <Image
            className='aspect-video object-cover object-left'
            src={project.IMAGES.FAVICON_LIGHT.URL}
            alt={t('images.faviconLight')}
          />
        </div>
      </div>
      <div className='tablet:my-12 my-8 origin-center overflow-hidden'>
        <Image
          className='h-16 object-contain object-center'
          includePlaceholder={false}
          src={project.IMAGES.PATTERN.URL}
          alt={t('images.pattern')}
        />
      </div>
      <Separator className='my-16' />

      <SafariWindow
        title='atproy.com'
        stretch={false}
        className='tablet:h-[1700px] desktop:h-[1800px] h-[1050px] w-full'
        imageUrl={project.IMAGES.WEB.URL}
        imageHeight={3500}
      />
      <Separator className='my-16' />
      <Signature />
    </ResponsiveSheetContent>
  )
}
