import { useTranslations } from 'next-intl'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const ThePrincipalContent = () => {
  const project = PROJECTS.THEPRINCIPAL_BRANDING
  const tServices = useTranslations('services')
  const t = useTranslations('projects.theprincipal')

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
        <div>
          <div className='tablet:p-16 border bg-white px-8 py-12'>
            <Image
              includePlaceholder={false}
              className='w-full'
              src={project.IMAGES.LOGO.URL}
              alt={t('images.logo')}
            />
          </div>
          <div className='tablet:p-16 border px-8 py-12'>
            <Image
              includePlaceholder={false}
              className='w-full'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={t('images.logoAlternative')}
            />
          </div>
          <div className='flex w-full'>
            <div className='tablet:p-12 aspect-square grow border p-8'>
              <Image
                includePlaceholder={false}
                className='aspect-square'
                src={project.IMAGES.SYMBOL.URL}
                alt={t('images.symbol')}
              />
            </div>
            <div className='tablet:p-12 aspect-square grow border p-8'>
              <Image
                includePlaceholder={false}
                className='aspect-square'
                src={project.IMAGES.SYMBOL_NEGATIVE.URL}
                alt={t('images.symbolNegative')}
              />
            </div>
            <div className='tablet:p-12 aspect-square grow border bg-white p-8'>
              <Image
                includePlaceholder={false}
                className='aspect-square'
                src={project.IMAGES.SYMBOL_POSITIVE.URL}
                alt={t('images.symbolPositive')}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='bg-[#00aa72] p-12 pb-30'>
            <Image
              includePlaceholder={false}
              className='tablet:w-1/3 w-1/2'
              src={project.IMAGES.COLOR_1.URL}
              alt={t('images.color1')}
            />
          </div>
        </div>
      </div>
      <div className='pt-20 pb-2'>
        <Image
          includePlaceholder={false}
          className='w-full'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={t('images.typography1')}
        />
      </div>

      <div className='py-20'>
        <Image
          includePlaceholder={false}
          src={project.IMAGES.DOODLE.URL}
          alt={t('images.doodle')}
        />
      </div>

      <div className='grid w-full gap-6 overflow-hidden'>
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.APP.URL}
          alt={t('images.app')}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.LAPTOP_1.URL}
          alt={t('images.laptop1')}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.LAPTOP_2.URL}
          alt={t('images.laptop2')}
        />
      </div>

      <Separator className='my-16' />
      <Signature />
    </ResponsiveSheetContent>
  )
}
