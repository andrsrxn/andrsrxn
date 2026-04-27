'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useState, useTransition } from 'react'
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
import { SERVICES } from '@/lib/constants/services'
import { contactSchema, translateError } from '@/lib/schemas/contact-schema'
import { cn } from '@/lib/utils'

// biome-ignore lint/complexity/noExcessiveLinesPerFunction: allowed
export const ContactForm = () => {
  const t = useTranslations('homePage.contact.form')
  const tErrors = useTranslations('homePage.contact.form.errors.fields')
  const [typeName, setTypeName] = useState(t('fields.nameOrCompany.labelFreelancer'))
  const [pending, startTransition] = useTransition()
  const tServices = useTranslations('services')

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

  function onSubmit(values: z.infer<typeof contactSchema>) {
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
      } catch {
        toast.error(t('errors.unexpected.title'), {
          description: t('errors.unexpected.description'),
        })
      }
    })
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='laptop:gap-8 desktop:p-8 relative z-50 mx-auto grid w-11/12 max-w-xl gap-7 border border-b-0 bg-linear-to-b from-neutral-900 p-6'>
        <FormField
          control={form.control}
          name='clientType'
          render={({ field: { value, onChange, ...rest } }) => (
            <FormItem>
              <FormLabel>{t('fields.clientType.label')}</FormLabel>
              <FormControl>
                <ChoiceBoxSingle
                  className='group grid w-full grid-cols-2 gap-4'
                  value={value ?? ''}
                  onValueChange={val => {
                    setTypeName(
                      val === 'company'
                        ? t('fields.nameOrCompany.labelCompany')
                        : t('fields.nameOrCompany.labelFreelancer')
                    )
                    onChange(val)
                  }}>
                  <ChoiceBoxSingleItem
                    {...rest}
                    disabled={pending || rest.disabled}
                    className='relative grid w-full gap-1 border p-4'
                    value='freelancer'>
                    <span className='desktop:text-base mb-2 block text-center text-sm leading-none font-medium'>
                      {t('fields.clientType.freelancer')}
                    </span>
                    <span className='text-muted-foreground desktop:text-base text-sm leading-tight font-normal text-wrap'>
                      {t.rich('fields.clientType.freelancerDescription', {
                        span: chunks => <span className='block'>{chunks}</span>,
                      })}
                    </span>
                    <ChoiceBoxSingleIndicator className='absolute top-1.5 right-1.5' />
                  </ChoiceBoxSingleItem>
                  <ChoiceBoxSingleItem
                    {...rest}
                    disabled={pending || rest.disabled}
                    className='relative grid w-full gap-1 border p-4'
                    value='company'>
                    <span className='desktop:text-base mb-2 block text-center text-sm leading-none font-medium'>
                      {t('fields.clientType.company')}
                    </span>{' '}
                    <span className='text-muted-foreground desktop:text-base text-sm leading-tight font-normal text-wrap'>
                      {t.rich('fields.clientType.companyDescription', {
                        span: chunks => <span className='block'>{chunks}</span>,
                      })}
                    </span>
                    <ChoiceBoxSingleIndicator className='absolute top-1.5 right-1.5' />
                  </ChoiceBoxSingleItem>
                </ChoiceBoxSingle>
              </FormControl>

              <FormMessage>
                {translateError(tErrors, form.formState.errors.clientType?.message)}
              </FormMessage>
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
                  className='tablet:text-base'
                  disabled={pending}
                  placeholder={
                    typeName === t('fields.nameOrCompany.labelCompany')
                      ? t('fields.nameOrCompany.placeholderCompany')
                      : t('fields.nameOrCompany.placeholderFreelancer')
                  }
                  {...field}
                />
              </FormControl>

              <FormMessage>
                {translateError(tErrors, form.formState.errors.fullName?.message)}
              </FormMessage>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('fields.email.label')}</FormLabel>
              <FormControl>
                <Input
                  className='tablet:text-base'
                  disabled={pending}
                  placeholder={t('fields.email.placeholder')}
                  {...field}
                />
              </FormControl>

              <FormMessage>
                {translateError(tErrors, form.formState.errors.email?.message)}
              </FormMessage>
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
                  <FormLabel>{t('fields.services.label')}</FormLabel>
                  <FormDescription>{t('fields.services.description')}</FormDescription>
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
                              checked={rest.value?.includes(SERVICE.SLUG)}
                              onCheckedChange={checked => {
                                return checked
                                  ? rest.onChange([...rest.value, SERVICE.SLUG])
                                  : rest.onChange(rest.value.filter(val => val !== SERVICE.SLUG))
                              }}
                            />

                            <FormLabel
                              htmlFor={`ch-${SERVICE.SLUG}`}
                              className={cn(
                                'cursor-pointer',
                                pending && 'opacity-disabled pointer-events-none'
                              )}>
                              {tServices(SERVICE.TITLE)}
                            </FormLabel>
                          </div>
                        ))}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage className='-mt-4'>
                    {translateError(tErrors, form.formState.errors.services?.message)}
                  </FormMessage>
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
                {t.rich('fields.comments.label', {
                  span: chunks => <span className='font-normal'>{chunks}</span>,
                })}
              </FormLabel>
              <FormControl>
                <Textarea
                  className='tablet:text-base'
                  disabled={pending}
                  placeholder={t('fields.comments.placeholder')}
                  {...field}
                />
              </FormControl>

              <FormMessage>
                {translateError(tErrors, form.formState.errors.comments?.message)}
              </FormMessage>
            </FormItem>
          )}
        />

        <Button type='submit' className='mt-4 rounded-none' size='lg' disabled={pending}>
          {pending ? t('fields.submitButton.sending') : t('fields.submitButton.label')}
        </Button>
      </form>
    </Form>
  )
}
