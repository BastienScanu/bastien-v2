import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Database = () => {
  const { t } = useTranslation('database')

  return (
    <div id="database">
      <h2>
        {t('title')}
      </h2>
    </div>
  )
}

export default Database
