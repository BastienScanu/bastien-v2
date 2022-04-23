import { useTranslation } from 'next-i18next';
import * as React from 'react'
import Image from 'next/image'
import Skill from '../models/Skill'
import styles from '../styles/SkillSection.module.scss'

const SkillSection = ({skill}: {skill: Skill}) => {
  const { t } = useTranslation(skill.name)

  return (
    <div id={skill.name}>
      <div className='pure-u-2-3'>
        <h2>
          {t('title')}
        </h2>
        <p>
          {t('desc')}
        </p>
        <div className='pure-u-1-2'>
          {skill.technos.map((techno: string) => {
            return (
              <div key={techno} className={styles.logoFrame}>
                <Image src={`/images/technos/${techno}-color.svg`} className={styles.logo}
                height={64} width={128} alt = {techno + " logo"} />
              </div>
            );
          })}
        </div>
        <div className='pure-u-1-2'>
        </div>
      </div>
      <div className='pure-u-1-3'>
        
      </div>
    </div>
  )
}

export default SkillSection
