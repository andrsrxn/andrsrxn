import { SITE } from '@/lib/constants/site'

export const IMAGES_PATHS = {
  BRAND: `${SITE.BASE_URL}/brand`,
  FLAGS: `${SITE.BASE_URL}/flags`,
  PROJECTS: `${SITE.BASE_URL}/images/projects`,
}

export const IMAGES = {
  FLAGS: {
    GT: {
      URL: `${IMAGES_PATHS.FLAGS}/gt.svg`,
      ALT: 'Bandera de Guatemala',
    },
  },

  BRAND: {
    SYMBOL: {
      SVG: {
        URL: `${IMAGES_PATHS.BRAND}/symbol.svg`,
        ALT: 'Logo de Marca Personal de Andrés Raxón',
      },
    },
    LOGO: {
      PNG: {
        URL: `${IMAGES_PATHS.BRAND}/logo.png`,
        ALT: 'Logo de Marca Personal de Andrés Raxón',
      },
    },
    GRADIENT: {
      WEBP: {
        URL: `${IMAGES_PATHS.BRAND}/gradient.webp`,
        ALT: '',
      },
    },
    GRADIENT_WIDE: {
      WEBP: {
        URL: `${IMAGES_PATHS.BRAND}/gradient-wide.webp`,
        ALT: '',
      },
    },
  },
  PROJECTS: {
    ATPROY: {
      BANNER_COMPARISON: null,
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/banner-small.webp`,
        ALT: 'Banner oficial con el logo y símbolo de Grupo ATProy al centro con un fondo cuadriculado blanco.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/banner.webp`,
        ALT: 'Banner oficial con el logo y símbolo de Grupo ATProy al centro con un fondo cuadriculado blanco.',
      },
      ABC_WHITE: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/abc-white.svg`,
        ALT: 'Ejemplo de la tipografía Inter aplicada en el abecedario.',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/color-1.svg`,
        ALT: 'Color principal en base al color Pantone 294 C (Azul oscuro)',
      },
      COLOR_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/color-2.svg`,
        ALT: 'Color secundario en base al color Pantone 2995 C (Celeste)',
      },
      COLOR_3: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/color-4.svg`,
        ALT: 'Color secundario en base al color Pantone 355 C (Verde oscuro)',
      },
      COLOR_4: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/color-3.svg`,
        ALT: 'Color secundario en base al color Pantone 559 C (Gris verdoso)',
      },
      LOGO_RESPONSIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/logo-responsive.svg`,
        ALT: 'Dimensión del logo según la escala de aplicación en diferentes tamaños: versión horizontal, versión vertical y únicamente el símbolo.',
      },
      LOGO_RESPONSIVE_VERTICAL: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/logo-responsive-vertical.svg`,
        ALT: 'Dimensión del logo según la escala de aplicación en diferentes tamaños: versión horizontal, versión vertical y únicamente el símbolo.',
      },
      PATTERN: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/pattern.svg`,
        ALT: 'Patrón de marca basado en la construcción del símbolo y la paleta de colores.',
      },
      BILLBOARD: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/billboard.webp`,
        ALT: 'Publicidad en vallas publicitarias con el texto "Creamos proyectos del futuro, más de una década de experiencia en ingeniería eléctrica, civil y de telecomunicaciones" con un fondo de paneles solares por debajo del cielo; el logo horizontal de Grupo ATProy colocado arriba a la izquierda y abajo el dominio que apunta al sitio web.',
      },
      BUSINESS_CARD: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/business-card.webp`,
        ALT: 'Tarjetas de presentación mostrando el banner oficial en la parte delante y la parte trasera con el nombre, puesto de trabajo, medios de contacto y el patrón de marca por debajo como firma de Grupo ATProy.',
      },
      FAVICON_DARK: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/favicon-light.webp`,
        ALT: 'Representación del símbolo como ícono del sitio web en el navegador Google Chrome con tema oscuro.',
      },
      FAVICON_LIGHT: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/favicon-dark.webp`,
        ALT: 'Representación del símbolo como ícono del sitio web en el navegador Google Chrome con tema claro.',
      },
      POLO_FRONT: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/polo-front-angle.webp`,
        ALT: 'Camisa tipo polo blanca con detalles del color principal (azul oscuro) para uso interno e administrativo; el símbolo colocado en la parte izquierda del pecho.',
      },
      WEB: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/web.webp`,
        ALT: 'Página principal del sitio web con las secciones de métodos de contacto, navegación del sitio, el título "Creando proyectos del futuro", servicios principales, estadísticas de experiencia de trabajo y resultados de proyectos.',
      },
      TYPOGRAPHY_WHITE: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/typography-white.svg`,
        ALT: 'Tipografía Inter con los diferentes pesos a utilizar: light, regular, medium, bold y black.',
      },
      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/logo.svg`,
        ALT: 'Logo vertical con el Símbolo por encima y las letras de Grupo ATProy por debajo.',
      },
      LOGO_HORIZONTAL: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/logo-horizontal.svg`,
        ALT: 'Logo horizontal con el Símbolo a la izquierda y las letras de Grupo ATProy a la izquierda.',
      },
      SYMBOL: {
        URL: `${IMAGES_PATHS.PROJECTS}/atproy/symbol.svg`,
        ALT: 'Símbolo de Grupo ATProy compuesto por cuatro lineas perpendiculares inclinadas a la derecha, una de cada color de la paleta de colores oficial de mayor a menor tamaño según su uso creando un tríangulo uniforme.',
      },
    },
    ICPSJ: {
      BANNER_COMPARISON: null,
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/banner-small.webp`,
        ALT: 'Banner oficial de la Iglesia con personas orando abajo a la izquierda y el logo ofial arriba a la izquierda acompañado de un gradiente con el color principal.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/banner.webp`,
        ALT: 'Banner oficial de la Iglesia con personas orando abajo a la izquierda y el logo ofial arriba a la izquierda acompañado de un gradiente con el color principal.',
      },
      LOGO_ANIMATION: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/logo-animation.mp4`,
        ALT: '',
      },
      WEB: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/web.webp`,
        ALT: 'Página principal del sitio web (Blog) con las secciones de navegación y el símbolo al centro, un versículo aleatorio para descargar como imágen o leer el capítulo completo, video del último servicio, horarios, últimos estudios bíblicos, accesos directos a otras páginas y enlace para donativos.',
      },
      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/logo.svg`,
        ALT: 'Logo de la Iglesia la izquierda con las letras de "Iglesia de Cristo la Presencia del Señor Jesús" a la derecha en color negro.',
      },
      LOGO_INVERTED: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/logo-inverted.svg`,
        ALT: 'Logo de la Iglesia la izquierda con las letras de "Iglesia de Cristo la Presencia del Señor Jesús" a la derecha en color blanco.',
      },
      LOGO_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/logo-negative.svg`,
        ALT: 'Logo de la Iglesia la izquierda con las letras de "Iglesia de Cristo la Presencia del Señor Jesús" en una sola tinta (Blanca).',
      },
      LOGO_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/logo-positive.svg`,
        ALT: 'Logo de la Iglesia la izquierda con las letras de "Iglesia de Cristo la Presencia del Señor Jesús" en una sola tinta (Negra).',
      },
      SYMBOL: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/symbol.svg`,
        ALT: 'Símbolo de la Iglesia representando una mano color rojo sosteniendo una llama de fuego color naranja y amarillo.',
      },
      SYMBOL_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/symbol-negative.svg`,
        ALT: 'Símbolo de la Iglesia representando una mano sosteniendo una llama de fuego a una sola tinta (Blanca).',
      },
      SYMBOL_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/symbol-positive.svg`,
        ALT: 'Símbolo de la Iglesia representando una mano sosteniendo una llama de fuego a una sola tinta (Negra).',
      },
      BIBLE_STUDY: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/bible-study.webp`,
        ALT: 'Representación de un estudio bíblico proyectado en una pantalla gigante y personas viendo directamente la proyección.',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/color-1.svg`,
        ALT: 'Color principal en base al color Pantone Orange 021 C (Naranja)',
      },
      COLOR_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/color-2.svg`,
        ALT: 'Color secundario en base al color Pantone 3517 C (Rojo)',
      },
      COLOR_3: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/color-3.svg`,
        ALT: 'Color secundario en base al color Pantone 115 C (Amarillo)',
      },
      INSTAGRAM_POSTS: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/instagram-post.webp`,
        ALT: 'Representación de 3 diferentes Post en la red social Instagram desde el perfil oficial de la Iglesia.',
      },
      PALETTE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/palette-1.svg`,
        ALT: 'Sombras del color principal (Naranja) del tono más claro al más oscuro.',
      },
      PALETTE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/palette-2.svg`,
        ALT: 'Sombras del color secundario (Rojo) del tono más claro al más oscuro.',
      },
      PALETTE_3: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/palette-3.svg`,
        ALT: 'Sombras del color secundario (Amarillo) del tono más claro al más oscuro.',
      },
      SIGN_LIGHT: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/sign-light.webp`,
        ALT: 'Representación del logo a una sola tinta (Blanca) en un letrero LED para indicar el lugar físico de la Iglesia.',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/typography-1.svg`,
        ALT: 'Tipografía principal Merriwheter con el peso bold para titulares.',
      },
      TYPOGRAPHY_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/typography-2.svg`,
        ALT: 'Tipografía secundaria Open Sans con los pesos regular, medium y bold para cuerpo del texto.',
      },
      STICKERS: {
        URL: `${IMAGES_PATHS.PROJECTS}/icpsj/stickers.webp`,
        ALT: 'Representacion de stickers bordados para diferentes usos internos con el símbolo al centro.',
      },
    },
    TRANSPORTIISA: {
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/banner-small.webp`,
        ALT: 'Torre eléctrica vista desde abajo con el logo de Transportii S.A. en fondo blanco ubicado en la esquina inferior.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/banner.webp`,
        ALT: 'Torre eléctrica vista desde abajo con el logo de Transportii S.A. en fondo blanco ubicado en la esquina inferior.',
      },
      BANNER_COMPARISON: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/banner-comparison.webp`,
        ALT: 'Comparación del logo actual a la izquierda con el logo propuesto en el Rebranding a la derecha.',
      },
      ADS: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/ads.webp`,
        ALT: 'Valla publicitaria con el texto "Transportando energía eléctrica eficiente, renovable y sin fronteras." y la url al sitio web por debajo; una imagen representativa a la derecha con el logo de Transportii S.A.',
      },
      ON_FABRIC: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/on-fabric.webp`,
        ALT: 'Logo de Transportii S.A. enmarcado en tela para uso interno y casos especiales.',
      },
      CARDS: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/cards.webp`,
        ALT: 'Tarjetas de presentación con el logo en la parte trasera y en la parte delantera el texto de "Líderes en el desarrollo del sector eléctrico y de construcción", medios de contacto y dirección.',
      },
      LOGO_ANIMATION: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/logo-animation.mp4`,
      },

      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/logo.svg`,
        ALT: 'Logo de Transportii S.A. conformado por el símbolo por encima y por debajo el nombre Transportii S.A. y eslogan "Transmitimos energía" en color negro.',
      },
      LOGO_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/logo-alternative.svg`,
        ALT: 'Logo de Transportii S.A. conformado por el símbolo por encima y por debajo el nombre Transportii S.A. y eslogan "Transmitimos energía" en color blanco.',
      },
      LOGO_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/logo-positive.svg`,
        ALT: 'Logo de Transportii S.A. conformado por el símbolo por encima y por debajo el nombre Transportii S.A. y eslogan "Transmitimos energía" en una sola tinta (Negra).',
      },
      LOGO_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/logo-negative.svg`,
        ALT: 'Logo de Transportii S.A. conformado por el símbolo por encima y por debajo el nombre Transportii S.A. y eslogan "Transmitimos energía" en una sola tinta (Blanca).',
      },
      SYMBOL: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/symbol.svg`,
        ALT: 'Símbolo de Transportii S.A. representado por siete lineas con el color principal (Azul) que representan la transmisión de energía.',
      },
      SYMBOL_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/symbol-positive.svg`,
        ALT: 'Símbolo de Transportii S.A. representado por siete lineas en una sola tinta (Negra) que representan la transmisión de energía.',
      },
      SYMBOL_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/symbol-negative.svg`,
        ALT: 'Símbolo de Transportii S.A. representado por siete lineas en una sola tinta (Blanca) que representan la transmisión de energía.',
      },
      SYMBOL_OUTLINE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/symbol-outline.svg`,
        ALT: 'Símbolo de Transportii S.A. representado por siete lineas (Únicamente el contorno) con el color principal (Azul) que representan la transmisión de energía.',
      },
      SYMBOL_NEGATIVE_OUTLINE: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/symbol-negative-outline.svg`,
        ALT: 'Símbolo de Transportii S.A. representado por siete lineas (Únicamente el contorno) a una sola tinta (Blanca) que representan la transmisión de energía.',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/color-1.svg`,
        ALT: 'Color principal en base al color Pantone 3553 C (Azul)',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/transportiisa/typography-1.svg`,
        ALT: 'Tipografía principal Aileron en los pesos de regular, semibold, bold, black.',
      },
    },
    ICEMENE: {
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/banner-small.webp`,
        ALT: 'Logo centrado de ICEMENE con el patrón oficial de marca por debajo.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/banner.webp`,
        ALT: 'Logo centrado de ICEMENE con el patrón oficial de marca por debajo.',
      },
      BANNER_COMPARISON: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/banner-comparison.webp`,
        ALT: 'Comparación del logo actual a la izquierda con el logo propuesto en el Rebranding a la derecha.',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/color-1.svg`,
        ALT: 'Color secundario Silken (Gris azulado)',
      },
      COLOR_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/color-2.svg`,
        ALT: 'Color secundario Mist (Gris)',
      },
      COLOR_3: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/color-3.svg`,
        ALT: 'Color secundario Golden (Oro)',
      },
      COLOR_4: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/color-4.svg`,
        ALT: 'Color principal alternativo Cream (Blanco crema)',
      },
      COLOR_5: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/color-5.svg`,
        ALT: 'Color principal alternativo Cream (Blanco crema)',
      },
      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/logo.svg`,
        ALT: 'Logo con el nombre de ICEMENE y la industria por debajo de Joyas y Accesorios en el color principal (Negro).',
      },
      LOGO_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/logo-alternative.svg`,
        ALT: 'Logo con el nombre de ICEMENE y la industria por debajo de Joyas y Accesorios en el color principal alternativo (Blanco).',
      },
      SYMBOL: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/symbol.svg`,
        ALT: 'Símbolo de ICEMENE combinando la letra M e I del logo centrados y combinados en el color principal (Negro).',
      },
      SYMBOL_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/symbol-alternative.svg`,
        ALT: 'Símbolo de ICEMENE combinando la letra M e I del logo centrados y combinados en el color principal alternativo (Blanco).',
      },
      PACKAGE: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/package.webp`,
        ALT: 'Paquete para envíos de productos a domicilio con el Logo en la parte superior y por debajo el patrón de marca.',
      },
      SHOPPING_BAG: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/shopping-bag.webp`,
        ALT: 'Representación de la bolsa de compras directas en la tienda con el Logo al centro y el patrón de marca por debajo.',
      },
      SIGN: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/sign.webp`,
        ALT: 'Símbolo de ICEMENE al centro en el color principal alternativo (Blanco) y el fondo col el color principal (Negro).',
      },
      BOX: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/box.webp`,
        ALT: 'Representación de una caja de carton blanca para empaque de productos con el Símbolo al centro.',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/typography-1.svg`,
        ALT: 'Tipografía principal Audrey en los pesos de medium y bold para titulares.',
      },
      TYPOGRAPHY_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/typography-2.svg`,
        ALT: 'Tipografía secundaria Archivo en los pesos de regular, semibold, bold y black para cuerpo del texto.',
      },
      PATTERN: {
        URL: `${IMAGES_PATHS.PROJECTS}/icemene/pattern.svg`,
        ALT: 'Patrón de la marca en base a repetición continua horizontal sin espacios del símbolo.',
      },
    },
    PINALZA: {
      BANNER: { URL: null, ALT: '' },
      BANNER_COMPARISON: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/banner-comparison.webp`,
        ALT: 'Comparación del logo actual a la izquierda con las dos propuestas de cambio a la derecha.',
      },
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/banner-small.webp`,
        ALT: 'Comparación del logo actual a la izquierda con las dos propuestas de cambio a la derecha.',
      },
      ABC_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/abc-1.svg`,
        ALT: 'Representación de la tipografía principal en el abecedario y los números con sus diferentes pesos.',
      },
      ABC_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/abc-1.svg`,
        ALT: 'Representación de la tipografía secundaria en el abecedario y los números con sus diferentes pesos.',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/color-1.svg`,
        ALT: 'Color principal basado en el color Pantone 3514 C (Amarillo).',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/typography-1.svg`,
        ALT: 'Tipografía principal Clash Display en los pesos de semibold y bold para titulares.',
      },
      TYPOGRAPHY_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/typography-2.svg`,
        ALT: 'Tipografía secundaria Montserrat en los pesos de regular, medium, semibold y bold para cuerpo del texto.',
      },
      PATTERN_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/pattern-1.svg`,
        ALT: 'Patrón del primer logo propuesto en base a la repretición de la decoración del logo.',
      },
      PATTERN_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/pattern-2.svg`,
        ALT: 'Patrón del segundo logo propuesto en base a la línea decorativa continua del logo.',
      },
      LOGO_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-1.svg`,
        ALT: 'Primer logo propuesto con el símbolo del color principal (Amarillo) a la izquierda y el nombre Pinalza en color negro a su izquierda.',
      },
      LOGO_ALTERNATIVE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-alternative-1.svg`,
        ALT: 'Primer logo propuesto con el símbolo del color principal (Amarillo) a la izquierda y el nombre Pinalza en color blanco a su izquierda.',
      },
      LOGO_NEGATIVE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-negative-1.svg`,
        ALT: 'Primer logo propuesto con el símbolo a la izquierda y el nombre Pinalza a su izquierda en una sola tinta (Blanca).',
      },
      LOGO_POSITIVE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-positive-1.svg`,
        ALT: 'Primer logo propuesto con el símbolo a la izquierda y el nombre Pinalza a su izquierda en una sola tinta (Negra).',
      },
      LOGO_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-2.svg`,
        ALT: 'Segundo logo propuesto con una línea de decoración por debajo en el color principal (Amarillo) por debajo y el nombre Pinalza en color negro por encima.',
      },
      LOGO_ALTERNATIVE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-alternative-2.svg`,
        ALT: 'Segundo logo propuesto con una línea de decoración por debajo en el color principal (Amarillo) por debajo y el nombre Pinalza en color blanco por encima.',
      },
      LOGO_NEGATIVE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-negative-2.svg`,
        ALT: 'Segundo logo propuesto con una línea de decoración por debajo por debajo y el nombre Pinalza en por encima a una sola tinta (Blanca).',
      },
      LOGO_POSITIVE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/logo-positive-2.svg`,
        ALT: 'Segundo logo propuesto con una línea de decoración por debajo por debajo y el nombre Pinalza en por encima a una sola tinta (Negra).',
      },

      SYMBOL_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-1.svg`,
        ALT: 'Primer símbolo propuesto con la decoración de dos líneas inclinadas a la izquierda con el color principal (Amarillo) y la "P" inicial de Pinalza a su derecha en color negro.',
      },
      SYMBOL_ALTERNATIVE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-alternative-1.svg`,
        ALT: 'Primer símbolo propuesto con la decoración de dos líneas inclinadas a la izquierda con el color principal (Amarillo) y la "P" inicial de Pinalza a su derecha en color blanco.',
      },
      SYMBOL_NEGATIVE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-negative-1.svg`,
        ALT: 'Primer símbolo propuesto con la decoración de dos líneas inclinadas a la izquierda y la "P" inicial de Pinalza a su derecha a una sola tinta (Blanca).',
      },
      SYMBOL_POSITIVE_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-positive-1.svg`,
        ALT: 'Primer símbolo propuesto con la decoración de dos líneas inclinadas a la izquierda y la "P" inicial de Pinalza a su derecha a una sola tinta (Negra).',
      },
      SYMBOL_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-2.svg`,
        ALT: 'Segundo símbolo propuesto con la línea decorativa por debajo con el color principal (Amarillo) y las letras "PA" de Pinalza por encima en color negro.',
      },
      SYMBOL_ALTERNATIVE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-alternative-2.svg`,
        ALT: 'Segundo símbolo propuesto con la línea decorativa por debajo con el color principal (Amarillo) y las letras "PA" de Pinalza por encima en color blanco.',
      },
      SYMBOL_NEGATIVE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-negative-2.svg`,
        ALT: 'Segundo símbolo propuesto con la línea decorativa por debajo y las letras "PA" de Pinalza por encima a una sola tinta (Blanca).',
      },
      SYMBOL_POSITIVE_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/pinalza/symbol-positive-2.svg`,
        ALT: 'Segundo símbolo propuesto con la línea decorativa por debajo y las letras "PA" de Pinalza por encima a una sola tinta (Negra).',
      },
    },
    THEPRINCIPAL: {
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/banner-small.webp`,
        ALT: 'Logo de ThePrincipal en la parte superior izquierda con el slogan "¿Qué deseas aprender hoy?" y en la parte inferior derecha dos imágenes de estudiantes.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/banner.webp`,
        ALT: 'Logo de ThePrincipal en la parte superior izquierda con el slogan "¿Qué deseas aprender hoy?" y en la parte inferior derecha dos imágenes de estudiantes.',
      },
      BANNER_COMPARISON: null,
      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/logo.svg`,
        ALT: 'Logo de ThePrincipal con el símbolo en el color principal (Verde oscuro) a la izquierda y el nombre a la derecha en color negro.',
      },
      LOGO_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/logo-alternative.svg`,
        ALT: 'Logo de ThePrincipal con el símbolo en el color principal (Verde oscuro) a la izquierda y el nombre a la derecha en color blanco.',
      },
      LOGO_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/logo-positive.svg`,
        ALT: 'Logo de ThePrincipal con el símbolo a la izquierda y el nombre a la derecha a una sola tinta (Negra).',
      },
      LOGO_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/logo-negative.svg`,
        ALT: 'Logo de ThePrincipal con el símbolo a la izquierda y el nombre a la derecha a una sola tinta (Blanca).',
      },
      LOGO_CONSTRUCTION: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/logo-construction.svg`,
        ALT: 'Construcción del logo con líneas delimitadoras alrededor.',
      },
      SYMBOL: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/symbol.svg`,
        ALT: 'Símbolo de ThePrincipal conformado por un réctangulo en el color principal (Verde oscuro) con una línea separadora desde la esquina superior derecha hasta la esquina inferior derecha.',
      },
      SYMBOL_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/symbol-positive.svg`,
        ALT: 'Símbolo de ThePrincipal conformado por un réctangulo con una línea separadora desde la esquina superior derecha hasta la esquina inferior derecha a una sola tinta (Blanca).',
      },
      SYMBOL_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/symbol-negative.svg`,
        ALT: 'Símbolo de ThePrincipal conformado por un réctangulo con una línea separadora desde la esquina superior derecha hasta la esquina inferior derecha a una sola tinta (Negra).',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/typography-1.svg`,
        ALT: 'Tipografía principal General Sans en los pesos de regular, medium, semibold, bold para todo el contenido.',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/color-1.svg`,
        ALT: 'Color principal de ThePrincipal basado en el color Pantone 2251 C (Verde oscuro)',
      },
      DOODLE: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/doodle.svg`,
        ALT: 'Illustración decorativa de un trazado hecho a mano con el color principal (Verde oscuro).',
      },
      LAPTOP_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/laptop-1.webp`,
        ALT: 'Representación de la página principal de la plataforma visualizada en una laptop.',
      },
      LAPTOP_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/theprincipal/laptop-2.webp`,
        ALT: 'Representación de uno de los artículos en la categoría Diseño visualizada en una laptop.',
      },
    },

    BONZER: {
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/banner-small.webp`,
        ALT: 'Logo de Bonzer centrado con la ilustración representativa del símbolo en la parte inferior y el color principal de fondo con un degradado en blanco por la orilla.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/banner.webp`,
        ALT: 'Logo de Bonzer centrado con la ilustración representativa del símbolo en la parte inferior y el color principal de fondo con un degradado en blanco por la orilla.',
      },
      BANNER_COMPARISON: null,
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/color-1.svg`,
        ALT: 'Color principal de Bonzer basado en el color Pantone 321 C (Aqua)',
      },
      ADS_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/ads-1.webp`,
        ALT: 'Publicidad en formato horizontal de uno de los productos propuestos "Body Cream" para Post en redes sociales.',
      },
      ADS_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/ads-2.webp`,
        ALT: 'Publicidad en formato cuadrado de uno de los productos propuestos "Gel para el cabello" para Post en redes sociales.',
      },
      ADS_3: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/ads-3.webp`,
        ALT: 'Publicidad en formato cuadrado de uno de los productos propuestos "Crema humectante" para Post en redes sociales.',
      },
      ILLUSTRATION: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/illustration.svg`,
        ALT: 'Ilustración principal de la marca basada en la decoración principal de la marca.',
      },
      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/logo.svg`,
        ALT: 'Nombre de Bonzer con la decoración principal de la marca a su izquierda en el color principal (Aqua).',
      },
      LOGO_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/logo-alternative.svg`,
        ALT: 'Nombre de Bonzer con la decoración principal de la marca a su izquierda en color blanco.',
      },
      SYMBOL: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/symbol.svg`,
        ALT: 'Símbolo de Bonzer con la "B" representativa del nombre y a su izquierda la decoración principal de la marca en el color principal (Aqua).',
      },
      SYMBOL_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/symbol-alternative.svg`,
        ALT: 'Símbolo de Bonzer con la "B" representativa del nombre y a su izquierda la decoración principal de la marca en color blanco.',
      },
      SYMBOL_CONSTRUCTION: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/symbol-construction.svg`,
        ALT: 'Construcción del símbolo con líneas delimitadoras alrededor.',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/typography-1.svg`,
        ALT: 'Tipografía principal Melodrama bold para titulares.',
      },
      TYPOGRAPHY_2: {
        URL: `${IMAGES_PATHS.PROJECTS}/bonzer/typography-2.svg`,
        ALT: 'Tipgorafía secundaria Inter en los pesos de regular, medium, bold y black para cuerpo del texto.',
      },
    },
    SOLAR_GROUP: {
      BANNER_SMALL: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/banner-small.webp`,
        ALT: 'Logo de Solar Group Guatemala centrado con el símbolo decorando alrededor.',
      },
      BANNER: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/banner.webp`,
        ALT: 'Logo de Solar Group Guatemala centrado con el símbolo decorando alrededor.',
      },
      BANNER_COMPARISON: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/banner-comparison.webp`,
        ALT: 'Comparación del logo actual a la izquierda con el logo propuesto en el Rebranding a la derecha.',
      },
      ABC: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/abc.svg`,
        ALT: 'Representación de los distintos pesos de la tipografía prinicipal en la letra "A" mayúscula y minúscula.',
      },
      LOGO: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/logo.svg`,
        ALT: 'Logo oficial con el texto Solar Group Guatemala, una palabra por encima de la otra en color negro; la letra "O" combinada entre las palabras "Solar Group" con el color primario "Naranja".',
      },
      LOGO_ALTERNATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/logo-alternative.svg`,
        ALT: 'Logo oficial con el texto Solar Group Guatemala, una palabra por encima de la otra en color blanco; la letra "O" combinada entre las palabras "Solar Group" con el color primario (Naranja).',
      },
      LOGO_CONSTRUCTION: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/logo-construction.svg`,
        ALT: 'Construcción del logo con líneas delimitadoras alrededor y espacio de respeto.',
      },
      LOGO_POSITIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/logo-positive.svg`,
        ALT: 'Logo oficial con el texto Solar Group Guatemala, una palabra por encima de la otra; la letra "O" combinada entre las palabras "Solar Group" a una sola tinta (Negra).',
      },
      LOGO_NEGATIVE: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/logo-negative.svg`,
        ALT: 'Logo oficial con el texto Solar Group Guatemala, una palabra por encima de la otra; la letra "O" combinada entre las palabras "Solar Group" a una sola tinta (Blanca).',
      },
      COLOR_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/color-1.svg`,
        ALT: 'Color primario basado en el color Pantone 3564 C (Naranja)',
      },
      TYPOGRAPHY_1: {
        URL: `${IMAGES_PATHS.PROJECTS}/solar-group/typography-1.svg`,
        ALT: 'Tipografía principal Montserrat para titulares y cuerpo del texto.',
      },
    },
  },
}
