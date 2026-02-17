import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { PROJECTS } from '@/lib/constants/projects'

export const SolarGroupContent = () => {
  const project = PROJECTS.SOLAR_GROUP_REBRANDING
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div>
        <Image
          className='aspect-video'
          src={project.IMAGES.BANNER_COMPARISON.URL}
          alt={project.IMAGES.BANNER_COMPARISON.ALT}
        />
        <Separator className='my-12' />

        <div>
          <div className='tablet:p-20 border p-12'>
            <Image
              includePlaceholder={false}
              className='tablet:h-60 h-32'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={project.IMAGES.LOGO_ALTERNATIVE.ALT}
            />
          </div>
          <div className='tablet:p-20 border bg-white p-12'>
            <Image
              includePlaceholder={false}
              className='tablet:h-60 h-32'
              src={project.IMAGES.LOGO.URL}
              alt={project.IMAGES.LOGO.ALT}
            />
          </div>
          <div className='tablet:flex'>
            <div className='border p-12'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO_NEGATIVE.URL}
                alt={project.IMAGES.LOGO_NEGATIVE.ALT}
              />
            </div>
            <div className='border bg-white p-12'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO_POSITIVE.URL}
                alt={project.IMAGES.LOGO_POSITIVE.ALT}
              />
            </div>
          </div>
        </div>
        <div className='grid gap-6 overflow-hidden'>
          <Image
            includePlaceholder={false}
            className='tablet:scale-125 tablet:object-contain aspect-video h-80 origin-center object-cover'
            src={project.IMAGES.LOGO_CONSTRUCTION.URL}
            alt={project.IMAGES.LOGO_CONSTRUCTION.ALT}
          />
        </div>
        <div className='bg-[#f16c00] px-12 py-16'>
          <Image
            includePlaceholder={false}
            className='w-48'
            src={project.IMAGES.COLOR_1.URL}
            alt={project.IMAGES.COLOR_1.ALT}
          />
        </div>
        <div className='bg-accent px-12 py-20'>
          <Image
            includePlaceholder={false}
            className='w-80'
            src={project.IMAGES.TYPOGRAPHY_1.URL}
            alt={project.IMAGES.TYPOGRAPHY_1.ALT}
          />
          <Image
            includePlaceholder={false}
            className='mt-12'
            src={project.IMAGES.ABC.URL}
            alt={project.IMAGES.ABC.ALT}
          />
        </div>
      </div>

      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>{COMPANY.COMMERCIAL_NAME}</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
