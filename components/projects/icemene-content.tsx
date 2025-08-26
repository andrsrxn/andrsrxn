import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const IcemeneContent = () => {
  const project = PROJECTS.ICEMENE_REBRANDING
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div>
        <Image
          className='aspect-video'
          loading='eager'
          src={project.IMAGES.BANNER_COMPARISON.URL}
          alt={project.IMAGES.BANNER_COMPARISON.ALT}
        />
        <Separator className='my-12' />
        <div>
          <div className='tablet:p-20 border bg-white p-16'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='aspect-video'
              src={project.IMAGES.LOGO.URL}
              alt={project.IMAGES.LOGO.ALT}
            />
          </div>
          <div className='tablet:p-20 border p-16'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='aspect-video'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={project.IMAGES.LOGO_ALTERNATIVE.ALT}
            />
          </div>
          <div className='flex w-full'>
            <div className='tablet:p-20 grow border bg-white p-12'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='aspect-square h-40'
                src={project.IMAGES.SYMBOL.URL}
                alt={project.IMAGES.SYMBOL.ALT}
              />
            </div>
            <div className='tablet:p-20 grow border p-12'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='aspect-square h-40'
                src={project.IMAGES.SYMBOL_ALTERNATIVE.URL}
                alt={project.IMAGES.SYMBOL_ALTERNATIVE.ALT}
              />
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <div className='bg-[#252422] p-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='w-40'
              src={project.IMAGES.COLOR_1.URL}
              alt={project.IMAGES.COLOR_1.ALT}
            />
          </div>
          <div className='bg-[#fffcf2] p-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='w-40'
              src={project.IMAGES.COLOR_2.URL}
              alt={project.IMAGES.COLOR_2.ALT}
            />
          </div>
          <div className='tablet:grid-cols-3 grid'>
            <div className='h-full bg-[#cfdbd5] p-12'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='w-40 object-cover'
                src={project.IMAGES.COLOR_3.URL}
                alt={project.IMAGES.COLOR_3.ALT}
              />
            </div>
            <div className='h-full bg-[#e8eddf] p-12'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='w-40 object-cover'
                src={project.IMAGES.COLOR_4.URL}
                alt={project.IMAGES.COLOR_4.ALT}
              />
            </div>
            <div className='h-full bg-[#f5cb5c] p-12'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='w-40 object-cover'
                src={project.IMAGES.COLOR_5.URL}
                alt={project.IMAGES.COLOR_5.ALT}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center py-24'>
        <Image
          includePlaceholder={false}
          loading='eager'
          className='w-1/2'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={project.IMAGES.TYPOGRAPHY_1.ALT}
        />
      </div>
      <div className='overflow-hidden pb-16'>
        <Image
          includePlaceholder={false}
          loading='eager'
          className='h-30 object-cover'
          src={project.IMAGES.PATTERN.URL}
          alt={project.IMAGES.PATTERN.ALT}
        />
      </div>
      <div className='grid gap-6 overflow-hidden'>
        <Image
          className='aspect-square object-cover'
          src={project.IMAGES.SHOPPING_BAG.URL}
          alt={project.IMAGES.SHOPPING_BAG.ALT}
        />
        <Image
          className='aspect-square object-cover'
          src={project.IMAGES.PACKAGE.URL}
          alt={project.IMAGES.PACKAGE.ALT}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.SIGN.URL}
          alt={project.IMAGES.SIGN.ALT}
        />
        <Image
          className='aspect-square object-cover'
          src={project.IMAGES.BOX.URL}
          alt={project.IMAGES.BOX.ALT}
        />
      </div>

      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>Andrés Raxón</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
