import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { baseMetadata } from '@/lib/constants/metadata'

const TITLE = 'Términos y condiciones'
const DESCRIPTION =
  'Definimos reglas de uso y utilización del sitio web para asegurar el cumplimiento correcto de tus derechos y obligaciones en él.'
const URL = '/terminos-y-condiciones'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
  },
  openGraph: {
    ...baseMetadata.openGraph,
    url: URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    ...baseMetadata.twitter,
    title: TITLE,
    description: DESCRIPTION,
  },
}

export default function page() {
  return (
    <main className='laptop:mt-30 mt-24'>
      <div className='prose desktop:prose-xl numbered-heading font-body text-muted-foreground container mx-auto w-11/12'>
        <h1 className='text-foreground font-heading laptop:!text-7xl eading-none !mb-8 text-6xl !font-normal'>
          Términos y Condiciones de Uso
        </h1>

        <p>
          Bienvenidos al sitio web personal de Andrés Raxón. Al acceder y utilizar este sitio web,
          aceptas y te comprometes a cumplir con la totalidad de los siguientes Términos y
          Condiciones de Uso. Si no estás de acuerdo con alguna parte de estos términos, por favor,
          no utilices este sitio web. Estos términos y condiciones aplican a todos los visitantes,
          usuarios y otros que accedan o usen el servicio.
        </p>
        <p>
          El responsable de este sitio web es:{' '}
          <strong className='text-foreground'>Carlos Andrés Raxón Castañeda</strong> con número de
          NIT: <strong className='text-foreground'>452194-6</strong>. Para cualquier pregunta o
          inquietud, puedes contactarme directamente a través del link en la sección de Contacto.
        </p>
        <Separator className='mt-12' />

        <h2 className='text-foreground font-bold uppercase'>Descripción de Servicios</h2>
        <p>
          Este sitio web funciona como un portafolio digital, una plataforma informativa para
          mostrar los proyectos realizados y las capacidades creativas de Andrés Raxón. Los
          servicios de diseño, dirección creativa y estrategia se ofrecen de forma profesional. La
          contratación de estos servicios está sujeta a la negociación y firma de un{' '}
          <strong className='text-foreground'>contrato de servicios</strong> por separado, que
          detallará el alcance, los entregables, el cronograma y los términos de pago específicos
          del proyecto.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Propiedad Intelectual</h2>
        <p>
          Todo el contenido presente en este sitio web, incluyendo, pero no limitado a, textos,
          gráficos, logos, íconos, imágenes, clips de audio y video, proyectos de portafolio y su
          compilación, es propiedad exclusiva de Andrés Raxón o de sus respectivos licenciantes y
          está protegido por las leyes de propiedad intelectual de Guatemala y las leyes
          internacionales. La marca personal de Andrés Raxón y cualquier otro logo, nombre de
          servicio o eslogan relacionado son marcas comerciales de Andrés Raxón y no pueden ser
          copiados, imitados o usados, en su totalidad o en parte, sin nuestro permiso previo por
          escrito.
        </p>
        <p>
          Los proyectos mostrados en este portafolio son el resultado de colaboraciones con clientes
          y se presentan con <strong className='text-foreground'>fines ilustrativos</strong> de las
          habilidades y servicios ofrecidos. La propiedad intelectual de los proyectos finales
          mostrados pertenece a sus respectivos clientes, a menos que se indique lo contrario. Queda
          estrictamente prohibida la reproducción, distribución, modificación, exhibición pública o
          uso no autorizado de cualquier contenido de este sitio web sin el consentimiento expreso
          por escrito de Andrés Raxón.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Uso del Sitio Web</h2>
        <p>
          El uso del sitio web está destinado a fines informativos y de contacto. No puedes utilizar
          el sitio web para fines ilegales o no autorizados. Aceptas no utilizar el sitio para los
          siguientes propósitos:
        </p>
        <ul>
          <li>
            Difamar, abusar, acosar, amenazar o violar de otra forma los derechos legales de otros.
          </li>
          <li>
            Publicar, distribuir o difundir cualquier material o información que sea inapropiada,
            profana, difamatoria, obscena, indecente o ilegal.
          </li>
          <li>
            Cargar archivos que contengan virus, archivos corruptos o cualquier otro software o
            programa similar que pueda dañar la operación del sitio web o el equipo de otro.
          </li>
          <li>Realizar spam o enviar correos electrónicos no solicitados.</li>
        </ul>

        <h2 className='text-foreground font-bold uppercase'>Enlaces a Sitios de Terceros</h2>
        <p>
          Nuestro sitio web puede contener enlaces a sitios web de terceros que no son propiedad ni
          están controlados por Andrés Raxón. No tenemos control sobre, y no asumimos ninguna
          responsabilidad por, el contenido, las políticas de privacidad o las prácticas de
          cualquier sitio web de terceros. Reconoces y aceptas que no seremos responsables, directa
          o indirectamente, de ningún daño o pérdida causada por o en conexión con el uso o la
          confianza en dicho contenido, bienes o servicios disponibles en o a través de dichos
          sitios web.
        </p>

        <h2 className='text-foreground font-bold uppercase'>
          Política de Contenido Generado por el Usuario
        </h2>
        <p>
          Si proporcionas contenido, comentarios, ideas, sugerencias o cualquier otro material (en
          conjunto, "Envío") a través del sitio web, otorgas a Andrés Raxón una licencia no
          exclusiva, perpetua, irrevocable, libre de regalías, sublicenciable y mundial para usar,
          reproducir, modificar, adaptar, publicar, traducir, crear obras derivadas de, distribuir y
          mostrar dicho Envío en cualquier forma, medio o tecnología, en todo o en parte, sin
          necesidad de compensación ni notificación. Este punto aplica a los mensajes enviados por
          el formulario de contacto.
        </p>

        <h2 className='text-foreground font-bold uppercase'>
          Exclusión de Garantías y Limitación de Responsabilidad
        </h2>
        <p>
          El sitio web se proporciona{' '}
          <strong className='text-foreground'>"tal cual" y "según disponibilidad"</strong>. Andrés
          Raxón no ofrece ninguna garantía, expresa o implícita, con respecto a la operación del
          sitio o la información, contenido, materiales o productos incluidos en él. No garantizamos
          que el sitio sea ininterrumpido o libre de errores. El uso del sitio es bajo tu propio
          riesgo.
        </p>
        <p>
          En la medida máxima permitida por la ley aplicable, Andrés Raxón no será responsable de
          ningún daño de cualquier tipo que surja del uso de este sitio, incluyendo, pero no
          limitado a, daños directos, indirectos, incidentales, punitivos y consecuentes, ni de la
          pérdida de datos o de beneficios.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Indemnización</h2>
        <p>
          Aceptas{' '}
          <strong className='text-foreground'>indemnizar y eximir de responsabilidad</strong> a
          Andrés Raxón, sus afiliados y sus respectivos directores, oficiales, agentes y empleados
          de y contra cualquier reclamo, demanda, daños, pérdidas, costos, responsabilidades y
          gastos, incluyendo honorarios de abogados, que surjan de tu uso de o tu incapacidad para
          usar el sitio web.
        </p>

        <h2 className='text-foreground font-bold uppercase'>
          Ley Aplicable y Resolución de Disputas
        </h2>
        <p>
          Estos Términos se regirán e interpretarán de acuerdo con las leyes de la{' '}
          <strong className='text-foreground'>República de Guatemala</strong>, sin dar efecto a sus
          principios de conflicto de leyes. Cualquier disputa, controversia o reclamo que surja de o
          esté relacionado con estos Términos será resuelto por los tribunales competentes en la
          Ciudad de Guatemala. Antes de iniciar cualquier acción legal, ambas partes acuerdan
          intentar resolver la disputa mediante negociación de buena fe.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Divisibilidad</h2>
        <p>
          Si alguna disposición de estos Términos es considerada inválida o inaplicable por un
          tribunal, las demás disposiciones de los Términos permanecerán en pleno vigor y efecto. La
          disposición inválida será modificada en la menor medida posible para que se vuelva válida
          y ejecutable de manera que se logre la intención original de las partes.
        </p>

        <h2 className='text-foreground font-bold uppercase'>No Renuncia</h2>
        <p>
          El hecho de que Andrés Raxón no ejerza o aplique cualquier derecho o disposición de estos
          Términos no constituirá una renuncia a dicho derecho o disposición. Cualquier renuncia a
          una disposición de estos Términos debe ser por escrito y firmada por una persona
          autorizada para actuar en nombre de Andrés Raxón.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Terminación del Uso</h2>
        <p>
          Nos reservamos el derecho de suspender o terminar tu acceso a nuestro sitio web, sin
          previo aviso, por cualquier motivo, incluyendo, sin limitación, el incumplimiento de estos
          Términos y Condiciones. Todas las disposiciones de los Términos que por su naturaleza
          deban sobrevivir a la terminación, sobrevivirán a la terminación, incluyendo, sin
          limitación, las disposiciones de propiedad, las exclusiones de garantía, la indemnización
          y las limitaciones de responsabilidad.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Disposiciones Generales</h2>
        <p>
          Estos Términos constituyen el acuerdo completo entre tú y Andrés Raxón con respecto al
          sitio web. La no ejecución de cualquier derecho o disposición de estos Términos no
          constituirá una renuncia a dicho derecho o disposición. Si alguna disposición de estos
          Términos es considerada inválida o inaplicable por un tribunal, las disposiciones
          restantes de estos Términos permanecerán en vigor. La{' '}
          <strong className='text-foreground'>cláusula de divisibilidad</strong> garantiza que la
          anulación de una parte no afectará al resto del documento.
        </p>
        <h2 className='text-foreground font-bold uppercase'>Modificaciones de los Términos</h2>
        <p>
          Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos
          Términos en cualquier momento. Al continuar accediendo o utilizando nuestro sitio web
          después de que esas revisiones entren en vigor, aceptas estar sujeto a los términos
          revisados. Si no estás de acuerdo con los nuevos términos, por favor, deja de usar el
          sitio web.
        </p>
        <h2 className='text-foreground font-bold uppercase'>
          Cambios a Estos Términos y Condiciones de Uso
        </h2>
        <p>
          Esta política puede ser actualizada ocasionalmente para reflejar cambios en nuestras
          prácticas o por razones operativas, legales o regulatorias. Te notificaremos por medio de
          un banner en el sitio web de cualquier cambio significativo publicando la nueva política
          en esta página.
        </p>
        <h2 className='text-foreground font-bold uppercase'>15. Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre estos Términos y Condiciones de Uso, por favor, contáctame
          en:{' '}
          <a
            className='text-foreground decoration-1 underline-offset-2'
            href={`mailto:${COMPANY.EMAIL_ADDRESSES.INFO}`}>
            {COMPANY.EMAIL_ADDRESSES.INFO}
          </a>
        </p>
      </div>
    </main>
  )
}
