import initTranslations from '../../i18n'

const Website = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['website'])

  return (
    <section id="website" className="globalSection">
      <h1>{t('title')}</h1>
    </section>
  )
}

export default Website
