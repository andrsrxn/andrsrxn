import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'
import { ParticlesBackground } from '@/components/backgrounds/particles'

export default function NotFoundPage() {
  // añadir estrellas
  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='text-muted-foreground text-lg leading-none'>404</span>
      <h1 className='font-heading text-center text-6xl'>Página no encontrada</h1>
      <Link
        className='mt-2 flex items-center justify-center gap-1.5 text-lg underline decoration-1 underline-offset-2'
        href='/'>
        Regresar al inicio <IconArrowRight className='size-4' />
      </Link>
      <ParticlesBackground className='absolute inset-0 z-0 h-dvh w-full' />
    </div>
  )
}
