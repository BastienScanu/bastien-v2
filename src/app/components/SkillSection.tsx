import * as React from 'react'
import Skill from '../models/Skill'
import styles from '../styles/SkillSection.module.scss'
import Illustration from './Illustration'
import Techno from '../models/Techno'
import initTranslations from '../../i18n'
import SvgSprite from './SvgSprite'
import ProgressBar from './ProgressBar'

const SkillSection = async ({
  skill,
  locale,
}: {
  skill: Skill
  locale: string
}) => {
  const { t } = await initTranslations(locale, [skill.name])

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
        <div className="pure-g">
          {skill.technos.map((techno: Techno) => {
            return (
              <div
                key={techno.name}
                className={'pure-u-1-1 pure-u-lg-1-2 ' + styles.skillLevel}
              >
                <SvgSprite
                  sprite="technos"
                  name={techno.key}
                  className={styles.logo}
                />
                <ProgressBar
                  locale={locale}
                  name={techno.name}
                  value={techno.value}
                />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SkillSection
