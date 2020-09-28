import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'components/Link'
import useTranslation from 'next-translate/useTranslation'

import { resolveUrl } from 'utils'
import { request } from 'base/request'
import { apiUrls, appUrls } from 'urls'
import Logo from 'components/Icons/Logo'
import ListItem from 'containers/ListItem'

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
  margin-bottom: 30px;
  z-index: 9;
`

const Newest = ({ data }) => {
  const { t } = useTranslation()
  const url = resolveUrl(appUrls.FEED)
  return (
    <>
      <DetailsWrapper>
        <LogoLink href={url} newTab>
          <StyledLogo />
          <Title>{t('developers:plugins.newest')}</Title>
        </LogoLink>
        <ContentWrapper>
          {data?.map((item) => (
            <ListItem
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.text}
              image={item.screenshot_url}
              verdict={item.verdict}
              date={item.date}
              isFinal={item.verified_by_expert}
              newTab
            />
          ))}
        </ContentWrapper>
      </DetailsWrapper>
    </>
  )
}

export async function getServerSideProps({ query: { count } }) {
  const rawData = await request(resolveUrl(apiUrls.FEED))
  const data = rawData?.results?.slice(0, count)
  return { props: { data } }
}

Newest.propTypes = {
  data: PropTypes.array
}

export default Newest
