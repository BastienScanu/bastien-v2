import * as React from 'react'
import SkillSection from './SkillSection'
import skillsData from '../../../public/data/skillsData'
import initTranslations from '../../i18n'

const Skills = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['skills'])

  return (
    <section id="skills" className="globalSection">
      <h1>{t('title')}</h1>
      {skillsData.map((skill) => {
        return <SkillSection key={skill.name} skill={skill} locale={locale} />
      })}
    </section>
  )
}

export default Skills
