import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('header');

  return(
    <header>
      <h1>{t('header:home')}</h1>
        <nav>
          <Link href="/">
            <a>{t('home')}</a>
          </Link>
          <Link href="#about">
            <a>{t('about')}</a>
          </Link>
          <Link href="#skills">
            <a>{t('skills')}</a>
          </Link>
          <Link href="#experience">
            <a>{t('experience')}</a>
          </Link>
        </nav>
      </header>
  )
}

export default Header
