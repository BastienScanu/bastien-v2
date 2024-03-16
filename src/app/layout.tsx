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
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#56ab2b" />
        <meta name="msapplication-TileColor" content="#121614" />
        <meta name="theme-color" content="#121614" />
      </head>
      <body>{children}</body>
    </html>
  )
}
