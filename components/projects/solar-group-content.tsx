import { useTranslations } from 'next-intl'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const SolarGroupContent = () => {
  const project = PROJECTS.SOLAR_GROUP_REBRANDING
  const tServices = useTranslations('services')
  const t = useTranslations('projects.solarGroup')

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
        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_COMPARISON.URL}
          alt={t('images.bannerComparison')}
        />
        <Separator className='my-12' />

        <div>
          <div className='tablet:p-20 border p-12'>
            <Image
              includePlaceholder={false}
              className='tablet:h-60 h-32'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={t('images.logoAlternative')}
            />
          </div>
          <div className='tablet:p-20 border bg-white p-12'>
            <Image
              includePlaceholder={false}
              className='tablet:h-60 h-32'
              src={project.IMAGES.LOGO.URL}
              alt={t('images.logo')}
            />
          </div>
          <div className='tablet:flex'>
            <div className='border p-12'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO_NEGATIVE.URL}
                alt={t('images.logoNegative')}
              />
            </div>
            <div className='border bg-white p-12'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO_POSITIVE.URL}
                alt={t('images.logoPositive')}
              />
            </div>
          </div>
        </div>
        <div className='grid gap-6 overflow-hidden'>
          <Image
            includePlaceholder={false}
            className='tablet:scale-125 tablet:object-contain aspect-video h-80 origin-center object-cover'
            src={project.IMAGES.LOGO_CONSTRUCTION.URL}
            alt={t('images.logoConstruction')}
          />
        </div>
        <div className='bg-[#f16c00] px-12 py-16'>
          <Image
            includePlaceholder={false}
            className='w-48'
            src={project.IMAGES.COLOR_1.URL}
            alt={t('images.color1')}
          />
        </div>
        <div className='bg-accent px-12 py-20'>
          <Image
            includePlaceholder={false}
            className='w-80'
            src={project.IMAGES.TYPOGRAPHY_1.URL}
            alt={t('images.typography1')}
          />
          <Image
            includePlaceholder={false}
            className='mt-12'
            src={project.IMAGES.ABC.URL}
            alt={t('images.abc')}
          />
        </div>
      </div>

      <Separator className='my-16' />
      <Signature />
    </ResponsiveSheetContent>
  )
}
