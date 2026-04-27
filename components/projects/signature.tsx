'use client'

import { useTranslations } from 'next-intl'
import { COMPANY } from '@/lib/constants/company'

export const Signature = () => {
  const tProjects = useTranslations('projects')

  return (
    <p className='tablet:text-lg text-center'>
      {tProjects('signature')} <strong>{COMPANY.COMMERCIAL_NAME}</strong>
    </p>
  )
}
