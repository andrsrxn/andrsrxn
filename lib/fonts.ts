import { Instrument_Sans, Instrument_Serif } from 'next/font/google'

export const fontHeading = Instrument_Serif({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

export const fontBody = Instrument_Sans({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
  weight: 'variable',
})
