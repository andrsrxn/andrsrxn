import { IconAfterEffects } from '@/components/icons/brands/after-effects'
import { IconAhrefs } from '@/components/icons/brands/ahrefs'
import { IconAstro } from '@/components/icons/brands/astro'
import { IconCloudflare } from '@/components/icons/brands/cloudflare'
import { IconElevenlabs } from '@/components/icons/brands/elevenlabs'
import { IconExcalidraw } from '@/components/icons/brands/excalidraw'
import { IconFigma } from '@/components/icons/brands/figma'
import { IconFontshare } from '@/components/icons/brands/fontshare'
import { IconGoogleMeet } from '@/components/icons/brands/google-meet'
import { IconGSAP } from '@/components/icons/brands/gsap'
import { IconHugginFace } from '@/components/icons/brands/huggin-face'
import { IconIllustrator } from '@/components/icons/brands/illustrator'
import { IconMotion } from '@/components/icons/brands/motion'
import { IconNetlify } from '@/components/icons/brands/netlify'
import { IconNextJS } from '@/components/icons/brands/nextjs'
import { IconNotion } from '@/components/icons/brands/notion'
import { IconPhotoshop } from '@/components/icons/brands/photoshop'
import { IconPremierePro } from '@/components/icons/brands/premiere'
import { IconRadixUI } from '@/components/icons/brands/radix-ui'
import { IconResend } from '@/components/icons/brands/resend'
import { IconSERanking } from '@/components/icons/brands/se-ranking'
import { IconSquoosh } from '@/components/icons/brands/squoosh'
import { IconTailwind } from '@/components/icons/brands/tailwind'
import { IconVercel } from '@/components/icons/brands/vercel'

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
  NETLIFY: {
    LABEL: 'Netlify',
    DESCRIPTION: 'Hosting de sitios estáticos',
    URL: 'https://netlify.com',
    ICON: IconNetlify,
    STROKE: 0,
  },
  RESEND: {
    LABEL: 'Resend',
    DESCRIPTION: 'Envío de correos transaccionales',
    URL: 'https://resend.com',
    ICON: IconResend,
    STROKE: 3,
  },
  EXCALIDRAW: {
    LABEL: 'Excalidraw',
    DESCRIPTION: 'Creación de esquemas y diagramas',
    URL: 'https://excalidraw.com',
    ICON: IconExcalidraw,
    STROKE: 0,
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
  GOOGLE_MEET: {
    LABEL: 'Google Meet',
    DESCRIPTION: 'Reuniones virtuales con clientes',
    URL: 'https://meet.google.com',
    ICON: IconGoogleMeet,
    STROKE: 0,
  },
  ASTRO: {
    LABEL: 'Astro',
    DESCRIPTION: 'Framework para sitios web estáticos',
    URL: 'https://astro.build',
    ICON: IconAstro,
    STROKE: 3,
  },
  SQUOOSH: {
    LABEL: 'Squoosh',
    DESCRIPTION: 'Optimización de imágenes',
    URL: 'https://squoosh.app',
    ICON: IconSquoosh,
    STROKE: 0,
  },
  ELEVENLABS: {
    LABEL: 'Elevenlabs',
    DESCRIPTION: 'Generación de voces para publicidad',
    URL: 'https://elevenlabs.io',
    ICON: IconElevenlabs,
    STROKE: 0,
  },
  HUGGING_FACE: {
    LABEL: 'Hugging Face',
    DESCRIPTION: 'Herramientas de IA para diseño',
    URL: 'https://hugginface.co',
    ICON: IconHugginFace,
    STROKE: 0,
  },
  MOTION: {
    LABEL: 'Motion',
    DESCRIPTION: 'Animaciones y efectos en la web',
    URL: 'https://motion.dev',
    ICON: IconMotion,
    STROKE: 3,
  },
  SE_RANKING: {
    LABEL: 'SE Ranking',
    DESCRIPTION: 'Herramientas de SEO para la web',
    URL: 'https://seranking.com/es/',
    ICON: IconSERanking,
    STROKE: 0,
  },
  FONT_SHARE: {
    LABEL: 'Fontshare',
    DESCRIPTION: 'Tipografías y fuentes de uso libre',
    URL: 'https://fontshare.com/',
    ICON: IconFontshare,
    STROKE: 0,
  },
} as const
