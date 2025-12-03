import { SafariWindow } from '@/components/backgrounds/safari-mockup'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const IcpjsContent = () => {
  const project = PROJECTS.ICPSJ_BRANDING
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div>
        <video
          autoPlay
          muted
          controls={false}
          loop
          playsInline
          className='bg-accent aspect-video object-cover'>
          <source src={project.IMAGES.LOGO_ANIMATION.URL} type='video/mp4' />
        </video>
        <Separator className='my-12' />
        <div>
          <div className='bg-[#ff5300] p-8 pb-40'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='h-32 w-auto'
              src={project.IMAGES.COLOR_1.URL}
              alt={project.IMAGES.COLOR_1.ALT}
            />
          </div>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='object-cover'
            src={project.IMAGES.PALETTE_1.URL}
            alt={project.IMAGES.PALETTE_1.ALT}
          />
        </div>
        <div className='flex w-full justify-between'>
          <div className='w-full'>
            <div className='bg-[#c70017] p-8 pb-20'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='h-32 w-auto'
                src={project.IMAGES.COLOR_2.URL}
                alt={project.IMAGES.COLOR_2.ALT}
              />
            </div>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='object-cover'
              src={project.IMAGES.PALETTE_2.URL}
              alt={project.IMAGES.PALETTE_2.ALT}
            />
          </div>
          <div className='w-full'>
            <div className='bg-[#fbd823] p-8 pb-20'>
              <Image
                includePlaceholder={false}
                loading='eager'
                className='h-32 w-auto'
                src={project.IMAGES.COLOR_3.URL}
                alt={project.IMAGES.COLOR_3.ALT}
              />
            </div>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='object-cover'
              src={project.IMAGES.PALETTE_3.URL}
              alt={project.IMAGES.PALETTE_3.ALT}
            />
          </div>
        </div>
      </div>
      <div className='grid gap-22 overflow-x-hidden py-22 pb-2'>
        <Image
          includePlaceholder={false}
          loading='eager'
          className='w-4/5 max-w-sm'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={project.IMAGES.TYPOGRAPHY_1.ALT}
        />
        <Image
          includePlaceholder={false}
          loading='eager'
          className='w-4/5 max-w-sm'
          src={project.IMAGES.TYPOGRAPHY_2.URL}
          alt={project.IMAGES.TYPOGRAPHY_2.ALT}
        />
      </div>

      <Separator className='my-16' />
      <div className='tablet:flex-row tablet:h-[600px] flex h-auto flex-col'>
        <div className='tablet:p-20 flex items-center justify-center border p-12'>
          <Image
            includePlaceholder={false}
            loading='eager'
            className='tablet:h-auto h-40'
            src={project.IMAGES.SYMBOL.URL}
            alt={project.IMAGES.SYMBOL.ALT}
          />
        </div>
        <div className='h-full'>
          <div className='bg-accent tablet:p-20 flex h-1/2 items-center justify-center border p-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='tablet:h-auto h-40'
              src={project.IMAGES.SYMBOL_NEGATIVE.URL}
              alt={project.IMAGES.SYMBOL_NEGATIVE.ALT}
            />
          </div>
          <div className='tablet:p-20 flex h-1/2 items-center justify-center border bg-white p-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='tablet:h-auto h-40'
              src={project.IMAGES.SYMBOL_POSITIVE.URL}
              alt={project.IMAGES.SYMBOL_POSITIVE.ALT}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className=''>
          <div className='tablet:p-18 border px-8 py-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='h-auto'
              src={project.IMAGES.LOGO_INVERTED.URL}
              alt={project.IMAGES.LOGO_INVERTED.ALT}
            />
          </div>
          <div className='tablet:p-18 border bg-white px-8 py-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              src={project.IMAGES.LOGO.URL}
              alt={project.IMAGES.LOGO.ALT}
            />
          </div>
        </div>
        <div className='tablet:flex mt-0.5 h-full'>
          <div className='bg-accent border px-8 py-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='h-auto'
              src={project.IMAGES.LOGO_NEGATIVE.URL}
              alt={project.IMAGES.LOGO_NEGATIVE.ALT}
            />
          </div>
          <div className='border bg-white px-8 py-12'>
            <Image
              includePlaceholder={false}
              loading='eager'
              className='h-auto'
              src={project.IMAGES.LOGO_POSITIVE.URL}
              alt={project.IMAGES.LOGO_POSITIVE.ALT}
            />
          </div>
        </div>
      </div>
      <Separator className='my-16' />
      <div className='grid gap-6'>
        <Image
          includePlaceholder={false}
          src={project.IMAGES.INSTAGRAM_POSTS.URL}
          alt={project.IMAGES.INSTAGRAM_POSTS.ALT}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.BIBLE_STUDY.URL}
          alt={project.IMAGES.BIBLE_STUDY.ALT}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.SIGN_LIGHT.URL}
          alt={project.IMAGES.SIGN_LIGHT.ALT}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.STICKERS.URL}
          alt={project.IMAGES.SIGN_LIGHT.ALT}
        />
      </div>

      <Separator className='my-16' />
      <SafariWindow
        title='icpsj.org'
        stretch={false}
        className='tablet:h-[1700px] laptop:h-[2300px] desktop:h-[1750px] h-[1050px] w-full'
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
