import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000" />
          <meta name="description" content="Zach Weinberg | Full Stack Web Engineer"></meta>
          <title>Zach Weinberg - Full Stack Web Engineer</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
