import styled from 'styled-components'
import Container from 'components/Container'
import Link from 'components/Link'
import LogoPAP from 'components/Icons/LogoPAP'
import LogoGovTech from 'components/Icons/LogoGovTech'

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

    &:first-child {
      margin-right: 16px;
    }
  }
`

const Links = styled.div`
  display: flex;
`

const StyledLink = styled(Link)`
  width: auto;
  margin: 0 5px;
  font-size: 12px;
`

const LINKS = [
  {
    label: 'Regulamin',
    value: 'https://fakehunter.pap.pl/attachments/regulamin_aplikacji.pdf'
  },
  {
    label: 'Reguły weryfikacji faktów',
    value: 'https://fakehunter.pap.pl/attachments/reguly_weryfikacji_faktow.pdf'
  },
  {
    label: 'Polityka korekt',
    value: 'https://fakehunter.pap.pl/attachments/polityka_korekt.pdf'
  },
  {
    label: 'Polityka prywatności',
    value: 'https://fakehunter.pap.pl/attachments/polityka_prywatnosci.pdf'
  }
]

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <LogoWrapper>
          <Link href="https://www.pap.pl/" external newTab>
            <LogoPAP />
          </Link>
          <Link href="https://govtech.gov.pl/" external newTab>
            <LogoGovTech />
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
