import { useTranslation } from 'next-i18next';
import * as React from 'react'
import Skill from '../models/Skill'

const SkillSection = ({skill}: {skill: Skill}) => {
  const { t } = useTranslation(skill.name)

  return (
    <div id={skill.name}>
      <h2>
        {t('title')}
      </h2>
      <p>
        {t('desc')}
      </p>
      <ul>
      {skill.technos.map((techno: string) => {
        return (
          <li key={techno}>{t(`technos.${techno}`)}</li>
        );
      })}
      </ul>
    </div>
  )
}

export default SkillSection
