import experienceData from '../../../public/data/experienceData'
import Experience from '../models/Experience'
import ExperienceCard from './ExperienceCard'
import initTranslations from '../../i18n'

const ExperienceSection = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, ['experience'])

  return (
    <section id="experience" className="globalSection">
      <h1>{t('title')}</h1>

      {experienceData.map((xp: Experience) => {
        return <ExperienceCard key={xp.name} xp={xp} />
      })}
    </section>
  )
}

export default ExperienceSection
