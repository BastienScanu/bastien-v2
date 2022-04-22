import { useTranslation } from 'next-i18next';
import * as React from 'react'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about">
      <h1>
        {t('hello')}
      </h1>
    </section>
  )
}

export default About
