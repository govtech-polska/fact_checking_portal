import styled from 'styled-components'

import Footer from 'containers/Footer'

const AppWrapper = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => {
  return (
    <AppWrapper>
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </AppWrapper>
  )
}

export default Layout
