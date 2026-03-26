'use client'

import { ReactLenis } from 'lenis/react'

export const LenisScroll = () => {
  return (
    <ReactLenis options={{ allowNestedScroll: true, autoToggle: true, overscroll: true }} root />
  )
}
