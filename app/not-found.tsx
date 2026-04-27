'use client'

// biome-ignore lint/suspicious/noShadowRestrictedNames: next component
import Error from 'next/error'

export default function NotFound() {
  return (
    <html lang='es'>
      <body>
        <Error statusCode={404} />
      </body>
    </html>
  )
}
