import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import '~/styles/globals.css'

const title = 'Zach Weinberg - Full Stack Web Engineer'
const SEO = {
  title,
  canonical: 'https://zachweinberg.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://zachweinberg.com',
    title,
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Zach Weinberg - Full Stack Web Engineer</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
