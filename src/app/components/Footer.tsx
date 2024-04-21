import initTranslations from '../../i18n'

const Footer = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['footer'])

  return <footer>{t('footer')}</footer>
}

export default Footer
