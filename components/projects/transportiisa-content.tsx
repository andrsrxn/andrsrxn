import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const TransportiisaContent = () => {
  const project = PROJECTS.TRANSPORTIISA_VISUAL_IDENTITY
  return (
    <ResponsiveSheetContent
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      title={project.SUMMARY}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
      <div>
        <Image
          src={project.IMAGES.BANNER_COMPARISON.URL}
          alt={project.IMAGES.BANNER_COMPARISON.ALT}
        />
        <Separator className='my-12' />

        <div>
          <div className='border p-12'>
            <Image
              includePlaceholder={false}
              className='h-68'
              src={project.IMAGES.LOGO_ALTERNATIVE.URL}
              alt={project.IMAGES.LOGO_ALTERNATIVE.ALT}
            />
          </div>
          <div className='flex'>
            <div className='border bg-white p-6'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO.URL}
                alt={project.IMAGES.LOGO.ALT}
              />
            </div>
            <div className='border p-6'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO_NEGATIVE.URL}
                alt={project.IMAGES.LOGO_NEGATIVE.ALT}
              />
            </div>
            <div className='border bg-white p-6'>
              <Image
                includePlaceholder={false}
                className='h-32'
                src={project.IMAGES.LOGO_POSITIVE.URL}
                alt={project.IMAGES.LOGO_POSITIVE.ALT}
              />
            </div>
          </div>
        </div>

        <div className='bg-[#006EB3] px-12 py-16'>
          <Image
            includePlaceholder={false}
            className='w-40'
            src={project.IMAGES.COLOR_1.URL}
            alt={project.IMAGES.COLOR_1.ALT}
          />
        </div>
        <div className='bg-accent px-12 py-16'>
          <Image
            includePlaceholder={false}
            className='w-1/2'
            src={project.IMAGES.TYPOGRAPHY_1.URL}
            alt={project.IMAGES.TYPOGRAPHY_1.ALT}
          />
        </div>
      </div>

      <video
        autoPlay
        muted
        controls={false}
        loop
        playsInline
        className='aspect-video bg-white object-contain'>
        <source src={project.IMAGES.LOGO_ANIMATION.URL} type='video/mp4' />
      </video>

      <Separator className='my-12' />

      <div className='grid gap-6 overflow-hidden'>
        <Image src={project.IMAGES.ADS.URL} alt={project.IMAGES.ADS.ALT} />
        <Image src={project.IMAGES.CARDS.URL} alt={project.IMAGES.CARDS.ALT} />
        <Image src={project.IMAGES.ON_FABRIC.URL} alt={project.IMAGES.ON_FABRIC.ALT} />
      </div>

      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>Andrés Raxón</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
