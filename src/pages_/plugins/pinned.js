import PropTypes from 'prop-types'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

import Link from 'components/Link'
import PinnedCard from 'containers/PinnedCard'

import { resolveUrl } from 'utils'
import { request } from 'base/request'
import { apiUrls, appUrls } from 'urls'
import Logo from 'components/Icons/Logo'

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-height: 100%;
  padding: 16px;
  background: ${({ theme }) => theme.colors.primary};
  position: relative;
`

const StyledLogo = styled(Logo)`
  height: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

const LogoLink = styled(Link)`
  height: 32px;
  margin-bottom: 16px;
  z-index: 9;
  display: flex;
  align-items: center;
`

const Title = styled.p`
  color: #fff;
  margin-left: 30px;
  justify-self: center;
  font-weight: ${({ theme }) => theme.font.weight.medium};
`

const ContentWrapper = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, auto));
  grid-gap: 10px;
  margin-bottom: 30px;
  z-index: 9;
`

const Pinned = ({ data }) => {
  const { t } = useTranslation()
  const url = resolveUrl(appUrls.FEED)

  return (
    <>
      <DetailsWrapper>
        <LogoLink href={url} newTab>
          <StyledLogo />
          <Title>{t('developers:plugins.pinned')}</Title>
        </LogoLink>
        <ContentWrapper>
          {data?.results?.map((card) => (
            <PinnedCard
              key={card.id}
              id={card.id}
              title={card.title}
              image={card.screenshot_url}
              verdict={card.verdict}
              newTab
            />
          ))}
        </ContentWrapper>
      </DetailsWrapper>
    </>
  )
}

export async function getServerSideProps() {
  const data = await request(resolveUrl(apiUrls.FEED, {}, { is_pinned: true }))
  return { props: { data } }
}

Pinned.propTypes = {
  data: PropTypes.object
}

export default Pinned
