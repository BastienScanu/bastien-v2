import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Backend = () => {
  const { t } = useTranslation('backend')

  return (
    <div id="backend">
      <h2>
        {t('title')}
      </h2>
    </div>
  )
}

export default Backend
