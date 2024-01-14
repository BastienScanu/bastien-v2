import { useTranslation } from 'next-i18next'
import * as React from 'react'
import Image from "next/image"
import Skill from '../models/Skill'
import styles from '../styles/SkillSection.module.scss'
import Illustration from './Illustration'
import { useState } from 'react'
import Techno from '../models/Techno'

const SkillSection = ({ skill }: { skill: Skill }) => {
  const { t } = useTranslation([skill.name, 'skills'])
  const emptyTechno: Techno = { name: '', key: '', value: 0 }
  const [displayedTechno, displayTechno] = useState(emptyTechno)

  const handleHover = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    const key = (e.target as HTMLImageElement).alt.replace(' logo', '')
    const techno = skill.technos.find((t) => t.key === key) || emptyTechno
    displayTechno(techno)
  }

  const handleHoverOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault()
    emptyTechno.key = displayedTechno.key
    displayTechno(emptyTechno)
  }

  const level = (value: number) => {
    let level = 'expert'
    if (value < 91) level = 'confirmed'
    if (value < 81) level = 'intermediate'
    return t(`skills:${level}`)
  }

  return (
    <div id={skill.name} className={styles.skillSection}>
      <div className="pure-u-1-1 pure-u-md-1-3">
        <Illustration name={skill.name} />
      </div>
      <div className={'pure-u-1-1 pure-u-md-2-3 ' + styles.padding}>
        <div className="sectionTitle">
          <div className="separationLine small"></div>
          <h2>{t('title')}</h2>
          <div className="separationLine"></div>
        </div>
        <p>{t('desc')}</p>
        <div className="pure-u-1-1 pure-u-md-1-2">
          {skill.technos.map((techno: Techno) => {
            return (
              <div key={techno.name} className={styles.logoFrame}>
                <Image
                  src={`/images/technos/${techno.key}.svg`}
                  className={styles.logo}
                  height={64}
                  width={128}
                  alt={techno.key + ' logo'}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleHoverOut}
                  style={{
                    maxWidth: "100%",
                    height: "auto"
                  }} />
              </div>
            );
          })}
        </div>
        <div className={'pure-u-1-1 pure-u-md-1-2 o-' + displayedTechno.value}>
          <p className={styles.progressTitle}>{displayedTechno.name}</p>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: displayedTechno.value + '%' }}
            ></div>
          </div>
          <p className="legend">{level(displayedTechno.value)}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillSection
