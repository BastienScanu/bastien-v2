import { useTranslation } from 'next-i18next'
import * as React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import styles from '../styles/About.module.scss'
import Link from 'next/link'
import { faArrowRightLong, faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <section id="about">
      <div className={styles.content}>
        <div className={styles.portrait}>
          <Image
            src={`/images/layout/bastien.svg`}
            height="150px"
            width="150px"
            layout="fixed"
            alt={'vectorized portrait of Bastien Scanu'}
          />
          <button>
            <Link href={t('cvLink')}>
              <a>
                <div className="hoverContent">
                  <FontAwesomeIcon icon={faDownload} />
                </div>
              </a>
            </Link>
            <span className="buttonText">{t('cv')}</span>
          </button>
        </div>
        <div className={styles.triangle}></div>
        <div>
          <p className={styles.pitch}>
            {t('pitch1')}
            <br />
            {t('pitch2')}
            <br />
            {t('pitch3')}
            <br />
          </p>
          <p className={styles.siteLink}>
            <Link href="/site">
              <a>
                {t('website')}
                <FontAwesomeIcon icon={faArrowRightLong} />
              </a>
            </Link>
          </p>
        </div>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/BastienScanu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.github.com/BastienScanu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.twitter.com/BastienScanu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
