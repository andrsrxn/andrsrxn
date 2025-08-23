import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const PinalzaContent = () => {
  const project = PROJECTS.PINALZA_VISUAL_IDENTITY
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

        <div className='border bg-white p-16'>
          <Image
            includePlaceholder={false}
            className='h-32'
            src={project.IMAGES.LOGO_1.URL}
            alt={project.IMAGES.LOGO_1.ALT}
          />
        </div>
        <div className='border p-16'>
          <Image
            includePlaceholder={false}
            className='h-32'
            src={project.IMAGES.LOGO_ALTERNATIVE_1.URL}
            alt={project.IMAGES.LOGO_ALTERNATIVE_1.ALT}
          />
        </div>

        <div className='flex'>
          <div className='border p-10'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.LOGO_NEGATIVE_1.URL}
              alt={project.IMAGES.LOGO_NEGATIVE_1.ALT}
            />
          </div>
          <div className='border bg-white p-10'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.LOGO_POSITIVE_1.URL}
              alt={project.IMAGES.LOGO_POSITIVE_1.ALT}
            />
          </div>
        </div>
        <div className='flex'>
          <div className='border p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_ALTERNATIVE_1.URL}
              alt={project.IMAGES.SYMBOL_ALTERNATIVE_1.ALT}
            />
          </div>
          <div className='border bg-white p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_1.URL}
              alt={project.IMAGES.SYMBOL_1.ALT}
            />
          </div>

          <div className='border p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_NEGATIVE_1.URL}
              alt={project.IMAGES.SYMBOL_NEGATIVE_1.ALT}
            />
          </div>
          <div className='border bg-white p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_POSITIVE_1.URL}
              alt={project.IMAGES.SYMBOL_POSITIVE_1.ALT}
            />
          </div>
        </div>

        <div className='my-12'>
          <Image
            includePlaceholder={false}
            className='h-32'
            src={project.IMAGES.PATTERN_1.URL}
            alt={project.IMAGES.PATTERN_1.ALT}
          />
        </div>

        <Separator className='mb-20' />

        <div className='border bg-white p-16'>
          <Image
            includePlaceholder={false}
            className='h-32'
            src={project.IMAGES.LOGO_2.URL}
            alt={project.IMAGES.LOGO_2.ALT}
          />
        </div>
        <div className='border p-16'>
          <Image
            includePlaceholder={false}
            className='h-32'
            src={project.IMAGES.LOGO_ALTERNATIVE_2.URL}
            alt={project.IMAGES.LOGO_ALTERNATIVE_2.ALT}
          />
        </div>

        <div className='flex'>
          <div className='border p-10'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.LOGO_NEGATIVE_2.URL}
              alt={project.IMAGES.LOGO_NEGATIVE_2.ALT}
            />
          </div>
          <div className='border bg-white p-10'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.LOGO_POSITIVE_2.URL}
              alt={project.IMAGES.LOGO_POSITIVE_2.ALT}
            />
          </div>
        </div>
        <div className='flex'>
          <div className='border p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_ALTERNATIVE_2.URL}
              alt={project.IMAGES.SYMBOL_ALTERNATIVE_2.ALT}
            />
          </div>
          <div className='border bg-white p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_2.URL}
              alt={project.IMAGES.SYMBOL_2.ALT}
            />
          </div>

          <div className='border p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_NEGATIVE_2.URL}
              alt={project.IMAGES.SYMBOL_NEGATIVE_2.ALT}
            />
          </div>
          <div className='border bg-white p-6'>
            <Image
              includePlaceholder={false}
              className='h-32'
              src={project.IMAGES.SYMBOL_POSITIVE_2.URL}
              alt={project.IMAGES.SYMBOL_POSITIVE_2.ALT}
            />
          </div>
        </div>

        <div className='my-12'>
          <Image
            includePlaceholder={false}
            className='h-32'
            src={project.IMAGES.PATTERN_2.URL}
            alt={project.IMAGES.PATTERN_2.ALT}
          />
        </div>

        <div className='grid grid-cols-2'>
          <div className='bg-[#f5b700] p-10'>
            <Image
              includePlaceholder={false}
              className='w-40'
              src={project.IMAGES.COLOR_1.URL}
              alt={project.IMAGES.COLOR_1.ALT}
            />
          </div>
          <div className='bg-accent flex items-center justify-center p-8'>
            <Image
              includePlaceholder={false}
              src={project.IMAGES.TYPOGRAPHY_1.URL}
              alt={project.IMAGES.TYPOGRAPHY_1.ALT}
            />
          </div>
        </div>
      </div>

      <Separator className='my-16' />
      <p className='tablet:text-lg text-center'>
        Un proyecto de <strong>Andrés Raxón</strong>
      </p>
    </ResponsiveSheetContent>
  )
}
