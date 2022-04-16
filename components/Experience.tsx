import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Experience = () => {
  const { t } = useTranslation('experience')

  return (
    <div id="experience">
      <h1>
        {t('title')}
      </h1>
    </div>
  )
}

export default Experience
