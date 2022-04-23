import { useTranslation } from 'next-i18next';
import * as React from 'react'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about">
      <p>
        {t('pitch')}
      </p>
      <p>
        {t('looking')}
      </p>
    </section>
  )
}

export default About
