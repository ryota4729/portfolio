import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/style.module.css'

export default function Style() {
  return (
    <Layout>
      <Head>
        <title>salon</title>
      </Head>
      <main className={styles.main}>
        <ul className={styles.mainImg}>
          <li><img src="/images/style01.jpg"></img></li>
          <li><img src="/images/style02.jpg"></img></li>
          <li><img src="/images/style03.jpg"></img></li>
          <li><img src="/images/style04.jpg"></img></li>
          <li><img src="/images/style05.jpg"></img></li>
          <li><img src="/images/style06.jpg"></img></li>
          <li><img src="/images/style07.jpg"></img></li>
        </ul>
      </main>
    </Layout>
  )
}