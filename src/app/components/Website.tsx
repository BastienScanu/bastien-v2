import initTranslations from '../../i18n'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Website.module.scss'

const Website = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['website'])

  return (
    <section id="website" className="globalSection">
      <h1>{t('title')}</h1>
      <div className={styles.websiteContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={`/images/layout/stack.svg`}
            alt={
              'Logo of my website surrounded by the logos of Next.js, Node.js, React, Sass, Github and Figma'
            }
            fill={true}
          />
          <button>
            <a
              href="https://github.com/BastienScanu/bastien-v2"
              target="_blank"
            >
              {t('githubLink')}
            </a>
          </button>
        </div>
        <div className={styles.textContainer}>
          <p>{t('builtWith')}</p>
          <p>
            {t('source')}
            <a
              target="_blank"
              href="https://github.com/BastienScanu/bastien-v2"
            >
              {t('github')}
            </a>
          </p>
          <p>
            {t('dev')}{' '}
            <a target="_blank" href="https://www.bastien-scanu.com">
              www.bastien-scanu.com
            </a>
          </p>
          <p>{t('thanks')}</p>
        </div>
      </div>
    </section>
  )
}

export default Website
