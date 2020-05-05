import NextApp from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Layout from 'containers/Layout'

import GlobalStyle from 'base/GlobalStyle'
import theme from 'base/theme'

import ybug from 'scripts/ybug'
import gtag from 'scripts/gtag'

export default class App extends NextApp {
  componentDidMount() {
    gtag()
    ybug()
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-162854541-2"></script>
        </Head>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <GlobalStyle />
        </ThemeProvider>
      </>
    )
  }
}
