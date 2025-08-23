import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const ThePrincipalContent = () => {
  const project = PROJECTS.THEPRINCIPAL_BRANDING
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div>
        <div>
          <div className='border bg-white p-16'>
            <Image
              includePlaceholder={false}
              src={project.IMAGES.LOGO.URL}
              alt={project.IMAGES.LOGO.ALT}
            />
          </div>
          <div className='border p-16'>
            <Image
              includePlaceholder={false}
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={project.IMAGES.LOGO_ALTERNATIVE.ALT}
            />
          </div>
          <div className='flex'>
            <div className='border p-12'>
              <Image
                includePlaceholder={false}
                src={project.IMAGES.SYMBOL.URL}
                alt={project.IMAGES.SYMBOL.ALT}
              />
            </div>
            <div className='border p-12'>
              <Image
                includePlaceholder={false}
                src={project.IMAGES.SYMBOL_NEGATIVE.URL}
                alt={project.IMAGES.SYMBOL_NEGATIVE.ALT}
              />
            </div>
            <div className='border bg-white p-12'>
              <Image
                includePlaceholder={false}
                src={project.IMAGES.SYMBOL_POSITIVE.URL}
                alt={project.IMAGES.SYMBOL_POSITIVE.ALT}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='bg-[#00aa72] p-12 pb-30'>
            <Image
              includePlaceholder={false}
              className='w-1/3'
              src={project.IMAGES.COLOR_1.URL}
              alt={project.IMAGES.COLOR_1.ALT}
            />
          </div>
        </div>
      </div>
      <div className='pt-20 pb-2'>
        <Image
          includePlaceholder={false}
          className='w-full'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={project.IMAGES.TYPOGRAPHY_1.ALT}
        />
      </div>

      <div className='py-20'>
        <Image
          includePlaceholder={false}
          src={project.IMAGES.DOODLE.URL}
          alt={project.IMAGES.DOODLE.ALT}
        />
      </div>

      <div className='grid gap-16 overflow-hidden'>
        <Image
          className='scale-110'
          src={project.IMAGES.LAPTOP_1.URL}
          alt={project.IMAGES.LAPTOP_1.ALT}
        />
        <Image
          className='scale-110'
          src={project.IMAGES.LAPTOP_2.URL}
          alt={project.IMAGES.LAPTOP_2.ALT}
        />
      </div>

      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>Andrés Raxón</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
