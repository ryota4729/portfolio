import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
import styles from '../../styles/about.module.css'

export default function About() {
  return (
    <Layout>
      <Head>
        <title>salon</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.mainHeader}>
          <img src="/images/about.jpg" />
        </div>
        <div className={styles.mainAbout}>
          <h2>ABOUT</h2>
          <p>PEDALはナチュラル＋個性をテーマとした京都の美容室です。店内は4席で、家具、本、雑貨など・・・ゆっくりしていただける空間。流行りだけではなく、一人ひとりに似合うヘアスタイルを。</p>
          <div className={styles.mainImg}>
            <img src="/images/about01.jpg"/>
            <img src="/images/about02.jpg"/>
          </div>
          <div className={styles.mainPrice}>
            <h3>PRICE</h3>
            <dl>
              <dt className={styles.mainPriceTitle}>cut</dt>
              <dd className={styles.mainPriceList}>
                <dl>
                  <dt>cut</dt>
                  <dd>5,400</dd>
                  <dt>college</dt>
                  <dd>4,860</dd>
                  <dt>school</dt>
                  <dd>4,320</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt className={styles.mainPriceTitle}>color</dt>
              <dd className={styles.mainPriceList}>
                <dl>
                  <dt>retouch&nbsp;color</dt>
                  <dd>5,400</dd>
                  <dt>full&nbsp;color</dt>
                  <dd>4,860~</dd>
                  <dt>design&nbsp;color</dt>
                  <dd>7,020</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt className={styles.mainPriceTitle}>perm</dt>
              <dd className={styles.mainPriceList}>
                <dl>
                  <dt>full&nbsp;perm</dt>
                  <dd>6,480~</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt className={styles.mainPriceTitle}>treatment</dt>
              <dd className={styles.mainPriceList}>
                <dl>
                  <dt>tretment</dt>
                  <dd>2,700</dd>
                </dl>
              </dd>
            </dl>
            <dl>
              <dt className={styles.mainPriceTitle}>set</dt>
              <dd className={styles.mainPriceList}>
                <dl>
                  <dt>full&nbsp;set</dt>
                  <dd>3,780</dd>
                  <dt>arrange</dt>
                  <dd>2,700</dd>
                </dl>
              </dd>
            </dl>
          </div>
          <div className={styles.mainShop}>
            <h3>SHOP</h3>
            <dl>
              <dt>電話番号</dt>
              <dd>075-801-3590</dd>
            </dl>
            <dl>
              <dt>住所</dt>
              <dd>京都府京都市中京区西ノ京勧学院町25-14</dd>
            </dl>
            <dl>
              <dt>営業時間</dt>
              <dd>水曜日～金曜日10:00～20:00 （カット受付20:00まで）
                  土日祝10:00～19:00 （カット受付19:00）</dd>
            </dl>
            <dl>
              <dt>定休日</dt>
              <dd>毎週月曜日・火曜日</dd>
            </dl>
            <dl>
              <dt>クレジットカード</dt>
              <dd>VISA / JCB / Master / AMEX</dd>
            </dl>
            <dl>
              <dt>駐車場</dt>
              <dd>２台</dd>
            </dl>
          </div>
          <div className={styles.mainImg}>
            <img src="/images/map.jpg"/>
            <img src="/images/about03.jpg"/>
            <img src="/images/about04.jpg"/>
            <img src="/images/about05.jpg"/>
          </div>
        </div>
      </main>
    </Layout>
  )
}