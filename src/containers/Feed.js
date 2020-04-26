import Router, { useRouter } from 'next/router'
import useSWR from 'swr'
import styled from 'styled-components'

import { request } from 'base/request'

import ListItem from 'containers/ListItem'
import Pagination from 'components/Pagination'
import Loader from 'components/Loader'
import Cards from './Cards'

import { getError } from 'utils'
import { appUrls, apiUrls } from 'urls'
import { FEED_LAYOUTS } from 'consts'

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
`

const Feed = ({ layout }) => {
  const { query } = useRouter()

  const { data: feed, error } = useSWR(apiUrls.FEED + `?page=${query.page || 1}`, request, {
    suspense: false
  })
  const errorMsg = getError(error)
  const isCardsLayout = layout === FEED_LAYOUTS.CARDS
  const isListLayout = layout === FEED_LAYOUTS.LIST

  const handlePageChange = (page) => {
    Router.push({
      pathname: appUrls.FEED,
      query: { page }
    })
  }

  if (errorMsg) {
    return <p>{errorMsg}</p>
  }

  if (!feed) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )
  }

  return (
    <>
      {feed?.results?.length === 0 && <p>We don't have any reports yet.</p>}
      {isCardsLayout && <Cards items={feed.results} />}
      {isListLayout && (
        <>
          {feed.results?.map((item, index) => (
            <ListItem
              key={item.id + index}
              id={item.id}
              title={item.title}
              description={item.text}
              image={item.screenshot_url}
              verdict={item.verdict}
              date={item.date}
              isFinal={item.verified_by_expert}
            />
          ))}
        </>
      )}
      <Pagination total={feed.count} page={query.page} onPageChange={handlePageChange} />
    </>
  )
}

export default Feed
