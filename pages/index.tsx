import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import Layout from '../components/Layout'
import Home from '../components/Home'
import About from '../components/About'
import Skills from '../components/Skills'
import ExperienceSection from '../components/ExperienceSection'


export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home', 'header', 'footer', 'about', 'back', 'database', 'design', 'devops', 'experience', 'front', 'skills'])),
    },
  };
}

const Index: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title="Bastien Scanu">
        <Home/>
        <About/>
        <Skills/>
        <ExperienceSection/>
    </Layout>
  )
}

export default Index
