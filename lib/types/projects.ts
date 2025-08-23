import type { PROJECTS } from '@/lib/constants/projects'

export type Proyect = (typeof PROJECTS)[keyof typeof PROJECTS]
