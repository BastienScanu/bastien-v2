import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Frontend = () => {
  const { t } = useTranslation('frontend')

  return (
    <div id="frontend">
      <h2>
        {t('title')}
      </h2>
    </div>
  )
}

export default Frontend
