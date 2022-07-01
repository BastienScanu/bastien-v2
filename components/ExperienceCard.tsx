import { useTranslation } from 'next-i18next'
import * as React from 'react'
import Experience from '../models/Experience'
import useCollapse from 'react-collapsed'
import {
  faChevronUp,
  faChevronDown,
  faLocationDot,
  faLink,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/ExperienceCard.module.scss'
import Image from 'next/image'

const ExperienceCard = ({ xp }: { xp: Experience }) => {
  const { t } = useTranslation('experience')
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div
      id={xp.name}
      className={styles.card + (isExpanded ? ' ' + styles.expanded : '')}
    >
      <button className={styles.title} {...getToggleProps()}>
        <div className={styles.date + ' pure-u-1-5'}>
          <h5>{t(`${xp.name}.date`)}</h5>
        </div>
        <div className="pure-u-4-5">
          <div className={styles.titleRight}>
            <div className={styles.job}>
              <div className={styles.dot}></div>
              <div className={styles.jobTitle}>
                <h3>{xp.company}</h3>
                <h4>{t(`${xp.name}.job`)}</h4>
              </div>
            </div>
            <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} />
          </div>
        </div>
      </button>
      <section {...getCollapseProps()}>
        <div className="pure-g">
          <div className={styles.logo + ' pure-u-1-5'}>
            <Image
              src={`/images/xp/${xp.name.replace(/\d/, '')}.svg`}
              height={50}
              width={100}
              alt={xp.name.replace(/\d/, '') + ' logo'}
            />
            <p className="small">
              <a href={xp.maps} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLocationDot} />
                {xp.location}
              </a>
              <br />
              <a
                href={t(`${xp.name}.website`)}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLink} />
                {t(`website`)}
              </a>
            </p>
          </div>
          <div className="pure-u-4-5">
            <div className={styles.content}>
              <h5>{t(`${xp.type}.type`)}</h5>
              <p>{t(`${xp.name}.desc`)}</p>
              <h5>{t(`${xp.type}.activity`)}</h5>
              <p>{t(`${xp.name}.mission.desc`)}</p>
              <ul>
                {Array.from({ length: xp.bulletPoints }).map((_, i) => (
                  <li key={i}>{t(`${xp.name}.mission.ul${i + 1}`)}</li>
                ))}
              </ul>
              <ul className={styles.technos}>
                {xp.technos.map((techno) => (
                  <li key={techno}>{techno}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ExperienceCard
