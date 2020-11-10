import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="theme-color" content="#000" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <meta name="description" content="Zach Weinberg | Full Stack Web Developer"></meta>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
