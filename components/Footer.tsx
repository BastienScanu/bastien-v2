import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Footer = () => {
  const { t } = useTranslation('footer');

  return (
    <footer>
      {t('footer')}
    </footer>
  )
}

export default Footer
