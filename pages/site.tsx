import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Layout from '../components/Layout'
import Website from '../components/Website'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'header',
        'footer',
        'site',
      ])),
    },
  }
}

const Site: NextPage = () => {
  return (
    <Layout title="Bastien Scanu - about this website">
      <Website />
    </Layout>
  )
}

export default Site
