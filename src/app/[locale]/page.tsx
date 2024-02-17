import 'purecss/build/base-min.css'
import 'purecss/build/grids-min.css'
import 'purecss/build/grids-responsive-min.css'
import '../styles/globals.scss'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import ExperienceSection from '../components/ExperienceSection'
import { Fragment } from 'react'

export interface Props {
  params: {
    locale: string
  }
}

export default async function Home({ params: { locale } }: Props) {
  return (
    <Fragment>
      <Hero locale={locale} />
      <About locale={locale} />
      <Skills locale={locale} />
      <ExperienceSection locale={locale} />
    </Fragment>
  )
}
