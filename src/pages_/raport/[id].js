import PropTypes from 'prop-types'
import Head from 'next/head'
import Linkify from 'react-linkify'
import styled from 'styled-components'
import dateFormat from 'dateformat'

import Layout from 'containers/Layout'
import Container from 'components/Container'
import Link from 'components/Link'
import Suspense from 'components/Suspense'
import Verdict from 'components/Verdict'
import SocialShare from 'components/SocialShare'
import { Title, SubSectionTitle, SectionTitle, Text } from 'components/Typography'

import { request } from 'base/request'
import { resolveUrl, getAbsoluteUrl } from 'utils'
import { apiUrls, appUrls } from 'urls'
import { VERDICT_STATUS } from 'consts'

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const DetailsTitle = styled(Title)`
  margin-top: 50px;
  margin-bottom: 10px;
`

const InfoCommon = styled.div`
  width: 100%;
`

const NewsInfo = styled(InfoCommon)`
  padding: 32px 0;
  background: #f9f9f9;
  margin: ${({ theme }) => theme.spacing.main} 0;

  &:after {
    content: '';
    display: block;
    clear: both;
  }
`

const VerdictInfo = styled(InfoCommon)`
  flex: 1;
  padding: 32px 0;

  ${Verdict} {
    margin-bottom: 30px;
  }
`

const SubSection = styled.div`
  margin-bottom: 32px;
`

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: ${({ theme }) => theme.spacing.main};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-shadow: 0 4px 6px -4px rgba(0, 0, 0, 0.1);

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    float: left;
    width: 250px;
    margin-right: ${({ theme }) => theme.spacing.main};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 350px;
  }
`

const StyledDate = styled.p`
  font-size: 14px;
  color: #b5b5b5;
  margin: 0;
  ${({ withMargin }) => withMargin && `margin-bottom: 10px;`}
`

const ExpertVerdictWrapper = styled.div`
  margin-bottom: 50px;
`

const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const HashtagsWrapper = styled.div`
  margin-bottom: 10px;
`

const HashtagLink = styled(Link)`
  margin-right: 6px;
`

const VerdictSectionTitle = styled(SectionTitle)`
  margin-bottom: 8px;
`

const VerdictSubSectionTitle = styled(SubSectionTitle)`
  margin-bottom: 8px;
`

const PostDate = ({ date, label, withMargin }) => {
  if (!date) return null

  return (
    <StyledDate withMargin={withMargin}>
      {label} {dateFormat(new Date(date), 'dd.mm.yyyy HH:MM')}
    </StyledDate>
  )
}

PostDate.propTypes = {
  date: PropTypes.string,
  label: PropTypes.string,
  withMargin: PropTypes.bool
}

const VerdictContent = ({ isExpert, expert, checkers }) => {
  return (
    <>
      {isExpert && (
        <ExpertVerdictWrapper>
          <VerdictSectionTitle>Raport eksperta</VerdictSectionTitle>
          <PostDate date={expert.date} label="Data werdyktu:" withMargin />
          <Text preLine>{expert.comment}</Text>
          <SubSectionTitle>Źródła</SubSectionTitle>
          <Text preLine>
            <Linkify
              componentDecorator={(href, text, key) => (
                <Link key={key} href={href} size="small" external newTab withIcon>
                  {text}
                </Link>
              )}
            >
              {expert.confirmation_sources}
            </Linkify>
          </Text>
        </ExpertVerdictWrapper>
      )}

      {checkers?.length > 0 && (
        <>
          <VerdictSectionTitle>Raporty społeczności</VerdictSectionTitle>
          {checkers.map((checker, i) => (
            <SubSection key={`${checker.title}_${i}`}>
              <VerdictSubSectionTitle>Raport {i + 1}</VerdictSubSectionTitle>
              <PostDate date={checker.date} label="Data werdyktu:" withMargin />
              <Text preLine>{checker.comment}</Text>
              <Text preLine>
                <Linkify
                  componentDecorator={(href, text, key) => (
                    <Link key={key} href={href} size="small" external newTab withIcon>
                      {text}
                    </Link>
                  )}
                >
                  {checker.confirmation_sources}
                </Linkify>
              </Text>
            </SubSection>
          ))}
        </>
      )}
    </>
  )
}

VerdictContent.propTypes = {
  isExpert: PropTypes.bool,
  expert: PropTypes.object,
  checkers: PropTypes.array
}

const Details = ({ data, error, seo, social }) => {
  return (
    <>
      <Head>
        <title>#FakeHunter - {data.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={data.screenshot_url || '/og-image.png'} />
        {!data.screenshot_url && (
          <>
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
        )}
      </Head>
      <Layout>
        <DetailsWrapper>
          <Suspense error={error}>
            <Container>
              <DetailsTitle>{data.title}</DetailsTitle>
              <HashtagsWrapper>
                {data.tags?.map((tag) => {
                  const url = resolveUrl(appUrls.FEED, {}, { tags: [tag.name] })
                  return (
                    <HashtagLink key={tag.name} href={url} page={url}>
                      #{tag.name}
                    </HashtagLink>
                  )
                })}
              </HashtagsWrapper>
              <SubtitleWrapper>
                <PostDate date={data.reported_at} label="Data zgłoszenia:" />
                <SocialShare
                  url={social?.shareUrl}
                  title={seo.title}
                  description={seo.description}
                />
              </SubtitleWrapper>
            </Container>
            <NewsInfo>
              <Container>
                <SectionTitle>Zgłoszony news</SectionTitle>
                {data.screenshot_url && <Image src={data.screenshot_url} alt="" />}
                <Text>{data.text}</Text>
                <Link href={data.url} size="small" external newTab withIcon>
                  {data.url}
                </Link>
              </Container>
            </NewsInfo>
            <VerdictInfo>
              <Container>
                <SectionTitle>Werdykt</SectionTitle>
                <Verdict type={data.verdict} size="details" isFinal={data.verified_by_expert} />
                <VerdictContent
                  isExpert={data.verified_by_expert}
                  expert={data.expert_opinion}
                  checkers={data.fact_checker_opinions}
                />
              </Container>
            </VerdictInfo>
          </Suspense>
        </DetailsWrapper>
      </Layout>
    </>
  )
}

export async function getServerSideProps({ params, req }) {
  try {
    const { origin } = getAbsoluteUrl(req)
    const data = await request(resolveUrl(apiUrls.DETAILS, { id: params.id }))

    const seo = {
      title: `${VERDICT_STATUS[data.verdict]}: ${data.title}`,
      description: data.text
    }

    const social = {
      shareUrl: `${origin}/${params.id}`
    }

    return { props: { data, seo, social } }
  } catch (error) {
    return { props: { error: error.response?.data?.detail || error.message, data: {}, seo: {} } }
  }
}

Details.propTypes = {
  data: PropTypes.object,
  seo: PropTypes.object,
  social: PropTypes.object,
  error: PropTypes.string
}

export default Details
