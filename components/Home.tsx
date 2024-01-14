import { useTranslation } from 'next-i18next'
import * as React from 'react'
import styles from '../styles/Home.module.scss'
import AnimatedLogo from './AnimatedLogo'

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <section id="home" className="pure-g">
      <div className="pure-u-1-1 pure-u-md-1-2">
        <AnimatedLogo />
      </div>
      <div className="pure-u-1-1 pure-u-md-1-2">
        <p className={styles.title}>
          {t('hi')}
          <br />
          {t('iam')} <span className="green">Bastien,</span>
          <br />
          {t('job1')}
          <br />
          {t('job2')}
        </p>
      </div>
    </section>
  )
}

export default Home
