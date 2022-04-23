import { useTranslation } from 'next-i18next';
import * as React from 'react'
import styles from '../styles/Home.module.scss'

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <section>
      <p id="home" className={styles.title}>
        {t('hi')}<br/>
        {t('name')}<br/>
        {t('job')}
      </p>
    </section>
  )
}

export default Home
