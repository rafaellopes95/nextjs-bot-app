import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This website features service bot powered by Amazon Lex!</p>
        <p>
          Choose a service:
        </p>
      </section>
      <Link href="/bots/order-flowers">
        <a>Order Flowers</a>
      </Link>
    </Layout>
  )
}
