import initTranslations from '../../i18n'
import * as React from 'react'

const Footer = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['footer'])

  return <footer>{t('footer')}</footer>
}

export default Footer
