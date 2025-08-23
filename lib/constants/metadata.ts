import type { Metadata, Viewport } from 'next'
import { COMPANY } from '@/lib/constants/company'
import { SITE } from '@/lib/constants/site'

export const baseViewport: Viewport = {
  themeColor: SITE.SEO.COLOR_BACKGROUND,
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE.BASE_URL),
  title: {
    template: `%s | ${COMPANY.NAME}`,
    default: `${COMPANY.NAME}`,
  },
  alternates: {
    canonical: '/',
  },
  applicationName: COMPANY.NAME,
  referrer: 'strict-origin-when-cross-origin',
  description: COMPANY.DESCRIPTION,
  openGraph: {
    title: COMPANY.NAME,
    description: COMPANY.DESCRIPTION,
    siteName: COMPANY.NAME,
    url: '/',
    images: [
      {
        url: SITE.SEO.IMAGES.BANNER_SOCIAL,
        width: 1200,
        height: 630,
        alt: 'Logo de Marca Personal al centro con un gradiente por detrás simulando la superficie de un planeta en un fondo negro',
      },
    ],
    locale: 'es',
    countryName: 'GT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: COMPANY.NAME,
    description: COMPANY.DESCRIPTION,
    images: [SITE.SEO.IMAGES.BANNER_SOCIAL],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: COMPANY.NAME,
  },
  icons: {
    icon: [
      {
        url: SITE.SEO.IMAGES.ICON.ICO_SVG,
        type: 'image/svg+xml',
        rel: 'icon',
      },
    ],
    apple: { url: SITE.SEO.IMAGES.ICON.APPLE, sizes: '180x180', type: 'image/png' },
  },
}
