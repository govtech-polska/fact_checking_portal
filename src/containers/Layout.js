import PropTypes from 'prop-types'
import styled from 'styled-components'

import Footer from 'containers/Footer'
import Topbar from './Topbar'
import CookiesPrompt from 'components/CookiesPrompt'

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
      <Topbar />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
      <CookiesPrompt />
    </AppWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
}

export default Layout
