import { useTranslation } from 'next-i18next';
import * as React from 'react'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <div id="about">
      <h1>
        {t('hello')}
      </h1>
    </div>
  )
}

export default About
