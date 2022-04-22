import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'next-i18next';

const Header = () => {
  const { t } = useTranslation('header');

  return(
    <header className='header'>
        <nav className="pure-menu pure-menu-horizontal pure-menu-fixed">
          <ul className="pure-menu-list">
            <li className="pure-menu-item">
              <Link href="#home">
                <a className="pure-menu-link">{t('home')}</a>
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link href="#about">
                <a className="pure-menu-link">{t('about')}</a>
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link href="#skills">
                <a className="pure-menu-link">{t('skills')}</a>
              </Link>
            </li>
            <li className="pure-menu-item">
              <Link href="#experience">
                <a className="pure-menu-link">{t('experience')}</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header
