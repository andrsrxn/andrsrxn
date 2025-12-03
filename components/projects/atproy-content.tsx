import { SafariWindow } from '@/components/backgrounds/safari-mockup'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const AtproyContent = () => {
  const project = PROJECTS.ATPROY_BRAND_REFRESH
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div>
        <div className='bg-[#002F6D] p-8 pb-28'>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_1.URL}
            alt={project.IMAGES.COLOR_1.ALT}
          />
        </div>
        <div className='bg-[#00A6E2] p-8 pb-20'>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_2.URL}
            alt={project.IMAGES.COLOR_2.ALT}
          />
        </div>
        <div className='bg-[#00943C] p-8 pb-16'>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_3.URL}
            alt={project.IMAGES.COLOR_3.ALT}
          />
        </div>
        <div className='bg-[#AAC8B9] p-8'>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='h-28 w-auto'
            src={project.IMAGES.COLOR_4.URL}
            alt={project.IMAGES.COLOR_4.ALT}
          />
        </div>
      </div>
      <div className='overflow-x-hidden py-30 pb-20'>
        <Image
          includePlaceholder={false}
          loading='eager'
          className='w-4/5 max-w-xs'
          src={project.IMAGES.TYPOGRAPHY_WHITE.URL}
          alt={project.IMAGES.TYPOGRAPHY_WHITE.ALT}
        />
        <div className='mx-auto my-14 grid origin-center scale-[120%] overflow-hidden'>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='h-20 mask-x-from-80% mask-x-to-90% object-cover object-left'
            src={project.IMAGES.ABC_WHITE.URL}
            alt={project.IMAGES.ABC_WHITE.ALT}
          />
          <Image
            includePlaceholder={false}
            loading='eager'
            className='h-20 mask-x-from-80% mask-x-to-90% object-cover object-right'
            src={project.IMAGES.ABC_WHITE.URL}
            alt={project.IMAGES.ABC_WHITE.ALT}
          />
        </div>
      </div>
      <div className='mx-auto w-11/12'>
        <Image
          includePlaceholder={false}
          loading='eager'
          src={project.IMAGES.LOGO_RESPONSIVE_VERTICAL.URL}
          alt={project.IMAGES.LOGO_RESPONSIVE_VERTICAL.ALT}
          className='laptop:hidden mx-auto max-w-md'
        />
        <Image
          includePlaceholder={false}
          loading='eager'
          src={project.IMAGES.LOGO_RESPONSIVE.URL}
          alt={project.IMAGES.LOGO_RESPONSIVE.ALT}
          className='laptop:block hidden'
        />
      </div>
      <Separator className='my-16' />
      <div className='grid gap-6'>
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.BUSINESS_CARD.URL}
          alt={project.IMAGES.BUSINESS_CARD.ALT}
        />
        <Image
          className='aspect-square'
          src={project.IMAGES.POLO_FRONT.URL}
          alt={project.IMAGES.POLO_FRONT.ALT}
        />
        <Image
          className='aspect-video'
          src={project.IMAGES.BILLBOARD.URL}
          alt={project.IMAGES.BILLBOARD.ALT}
        />
        <div>
          <Image
            className='aspect-video object-cover object-left'
            src={project.IMAGES.FAVICON_DARK.URL}
            alt={project.IMAGES.FAVICON_DARK.ALT}
          />
          <Image
            className='aspect-video object-cover object-left'
            src={project.IMAGES.FAVICON_LIGHT.URL}
            alt={project.IMAGES.FAVICON_LIGHT.ALT}
          />
        </div>
      </div>
      <div className='tablet:my-12 my-8 origin-center scale-[120%] overflow-hidden'>
        <Image
          className='tablet:h-28 h-20 mask-x-from-80% mask-x-to-90% object-cover object-center'
          includePlaceholder={false}
          loading='eager'
          src={project.IMAGES.PATTERN.URL}
          alt={project.IMAGES.PATTERN.ALT}
        />
      </div>
      <Separator className='my-16' />

      <SafariWindow
        title='atproy.com'
        stretch={false}
        className='tablet:h-[1700px] desktop:h-[1800px] h-[1050px] w-full'
        imageUrl={project.IMAGES.WEB.URL}
        imageHeight={3500}
      />
      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>Andrés Raxón</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
