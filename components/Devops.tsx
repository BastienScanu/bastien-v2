import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Devops = () => {
  const { t } = useTranslation('devops')

  return (
    <div id="devops">
      <h2>
        {t('title')}
      </h2>
    </div>
  )
}

export default Devops
