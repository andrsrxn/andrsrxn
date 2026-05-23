import { IMAGES } from '@/lib/constants/paths'
import { SERVICES } from '@/lib/constants/services'

export const PROJECT_TYPES = {
  PROPOSAL: 'proposal',
  CASE_STUDY: 'caseStudy',
  NORMAL: 'normal',
} as const

export type ProjectType = (typeof PROJECT_TYPES)[keyof typeof PROJECT_TYPES]

export const PROJECTS = {
  THE_CHOICE_UIUX_DESIGN_WEBSITE: {
    SLUG: 'the-choice-uiux-design-y-sitio-web',
    CLIENT: 'The Choice',
    TYPE: PROJECT_TYPES.CASE_STUDY,
    INDUSTRY: 'Restaurante y panadería',
    SUMMARY: 'Diseño UI/UX y Sitio Web',
    DESCRIPTION: [
      'El diseño de The Choice implementa una jerarquía visual sólida fundamentada en un sistema de tipografía con escala 1.2 que mejora la legibilidad al aplicar la Ley de Continuidad en la lectura. El flujo de navegación está optimizado para reducir la carga cognitiva del usuario al identificar la acción que desee realizar.',
      'El flujo de reservaciones se ha creado siguiendo la Ley de Hick, fragmentando un proceso complejo en pasos secuenciales (Selección -> Detalles -> Pago -> Éxito), siendo este el flujo prioritario de los usuarios.',
      'Para enfatizar el la usabilidad del diseño UI/UX se tradujo a código creando una demo interactiva, dinámica y completa del sitio, en donde se puede integrar cualquier plataforma de reservaciones por medio de una API con un proceso automatizado y personalizado sin abandonar el sitio.',
      'La arquitectura del sitio web se realizó con el Generador de Sitios Estáticos de Next.js, utilizando componentes reutilizables, sistema de tokens, accesibilidad (WCAG) niveles AA y AAA, optimización SEO y Copywriting; factores fundamentales para un sitio optimizado y escalable.',
    ],
    SERVICES: [
      SERVICES.WEB_DEV.SUBSERVICES.UI_UX_DESIGN.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.FULL_PAGE_DEV.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.SEO.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.THE_CHOICE,
  },
  DESIGN_SYSTEM: {
    SLUG: 'design-system',
    CLIENT: 'Software as a Service (SaaS)',
    TYPE: PROJECT_TYPES.NORMAL,
    INDUSTRY: 'React + TypeScript',
    SUMMARY: 'Sistema de Diseño y Librería de Componentes',
    DESCRIPTION: [
      'Un Sistema de Diseño opinionado, moderno y escalable construido con React, TypeScript y Tailwind CSS.',
      'Provee más de 50 componentes diferentes para el desarrollo de aplicaciones web, con un sistema de tokens para colores, tipografía, espaciado, sombras y similares, componentes compuestos, estados y microinteracciones, patrones de diseño como Atomic Design, principios de UI/UX y accesibilidad (WCAG) niveles AA y AAA.',
      'Se desarrolló un set de íconos Duotone personalizados de más de 400 elementos acorde al estilo del sistema, diseñados para múltiples propósitos y aplicaciones.',
      'El rendimiento de los componentes está optimizado para ofrecer una experiencia fluida y responsive para navegadores modernos y dispositivos móviles.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.DESIGN_SYSTEM.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.FULL_PAGE_DEV.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.UI_UX_DESIGN.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.COMPONENTES.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.DESIGN_SYSTEM,
  },
  VIVET_REBRANDING: {
    SLUG: 'vivet-rebranding',
    CLIENT: 'VIVET',
    TYPE: PROJECT_TYPES.PROPOSAL,
    INDUSTRY: 'Streetwear de lujo',
    SUMMARY: 'Rebranding y Clothing',
    DESCRIPTION: [
      'VIVET by Kai Cenat. Una entidad visual y cultural que representa el Street Wear de lujo, permanencia y resistencia por medio del Dark Avant-Garde, la modificación de la tipografía Baskerville Old Face y el mensaje reforzado con el eslogan "WE ARE ETERNAL"',

      'No persigue la relevancia, define identidad.',

      'Demostración de la nueva identidad visual y los outfits personalizados principalmente con el símbolo de marca, desgaste controlado, telas pesadas, iluminación baja y composición dominante con poses estáticas y dinámicas, según el propósito de comunicación.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.REBRANDING.TITLE,
      SERVICES.BRAND.SUBSERVICES.VISUAL_IDENTITY.TITLE,
      SERVICES.MARKETING.SUBSERVICES.SOCIAL_MEDIA_POSTS.TITLE,
      SERVICES.MARKETING.SUBSERVICES.PACKAGING.TITLE,
      SERVICES.MARKETING.SUBSERVICES.VIDEO_EDITING.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.VIVET,
  },
  ATPROY_BRAND_REFRESH: {
    SLUG: 'grupo-atproy-actualizacion-de-marca',
    CLIENT: 'Grupo ATProy',
    TYPE: PROJECT_TYPES.NORMAL,
    INDUSTRY: 'Ingeniería eléctrica y telecomunicaciones',
    SUMMARY: 'Actualización de Marca y Sitio Web',
    DESCRIPTION: [
      'Con una trayectoria de más de dos décadas en el sector de Ingeniería eléctrica y Telecomunicaciones, Grupo ATProy realiza proyectos de gran magnitud a lo largo de Centroamérica.',
      'Ante la necesidad de que su Identidad Visual reflejara la calidad y estándares de excelencia, se refinó y estableció consistencia en su marca acompañado de la creación del Sitio Web con Astro para facilitar la información de sus servicios y proyectos realizados a lo largo de su historia, siendo un medio de contacto vital para aumentar su alcance y posicionamiento en el mercado.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.BRAND_REFRESH.TITLE,
      SERVICES.BRAND.SUBSERVICES.VISUAL_IDENTITY.TITLE,
      SERVICES.MARKETING.SUBSERVICES.MOTION_GRAPHICS.TITLE,
      SERVICES.MARKETING.SUBSERVICES.FLYERS.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.FULL_PAGE_DEV.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.SEO.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.ATPROY,
  },
  ICPSJ_BRANDING: {
    SLUG: 'icpsj-branding',
    CLIENT: 'La Presencia del Señor Jesús',
    INDUSTRY: 'Iglesia evangélica',
    TYPE: PROJECT_TYPES.NORMAL,
    SUMMARY: 'Branding, Sitio Web y Redes Sociales',
    DESCRIPTION: [
      'Para el establecimiento de su iglesia y comunidad, se desarrolló desde cero la marca creando un sistema visual coherente que reflejara su esencia en sus principales canales de comunicación.',
      'Se desarrolló un Sitio Web (Blog) en inglés y español con Astro, diseñado para centralizar la información clave de la iglesia, ser una herramienta de calendarización, ofrecer detalles sobre los servicios y acceso a estudios bíblicos relevantes.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.BRANDING.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.FULL_PAGE_DEV.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.SEO.TITLE,
      SERVICES.MARKETING.SUBSERVICES.MOTION_GRAPHICS.TITLE,
      SERVICES.MARKETING.SUBSERVICES.SOCIAL_MEDIA_POSTS.TITLE,
      SERVICES.MARKETING.SUBSERVICES.COPYWRITING.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.ICPSJ,
  },

  BONZER_BRANDING: {
    SLUG: 'bonzer-branding',
    CLIENT: 'Bonzer',
    INDUSTRY: 'Estética y cuidado personal',
    TYPE: PROJECT_TYPES.NORMAL,
    SUMMARY: 'Branding, Packaging y Redes Sociales',
    DESCRIPTION: [
      'Bonzer es un concepto de marca enfocada en productos naturales para el cuidado y bienestar personal en jóvenes y adultos, generando cambios visibles en poco tiempo.',
      'El Branding realizado permite enfatizar la personalidad vibrante y cercana de Bonzer, aumentando la fidelidad del mercado y facilidad de reconocimiento con respecto a la competencia, principalmente en los elementos gráficos que acompañan los distintos medios de publicidad.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.BRANDING.TITLE,
      SERVICES.BRAND.SUBSERVICES.VISUAL_IDENTITY.TITLE,
      SERVICES.MARKETING.SUBSERVICES.SOCIAL_MEDIA_POSTS.TITLE,
      SERVICES.MARKETING.SUBSERVICES.PACKAGING.TITLE,
      SERVICES.MARKETING.SUBSERVICES.COPYWRITING.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.BONZER,
  },
  ICEMENE_REBRANDING: {
    SLUG: 'icemene-rebranding',
    CLIENT: 'ICEMENE',
    INDUSTRY: 'Joyería y accesorios',
    TYPE: PROJECT_TYPES.PROPOSAL,
    SUMMARY: 'Rebranding y Packaging',
    DESCRIPTION: [
      'Se mejoró la calidad gráfica de ICEMENE, una tienda de joyería y accesorios masculinos, alineando su personalidad con la marca para reflejar la elegancia y calidad que lo caracteriza.',
      'Por medio del Rebranding se actualiza la estrategia de marca que impulsará sus decisiones a futuro más allá del diseño, tanto digital y en medios físicos.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.REBRANDING.TITLE,
      SERVICES.BRAND.SUBSERVICES.BRAND_STRATEGY.TITLE,
      SERVICES.BRAND.SUBSERVICES.VISUAL_IDENTITY.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.ICEMENE,
  },
  THEPRINCIPAL_BRANDING: {
    SLUG: 'theprincipal-branding',
    CLIENT: 'ThePrincipal',
    INDUSTRY: 'Blog online',
    TYPE: PROJECT_TYPES.NORMAL,
    SUMMARY: 'Branding y Diseño UI/UX',
    DESCRIPTION: [
      'ThePrincipal es una plataforma en línea de auto aprendizaje inspirada en la lectura de los periódicos combinada con la interacción dinámica de los usuarios en la web.',
      'El valor del conocimiento online debe estar acompañado de una marca que respalde la experiencia de aprender y descubrir.',
      'La plataforma incluye cursos, artículos, resúmenes de temas relevantes e históricos y herramientas en línea; facilita el seguimiento de los cursos, la publicación automatizada de los temas, búsqueda avanzada por categorías, entre otros, totalmente gratis.',
    ],
    SERVICES: [
      SERVICES.BRAND.SUBSERVICES.BRANDING.TITLE,
      SERVICES.BRAND.SUBSERVICES.VISUAL_IDENTITY.TITLE,
      SERVICES.MARKETING.SUBSERVICES.COPYWRITING.TITLE,
      SERVICES.WEB_DEV.SUBSERVICES.UI_UX_DESIGN.TITLE,
    ],
    IMAGES: IMAGES.PROJECTS.THEPRINCIPAL,
  },

  SOLAR_GROUP_REBRANDING: {
    SLUG: 'solar-group-guatemala-rebranding',
    CLIENT: 'Solar Group Guatemala',
    INDUSTRY: 'Ingeniería eléctrica',
    TYPE: PROJECT_TYPES.PROPOSAL,
    SUMMARY: 'Actualización de Identidad Visual',
    DESCRIPTION: [
      'Se creó una nueva oportunidad de crecimiento en el mercado para Solar Group Guatemala con una marca consistente y fácilmente reconocible en todas sus aplicaciones.',
      'La marca se distingue por medio de la innovación, claridad del mensaje y reconocimiento constante, proporcionándole un mejor posicionamiento en el mercado.',
      'Se revitalizó su Identidad Visual creando un universo gráfico sólido y coherente que destaque sus servicios junto con su amplia trayectoria, adaptándola a las necesidades modernas de su industria.',
    ],
    SERVICES: [SERVICES.BRAND.SUBSERVICES.VISUAL_IDENTITY.TITLE],
    IMAGES: IMAGES.PROJECTS.SOLAR_GROUP,
  },
}
