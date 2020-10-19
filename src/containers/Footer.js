import styled from 'styled-components'
import Container from 'components/Container'
import Link from 'components/Link'
import LogoPAP from 'components/Icons/LogoPAP'
import LogoGovTech from 'components/Icons/LogoGovTech'
import { appUrls } from 'urls'
import useTranslation from 'next-translate/useTranslation'

const StyledFooter = styled.footer`
  width: 100%;
  padding: 32px 0;
  border-top: 1px solid ${({ theme }) => theme.colors.gray};
`

const StyledContainer = styled(Container)`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const LogoWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;

  @media (min-width: 900px) {
    margin-bottom: 0;
  }

  svg {
    height: 100%;
  }
`

const LogoLink = styled(Link)`
  height: 100%;
  margin: 0 8px;
`

const Links = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: row;
    justify-content: center;
  }
`

const StyledLink = styled(Link)`
  margin: 10px 5px;
  font-size: 12px;
`

const LINKS = ['terms', 'rulesOfVerification', 'checkingPolicy', 'privacyPolicy']

const Footer = () => {
  const { t } = useTranslation()

  const getItem = (key) => ({
    label: t(`common:footer.${key}.label`),
    url: `/attachments${t(`common:footer.${key}.file`)}`
  })

  return (
    <StyledFooter>
      <StyledContainer>
        <LogoWrapper>
          <LogoLink href="https://www.pap.pl/" external newTab>
            <LogoPAP />
          </LogoLink>
          <LogoLink href="https://gov.pl/govtech" external newTab>
            <LogoGovTech />
          </LogoLink>
        </LogoWrapper>
        <Links>
          {LINKS.map((item) => {
            const { label, url } = getItem(item)
            return (
              <StyledLink key={label} href={url} external newTab>
                {label}
              </StyledLink>
            )
          })}
          <StyledLink href={appUrls.FOR_DEVELOPERS}>{t('common:footer.forDevelopers')}</StyledLink>
        </Links>
      </StyledContainer>
    </StyledFooter>
  )
}

export default Footer
