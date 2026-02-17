import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { PROJECTS } from '@/lib/constants/projects'

export const BonzerContent = () => {
  const project = PROJECTS.BONZER_BRANDING
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div className='tablet:flex w-full'>
        <div className='aspect-video grow border p-8'>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.LOGO.URL}
            alt={project.IMAGES.LOGO.ALT}
          />
        </div>
        <div className='aspect-video grow border p-8'>
          <Image
            includePlaceholder={false}
            className='aspect-video'
            src={project.IMAGES.LOGO_ALTERNATIVE.URL}
            alt={project.IMAGES.LOGO_ALTERNATIVE.ALT}
          />
        </div>
      </div>
      <div className='flex w-full'>
        <div className='aspect-square grow border p-12'>
          <Image
            includePlaceholder={false}
            className='aspect-square'
            src={project.IMAGES.SYMBOL_ALTERNATIVE.URL}
            alt={project.IMAGES.SYMBOL_ALTERNATIVE.ALT}
          />
        </div>
        <div className='aspect-square grow border p-12'>
          <Image
            includePlaceholder={false}
            className='aspect-square'
            src={project.IMAGES.SYMBOL.URL}
            alt={project.IMAGES.SYMBOL.ALT}
          />
        </div>
      </div>
      <div className='my-12 aspect-video'>
        <Image
          includePlaceholder={false}
          className='aspect-video'
          src={project.IMAGES.SYMBOL_CONSTRUCTION.URL}
          alt={project.IMAGES.SYMBOL_CONSTRUCTION.ALT}
        />
      </div>

      <div className='bg-[#008997] p-12'>
        <Image
          includePlaceholder={false}
          className='h-56 w-auto'
          src={project.IMAGES.COLOR_1.URL}
          alt={project.IMAGES.COLOR_1.ALT}
        />
      </div>

      <div className='tablet:grid-cols-2 grid gap-20 overflow-x-hidden pt-20 pb-4'>
        <div className='grid grid-cols-1 grid-rows-2'>
          <Image
            includePlaceholder={false}
            className='tablet:w-full w-2/3'
            src={project.IMAGES.TYPOGRAPHY_1.URL}
            alt={project.IMAGES.TYPOGRAPHY_1.ALT}
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
            alt={project.IMAGES.TYPOGRAPHY_2.ALT}
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
        alt={project.IMAGES.ILLUSTRATION.ALT}
      />

      <div className='grid gap-6'>
        <Image
          className='bg-accent'
          src={project.IMAGES.ADS_3.URL}
          alt={project.IMAGES.ADS_3.ALT}
        />

        <Image
          className='bg-accent'
          src={project.IMAGES.ADS_1.URL}
          alt={project.IMAGES.ADS_1.ALT}
        />
        <Image
          className='bg-accent'
          src={project.IMAGES.ADS_2.URL}
          alt={project.IMAGES.ADS_2.ALT}
        />
      </div>

      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>{COMPANY.COMMERCIAL_NAME}</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
