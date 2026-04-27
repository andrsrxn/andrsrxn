import { useTranslations } from 'next-intl'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const IcemeneContent = () => {
  const project = PROJECTS.ICEMENE_REBRANDING

  const tServices = useTranslations('services')
  const t = useTranslations('projects.icemene')

  const services = project.SERVICES.map(service => tServices(service))

  const paragraphs = [t('description.paragraph1'), t('description.paragraph2')]

  return (
    <ResponsiveSheetContent
      slug={t('slug')}
      projectType={project.TYPE}
      client={`${t('client')} - ${t('industry')}`}
      title={t('summary')}
      services={services}
      description={paragraphs}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={t('images.bannerSmall')}>
      <div>
        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_COMPARISON.URL}
          alt={t('images.bannerComparison')}
        />
        <Separator className='my-12' />
        <div>
          <div className='tablet:p-20 border bg-[#fffcf2] p-16'>
            <Image
              includePlaceholder={false}
              className='aspect-video'
              src={project.IMAGES.LOGO.URL}
              alt={t('images.logo')}
            />
          </div>
          <div className='tablet:p-20 border p-16'>
            <Image
              includePlaceholder={false}
              className='aspect-video'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={t('images.logoAlternative')}
            />
          </div>
          <div className='flex w-full'>
            <div className='tablet:p-20 grow border bg-[#fffcf2] p-12'>
              <Image
                includePlaceholder={false}
                className='aspect-square h-40'
                src={project.IMAGES.SYMBOL.URL}
                alt={t('images.symbol')}
              />
            </div>
            <div className='tablet:p-20 grow border p-12'>
              <Image
                includePlaceholder={false}
                className='aspect-square h-40'
                src={project.IMAGES.SYMBOL_ALTERNATIVE.URL}
                alt={t('images.symbolAlternative')}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='bg-[#252422] p-12'>
            <Image
              includePlaceholder={false}
              className='w-40'
              src={project.IMAGES.COLOR_1.URL}
              alt={t('images.color1')}
            />
          </div>
          <div className='bg-[#fffcf2] p-12'>
            <Image
              includePlaceholder={false}
              className='w-40'
              src={project.IMAGES.COLOR_2.URL}
              alt={t('images.color2')}
            />
          </div>
          <div className='tablet:grid-cols-3 grid'>
            <div className='h-full bg-[#cfdbd5] p-12'>
              <Image
                includePlaceholder={false}
                className='w-40 object-cover'
                src={project.IMAGES.COLOR_3.URL}
                alt={t('images.color3')}
              />
            </div>
            <div className='h-full bg-[#e8eddf] p-12'>
              <Image
                includePlaceholder={false}
                className='w-40 object-cover'
                src={project.IMAGES.COLOR_4.URL}
                alt={t('images.color4')}
              />
            </div>
            <div className='h-full bg-[#f5cb5c] p-12'>
              <Image
                includePlaceholder={false}
                className='w-40 object-cover'
                src={project.IMAGES.COLOR_5.URL}
                alt={t('images.color5')}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-20 py-24'>
        <Image
          includePlaceholder={false}
          className='w-1/2'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={t('images.typography1')}
        />
        <Image
          includePlaceholder={false}
          className='w-1/2'
          src={project.IMAGES.TYPOGRAPHY_2.URL}
          alt={t('images.typography2')}
        />
      </div>
      <div className='overflow-hidden pb-16'>
        <Image
          includePlaceholder={false}
          className='h-30 object-cover'
          src={project.IMAGES.PATTERN.URL}
          alt={t('images.pattern')}
        />
      </div>
      <div className='grid gap-6 overflow-hidden'>
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.SIGN.URL}
          alt={t('images.sign')}
        />
        <Image
          className='aspect-square object-cover'
          src={project.IMAGES.SHOPPING_BAG.URL}
          alt={t('images.shoppingBag')}
        />
        <Image
          className='aspect-square object-cover'
          src={project.IMAGES.BOX.URL}
          alt={t('images.box')}
        />
        <Image
          className='aspect-square object-cover'
          src={project.IMAGES.PACKAGE.URL}
          alt={t('images.package')}
        />
      </div>

      <Separator className='my-16' />
      <Signature />
    </ResponsiveSheetContent>
  )
}
