import type { Metadata } from 'next'
import { Separator } from '@/components/ui/separator'
import { COMPANY } from '@/lib/constants/company'
import { baseMetadata } from '@/lib/constants/metadata'

const TITLE = 'Política de Privacidad'
const DESCRIPTION =
  'Verifica como manejamos tus datos personales y las cookies que utilizamos en el sitio web.'
const URL = '/politica-de-privacidad'

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
    <main className='mt-40'>
      <div className='prose numbered-heading desktop:prose-xl font-body text-muted-foreground container mx-auto w-11/12'>
        <h1 className='text-foreground font-heading laptop:!text-7xl eading-none !mb-8 text-6xl !font-normal'>
          Política de Privacidad
        </h1>

        <p>
          En el sitio web personal de Andrés Raxón, la privacidad de nuestros usuarios es una
          prioridad fundamental. Esta Política de Privacidad describe cómo recopilamos, utilizamos y
          protegemos la información personal que nos proporcionas y la que es generada
          automáticamente cuando utilizas nuestros servicios en línea.
        </p>
        <Separator className='mt-12' />

        <h2 className='text-foreground font-bold uppercase'>
          Identidad del Responsable del Tratamiento de Datos
        </h2>
        <p>
          El responsable del tratamiento de los datos personales recopilados a través de este sitio
          web es: <strong className='text-foreground'>Carlos Andrés Raxón Castañeda</strong> con
          número de NIT: <strong className='text-foreground'>123984-4</strong> Para cualquier
          pregunta o inquietud, puedes contactarme directamente a través del link en la sección de
          Contacto.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Información que Recopilamos</h2>
        <p>Recopilamos dos tipos de información:</p>

        <h3 className='text-foreground font-bold uppercase'>
          Información que nos proporcionas directamente
        </h3>
        <p>
          Cuando utilizas nuestro formulario de contacto para solicitar información sobre servicios
          o proyectos, recopilamos la siguiente información:
        </p>
        <ul>
          <li>Nombre de la persona o empresa</li>
          <li>Dirección de correo electrónico</li>
          <li>Tipo de persona (individual o empresa)</li>
          <li>Lista de servicios de interés</li>
          <li>Comentarios o mensajes</li>
        </ul>
        <p>
          Esta información es esencial para poder responder a tus consultas, proporcionar
          cotizaciones y, en última instancia, para comunicarnos contigo sobre los servicios que
          solicitas.
        </p>

        <h3 className='text-foreground font-bold uppercase'>
          Información recopilada automáticamente
        </h3>
        <p>
          Al igual que la mayoría de los sitios web, nuestros servicios de hosting y de red de
          entrega de contenido recopilan automáticamente cierta información sobre tu visita. Esta
          información no te identifica directamente como individuo y se utiliza para fines de
          seguridad y rendimiento. Los datos que pueden ser recopilados incluyen, mas no limitados
          a:
        </p>
        <ul>
          <li>Dirección IP</li>
          <li>Tipo y versión del navegador (User Agent)</li>
          <li>Páginas visitadas en el sitio</li>
          <li>Fecha y hora de acceso</li>
        </ul>

        <h2 className='text-foreground font-bold uppercase'>Uso de la Información Recopilada</h2>
        <p>La información recopilada se utiliza con los siguientes propósitos:</p>
        <ul>
          <li>
            Para responder a tus solicitudes y proporcionarte los servicios o cotizaciones
            solicitadas.
          </li>
          <li>Para mejorar la calidad, seguridad y funcionalidad de nuestro sitio web.</li>
          <li>
            Para analizar el tráfico del sitio y entender cómo los usuarios interactúan con nuestros
            servicios.
          </li>
          <li>Para proteger el sitio contra actividades fraudulentas o maliciosas.</li>
        </ul>

        <h2 className='text-foreground font-bold uppercase'>Compartir tu Información</h2>
        <p>
          Tu información personal es privada y no la vendemos, alquilamos ni la compartimos con
          terceros para fines de marketing. Sin embargo, tu información puede ser compartida con
          servicios de terceros que utilizamos para operar nuestro sitio web, como Vercel y
          Cloudflare, únicamente en la medida necesaria para que ellos puedan proporcionarnos
          servicios de hosting, seguridad y red de entrega de contenido.
        </p>
        <h2 className='text-foreground font-bold uppercase'>
          Uso de Cookies y Tecnologías Similares
        </h2>
        <p>
          Nuestro sitio web utiliza tecnologías esenciales para su funcionamiento y seguridad. Estas
          tecnologías, incluyendo cookies, son utilizadas por nuestros proveedores de servicios para
          garantizar que el sitio esté protegido y funcione correctamente. No utilizamos cookies
          para fines de marketing o para rastrear tu actividad de navegación con fines
          publicitarios.
        </p>

        <h3 className='text-foreground font-bold uppercase'>Cookies de Terceros</h3>
        <p>
          Utilizamos servicios de terceros para mejorar la seguridad y el rendimiento de nuestro
          sitio web. Al usar nuestro sitio, estos proveedores pueden establecer cookies para fines
          estrictamente funcionales y de seguridad. Específicamente:
        </p>
        <ul>
          <li>
            <strong className='text-foreground'>Cloudflare:</strong> Utiliza cookies para
            identificar el tráfico malicioso y proteger el sitio contra ataques. Estas cookies son
            esenciales y no pueden ser deshabilitadas sin afectar la seguridad de la página.
          </li>
          <li>
            <strong className='text-foreground'>Vercel:</strong> Como plataforma de hosting, Vercel
            puede utilizar cookies para gestionar funciones técnicas, aunque para un sitio de
            portafolio estático como el tuyo, su uso es limitado. Te notificaremos si agregamos
            funcionalidades que requieran el uso de cookies para el seguimiento o la
            personalización.
          </li>
        </ul>
        <p>
          Al utilizar este sitio web, aceptas el uso de estas cookies funcionales y de seguridad.
          Puedes gestionar las cookies a través de la configuración de tu navegador, aunque esto
          podría afectar la funcionalidad de algunas partes del sitio.
        </p>
        <h2 className='text-foreground font-bold uppercase'>Seguridad de los Datos</h2>
        <p>
          Implementamos medidas de seguridad para proteger la información que recopilamos,
          incluyendo la encriptación de los datos en tránsito. Sin embargo, ningún método de
          transmisión por internet o de almacenamiento electrónico es 100% seguro. No podemos
          garantizar la seguridad absoluta de tus datos, pero nos comprometemos a tomar todas las
          precauciones razonables para protegerlos.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Tus Derechos</h2>
        <p>
          Tienes el derecho de acceder, corregir, actualizar o solicitar la eliminación de tu
          información personal en cualquier momento. Si deseas ejercer estos derechos, por favor,
          contáctame a través de la información de contacto provista al final de esta política.
        </p>

        <h2 className='text-foreground font-bold uppercase'>
          Cambios a Esta Política de Privacidad
        </h2>
        <p>
          Esta política puede ser actualizada ocasionalmente para reflejar cambios en nuestras
          prácticas o por razones operativas, legales o regulatorias. Te notificaremos por medio de
          un banner en el sitio web de cualquier cambio significativo publicando la nueva política
          en esta página.
        </p>

        <h2 className='text-foreground font-bold uppercase'>Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre esta Política de Privacidad, por favor, contáctame en:{' '}
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
