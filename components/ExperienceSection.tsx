import { useTranslation } from 'next-i18next';
import * as React from 'react'
import experienceData from '../public/data/experienceData'
import Experience from '../models/Experience'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = () => {
  const { t } = useTranslation('experience')

  return (
    <section id="experience">
      <h1>
        {t('title')}
      </h1>
      
      {experienceData.map((xp: Experience) => {
        return <ExperienceCard
          key = {xp.name}
          xp = {xp}
        />
      })}
    </section>
  )
}

export default ExperienceSection
