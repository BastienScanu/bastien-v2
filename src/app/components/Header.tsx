'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import styles from '../styles/Header.module.scss'
import { useEffect, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageChanger from './LanguageChanger'
import SvgSprite from './SvgSprite'

const Header = () => {
  const { t } = useTranslation('header')
  const [isMenuActive, setMenuActive] = useState(false)

  const handleMenu = () => {
    setMenuActive(!isMenuActive)
  }

  const [activeSection, setActiveSection] = useState('hero')
  const navItems = ['hero', 'about', 'skills', 'experience', 'website']

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item))

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 20,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (navItems.includes(entry.target.id)) {
            setActiveSection(entry.target.id)
          }
        }
      })
    }, observerOptions)

    sections?.forEach((section) => {
      section && observer.observe(section)
    })
  }, [])

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <div className={styles.headerLogo}>
            <SvgSprite
              sprite="logos"
              name="bastien"
              className={styles.logo}
              size={{ height: 54, width: 43 }}
            />
            <div className={styles.logoText}>
              <span>Bastien</span>
              <span>Scanu</span>
            </div>
          </div>
        </Link>
        <nav className={isMenuActive ? styles.active : ''}>
          <ul>
            {navItems.map((item) => {
              return (
                <li
                  className={activeSection === item ? styles.active : ''}
                  onClick={handleMenu}
                  key={item}
                >
                  <Link href={'/#' + item}>{t(item)}</Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.rightMenu}>
          <LanguageChanger />
          <FontAwesomeIcon
            icon={faBars}
            className={styles.hamburger}
            onClick={handleMenu}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
