import { IconAfterEffects } from '@/components/icons/brands/after-effects'
import { IconAhrefs } from '@/components/icons/brands/ahrefs'
import { IconAstro } from '@/components/icons/brands/astro'
import { IconBiome } from '@/components/icons/brands/biome'
import { IconBun } from '@/components/icons/brands/bun'
import { IconCloudflare } from '@/components/icons/brands/cloudflare'
import { IconDrizzle } from '@/components/icons/brands/drizzle-orm'
import { IconFigma } from '@/components/icons/brands/figma'
import { IconGithub } from '@/components/icons/brands/github'
import { IconGSAP } from '@/components/icons/brands/gsap'
import { IconIllustrator } from '@/components/icons/brands/illustrator'
import { IconMotion } from '@/components/icons/brands/motion'
import { IconNextJS } from '@/components/icons/brands/nextjs'
import { IconNotion } from '@/components/icons/brands/notion'
import { IconPhotoshop } from '@/components/icons/brands/photoshop'
import { IconPostgreSQL } from '@/components/icons/brands/postgresql'
import { IconPremierePro } from '@/components/icons/brands/premiere'
import { IconRadixUI } from '@/components/icons/brands/radix-ui'
import { IconResend } from '@/components/icons/brands/resend'
import { IconSentry } from '@/components/icons/brands/sentry'
import { IconTailwind } from '@/components/icons/brands/tailwind'
import { IconTurborepo } from '@/components/icons/brands/turborepo'
import { IconVercel } from '@/components/icons/brands/vercel'
import { IconVitest } from '@/components/icons/brands/vitest'

export const DESIGN_TOOLS = {
  FIGMA: {
    LABEL: 'Figma',
    DESCRIPTION: 'Wireframes, UI/UX, Manuales de marca, etc.',
    URL: 'https://figma.com',
    ICON: IconFigma,
    STROKE: 0,
  },
  CLOUDFLARE: {
    LABEL: 'Cloudflare',
    DESCRIPTION: 'Seguridad, almacenamiento y optimización',
    URL: 'https://cloudflare.com',
    ICON: IconCloudflare,
    STROKE: 0,
  },
  PREMIERE_PRO: {
    LABEL: 'Premiere Pro',
    DESCRIPTION: 'Edición de video',
    URL: 'https://www.adobe.com/la/products/premiere.html',
    ICON: IconPremierePro,
    STROKE: 0,
  },
  PHOTOSHOP: {
    LABEL: 'Photoshop',
    DESCRIPTION: 'Edición de fotografía y mockups',
    URL: 'https://www.adobe.com/la/products/photoshop.html',
    ICON: IconPhotoshop,
    STROKE: 0,
  },
  ILLUSTRATOR: {
    LABEL: 'Illustrator',
    DESCRIPTION: 'Creación de vectores e ilustraciones',
    URL: 'https://www.adobe.com/la/products/illustrator.html',
    ICON: IconIllustrator,
    STROKE: 0,
  },
  AFTER_EFFECTS: {
    LABEL: 'After Effects',
    DESCRIPTION: 'Animaciones y Motion Graphics',
    URL: 'https://www.adobe.com/la/products/aftereffects.html',
    ICON: IconAfterEffects,
    STROKE: 0,
  },

  NEXT_JS: {
    LABEL: 'Next.js',
    DESCRIPTION: 'Desarrollo de sitios web dinámicos',
    URL: 'https://vercel.com/frameworks/nextjs',
    ICON: IconNextJS,
    STROKE: 0,
  },

  TAILWIND_CSS: {
    LABEL: 'TailwindCSS',
    DESCRIPTION: 'Framework de estilos CSS',
    URL: 'https://tailwind.com',
    ICON: IconTailwind,
    STROKE: 0,
  },
  ASTRO: {
    LABEL: 'Astro',
    DESCRIPTION: 'Framework para sitios web estáticos',
    URL: 'https://astro.build',
    ICON: IconAstro,
    STROKE: 0,
  },
  NOTION: {
    LABEL: 'Notion',
    DESCRIPTION: 'Definición del proyecto y recursos',
    URL: 'https://notion.com',
    ICON: IconNotion,
    STROKE: 0,
  },

  VERCEL: {
    LABEL: 'Vercel',
    DESCRIPTION: 'Hosting de proyectos Next.js',
    URL: 'https://vercel.com',
    ICON: IconVercel,
    STROKE: 3,
  },

  RESEND: {
    LABEL: 'Resend',
    DESCRIPTION: 'Envío de correos transaccionales',
    URL: 'https://resend.com',
    ICON: IconResend,
    STROKE: 3,
  },

  GSAP: {
    LABEL: 'GSAP',
    DESCRIPTION: 'Animaciones y efectos en la web',
    URL: 'https://gsap.com',
    ICON: IconGSAP,
    STROKE: 0,
  },
  AHREFS: {
    LABEL: 'Ahrefs',
    DESCRIPTION: 'Estadísticas de los sitos web',
    URL: 'https://ahrefs.com/web-analytics',
    ICON: IconAhrefs,
    STROKE: 0,
  },
  RADIX_UI: {
    LABEL: 'Radix UI',
    DESCRIPTION: 'Componentes para la web',
    URL: 'https://radix-ui.com',
    ICON: IconRadixUI,
    STROKE: 1,
  },
  MOTION: {
    LABEL: 'Motion',
    DESCRIPTION: 'Animaciones y efectos en la web',
    URL: 'https://motion.dev',
    ICON: IconMotion,
    STROKE: 3,
  },

  BIOME: {
    LABEL: 'Biome',
    DESCRIPTION: 'Linter y formateador de código',
    URL: 'https://biome.dev',
    ICON: IconBiome,
    STROKE: 0,
  },

  VITEST: {
    LABEL: 'Vitest',
    DESCRIPTION: 'Testing framework de código',
    URL: 'https://vitest.dev',
    ICON: IconVitest,
    STROKE: 0,
  },
  GITHUB: {
    LABEL: 'GitHub',
    DESCRIPTION: 'Repositorio de código en la nube',
    URL: 'https://github.com',
    ICON: IconGithub,
    STROKE: 0,
  },
  SENTRY: {
    LABEL: 'Sentry',
    DESCRIPTION: 'Monitorización de errores en tiempo real',
    URL: 'https://sentry.io',
    ICON: IconSentry,
    STROKE: 0,
  },
  DRIZZLE: {
    LABEL: 'Drizzle',
    DESCRIPTION: 'ORM para bases de datos',
    URL: 'https://orm.drizzle.team/',
    ICON: IconDrizzle,
    STROKE: 0,
  },
  BUN: {
    LABEL: 'Bun',
    DESCRIPTION: 'Tiempo de ejecución de JavaScript',
    URL: 'https://bun.sh',
    ICON: IconBun,
    STROKE: 0,
  },
  TURBOREPO: {
    LABEL: 'TurboRepo',
    DESCRIPTION: 'Unificación de código para grandes proyectos',
    URL: 'https://turborepo.dev',
    ICON: IconTurborepo,
    STROKE: 0,
  },

  POSTGRES: {
    LABEL: 'Postgres',
    DESCRIPTION: 'Base de datos relacional moderna',
    URL: 'https://www.postgresql.org/',
    ICON: IconPostgreSQL,
    STROKE: 0,
  },
} as const
