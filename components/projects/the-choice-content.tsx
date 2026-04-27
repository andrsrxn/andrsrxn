'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useEffect, useRef } from 'react'
import { Signature } from '@/components/projects/signature'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { PROJECTS } from '@/lib/constants/projects'

export const TheChoiceContent = () => {
  const project = PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE
  const laptopRef = useRef<HTMLImageElement>(null)
  const wireframeRef = useRef<HTMLDivElement>(null)
  const tServices = useTranslations('services')
  const t = useTranslations('projects.thechoice')

  const services = project.SERVICES.map(service => tServices(service))

  const paragraphs = [
    t('description.paragraph1'),
    t('description.paragraph2'),
    t('description.paragraph3'),
    t('description.paragraph4'),
  ]

  useEffect(() => {
    const handleScroll = () => {
      const laptop = laptopRef.current
      const wireframe = wireframeRef.current

      if (laptop && wireframe) {
        const laptopRect = laptop.getBoundingClientRect()
        const wireframeRect = wireframe.getBoundingClientRect()

        const insetTop = Math.max(0, laptopRect.top - wireframeRect.top) + 2
        const insetBottom = Math.max(0, wireframeRect.bottom - laptopRect.bottom) + 20

        wireframe.style.clipPath = `inset(${insetTop}px 0px ${insetBottom}px 0px)`
      }
    }
    document.addEventListener('scroll', handleScroll, { capture: true, passive: true })
    window.addEventListener('resize', handleScroll, { passive: true })

    handleScroll()

    return () => {
      document.removeEventListener('scroll', handleScroll, { capture: true })
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

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
      <div className='relative isolate grid gap-8 overflow-x-visible'>
        <div className='-mt-2 mb-12 block'>
          <p>
            <Link
              prefetch={false}
              className='text-foreground inline-flex items-center gap-2 leading-none font-medium underline decoration-1 underline-offset-2'
              target='_blank'
              rel='noopener noreferrer'
              href='https://thechoicegt.vercel.app/'>
              https://thechoicegt.vercel.app/
            </Link>
          </p>
        </div>
        <div className='flex flex-col items-center justify-center overflow-x-clip'>
          <Image
            ref={laptopRef}
            className='tablet:top-[15%] tablet:scale-[115%] tablet:mask-r-from-88% tablet:mask-r-to-93% tablet:mask-l-from-88% tablet:mask-l-to-93% sticky top-[30%] z-50 origin-center object-contain'
            includePlaceholder={false}
            src={project.IMAGES.MACKBOOK_MOCKUP.URL}
            alt={t('images.mackbookMockup')}
          />
          <div ref={wireframeRef} className='tablet:-mt-[70%] -mt-[65%] pb-[20%]'>
            <Image
              className='tablet:w-[87%] mx-auto w-[75%] rounded-lg object-contain'
              includePlaceholder={false}
              src={project.IMAGES.WEB_WITH_WIREFRAME.URL}
              alt={t('images.webWithWireframe')}
            />
          </div>
        </div>

        <div className='relative mt-20 overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.userPersona')}
          </span>
          <div>
            <Image
              className='mb-20'
              includePlaceholder={false}
              src={project.IMAGES.USER_PERSONA.URL}
              alt={t('images.userPersona')}
            />
          </div>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            {t('content.homePage')}
          </span>
          <div className='bg-accent flex w-full snap-x snap-mandatory gap-3 overflow-x-scroll border p-3'>
            <div className='flex w-[85%] shrink-0 snap-center'>
              <Image
                className='object-contain object-top'
                src={project.IMAGES.MAIN_PAGE.URL}
                alt={t('images.mainPage')}
              />
            </div>
            <div className='flex w-[85%] shrink-0 snap-center'>
              <Image
                className='object-contain object-top'
                src={project.IMAGES.RESERVATIONS_PAGE.URL}
                alt={t('images.reservationsPage')}
              />
            </div>
            <div className='flex w-[85%] shrink-0 snap-center'>
              <Image
                className='object-contain object-top'
                src={project.IMAGES.PAYMENT_RESERVATIONS_PAGE.URL}
                alt={t('images.paymentReservationsPage')}
              />
            </div>
            <div className='flex w-[85%] shrink-0 snap-center'>
              <Image
                className='object-contain object-top'
                src={project.IMAGES.SUCCESS_PAYMENT_RESERVATIONS_PAGE.URL}
                alt={t('images.successPaymentReservationsPage')}
              />
            </div>
          </div>
        </div>
        <span className='text-foreground mt-10 block text-lg font-semibold'>
          {t('content.reservationFlow')}
        </span>
        <Image
          className='object-contain'
          includePlaceholder={false}
          src={project.IMAGES.RESERVATIONS_FLOW.URL}
          alt={t('images.reservationsFlow')}
        />
        <Separator className='mt-6 mb-10' />

        <span className='text-foreground block text-2xl font-semibold'>
          {t('content.designSystem')}
        </span>
        <span className='text-foreground block text-lg font-semibold'>
          {t('content.typographies')}
        </span>
        <Image
          className='border p-2 pt-6 pb-1'
          src={project.IMAGES.TYPOGRAPHIES.URL}
          alt={t('images.typographies')}
        />
        <span className='text-foreground block text-lg font-semibold'>
          {t('content.typographyScale')}
        </span>
        <Image
          className='border mask-r-from-60% mask-r-to-100% p-2 pb-6'
          src={project.IMAGES.TYPOGRAPHY_SCALES.URL}
          alt={t('images.typographyScales')}
        />

        <span className='text-foreground block text-lg font-semibold'>
          {t('content.colorPalette')}
        </span>
        <Image src={project.IMAGES.COLOR_PALETTE.URL} alt={t('images.colorPalette')} />
        <span className='text-foreground block text-lg font-semibold'>{t('content.tokens')}</span>
        <Image
          includePlaceholder={false}
          className='mb-4'
          src={project.IMAGES.COLOR_PALETTE_TOKENS.URL}
          alt={t('images.colorPaletteTokens')}
        />
        <span className='text-foreground block text-lg font-semibold'>
          {t('content.buttonDemo')}
        </span>
        <div className='tablet:grid-cols-2 laptop:grid-cols-1 laptop:gap-20 grid gap-12'>
          <Image
            includePlaceholder={false}
            src={project.IMAGES.BUTTON_VARIANTS.URL}
            alt={t('images.buttonVariants')}
          />
          <div className='flex items-center justify-center'>
            <Image
              includePlaceholder={false}
              src={project.IMAGES.BUTTON_COMPOSITION.URL}
              alt={t('images.buttonComposition')}
            />
          </div>
        </div>
        <div className='mt-12 grid w-full gap-8 overflow-hidden'>
          <Image src={project.IMAGES.PERFORMANCE.URL} alt={t('images.performance')} />
          <Image
            className='mt-10 scale-110'
            src={project.IMAGES.MACKBOOK_WEB_MOCKUP.URL}
            alt={t('images.mackbookWebMockup')}
          />
        </div>
      </div>
      <Separator className='my-16' />

      <Signature />
    </ResponsiveSheetContent>
  )
}
