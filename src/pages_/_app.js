import NextApp from 'next/app'
import Head from 'next/head'
import { withRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from 'base/GlobalStyle'
import theme from 'base/theme'

import ybug from 'scripts/ybug'


import 'assets/style.css'

class App extends NextApp {
  componentDidMount() {
    const { route } = this.props.router
    gtag()

    if (!route.startsWith('/plugins')) {
      ybug()
    }
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
          <link rel="alternate" type="application/rss+xml" href="/rss" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
        </ThemeProvider>
      </>
    )
  }
}

export default withRouter(App)
