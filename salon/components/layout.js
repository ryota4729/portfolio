import Head from 'next/head'
import styles from './layout.module.css'
import Link from 'next/link'

function Layout({children}){
  return (
    <div className={styles.container}>
      <Head>
        <title>salon</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8" />
      </Head>

      <div className={styles.menu}>
        <h1><Link href="/"><a><img src="/images/logo_h.png" alt="PEDALのホームページです。"/></a></Link></h1>
        <ul className={styles.menuList}>
          <li><Link href="/posts/about"><a>ABOUT</a></Link></li>
          <li><Link href="/posts/staff"><a>STAFF</a></Link></li>
          <li><Link href="/posts/style"><a>STYLE</a></Link></li>
          <li><Link href="/posts/book"><a>BOOK</a></Link></li>
          <li><Link href="/posts/blog"><a>BLOG</a></Link></li>
          <li><Link href="/posts/recruit"><a>RECRUIT</a></Link></li>
          <li><Link href="#"><a>ONLINE&nbsp;STORE</a></Link></li>
        </ul>
        <p className={styles.munuReservation}><a href="#">ご予約はこちら</a></p>
        <div className={styles.menuInfo}>
          <a href="#" className="insta"><img src="/images/insta.png"></img></a>
          <p>weekday:&nbsp;10:00~20:00</p>
          <p>sat.sun.holiday:&nbsp;10:00~19:00</p>
          <p>close:&nbsp;mon,tue</p>
          <p>tel:&nbsp;075-801-3590</p>
          <p>&copy;PEDAL.ALL&nbsp;RIGHTS&nbsp;RESERVED</p>
        </div>
      </div>
      <main>{children}</main>
    </div>
    )
}
export default Layout