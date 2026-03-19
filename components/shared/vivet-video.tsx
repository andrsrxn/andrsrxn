'use client'

import { useEffect, useRef } from 'react'
import { PROJECTS } from '@/lib/constants/projects'

export const VIVETVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.playbackRate = 0.75
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      controls={false}
      loop
      playsInline
      className='bg-accent animated-polygon desktop:w-11/12 mx-auto aspect-video border object-cover contrast-90 will-change-[clip-path]'>
      <source src={PROJECTS.VIVET_REBRANDING.IMAGES.BANNERS.URL} type='video/mp4' />
    </video>
  )
}
