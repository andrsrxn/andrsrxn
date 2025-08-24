'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRef, useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'
import { SendContactMessage } from '@/actions/contact'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  ChoiceBoxSingle,
  ChoiceBoxSingleIndicator,
  ChoiceBoxSingleItem,
} from '@/components/ui/choicebox-single'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/sonner'
import { Textarea } from '@/components/ui/textarea'
import { envClient } from '@/lib/config/env.client'
import { SERVICES } from '@/lib/constants/services'
import { contactSchema } from '@/lib/schemas/contact-schema'
import { cn } from '@/lib/utils'

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: allowed
export const ContactForm = () => {
  const [typeName, setTypeName] = useState('Nombre(s) y apellido(s)')
  const [showCaptcha, setShowCaptcha] = useState(false)
  const [pending, startTransition] = useTransition()
  const [token, setToken] = useState<string | null>(null)
  const captchaRef = useRef<HCaptcha>(null)

  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      email: '',
      fullName: '',
      comments: '',
      services: [],
      clientType: undefined,
    },
    shouldFocusError: true,
  })
  // useEffect(() => {
  // captchaRef.current?.render()
  // }, [captchaRef])
  function onSubmit(values: z.infer<typeof contactSchema>) {
    if (!token) {
      toast.error('Verifica que eres humano', {
        description: 'Marca la última casilla para verificar tu identidad',
      })
      return
    }
    startTransition(async () => {
      try {
        const response = await SendContactMessage(values)
        if (response.success) {
          toast.success(response.message, {
            description: response.description,
          })
          form.reset()
          return
        }
        toast.error(response.message, {
          description: response.description,
        })
      } catch (error) {
        console.error(error)
        toast.error('No se pudo enviar tu mensaje', {
          description: 'Ocurrió un error inesperado. Por favor, intentalo más tarde',
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='laptop:gap-8 desktop:p-8 relative z-50 mx-auto grid w-11/12 max-w-xl gap-7 border border-b-0 bg-gradient-to-b from-neutral-900 p-6'>
        <FormField
          control={form.control}
          name='clientType'
          render={({ field: { value, onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>Tipo de cliente</FormLabel>
              <FormControl>
                <ChoiceBoxSingle
                  className='group grid w-full grid-cols-2 gap-4'
                  value={value ?? ''}
                  onValueChange={val => {
                    setTypeName(
                      val === 'Empresa' ? 'Nombre de la empresa' : 'Nombre(s) y apellido(s)'
                    )
                    onChange(val)
                  }}>
                  <ChoiceBoxSingleItem
                    {...rest}
                    disabled={pending || rest.disabled}
                    className='relative grid w-full gap-1 border p-4'
                    value='Freelancer'>
                    <span className='desktop:text-base mb-2 block text-center text-sm leading-none font-medium'>
                      Freelancer
                    </span>
                    <span className='text-muted-foreground desktop:text-base text-sm leading-tight font-normal text-wrap'>
                      Trabajador
                      <span className='block'>independiente</span>
                    </span>
                    <ChoiceBoxSingleIndicator className='absolute top-1.5 right-1.5' />
                  </ChoiceBoxSingleItem>
                  <ChoiceBoxSingleItem
                    {...rest}
                    disabled={pending || rest.disabled}
                    className='relative grid w-full gap-1 border p-4'
                    value='Empresa'>
                    <span className='desktop:text-base mb-2 block text-center text-sm leading-none font-medium'>
                      Empresa
                    </span>{' '}
                    <span className='text-muted-foreground desktop:text-base text-sm leading-tight font-normal text-wrap'>
                      Persona
                      <span className='block'>jurídica</span>
                    </span>
                    <ChoiceBoxSingleIndicator className='absolute top-1.5 right-1.5' />
                  </ChoiceBoxSingleItem>
                </ChoiceBoxSingle>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='fullName'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{typeName}</FormLabel>
              <FormControl>
                <Input
                  onFocus={() => setShowCaptcha(true)}
                  disabled={pending}
                  placeholder={typeName === 'Nombre de la empresa' ? 'Acme S.A.' : 'José Perez'}
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input disabled={pending} placeholder='nombre@dominio.com' {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='services'
          render={({ field: { ref, ...rest } }) => {
            return (
              <div>
                <FormItem>
                  <FormLabel>Servicios que te interesan</FormLabel>
                  <FormDescription>
                    Puedes agregar más detalles en Comentarios sobre lo que necesitas.
                  </FormDescription>
                  <FormControl>
                    <div>
                      <div className='mt-3 mb-5 flex flex-col justify-between gap-6'>
                        {Object.values(SERVICES).map((SERVICE, i) => (
                          <div key={SERVICE.TITLE} className='flex items-center gap-2'>
                            <Checkbox
                              ref={i === 0 ? ref : null}
                              id={`ch-${SERVICE.SLUG}`}
                              disabled={pending}
                              onBlur={rest.onBlur}
                              checked={rest.value?.includes(SERVICE.TITLE)}
                              onCheckedChange={checked => {
                                return checked
                                  ? rest.onChange([...rest.value, SERVICE.TITLE])
                                  : rest.onChange(rest.value.filter(val => val !== SERVICE.TITLE))
                              }}
                            />

                            <FormLabel
                              htmlFor={`ch-${SERVICE.SLUG}`}
                              className={cn(
                                'cursor-pointer',
                                pending && 'opacity-disabled pointer-events-none'
                              )}>
                              {SERVICE.TITLE}
                            </FormLabel>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className='-mt-4' />
                </FormItem>
              </div>
            )
          }}
        />
        <FormField
          control={form.control}
          name='comments'
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Comentarios <span className='font-normal'>(opcional)</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  disabled={pending}
                  placeholder='Detalles del proyecto, servicios en específico, necesidades de la marca, información relevante, etc...'
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        {showCaptcha && (
          <HCaptcha
            theme='dark'
            loadAsync
            languageOverride='es-419'
            sentry={false}
            sitekey={envClient.NEXT_PUBLIC_HCAPTCHA_SITEKEY}
            onVerify={setToken}
            ref={captchaRef}
          />
        )}

        <Button type='submit' className='mt-4 rounded-none' size='lg' disabled={pending}>
          {pending ? 'Enviando...' : 'Contactar'}
        </Button>
      </form>
    </Form>
  )
}
