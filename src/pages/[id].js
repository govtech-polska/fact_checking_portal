import Head from 'next/head'
import Linkify from 'react-linkify'
import styled from 'styled-components'
import dateFormat from 'dateformat'

import Topbar from 'containers/Topbar'
import Container from 'components/Container'
import Link from 'components/Link'
import Suspense from 'components/Suspense'
import Verdict from 'components/Verdict'
import { Title, SubSectionTitle, SectionTitle, Text } from 'components/Typography'

import { resolveUrl, getPostDate } from 'utils'
import { request } from 'base/request'
import { apiUrls } from 'urls'
import { VERDICT_STATUS } from 'consts'

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const DetailsTitle = styled(Title)`
  margin-top: 50px;
  margin-bottom: 0;
`

const InfoCommon = styled.div`
  width: 100%;
`

const NewsInfo = styled(InfoCommon)`
  padding: 32px 0;
  background: #f9f9f9;
  margin-bottom: ${({ theme }) => theme.spacing.main};

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
  border: 1px solid #eee;
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
  margin-top: 6px;
  margin-bottom: 30px;
`

const PostDate = ({ date }) => {
  const formattedDate = dateFormat(new Date(date), 'dd.mm.yyyy')

  return <StyledDate>{formattedDate}</StyledDate>
}

const ExpertVerdictWrapper = styled.div`
  margin-bottom: 50px;
`

const VerdictContent = ({ isExpert, expert, checkers }) => {
  return (
    <>
      {isExpert && (
        <ExpertVerdictWrapper>
          <SectionTitle>Expert report</SectionTitle>
          <Text preLine>{expert.comment}</Text>
          <SubSectionTitle>Sources</SubSectionTitle>
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
          <SectionTitle>Community reports</SectionTitle>
          {checkers.map((checker, i) => (
            <SubSection key={`${checker.title}_${i}`}>
              <SubSectionTitle>Report {i + 1}</SubSectionTitle>
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

const getTitle = (expert, checkers = []) => expert?.title || checkers[0]?.title
const getComment = (expert, checkers = []) => expert?.comment || checkers[0]?.comment

const Details = ({ data: details, error, seo }) => {
  return (
    <>
      <Head>
        <title>DoFacts! - {details.title}</title>
        <meta name="description" content={seo.description}></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={details.screenshot_url} />
        <meta
          name="description"
          content="DoFacts! is an open source project focused on the fight against disinformation"
        />
      </Head>
      <Topbar />
      <DetailsWrapper>
        <Suspense error={error}>
          <Container>
            <DetailsTitle>{details.title}</DetailsTitle>
            <PostDate date={getPostDate(details.expert, details.checkers)} />
          </Container>
          <NewsInfo>
            <Container>
              <SectionTitle>Zgłoszony news</SectionTitle>
              <Image src={details.screenshot_url} alt="" />
              <Text>{details.text}</Text>
              <Link href={details.url} size="small" external newTab withIcon>
                {details.url}
              </Link>
            </Container>
          </NewsInfo>
          <VerdictInfo>
            <Container>
              <SectionTitle>Werdykt</SectionTitle>
              <Verdict type={details.verdict} size="details" isFinal={details.verified_by_expert} />
              <VerdictContent
                isExpert={details.verified_by_expert}
                expert={details.expert}
                checkers={details.checkers}
              />
            </Container>
          </VerdictInfo>
        </Suspense>
      </DetailsWrapper>
    </>
  )
}

export async function getServerSideProps({ params }) {
  try {
    const rawData = await request(resolveUrl(apiUrls.DETAILS, { id: params.id }))
    const comment = getComment(rawData.expert, rawData.checkers) ?? 'N/A'
    const description = comment?.length > 200 ? `${comment.slice(0, 160)}...` : comment
    const title = getTitle(rawData.expert, rawData.checkers) ?? 'N/A'

    const expertVerdict = rawData.expert?.verdict

    const data = {
      ...rawData,
      title,
      checkers: expertVerdict
        ? rawData.checkers.filter((checker) => checker.verdict === expertVerdict)
        : rawData.checkers
    }

    const seo = {
      title: `${VERDICT_STATUS[rawData.verdict]}: ${title}`,
      description
    }

    return { props: { data, seo } }
  } catch (error) {
    return { props: { error: error.response?.data || error.message, data: {}, seo: {} } }
  }
}

export default Details
