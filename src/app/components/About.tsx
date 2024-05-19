import Image from 'next/image'
import styles from '../styles/About.module.scss'
import Link from 'next/link'
import initTranslations from '../../i18n'
import SvgSprite from './SvgSprite'

const About = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['about'])

  return (
    <section id="about" className="globalSection">
      <div className={styles.content}>
        <div className={styles.portrait}>
          <Image
            src={`/images/layout/bastien.svg`}
            height="150"
            width="150"
            alt={'vectorized portrait of Bastien Scanu'}
          />
          <button>
            <Link href={t('cvLink')}>{t('cv')}</Link>
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
          <p className="arrowLink">
            <Link href={'/#website'}>
              {t('website')} <span className="arrow">➜</span>
            </Link>
          </p>
        </div>
        <div className={styles.links}>
          <a
            href="https://www.linkedin.com/in/BastienScanu"
            target="_blank"
            rel="noreferrer"
          >
            <SvgSprite
              sprite="logos"
              name="linkedin"
              size={{ width: 20, height: 20 }}
            />
          </a>
          <a
            href="https://www.github.com/BastienScanu"
            target="_blank"
            rel="noreferrer"
          >
            <SvgSprite
              sprite="logos"
              name="github"
              size={{ width: 20, height: 20 }}
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
