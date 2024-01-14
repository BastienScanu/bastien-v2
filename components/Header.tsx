import * as React from 'react'
import Link from 'next/link'
import Image from "next/image"
import { useTranslation } from 'next-i18next'
import styles from '../styles/Header.module.scss'
import { useEffect, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = () => {
  const { t } = useTranslation('header')
  const { i18n } = useTranslation('header')
  const lang = i18n.language === 'fr' ? 'en' : 'fr'

  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const [isMenuActive, setMenuActive] = useState(false)

  const handleMenu = () => {
    setMenuActive(!isMenuActive)
  }

  return (
    <header
      className={styles.header + (scrollY > 50 ? '' : ' ' + styles.transparent)}
    >
      <div className={styles.content}>
        <div className={styles.logo}>
          <Link href="/">
            <a>
              <Image
                src={`/images/layout/logo-texte.svg`}
                height="70px"
                width="120px"
                alt={'Logo Bastien Scanu'}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </a>
          </Link>
        </div>
        <nav className={isMenuActive ? styles.active : ''}>
          <ul>
            <li onClick={handleMenu}>
              <Link href="/#home">
                <a>{t('home')}</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/#about">
                <a>{t('about')}</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/#skills">
                <a>{t('skills')}</a>
              </Link>
            </li>
            <li onClick={handleMenu}>
              <Link href="/#experience">
                <a>{t('experience')}</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.rightMenu}>
          <Link href="" locale={lang}>
            <a className={styles.lang}>{lang.toUpperCase()}</a>
          </Link>
          <FontAwesomeIcon
            icon={faBars}
            className={styles.hamburger}
            onClick={handleMenu}
          />
        </div>
      </div>
    </header>
  );
}

export default Header
