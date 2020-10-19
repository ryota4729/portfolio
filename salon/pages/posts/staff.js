import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/staff.module.css'

export default function Staff() {
  return (
    <Layout>
      <Head>
        <title>salon</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <img src="/images/staff.jpg" />
        </div>
        <div className={styles.mainStaff}>
          <h2>Staff</h2>
          <ul className={styles.mainSelf}>
            <li>
              <img src="/images/staff_woman.jpg"/>
              <div className={styles.mainSelfProfile}>
                <p className={styles.name}>
                  <span className={styles.nameAbout}>スタイリスト</span>
                  末廣&nbsp;亜希子
                  <span className={styles.nameSub}>Akiko&nbsp;Suehiro</span>
                </p>
                <p className={styles.txt}>
                  どうも、あっこすえひろです。<br/>美容師歴、10年になりました。<br/>大阪で4年働いた後ここ、京都二条のPEDALで6年たくさんのお客様の髪型をお任せ頂いて、美容師として幸せな日々です！<br/>PEDALで髪を切ったら明日からお洒落するパワーわいてくるぜ~~っ‼︎って思って頂ける場所でありたいと、私自身も日々勉強です。<br/>いろんな髪型にチャレンジして、一緒に楽しみましょう‼︎
                </p>
              </div>
            </li>
            <li>
              <img src="/images/staff_man.jpg"/>
              <div className={styles.mainSelfProfile}>
                <p className={styles.name}>
                  <span className={styles.nameAbout}>スタイリスト</span>
                  佐津&nbsp;正人
                  <span className={styles.nameSub}>Masato&nbsp;Sazu</span>
                </p>
                <p className={styles.txt}>
                歳を追うごとに美容師が好きになってきました。<br/>なんでやろ、美味しいもの食べて、面白い事考えて、好きな服屋さん行って、日々そんな感じです。<br/>最近はマグネットを集めています。<br/>とにかくヘアスタイルを楽しみましょう。
                </p>
              </div>
            </li>
          </ul>
         
        </div>
      </main>
    </Layout>
  )
}