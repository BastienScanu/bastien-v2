'use client'

import * as React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import styles from '../styles/Header.module.scss'
import { useEffect, useState } from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LanguageChanger from './LanguageChanger'

const Header = () => {
  const { t } = useTranslation('header')
  const [isMenuActive, setMenuActive] = useState(false)

  const handleMenu = () => {
    setMenuActive(!isMenuActive)
  }

  const [activeSection, setActiveSection] = useState('hero')
  const navItems = ['hero', 'about', 'skills', 'experience']

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item))

    const observerOptions = {
      root: null,
      rootMargin: '0px',
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
        <div className={styles.logo}>
          <Link href="/">
            <Image
              src={`/images/layout/logo-texte.svg`}
              height="54"
              width="138"
              alt={'Logo Bastien Scanu'}
            />
          </Link>
        </div>
        <nav className={isMenuActive ? styles.active : ''}>
          <ul>
            {navItems.map((item) => {
              return (
                <li
                  className={activeSection === item ? styles.active : ''}
                  onClick={handleMenu}
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
