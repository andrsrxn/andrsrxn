import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { preconnect, preload } from 'react-dom'
import { LenisScroll } from '@/components/animated/lenis'
import { ParticlesBackground } from '@/components/backgrounds/particles'
import { JsonLd } from '@/components/shared/json-ld'
import { Image } from '@/components/ui/image'
import { Toaster } from '@/components/ui/sonner'
import { baseMetadata, baseViewport } from '@/lib/constants/metadata'
import { IMAGES } from '@/lib/constants/paths'
import { PERSON_SCHEMA, SERVICES_SCHEMA, WEBSITE_SCHEMA } from '@/lib/constants/schema-json'
import { fontBody, fontHeading } from '@/lib/fonts'

export const metadata = baseMetadata
export const viewport = baseViewport

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  preconnect('https://res.cloudinary.com')

  preload(IMAGES.BRAND.SYMBOL.SVG.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })
  preload(IMAGES.BRAND.GRADIENT.WEBP.URL, {
    as: 'image',
    fetchPriority: 'high',
    referrerPolicy: 'strict-origin-when-cross-origin',
  })

  return (
    <html lang='es' className='dark' data-scroll-behavior='smooth'>
      <body className={`${fontHeading.variable} ${fontBody.variable} isolate antialiased`}>
        <header className='fixed top-0 left-0 z-1000 flex h-12 w-full items-center justify-center mix-blend-difference'>
          <Link href='/' aria-label='Ir al inicio'>
            <Image
              includePlaceholder={false}
              fetchPriority='high'
              className='relative z-1000 aspect-square w-9'
              src={IMAGES.BRAND.SYMBOL.SVG.URL}
              alt={IMAGES.BRAND.SYMBOL.SVG.ALT}
            />
          </Link>
        </header>
        {children}
        <footer className='relative z-0 mt-20 max-h-[700px] overflow-x-clip py-6'>
          <ParticlesBackground className='laptop:w-full absolute bottom-0 left-0 z-0 h-[1000px] w-[220%] origin-center' />

          <div className='container mx-auto flex h-full w-11/12 flex-col justify-end gap-4'>
            <div className='flex items-center justify-center'>
              <Image
                includePlaceholder={false}
                fetchPriority='high'
                className='relative z-1000 aspect-square w-9'
                src={IMAGES.BRAND.SYMBOL.SVG.URL}
                alt={IMAGES.BRAND.SYMBOL.SVG.ALT}
              />
            </div>
            <ul className='flex w-full items-center justify-center gap-4'>
              <li>
                <Link
                  className='text-sm underline decoration-1 underline-offset-2'
                  href='/politica-de-privacidad'>
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  className='text-sm underline decoration-1 underline-offset-2'
                  href='/terminos-y-condiciones'>
                  Términos de uso
                </Link>
              </li>
            </ul>
            <div className='flex items-center justify-center gap-2'>
              <p className='text-muted-foreground shrink-0 text-center text-sm'>
                &copy; 2025. Andrés Raxón - Director Creativo
              </p>

              <Image
                src={IMAGES.FLAGS.GT.URL}
                alt={IMAGES.FLAGS.GT.ALT}
                title='Guatemala'
                className='inline h-3 w-auto'
                includePlaceholder={false}
              />
            </div>
          </div>
        </footer>

        <LenisScroll />
        <Toaster />
        <JsonLd schema={WEBSITE_SCHEMA} />
        <JsonLd schema={PERSON_SCHEMA} />
        <JsonLd schema={SERVICES_SCHEMA} />

        <Analytics />
      </body>
    </html>
  )
}
