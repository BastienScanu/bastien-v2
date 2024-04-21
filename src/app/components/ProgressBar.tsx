import styles from '../styles/ProgressBar.module.scss'
import initTranslations from '../../i18n'

const ProgressBar = async ({
  locale,
  name,
  value,
}: {
  locale: string
  name: string
  value: number
}) => {
  const { t } = await initTranslations(locale, ['progressBar'])

  const level = (value: number) => {
    let level = 'expert'
    if (value < 91) level = 'confirmed'
    if (value < 81) level = 'intermediate'
    return t(level)
  }

  return (
    <div className={styles.progressBlock}>
      <p className={styles.progressTitle}>{name}</p>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: value + '%' }}
        ></div>
      </div>
      <p className="legend">{level(value)}</p>
    </div>
  )
}

export default ProgressBar
