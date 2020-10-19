import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
    <div className={styles.container}>
      <Head>
        <title>salon</title>
      </Head>

    <main className={styles.main}>
      <div className={styles.mainIntro}>
        <div className={styles.mainIntroVideo}>
          <video src="/images/video1.mp4" playsInline autoPlay loop muted></video>
          <p>Vol.10<span>PEDAL&nbsp;2020&nbsp;S/S</span></p>
        </div>
        <ul className={styles.mainIntroCollaborator}>
          <li>hair<span>acco&nbsp;suehiro</span></li>
          <li>phote<span>masato&nbsp;sazu</span></li>
        </ul>
      </div>
      <div className={styles.mainCovers}>
        <h2>COVERS</h2>
        <ul className={styles.mainCoversList}>
          <li>
            <img src="/images/covers1.jpg" />
            <p>2019 A/W</p>
          </li>
          <li>
            <img src="/images/covers2.jpg" />
            <p>2019 A/W</p>
          </li>
          <li>
            <img src="/images/covers3.jpg" />
            <p>2019 A/W</p>
          </li>
          <li>
            <img src="/images/covers4.jpg" />
            <p>2019 A/W</p>
          </li>
        </ul>
      </div>

      
    </main>
      
    </div>
    </Layout>
  )
}
