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

export const ContactEmailTemplate = ({
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
}: Readonly<EmailTemplateProps>) => (
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
        {services.map(service => (
          <ul key={service}>
            <li>{service}</li>
          </ul>
        ))}
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
