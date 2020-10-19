import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/book.module.css'

export default function Book() {
  return (
    <Layout>
      <Head>
        <title>salon</title>
      </Head>
      <main className={styles.main}>
        <ul className={styles.mainImg}>
          <li>
            <img src="/images/book01.jpg" />
            <dl className={styles.right}>
              <dt>KITAHAMA&nbsp;14:00</dt>
              <dd>hair:acco&nbsp;suehiro</dd>
            </dl>
          </li>
          <li>
            <img src="/images/book02.jpg" />
            <dl className={styles.left}>
              <dt>KITAHAMA&nbsp;14:00</dt>
              <dd>hair:acco&nbsp;suehiro</dd>
            </dl>
          </li>
          <li>
            <img src="/images/book03.jpg" />
            <dl className={styles.right}>
              <dt>今日でよかった。明日は、雨だったから。</dt>
              <dd>hair:acco&nbsp;suehiro</dd>
            </dl>
          </li>
          <li>
            <img src="/images/book04.jpg" />
            <dl className={styles.left}>
              <dt>DO&nbsp;not&nbsp;直視</dt>
              <dd>hair:acco&nbsp;suehiro</dd>
            </dl>
          </li>
        </ul>
      </main>
    </Layout>
  )
}