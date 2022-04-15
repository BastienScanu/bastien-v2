import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Bastien Scanu">
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
    </Layout>
  )
}

export default Home
