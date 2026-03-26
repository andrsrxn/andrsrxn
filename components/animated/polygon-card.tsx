'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { type ReactNode, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollPolygonContainerProps {
  children: ReactNode
  className?: string
}

export const ScrollPolygonContainer = ({ children, className }: ScrollPolygonContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const image = container?.querySelector('.animated-polygon')

    if (!image) {
      return
    }

    gsap.set(image, {
      clipPath: 'polygon(25% 25%, 75% 40%, 100% 100%, 0% 100%)',
      opacity: 0,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top bottom',
        end: 'center 60%',
        scrub: true,
      },
    })

    tl.to(image, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
      ease: 'power2.inOut',
    })

    return () => {
      console.log('kill')
      if (tl) {
        tl.kill()
      }
    }
  }, [])

  return (
    <div ref={containerRef} className={cn('animated-polygon-container', className)}>
      {children}
    </div>
  )
}
