import { getTranslations } from 'next-intl/server'
import type { z } from 'zod'
import { Separator } from '@/components/ui/separator'
import type { contactSchema } from '@/lib/schemas/contact-schema'

interface EmailTemplateProps extends z.infer<typeof contactSchema> {
  country: string
  city: string
  state: string
  browser: string
  device: string
  ip: string
}

export const ContactEmailTemplate = async ({
  clientType,
  email,
  fullName,
  services,
  comments,
  country,
  city,
  state,
  browser,
  device,
  ip,
}: Readonly<EmailTemplateProps>) => {
  const tServices = await getTranslations('services')
  const _services = {
    webDev: services.includes('web-dev') ? tServices('webDev.title') : null,
    marketing: services.includes('marketing') ? tServices('marketing.title') : null,
    branding: services.includes('branding') ? tServices('brand.title') : null,
  }

  const _servicesArray = Object.values(_services).filter(service => service !== null)

  return (
    <div>
      <h1>Solicitud de servicios</h1>
      <ul>
        <li>
          <strong>Tipo de cliente</strong>: {clientType}
        </li>
        <li>
          <strong>Nombre</strong>: {fullName}
        </li>
        <li>
          <strong>Correo electrónico</strong>: {email}
        </li>
        <li>
          <strong>Servicios</strong>:
          <ul>
            {_servicesArray.map(service => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </li>
        <li>
          <strong>Comentarios</strong>: {comments}
        </li>
      </ul>
      <Separator className='my-12' />
      <ul>
        <li>
          <strong>IP</strong>: {ip}
        </li>
        <li>
          <strong>País</strong>: {country}
        </li>
        <li>
          <strong>Estado</strong>: {state}
        </li>
        <li>
          <strong>Ciudad</strong>: {city}
        </li>
      </ul>
      <Separator className='my-12' />
      <ul>
        <li>
          <strong>Navegador</strong>: {browser}
        </li>
        <li>
          <strong>Dispositivo</strong>: {device}
        </li>
      </ul>
    </div>
  )
}
