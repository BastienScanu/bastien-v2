import Header from '../components/Header'
import TranslationsProvider from '../components/TranslationsProvider'
import initTranslations from '../../i18n'

const i18nNamespaces = [
  'common',
  'home',
  'header',
  'about',
  'back',
  'database',
  'design',
  'devops',
  'experience',
  'front',
  'skills',
]

export default async function Layout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const { resources } = await initTranslations(locale, i18nNamespaces)
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Header />
      <main className="pure-g">{children}</main>
    </TranslationsProvider>
  )
}
