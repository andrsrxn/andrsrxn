import type { SERVICES } from '@/lib/constants/services'

export type Service = (typeof SERVICES)[keyof typeof SERVICES]['SLUG']
