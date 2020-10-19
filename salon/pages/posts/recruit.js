import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/recruit.module.css'

export default function Recruit() {
  return (
    <Layout>
      <Head>
        <title>salon</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <img src="/images/recruit.jpg" />
        </div>
        <div className={styles.mainRecruit}>
          <h2>RECRUIT</h2>
          <div className={styles.mainRecruitStaff}>
            <h3>スタッフ募集</h3>
            <dl>
              <dt>応募資格</dt>
              <dd>美容師の仕事が好きなひと</dd>
            </dl>
            <dl>
              <dt>履歴書送付先</dt>
              <dd>〒604-8413京都市中京区西ノ京勧学院町25-14 PEDAL</dd>
            </dl>
            <dl>
              <dt>採用予定人数</dt>
              <dd>1名</dd>
            </dl>
            <dl>
              <dt>担当者</dt>
              <dd>佐津</dd>
            </dl>
            <dl>
              <dt>連絡先</dt>
              <dd>TEL：075-801-3590</dd>
            </dl>
          </div>
         
        </div>
      </main>
    </Layout>
  )
}