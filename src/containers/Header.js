import styled from 'styled-components'
import Container from 'components/Container'
import LogoSvg from 'components/Icons/Logo'
// import Search from 'components/Search'

// TODO: all styles and markup is just boilarplate for now
const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
  background: ${({ theme }) => theme.colors.primary};
`
const HeaderContainer = styled(Container)`
  padding-top: 100px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Logo = styled(LogoSvg)`
  height: 80px;
  color: ${({ theme }) => theme.colors.primary};
`

const Subtitle = styled.p`
  margin: 0;
  margin-bottom: 50px;
  font-size: ${({ theme }) => theme.font.size.text};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.colors.white};
`

const Header = () => (
  <HeaderWrapper>
    <HeaderContainer>
      <Title>
        <Logo title="#FakeHunter" />
      </Title>
      <Subtitle>W walce z dezinformacją towarzyszącą epidemii koronawirusa</Subtitle>
      {/* <Search /> */}
    </HeaderContainer>
  </HeaderWrapper>
)

export default Header
