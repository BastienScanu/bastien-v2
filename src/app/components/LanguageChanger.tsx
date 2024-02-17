'use client'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useTranslation } from 'react-i18next'
import styles from '../styles/LanguageChanger.module.scss'
import i18nConfig from '../../../i18nConfig'

export default function LanguageChanger() {
  const { i18n } = useTranslation()
  const currentLocale = i18n.language
  const otherLocale = currentLocale === 'en' ? 'fr' : 'en'
  const router = useRouter()
  const currentPathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const newLocale = (e.target as HTMLElement).innerText.toLowerCase()

    // set cookie for next-i18n-router
    const days = 30
    const date = new Date()
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    const expires = date.toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push('/' + newLocale + currentPathname)
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`))
    }

    router.refresh()
  }

  return (
    <button onClick={handleClick} className={styles.languageChanger}>
      {otherLocale.toUpperCase()}
    </button>
  )
}
