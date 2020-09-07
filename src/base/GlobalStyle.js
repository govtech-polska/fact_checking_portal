import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;

    color: ${({ theme }) => theme.colors.fontMain};
    background: ${({ theme }) => theme.colors.white};
  }

  html, body, #__next {
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle
