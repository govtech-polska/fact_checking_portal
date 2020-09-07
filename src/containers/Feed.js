import PropTypes from 'prop-types'
import styled from 'styled-components'

import ListItem from 'containers/ListItem'
import Pagination from 'components/Pagination'
import Loader from 'components/Loader'
import Cards from './Cards'

import { getError } from 'utils'
import { FEED_LAYOUTS } from 'consts'

const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 600px;
`
// TODO: use SSR, fix error/loader handling
const Feed = ({ layout, data, error, page, onPageChange }) => {
  const errorMsg = error && getError(error)
  const isCardsLayout = layout === FEED_LAYOUTS.CARDS
  const isListLayout = layout === FEED_LAYOUTS.LIST

  if (errorMsg) {
    return <p>{errorMsg}</p>
  }

  if (!data) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )
  }

  return (
    <>
      {data?.results?.length === 0 && <p>Brak raportów.</p>}
      {isCardsLayout && <Cards items={data.results} />}
      {isListLayout && (
        <>
          {data.results?.map((item, index) => (
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
      <Pagination
        total={data.total}
        pageSize={data.page_size}
        page={page}
        onPageChange={onPageChange}
      />
    </>
  )
}

Feed.propTypes = {
  layout: PropTypes.oneOf(Object.values(FEED_LAYOUTS)),
  data: PropTypes.object,
  error: PropTypes.object,
  page: PropTypes.number,
  onPageChange: PropTypes.func
}

export default Feed
