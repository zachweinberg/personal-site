import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useAnalytics } from '~/lib/analytics'
import '~/styles/globals.css'

const title = 'Zach Weinberg - Full Stack Engineer'

const SEO = {
  title,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://zachweinberg.com',
    title,
  },
}

export default function App({ Component, pageProps }: AppProps) {
  useAnalytics()

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <title>Zach Weinberg - Full Stack Engineer</title>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}
