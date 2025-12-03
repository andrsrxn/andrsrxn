/** biome-ignore-all lint/a11y/noRedundantRoles: read by voiceover */
/** biome-ignore-all lint/a11y/useSemanticElements: read by voiceover */

'use client'

import { useEffect, useRef, useState } from 'react'
import { SERVICES } from '@/lib/constants/services'
import { useMediaQuery } from '@/lib/hooks/use-media-query'
import { cn } from '@/lib/utils'

const serviceCards = Object.values(SERVICES)

export function ServicesCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isTablet = useMediaQuery('(min-width: 768px)')
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  // Function to scroll to the selected card
  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardElement = scrollContainerRef.current.children[index] as HTMLElement
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center',
        })
        setActiveCardIndex(index)
      }
    }
  }

  // Set up an IntersectionObserver to detect the active card on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        // biome-ignore lint/complexity/noForEach: for not useful
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveCardIndex(index)
          }
        })
      },
      {
        root: scrollContainerRef.current,
        rootMargin: '0px',
        threshold: 0.5, // The active card is when 50% of it is visible
      }
    )

    if (scrollContainerRef.current) {
      Array.from(scrollContainerRef.current.children).forEach((child, index) => {
        child.setAttribute('data-index', index.toString())
        observer.observe(child)
      })
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [])
  const delays = ['[animation-delay:750ms]', '[animation-delay:850ms]', '[animation-delay:950ms]']

  // Corrección para la iteración de las tarjetas del carrusel:

  return (
    <div className='laptop:container laptop:w-11/12 laptop:mx-auto laptop:max-w-6xl desktop:max-w-7xl tablet:overflow-visible mt-10 overflow-x-clip'>
      <div
        ref={scrollContainerRef}
        className='no-scrollbar tablet:snap-none tablet:gap-3 tablet:overflow-clip tablet:justify-center laptop:gap-5 flex snap-x snap-mandatory gap-2 overflow-auto p-1'>
        {serviceCards.map((service, index) => {
          const isActive = index === activeCardIndex
          return (
            <div
              key={service.TITLE}
              className={cn(
                'tablet:w-[30%] desktop:pt-10 tablet:pt-6 animate-fade laptop:w-[33%] tablet:m-0 animation-duration-[500ms] relative flex w-[85%] shrink-0 snap-center justify-center border border-b-0 bg-linear-to-b from-neutral-900 to-transparent p-4 pt-8 pb-6 opacity-0 transition duration-500 ease-in-out',
                index === 0 && 'ml-[calc(5%+2px)]',
                index === serviceCards.length - 1 && 'mr-[calc(5%+2px)]',
                delays[index],
                !isActive && 'tablet:scale-100 scale-95'
              )}
              role='group'
              aria-label={`Servicio de ${service.TITLE}`}>
              <div className='laptop:items-center laptop:gap-6 flex flex-col gap-4'>
                <h2 className='font-heading tablet:text-3xl laptop:text-4xl desktop:text-5xl text-center text-4xl'>
                  {service.TITLE}
                </h2>
                <ul className='grid gap-1 pl-4' role='list'>
                  {Object.values(service.SUBSERVICES).map(subService => (
                    <li
                      className='desktop:text-lg list-disc text-base leading-normal marker:text-neutral-600'
                      key={subService.TITLE}>
                      {subService.TITLE}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        })}
      </div>

      {/* Navigation bullets for mobile views only */}
      {!isTablet && (
        <div className='mt-6 flex justify-center gap-3'>
          {serviceCards.map((service, index) => (
            <button
              key={service.TITLE}
              type='button'
              onClick={() => scrollToCard(index)}
              className={`size-2 rounded-full transition-colors duration-300 ${activeCardIndex === index ? 'bg-white' : 'bg-accent'}`}
              aria-label={`Ir al servicio de ${service.TITLE}`}
              aria-current={activeCardIndex === index ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  )
}
