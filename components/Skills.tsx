import { useTranslation } from 'next-i18next'
import * as React from 'react'
import SkillSection from './SkillSection'
import skillsData from '../public/data/skillsData'

const Skills = () => {
  const { t } = useTranslation('skills')

  return (
    <section id="skills">
      <h1>{t('title')}</h1>
      {skillsData.map((skill) => {
        return <SkillSection key={skill.name} skill={skill} />
      })}
    </section>
  )
}

export default Skills
