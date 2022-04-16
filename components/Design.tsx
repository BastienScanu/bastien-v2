import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Design = () => {
  const { t } = useTranslation('design')

  return (
    <div id="design">
      <h2>
        {t('title')}
      </h2>
    </div>
  )
}

export default Design
