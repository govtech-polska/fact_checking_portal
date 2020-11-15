import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Router from 'next-translate/Router'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'

import FeedLayoutManager from 'containers/FeedLayoutManager'
import Pinned from 'containers/Pinned'
import Feed from 'containers/Feed'
import Categories from 'containers/Categories'
import Layout from 'containers/Layout'
import Hashtags from 'containers/Hashtags'
import Link from 'components/Link'
import Container from 'components/Container'
import { IndexSectionTitle } from 'components/Typography'

import { request } from 'base/request'
import { FEED_LAYOUTS } from 'consts'
import { appUrls, apiUrls } from 'urls'
import { resolveUrl, matchUrl } from 'utils'
import CommonHead from 'base/CommonHead'

const TitleWrapper = styled.div`
  display: flex;
`

const ResetLink = styled(Link)`
  font-size: 13px;
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

const Header = styled.div``

const FiltersWrapper = styled.div``

const FeedTitle = ({ hashtag, category }) => {
  const { t } = useTranslation()
  let title = null

  if (hashtag) title = t('verified:feed.resultsForTag', { hashtag })
  if (category) title = t('verified:feed.resultsForCategory', { category })

  if (title) {
    const resetUrl = resolveUrl(appUrls.FEED)
    return (
      <IndexSectionTitle>
        {title}
        <ResetLink
          href={resetUrl}
          page={resetUrl}
          nextLinkProps={{
            scroll: false
          }}
        >
          {t('verified:feed.showAll')}
        </ResetLink>
      </IndexSectionTitle>
    )
  }

  return <IndexSectionTitle>{t('verified:feed.newest')}</IndexSectionTitle>
}

FeedTitle.propTypes = {
  hashtag: PropTypes.string,
  category: PropTypes.string
}

const LAYOUT_TYPE = 'LAYOUT_TYPE'
const Index = ({ pinned, hashtags, categories }) => {
  const {
    asPath,
    query: { page = 1, ...query }
  } = useRouter()
  const { category } = matchUrl(appUrls.FEED_CATEGORY, asPath, true)
  const { data, error } = useSWR(
    [resolveUrl(apiUrls.FEED, { category }, { page, ...query, domains: [category] })],
    request,
    {
      suspense: false
    }
  )
  const [layout, setLayout] = useState(FEED_LAYOUTS.LIST)

  useEffect(() => {
    setLayout(localStorage.getItem(LAYOUT_TYPE) || FEED_LAYOUTS.LIST)
  }, [])

  const handleLayoutChange = (type) => {
    setLayout(type)
    localStorage.setItem(LAYOUT_TYPE, type)
  }

  const handlePageChange = (nextPage) => {
    Router.push({
      pathname: resolveUrl(appUrls.FEED, { category }),
      query: { page: nextPage, ...query }
    })
  }

  return (
    <>
      <Head>
        <CommonHead />
      </Head>
      <Layout>

        <Categories activeCategory={category} initialData={categories} />
        <Header>
          <Container>
            <Pinned initialData={pinned} />
          </Container>
        </Header>
        <Container>
          <FiltersWrapper>
            <Hashtags initialData={hashtags} />
          </FiltersWrapper>
          <section>
            <TitleWrapper>
              <FeedTitle hashtag={query['tags[]']} category={category} />
              <FeedLayoutManager active={layout} onChange={handleLayoutChange} />
            </TitleWrapper>
            <Feed
              layout={layout}
              data={data}
              page={parseInt(page)}
              error={error}
              onPageChange={handlePageChange}
            />
          </section>
        </Container>
      </Layout>
    </>
  )
}

Index.propTypes = {
  categories: PropTypes.object,
  hashtags: PropTypes.object,
  pinned: PropTypes.object
}

export async function getServerSideProps() {
  try {
    const [pinned, hashtags, categories] = await Promise.all([
      request(resolveUrl(apiUrls.FEED, {}, { is_pinned: true })),
      request(resolveUrl(apiUrls.TAGS, {}, { popular: true })),
      request(apiUrls.CATEGORIES)
    ])
    return { props: { pinned, hashtags, categories } }
  } catch (error) {
    return { props: { error: error.response?.data || error.message, data: {}, seo: {} } }
  }
}

export default Index
