import type { Metadata } from 'next'
import { ReactNode } from 'react'
import i18nConfig from '../../i18nConfig'
import { Fira_Sans } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'

const fira = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-fira',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
})

export const metadata: Metadata = {
  title: 'Bastien Scanu',
  description: 'My personal website',
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang={locale} className={`${jakarta.variable} ${fira.variable}`}>
      <body>{children}</body>
    </html>
  )
}
