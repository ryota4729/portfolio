import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/Blog.module.css'

export default function Blog() {
  return (
    <Layout>
      <Head>
        <title>salon</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <img src="/images/blog.jpg" />
        </div>
        <div className={styles.mainBlog}>
          <h2>Blog</h2>
          <ul className={styles.mainBlogList}>
            <li>
              <img src="/images/blog01.jpg" />
              <p>PEDAL&nbsp;Blog</p>
            </li>
            <li>
              <img src="/images/blog02.jpg" />
              <p>accosuehiro&nbsp;Blog</p>
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}