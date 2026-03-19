'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { ResponsiveSheetContent } from '@/components/shared/responsive-sheet'
import { Image } from '@/components/ui/image'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { PROJECTS } from '@/lib/constants/projects'

export const TheChoiceContent = () => {
  const project = PROJECTS.THE_CHOICE_UIUX_DESIGN_WEBSITE
  const laptopRef = useRef<HTMLImageElement>(null)
  const wireframeRef = useRef<HTMLDivElement>(null)

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
      projectType={project.TYPE}
      client={`${project.CLIENT} - ${project.INDUSTRY}`}
      services={project.SERVICES}
      overflow
      title={project.SUMMARY}
      description={project.DESCRIPTION}
      bannerUrl={project.IMAGES.BANNER_SMALL.URL}
      bannerAlt={project.IMAGES.BANNER_SMALL.ALT}>
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
        <div className='flex flex-col items-center justify-center'>
          <Image
            ref={laptopRef}
            className='tablet:top-[15%] tablet:scale-[115%] tablet:mask-r-from-88% tablet:mask-r-to-93% tablet:mask-l-from-88% tablet:mask-l-to-93% sticky top-[30%] z-50 origin-center object-contain'
            includePlaceholder={false}
            src={project.IMAGES.MACKBOOK_MOCKUP.URL}
            alt={project.IMAGES.MACKBOOK_MOCKUP.ALT}
          />
          <div ref={wireframeRef} className='tablet:-mt-[70%] -mt-[65%] pb-[20%]'>
            <Image
              className='tablet:w-[87%] mx-auto w-[75%] rounded-lg object-contain'
              includePlaceholder={false}
              src={project.IMAGES.WEB_WITH_WIREFRAME.URL}
              alt={project.IMAGES.WEB_WITH_WIREFRAME.ALT}
            />
          </div>
        </div>

        <div className='relative mt-20 overflow-x-clip'>
          <span className='text-foreground mb-4 block text-lg font-semibold'>User Persona</span>
          <div>
            <Image
              className='mb-20'
              includePlaceholder={false}
              src={project.IMAGES.USER_PERSONA.URL}
              alt={project.IMAGES.USER_PERSONA.ALT}
            />
          </div>
          <span className='text-foreground mb-4 block text-lg font-semibold'>
            Página principal y de reservación
          </span>
          <div className='bg-accent flex w-full snap-x snap-mandatory gap-2 overflow-auto border p-3'>
            <div className='flex h-auto w-[85%] shrink-0 snap-center'>
              <Image
                className='h-fit object-contain object-top'
                src={project.IMAGES.MAIN_PAGE.URL}
                alt={project.IMAGES.MAIN_PAGE.ALT}
              />
            </div>
            <div className='flex h-auto w-[85%] shrink-0 snap-center'>
              <Image
                className='h-fit object-contain object-top'
                src={project.IMAGES.RESERVATIONS_PAGE.URL}
                alt={project.IMAGES.RESERVATIONS_PAGE.ALT}
              />
            </div>
            <div className='flex h-auto w-[85%] shrink-0 snap-center'>
              <Image
                className='h-fit object-contain object-top'
                src={project.IMAGES.PAYMENT_RESERVATIONS_PAGE.URL}
                alt={project.IMAGES.PAYMENT_RESERVATIONS_PAGE.ALT}
              />
            </div>
            <div className='flex h-auto w-[85%] shrink-0 snap-center'>
              <Image
                className='h-fit object-contain object-top'
                src={project.IMAGES.SUCCESS_PAYMENT_RESERVATIONS_PAGE.URL}
                alt={project.IMAGES.SUCCESS_PAYMENT_RESERVATIONS_PAGE.ALT}
              />
            </div>
          </div>
        </div>
        <span className='text-foreground mt-10 block text-lg font-semibold'>
          Flujo de usuario para hacer una reservación
        </span>
        <Image
          className='object-contain'
          includePlaceholder={false}
          src={project.IMAGES.RESERVATIONS_FLOW.URL}
          alt={project.IMAGES.RESERVATIONS_FLOW.ALT}
        />
        <Separator className='mt-6 mb-10' />

        <span className='text-foreground block text-2xl font-semibold'>Sistema de Diseño</span>
        <span className='text-foreground block text-lg font-semibold'>Tipografías</span>
        <Image
          className='border p-2 pt-6 pb-1'
          src={project.IMAGES.TYPOGRAPHIES.URL}
          alt={project.IMAGES.TYPOGRAPHIES.ALT}
        />
        <span className='text-foreground block text-lg font-semibold'>Escala Tipográfica</span>
        <Image
          className='border mask-r-from-60% mask-r-to-100% p-2 pb-6'
          src={project.IMAGES.TYPOGRAPHY_SCALES.URL}
          alt={project.IMAGES.TYPOGRAPHY_SCALES.ALT}
        />

        <span className='text-foreground block text-lg font-semibold'>Paleta de Colores</span>
        <Image src={project.IMAGES.COLOR_PALETTE.URL} alt={project.IMAGES.COLOR_PALETTE.ALT} />
        <span className='text-foreground block text-lg font-semibold'>Tokens de Colores</span>
        <Image
          includePlaceholder={false}
          className='mb-4'
          src={project.IMAGES.COLOR_PALETTE_TOKENS.URL}
          alt={project.IMAGES.COLOR_PALETTE_TOKENS.ALT}
        />
        <span className='text-foreground block text-lg font-semibold'>
          Demostración del componente Botón
        </span>
        <div className='tablet:grid-cols-2 laptop:grid-cols-1 grid gap-12'>
          <Image
            includePlaceholder={false}
            src={project.IMAGES.BUTTON_VARIANTS.URL}
            alt={project.IMAGES.BUTTON_VARIANTS.ALT}
          />
          <div className='flex items-center justify-center'>
            <Image
              includePlaceholder={false}
              src={project.IMAGES.BUTTON_COMPOSITION.URL}
              alt={project.IMAGES.BUTTON_COMPOSITION.ALT}
            />
          </div>
        </div>
        <div className='mt-12 overflow-hidden'>
          <Image
            className='scale-110'
            src={project.IMAGES.MACKBOOK_WEB_MOCKUP.URL}
            alt={project.IMAGES.MACKBOOK_WEB_MOCKUP.ALT}
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
