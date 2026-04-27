import { useTranslations } from 'next-intl'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const BonzerContent = () => {
  const project = PROJECTS.BONZER_BRANDING
  const tServices = useTranslations('services')
  const t = useTranslations('projects.bonzer')

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
      <div className='tablet:flex w-full'>
        <div className='aspect-video grow border p-8'>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.LOGO.URL}
            alt={t('images.logo')}
          />
        </div>
        <div className='aspect-video grow border p-8'>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.LOGO_ALTERNATIVE.URL}
            alt={t('images.logoAlternative')}
          />
        </div>
      </div>
      <div className='flex w-full'>
        <div className='aspect-square grow border p-12'>
          <Image
            includePlaceholder={false}
            className='aspect-square'
            src={project.IMAGES.SYMBOL_ALTERNATIVE.URL}
            alt={t('images.symbolAlternative')}
          />
        </div>
        <div className='aspect-square grow border p-12'>
          <Image
            includePlaceholder={false}
            className='aspect-square'
            src={project.IMAGES.SYMBOL.URL}
            alt={t('images.symbol')}
          />
        </div>
      </div>
      <div className='my-12 aspect-video'>
        <Image
          includePlaceholder={false}
          className='aspect-video'
          src={project.IMAGES.SYMBOL_CONSTRUCTION.URL}
          alt={t('images.symbolConstruction')}
        />
      </div>

      <div className='bg-[#008997] p-12'>
        <Image
          includePlaceholder={false}
          className='h-56 w-auto'
          src={project.IMAGES.COLOR_1.URL}
          alt={t('images.color1')}
        />
      </div>

      <div className='tablet:grid-cols-2 grid gap-20 overflow-x-hidden pt-20 pb-4'>
        <div className='grid grid-cols-1 grid-rows-2'>
          <Image
            includePlaceholder={false}
            className='tablet:w-full w-2/3'
            src={project.IMAGES.TYPOGRAPHY_1.URL}
            alt={t('images.typography1')}
          />
          <p className='text-muted-foreground'>
            Melodrama es una elección audaz y muy efectiva para el posicionamiento de una marca
            moderna de cuidado personal, ya que equilibra la elegancia con la personalidad.
          </p>
        </div>
        <div className='grid grid-cols-1 grid-rows-2'>
          <Image
            includePlaceholder={false}
            className='tablet:w-1/2 w-2/5'
            src={project.IMAGES.TYPOGRAPHY_2.URL}
            alt={t('images.typography2')}
          />
          <p className='text-muted-foreground'>
            Inter es una tipografía Sans-Serif moderna, diseñada meticulosamente para ser altamente
            legible en pantallas. Actúa como el contrapunto técnico y funcional de la personalidad
            artística de Melodrama.
          </p>
        </div>
      </div>
      <Image
        includePlaceholder={false}
        className='my-12 aspect-video object-contain'
        src={project.IMAGES.ILLUSTRATION.URL}
        alt={t('images.illustration')}
      />

      <div className='grid gap-6'>
        <Image className='bg-accent' src={project.IMAGES.ADS_3.URL} alt={t('images.ads3')} />

        <Image className='bg-accent' src={project.IMAGES.ADS_1.URL} alt={t('images.ads1')} />
        <Image className='bg-accent' src={project.IMAGES.ADS_2.URL} alt={t('images.ads2')} />
      </div>

      <Separator className='my-16' />
      <Signature />
    </ResponsiveSheetContent>
  )
}
