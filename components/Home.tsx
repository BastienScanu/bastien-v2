import { useTranslation } from 'next-i18next'
import * as React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import ParallaxElement from './ParallaxElement'

const Home = () => {
  const { t } = useTranslation('home')
  return (
    <section id="home" className="pure-g">
      <div className="pure-u-1-1 pure-u-md-1-2">
        <ParallaxElement speed={-15}>
          <p className={styles.title}>
            {t('hi')}
            <br />
            {t('iam')} <span className="green">Bastien,</span>
            <br />
            {t('job1')}
            <br />
            {t('job2')}
          </p>
        </ParallaxElement>
      </div>
      <div className="pure-u-1-1 pure-u-md-1-2">
        <ParallaxElement className={styles.smartphone} speed={-5}>
          <Image
            src={`/images/layout/smartphone.svg`}
            height={150}
            width={150}
            alt="big screen"
          />
        </ParallaxElement>
        <ParallaxElement className={styles.bigScreen} speed={-5}>
          <Image
            src={`/images/layout/big-screen.svg`}
            height={600}
            width={600}
            alt="big screen"
          />
        </ParallaxElement>
        <ParallaxElement className={styles.laptop} speed={0}>
          <Image
            src={`/images/layout/laptop.svg`}
            height={300}
            width={300}
            alt="laptop"
          />
        </ParallaxElement>
        <ParallaxElement className={styles.mouse} speed={15}>
          <Image
            src={`/images/layout/mouse.svg`}
            height={64}
            width={64}
            alt="mouse"
          />
        </ParallaxElement>
      </div>
    </section>
  )
}

export default Home
