import { IconArrowRight } from '@tabler/icons-react'
import Link from 'next/link'

export default function NotFoundPage() {
  // añadir estrellas
  return (
    <div className='isolate flex h-dvh flex-col items-center justify-center gap-3'>
      <span className='text-muted-foreground tablet:text-xl desktop:text-2xl text-lg leading-none'>
        404
      </span>
      <h1 className='font-heading desktop:text-7xl text-center text-6xl'>Página no encontrada</h1>
      <Link
        className='mt-2 flex items-center justify-center gap-1.5 text-lg underline decoration-1 underline-offset-2'
        href='/'>
        Regresar al inicio <IconArrowRight className='size-4' />
      </Link>
    </div>
  )
}
