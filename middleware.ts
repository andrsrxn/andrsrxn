import { type NextRequest, NextResponse } from 'next/server'
import { isProductionEnv } from '@/lib/config/env'

export default function middleware(request: NextRequest) {
  const styleSrc = "'self' 'unsafe-inline'"
  let scriptSrc = "'self' 'unsafe-inline' https://analytics.ahrefs.com"
  const imgSrc = "'self' blob: data: https://res.cloudinary.com"
  let workerSrc = "'self'"
  const connectSrc = "'self' https://analytics.ahrefs.com"

  if (!isProductionEnv()) {
    scriptSrc += " 'unsafe-eval'"
    workerSrc += ' blob:'
  }

  const cspHeaderParts: string[] = [
    "default-src 'self'",
    `script-src ${scriptSrc}`,
    `style-src ${styleSrc}`,
    "object-src 'none'",
    `img-src ${imgSrc}`,
    'media-src https://res.cloudinary.com',
    "font-src 'self'",
    `worker-src ${workerSrc}`,
    "base-uri 'self'",
    "form-action 'self'",
    "frame-ancestors 'none'",
    "script-src-attr 'none'",
    `connect-src ${connectSrc}`,
  ]

  if (isProductionEnv()) {
    cspHeaderParts.push('upgrade-insecure-requests') // Solo en prod
  }

  const cspHeader = `${cspHeaderParts.join('; ')};` // Unir con ; y asegurar el final

  const contentSecurityPolicyHeaderValue = cspHeader.replace(/\s{2,}/g, ' ').trim()

  const response = NextResponse.next({
    request: {
      headers: new Headers(request.headers),
    },
  })

  // Aplicar todas las cabeceras a la respuesta
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  if (isProductionEnv()) {
    response.headers.set('Origin-Agent-Cluster', '?1')
    response.headers.set(
      'Strict-Transport-Security',
      'max-age=31536000; includeSubDomains; preload'
    )
  }

  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('X-Download-Options', 'noopen')
  response.headers.set('X-Permitted-Cross-Domain-Policies', 'none')

  return response
}

export const config = {
  matcher: ['/', '/((?!api|_next|_vercel|url|.*\\..*).*)'],
}
