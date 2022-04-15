import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'


export async function getStaticProps({ locale }: {locale: string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
    },
  };
}

const Home: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <Layout title="Bastien Scanu">
        <h1 className={styles.title}>
         {t('hello')}
        </h1>
    </Layout>
  )
}

export default Home
