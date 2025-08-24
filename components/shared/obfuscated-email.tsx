/** biome-ignore-all lint/security/noDangerouslySetInnerHtmlWithChildren: obfuscated */
/** biome-ignore-all lint/style/useNamingConvention: obfuscated */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: obfuscated */

'use client'

import { useEffect, useState } from 'react'
import { COMPANY } from '@/lib/constants/company'
import { obfuscateEmail } from '@/lib/utils'

export const ObfuscatedEmailLink = () => {
  const [href, setHref] = useState('#')

  useEffect(() => {
    setHref(`mailto:${COMPANY.EMAIL_ADDRESSES.INFO}`)
  }, [])

  return (
    <a
      className='text-foreground inline-block font-bold underline decoration-1 underline-offset-2'
      href={href}
      dangerouslySetInnerHTML={{
        __html: obfuscateEmail(COMPANY.EMAIL_ADDRESSES.INFO),
      }}
    />
  )
}
