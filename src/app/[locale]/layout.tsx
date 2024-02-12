import Header from '../components/Header'
import Footer from '../components/Footer'
import TranslationsProvider from '../components/TranslationsProvider'
import initTranslations from '../../i18n'

const i18nNamespaces = [
  'common',
  'home',
  'header',
  'footer',
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
      <Footer locale={locale} />
    </TranslationsProvider>
  )
}
