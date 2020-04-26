import NextApp from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import Layout from 'containers/Layout'
import GlobalStyle from 'base/GlobalStyle'
import theme from 'base/theme'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&display=swap&subset=latin-ext"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
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
