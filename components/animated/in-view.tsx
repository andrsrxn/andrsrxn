'use client'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { type ElementType, type ReactNode, useEffect, useRef } from 'react'

export interface InViewProps {
  children: ReactNode
  from?: gsap.TweenVars // Estado inicial de la animación
  to?: gsap.TweenVars // Estado final de la animación
  // Opciones de ScrollTrigger.
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
    start: 'top 90%', // Inicia cuando el 80% del elemento está en la vista
  },
  as: Component = 'div',
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null)

  // Registra el plugin de ScrollTrigger una vez
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
  }, [])

  useEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    // Establecer el estado inicial (from)
    gsap.set(element, from)

    // Crear la animación con ScrollTrigger
    const animation = gsap.to(element, {
      ...to,
      scrollTrigger: {
        trigger: element,
        ...viewOptions,
        toggleActions: viewOptions.once ? 'play none none none' : 'play reverse play reverse',
      },
    })

    // Función de limpieza para eliminar el ScrollTrigger
    return () => {
      animation.kill()
    }
  }, [from, to, viewOptions])

  return <Component ref={ref}>{children}</Component>
}
