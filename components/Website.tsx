import { useTranslation } from 'next-i18next'
import * as React from 'react'

const Website = () => {
  const { t } = useTranslation('site')
  return (
    <section id="site" className="pure-g">
      <h1>{t('title')}</h1>
    </section>
  )
}

export default Website
