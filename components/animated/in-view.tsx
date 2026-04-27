'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { type ElementType, type ReactNode, useEffect, useRef } from 'react'

export interface InViewProps {
  children: ReactNode
  from?: gsap.TweenVars
  to?: gsap.TweenVars

  viewOptions?: {
    once?: boolean
    start?: string
    end?: string
    scrub?: boolean
    toggleActions?: string
  }
  as?: ElementType
}

export function InView({
  children,
  from = { opacity: 0, y: 20 },
  to = { opacity: 1, y: 0, duration: 0.5, ease: 'power1.inOut' },
  viewOptions = {
    once: true,
    start: 'top 90%',
  },
  as: Component = 'div',
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    gsap.set(element, from)

    const animation = gsap.to(element, {
      ...to,
      scrollTrigger: {
        trigger: element,
        ...viewOptions,
        toggleActions: viewOptions.once ? 'play none none none' : 'play reverse play reverse',
      },
    })

    return () => {
      animation.kill()
    }
  }, [from, to, viewOptions])

  return (
    <Component className='opacity-0' ref={ref}>
      {children}
    </Component>
  )
}
