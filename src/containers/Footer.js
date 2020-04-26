import styled from 'styled-components'
import Container from 'components/Container'
import Link from 'components/Link'
import LogoDOOK from 'components/Icons/LogoDOOK'

const StyledFooter = styled.footer`
  width: 100%;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const LogoWrapper = styled.div`
  height: 50px;
  margin-bottom: 16px;

  @media (min-width: 700px) {
    margin-bottom: 0;
  }

  svg {
    height: 100%;
  }
`

const Links = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  width: auto;
  margin: 0 10px;
  font-size: 15px;
`

const LINKS = [
  {
    label: 'Source code on Github',
    value: 'https://github.com/dook/dofacts-portal/'
  },
  {
    label: 'Case study',
    value: 'https://dook.pro/portfolio/fakehunter'
  }

  // {
  //   label: 'Reguły weryfikacji faktów',
  //   value: 'https://fakehunter.pap.pl/attachments/reguly_weryfikacji_faktow.pdf'
  // },
  // {
  //   label: 'Polityka korekt',
  //   value: 'https://fakehunter.pap.pl/attachments/polityka_korekt.pdf'
  // },
  // {
  //   label: 'Polityka prywatności',
  //   value: 'https://fakehunter.pap.pl/attachments/polityka_prywatnosci.pdf'
  // }
]

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <LogoWrapper>
          <Link href="https://dook.pro/" external newTab>
            <LogoDOOK />
          </Link>
        </LogoWrapper>
        <Links>
          {LINKS.map((item) => (
            <StyledLink key={item.value} href={item.value} external newTab>
              {item.label}
            </StyledLink>
          ))}
        </Links>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
