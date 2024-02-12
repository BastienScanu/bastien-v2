import * as React from 'react'
import styles from '../styles/Hero.module.scss'
import AnimatedLogo from './AnimatedLogo'
import initTranslations from '../../i18n'

const Hero = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['hero'])
  return (
    <section id="hero">
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

export default Hero
