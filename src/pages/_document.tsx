import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preload" href="/fonts/karla.ttf" as="font" type="font/ttf" crossOrigin="anonymous" />
          <link rel="preload" as="image" href="/img/zach.png" />
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Zach Weinberg | Software Engineer"></meta>
          <link rel="preconnect" href="https://cdn.usefathom.com" crossOrigin="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
