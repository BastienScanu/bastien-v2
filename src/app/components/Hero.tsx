import * as React from 'react'
import styles from '../styles/Hero.module.scss'
import AnimatedLogo from './AnimatedLogo'
import initTranslations from '../../i18n'

const Hero = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['hero'])
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.logoContainer}>
        <AnimatedLogo size={300} />
      </div>
      <p className={styles.title}>
        <span>{t('hi')}</span>
        <br />
        <span>
          {t('iam')} <span className="green">Bastien,</span>
        </span>
        <br />
        <span>{t('job1')}</span>
        <br />
        <span>{t('job2')}</span>
      </p>
    </section>
  )
}

export default Hero
