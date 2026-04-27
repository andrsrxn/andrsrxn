import { useTranslations } from 'next-intl'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const VIVETContent = () => {
  const project = PROJECTS.VIVET_REBRANDING
  const tServices = useTranslations('services')
  const t = useTranslations('projects.vivet')

  const services = project.SERVICES.map(service => tServices(service))

  const paragraphs = [
    t('description.paragraph1'),
    t('description.paragraph2'),
    t('description.paragraph3'),
  ]

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
      <div className='grid gap-8'>
        <Image
          className='aspect-video w-full border border-[#464742]'
          src={project.IMAGES.LOGO_CONTRUCTION.URL}
          alt={t('images.logoConstruction')}
        />
        <div className='laptop:grid-cols-2 grid w-full gap-8 overflow-hidden'>
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.COLOR_1.URL}
            alt={t('images.color1')}
          />
          <Image
            includePlaceholder={false}
            className='block aspect-square h-full border border-[#464742] object-cover object-center'
            src={project.IMAGES.SYMBOL_CONTRUCTION.URL}
            alt={t('images.symbolConstruction')}
          />
        </div>

        <Image
          className='border border-[#464742]'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={t('images.typography1')}
        />
        <Image
          className='border border-[#464742]'
          src={project.IMAGES.TYPOGRAPHY_2.URL}
          alt={t('images.typography2')}
        />

        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_2.URL}
          alt={t('images.banner2')}
        />
        <Image
          className='my-4'
          includePlaceholder={false}
          src={project.IMAGES.PATTERN.URL}
          alt={t('images.pattern')}
        />

        <div className='laptop:grid-cols-2 grid gap-8'>
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.VEST.URL}
            alt={t('images.vest')}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.BAG.URL}
            alt={t('images.bag')}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.JACKET.URL}
            alt={t('images.jacket')}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.JEANS.URL}
            alt={t('images.jeans')}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.SHIRT.URL}
            alt={t('images.shirt')}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.SKI_MASK.URL}
            alt={t('images.skiMask')}
          />
        </div>
        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_3.URL}
          alt={t('images.banner3')}
        />
      </div>
      <Separator className='my-16' />

      <Signature />
    </ResponsiveSheetContent>
  )
}
