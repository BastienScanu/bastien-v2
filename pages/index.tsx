import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import ExperienceSection from '../components/ExperienceSection'
import Transition from '../components/Transition'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
        'header',
        'footer',
        'about',
        'back',
        'database',
        'design',
        'devops',
        'experience',
        'front',
        'skills',
      ])),
    },
  }
}

const Index: NextPage = () => {
  return (
    <Layout title="Bastien Scanu">
      <Home />
      <Transition direction="top" />
      <About />
      <Skills />
      <Transition direction="down" />
      <ExperienceSection />
    </Layout>
  )
}

export default Index
