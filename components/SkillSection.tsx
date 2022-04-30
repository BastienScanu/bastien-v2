import { useTranslation } from 'next-i18next';
import * as React from 'react'
import Image from 'next/image'
import Skill from '../models/Skill'
import styles from '../styles/SkillSection.module.scss'
import Illustration from './Illustration';
import { useState } from 'react';
import Techno from '../models/Techno';

const SkillSection = ({skill}: {skill: Skill}) => {
  const { t } = useTranslation(skill.name)
  const emptyTechno: Techno = {name: "", value: 0}
  const [displayedTechno, displayTechno] = useState(emptyTechno);

  const handleHover = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    const name = (e.target as HTMLImageElement).alt.replace(" logo", "")
    const techno = skill.technos.find(t => t.name === name) || emptyTechno
    displayTechno(techno)
  }

  const handleHoverOut = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    emptyTechno.name = displayedTechno.name
    displayTechno(emptyTechno)
  }

  return (
    <div id={skill.name}>
      <div className='pure-u-2-3'>
        <div className='sectionTitle'>
          <div className='separationLine small'></div>
          <h2>
            {t('title')}
          </h2>
          <div className='separationLine'></div>
        </div>
        <p>
          {t('desc')}
        </p>
        <div className='pure-u-1-2'>
          {skill.technos.map((techno: {"name": string, "value": number}) => {
            return (
              <div key={techno.name} className={styles.logoFrame}>
                <Image src={`/images/technos/${techno.name}.svg`} className={styles.logo}
                height={64} width={128} alt = {techno.name + " logo"}
                onMouseEnter={handleHover} onMouseLeave={handleHoverOut}/>
              </div>
            );
          })}
        </div>
        <div className={'pure-u-1-2 o-' + displayedTechno.value}>
          <p className={styles.progressTitle}>{t(`technos.${displayedTechno.name}.name`)}</p>
          <div className={styles.progressBar}>
            <div className={styles.progressFill} style={{width: displayedTechno.value + "%"}}></div>
          </div>
          <p className='legend'>{t(`technos.${displayedTechno.name}.level`)}</p>
        </div>
      </div>
      <div className='pure-u-1-3'>
        <Illustration name = {skill.name} />
      </div>
    </div>
  )
}

export default SkillSection
