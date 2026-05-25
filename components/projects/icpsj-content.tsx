import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { SafariWindow } from '@/components/backgrounds/safari-mockup'
import { IconGithub } from '@/components/icons/brands/github'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const IcpsjContent = () => {
  const project = PROJECTS.ICPSJ_BRANDING
  const tServices = useTranslations('services')
  const t = useTranslations('projects.icpsj')

  const services = project.SERVICES.map(service => tServices(service))

  const paragraphs = [t('description.paragraph1'), t('description.paragraph2')]
  return (
    <ResponsiveSheetContent
      slug={t('slug')}
      projectType={project.TYPE}
      client={`${t('client')} - ${t('industry')}`}
      services={services}
      title={t('summary')}
      description={paragraphs}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={t('images.bannerSmall')}>
      <div className='-mt-2 mb-12 block'>
        <div className='-mt-2 flex flex-wrap items-center gap-6'>
          <Link
            prefetch={false}
            className='text-foreground inline-flex shrink-0 items-center gap-2 text-base leading-none font-medium underline decoration-1 underline-offset-2'
            target='_blank'
            rel='noopener noreferrer'
            href='https://icpsj.vercel.app'>
            https://icpsj.vercel.app
          </Link>
          <Link
            prefetch={false}
            className='text-foreground inline-flex shrink-0 items-center gap-2 text-base leading-none font-medium underline decoration-1 underline-offset-2'
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/andrsrxn/icpsj'>
            <IconGithub className='size-4' /> {t('content.seeRepository')}
          </Link>
        </div>
      </div>
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
              className='h-32 w-auto'
              src={project.IMAGES.COLOR_1.URL}
              alt={t('images.color1')}
            />
          </div>
          <Image
            includePlaceholder={false}
            className='object-cover'
            src={project.IMAGES.PALETTE_1.URL}
            alt={t('images.palette1')}
          />
        </div>
        <div className='flex w-full justify-between'>
          <div className='w-full'>
            <div className='bg-[#c70017] p-8 pb-20'>
              <Image
                includePlaceholder={false}
                className='h-32 w-auto'
                src={project.IMAGES.COLOR_2.URL}
                alt={t('images.color2')}
              />
            </div>
            <Image
              includePlaceholder={false}
              className='object-cover'
              src={project.IMAGES.PALETTE_2.URL}
              alt={t('images.palette2')}
            />
          </div>
          <div className='w-full'>
            <div className='bg-[#fbd823] p-8 pb-20'>
              <Image
                includePlaceholder={false}
                className='h-32 w-auto'
                src={project.IMAGES.COLOR_3.URL}
                alt={t('images.color3')}
              />
            </div>
            <Image
              includePlaceholder={false}
              className='object-cover'
              src={project.IMAGES.PALETTE_3.URL}
              alt={t('images.palette3')}
            />
          </div>
        </div>
      </div>

      <div className='tablet:flex-row tablet:h-[600px] flex h-auto flex-col pt-12'>
        <div className='tablet:p-20 flex items-center justify-center border p-12'>
          <Image
            includePlaceholder={false}
            className='tablet:h-auto h-40'
            src={project.IMAGES.SYMBOL.URL}
            alt={t('images.symbol')}
          />
        </div>
        <div className='h-full'>
          <div className='bg-accent tablet:p-20 flex h-1/2 items-center justify-center border p-12'>
            <Image
              includePlaceholder={false}
              className='tablet:h-auto h-40'
              src={project.IMAGES.SYMBOL_NEGATIVE.URL}
              alt={t('images.symbolNegative')}
            />
          </div>
          <div className='tablet:p-20 flex h-1/2 items-center justify-center border bg-white p-12'>
            <Image
              includePlaceholder={false}
              className='tablet:h-auto h-40'
              src={project.IMAGES.SYMBOL_POSITIVE.URL}
              alt={t('images.symbolPositive')}
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col pb-12'>
        <div className=''>
          <div className='tablet:p-18 border px-8 py-12'>
            <Image
              includePlaceholder={false}
              className='h-auto'
              src={project.IMAGES.LOGO_INVERTED.URL}
              alt={t('images.logoInverted')}
            />
          </div>
          <div className='tablet:p-18 border bg-white px-8 py-12'>
            <Image
              includePlaceholder={false}
              src={project.IMAGES.LOGO.URL}
              alt={t('images.logo')}
            />
          </div>
        </div>
        <div className='tablet:flex mt-0.5 h-full'>
          <div className='bg-accent border px-8 py-12'>
            <Image
              includePlaceholder={false}
              className='h-auto'
              src={project.IMAGES.LOGO_NEGATIVE.URL}
              alt={t('images.logoNegative')}
            />
          </div>
          <div className='border bg-white px-8 py-12'>
            <Image
              includePlaceholder={false}
              className='h-auto'
              src={project.IMAGES.LOGO_POSITIVE.URL}
              alt={t('images.logoPositive')}
            />
          </div>
        </div>
      </div>

      <div className='grid gap-22 overflow-x-hidden pt-12 pb-4'>
        <Image
          includePlaceholder={false}
          className='w-4/5 max-w-sm'
          src={project.IMAGES.TYPOGRAPHY_1.URL}
          alt={t('images.typography1')}
        />
        <Image
          includePlaceholder={false}
          className='w-4/5 max-w-sm'
          src={project.IMAGES.TYPOGRAPHY_2.URL}
          alt={t('images.typography2')}
        />
      </div>

      <Separator className='my-16' />

      <div className='grid gap-6'>
        <Image
          includePlaceholder={false}
          src={project.IMAGES.INSTAGRAM_POSTS.URL}
          alt={t('images.instagramPosts')}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.BIBLE_STUDY.URL}
          alt={t('images.bibleStudy')}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.SIGN_LIGHT.URL}
          alt={t('images.signLight')}
        />
        <Image
          className='aspect-video object-cover'
          src={project.IMAGES.STICKERS.URL}
          alt={t('images.stickers')}
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
      <Signature />
    </ResponsiveSheetContent>
  )
}
