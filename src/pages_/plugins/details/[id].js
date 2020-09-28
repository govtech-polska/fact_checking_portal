import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'components/Link'
import Verdict from 'components/Verdict'
import { SectionTitle, Text } from 'components/Typography'
import Logo from 'components/Icons/Logo'

import { request } from 'base/request'
import { resolveUrl } from 'utils'
import { apiUrls, appUrls } from 'urls'
import useTranslation from 'next-translate/useTranslation'

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-height: 100%;
  padding: 16px;
  background-image: url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${({ theme }) => theme.colors.primary};
    z-index: 1;
    opacity: 0.85;
  }
`

const StyledVerdict = styled(Verdict)`
  margin-bottom: 16px;
`

const TitleLink = styled(Link)`
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`

const Title = styled(SectionTitle)`
  margin-bottom: 16px;
`

const StyledLogo = styled(Logo)`
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

const LogoLink = styled(Link)`
  height: 32px;
  margin-bottom: 16px;
  z-index: 9;
`

const ContentWrapper = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 3px;
  z-index: 9;
`

const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${StyledVerdict} {
    margin-bottom: 0;
  }

  @media (max-width: 360px) {
    flex-direction: column;

    ${StyledVerdict} {
      margin-bottom: 16px;
    }
  }
`

const MoreBtn = styled(Link)`
  padding: 14px 20px;
  font-size: 14px;
  border-radius: 2px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primaryActive};
  }
`

const Details = ({ data }) => {
  const { t } = useTranslation()
  const url = resolveUrl(appUrls.DETAILS, { id: data.id })
  return (
    <>
      <DetailsWrapper bgImage={data.screenshot_url}>
        <LogoLink href={url} newTab>
          <StyledLogo />
        </LogoLink>
        <ContentWrapper>
          <TitleLink page={appUrls.DETAILS} href={url} newTab>
            <Title>{data.title}</Title>
          </TitleLink>
          <Text>{data.text}</Text>
          <MetaWrapper>
            <StyledVerdict size="details" type={data.verdict} isFinal={data.verified_by_expert} />
            <MoreBtn href={url} newTab>
              {t('developers:plugins.report.readMore')}
            </MoreBtn>
          </MetaWrapper>
        </ContentWrapper>
      </DetailsWrapper>
    </>
  )
}

export async function getServerSideProps({ params }) {
  const data = await request(resolveUrl(apiUrls.DETAILS, { id: params.id }))

  return { props: { data } }
}

Details.propTypes = {
  data: PropTypes.object
}

export default Details
