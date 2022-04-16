import { useTranslation } from 'next-i18next';
import * as React from 'react'

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <p>
      {t('hi')}<br/>
      {t('name')}<br/>
      {t('job')}
    </p>
  )
}

export default Home
