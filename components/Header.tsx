import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('header');

  return(
    <header>
        <nav>
          <Link href="/">
            <a>{t('home')}</a>
          </Link>
        </nav>
      </header>
  )
}

export default Header
