import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { PROJECTS } from '@/lib/constants/projects'

export const VIVETContent = () => {
  const project = PROJECTS.VIVET_REBRANDING
  return (
    <ResponsiveSheetContent
      slug={project.SLUG}
      projectType={project.TYPE}
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div className='grid gap-8'>
        <Image
          className='aspect-video w-full border border-[#464742]'
          src={project.IMAGES.LOGO_CONTRUCTION.URL}
          alt={project.IMAGES.LOGO_CONTRUCTION.ALT}
        />
        <div className='laptop:grid-cols-2 grid w-full gap-8 overflow-hidden'>
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.COLOR_1.URL}
            alt={project.IMAGES.COLOR_1.ALT}
          />
          <Image
            includePlaceholder={false}
            className='block aspect-square h-full border border-[#464742] object-cover object-center'
            src={project.IMAGES.SYMBOL_CONTRUCTION.URL}
            alt={project.IMAGES.SYMBOL_CONTRUCTION.ALT}
          />
        </div>

        <Image
          className='border border-[#464742]'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={project.IMAGES.TYPOGRAPHY_1.ALT}
        />
        <Image
          className='border border-[#464742]'
          src={project.IMAGES.TYPOGRAPHY_2.URL}
          alt={project.IMAGES.TYPOGRAPHY_2.ALT}
        />

        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_2.URL}
          alt={project.IMAGES.BANNER_2.ALT}
        />
        <Image
          className='my-4'
          includePlaceholder={false}
          src={project.IMAGES.PATTERN.URL}
          alt={project.IMAGES.PATTERN.ALT}
        />

        <div className='laptop:grid-cols-2 grid gap-8'>
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.VEST.URL}
            alt={project.IMAGES.VEST.ALT}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.BAG.URL}
            alt={project.IMAGES.BAG.ALT}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.JACKET.URL}
            alt={project.IMAGES.JACKET.ALT}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.JEANS.URL}
            alt={project.IMAGES.JEANS.ALT}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.SHIRT.URL}
            alt={project.IMAGES.SHIRT.ALT}
          />
          <Image
            className='aspect-square border border-[#464742]'
            src={project.IMAGES.SKI_MASK.URL}
            alt={project.IMAGES.SKI_MASK.ALT}
          />
        </div>
        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_3.URL}
          alt={project.IMAGES.BANNER_3.ALT}
        />
      </div>
      <Separator className='my-16' />

      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>{COMPANY.COMMERCIAL_NAME}</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
