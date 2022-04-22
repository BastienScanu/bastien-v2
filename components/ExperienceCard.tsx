import { useTranslation } from 'next-i18next';
import * as React from 'react'
import Experience from '../models/Experience'

const ExperienceCard = ({xp}: {xp: Experience}) => {
  const { t } = useTranslation('experience')

  return (
    <div id={xp.name}>
      <h3>
      {xp.company} - {t(`${xp.name}.job`)}
      </h3>
      <h4>{t(`${xp.name}.date`)} - {xp.location}</h4>
      <p>
        {t(`${xp.name}.desc`)}
      </p>
      <p>
        {t(`${xp.name}.mission`)}
      </p>
      
    </div>
  )
}

export default ExperienceCard
