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
          <div className='tablet:p-16 border bg-white px-8 py-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='w-full'
              src={project.IMAGES.LOGO.URL}
              alt={project.IMAGES.LOGO.ALT}
            />
          </div>
          <div className='tablet:p-16 border px-8 py-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='w-full'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={project.IMAGES.LOGO_ALTERNATIVE.ALT}
            />
          </div>
          <div className='flex w-full'>
            <div className='tablet:p-12 grow border p-8'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='aspect-square'
                src={project.IMAGES.SYMBOL.URL}
                alt={project.IMAGES.SYMBOL.ALT}
              />
            </div>
            <div className='tablet:p-12 grow border p-8'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='aspect-square'
                src={project.IMAGES.SYMBOL_NEGATIVE.URL}
                alt={project.IMAGES.SYMBOL_NEGATIVE.ALT}
              />
            </div>
            <div className='tablet:p-12 grow border bg-white p-8'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='aspect-square'
                src={project.IMAGES.SYMBOL_POSITIVE.URL}
                alt={project.IMAGES.SYMBOL_POSITIVE.ALT}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='bg-[#00aa72] p-12 pb-30'>
            <Image
              loading='eager'
              includePlaceholder={false}
              className='tablet:w-1/3 w-1/2'
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
          loading='eager'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={project.IMAGES.TYPOGRAPHY_1.ALT}
        />
      </div>

      <div className='py-20'>
        <Image
          includePlaceholder={false}
          loading='eager'
          src={project.IMAGES.DOODLE.URL}
          alt={project.IMAGES.DOODLE.ALT}
        />
      </div>

      <div className='grid gap-6 overflow-hidden'>
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.LAPTOP_1.URL}
          alt={project.IMAGES.LAPTOP_1.ALT}
        />
        <Image
          className='aspect-video object-cover'
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
