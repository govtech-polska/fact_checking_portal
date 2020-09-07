import PropTypes from 'prop-types'
import useSWR from 'swr'
import styled from 'styled-components'

import { request } from 'base/request'
import PinnedCard from 'containers/PinnedCard'
import { IndexSectionTitle } from 'components/Typography'

import { getError } from 'utils'
import { apiUrls } from 'urls'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
  grid-gap: 10px;
  margin-bottom: 30px;
`

const Pinned = ({ initialData }) => {
  const { data, error } = useSWR(apiUrls.FEED + `?is_pinned=true`, request, {
    suspense: false,
    initialData
  })

  if (!data || !data?.results?.length === 0) {
    return null
  }

  const errorMsg = error && getError(error)
  if (errorMsg) {
    return <p>{errorMsg}</p>
  }

  return (
    <section>
      <IndexSectionTitle>Polecane</IndexSectionTitle>
      <Wrapper>
        {data?.results?.map((card) => (
          <PinnedCard
            key={card.id}
            id={card.id}
            title={card.title}
            image={card.screenshot_url}
            verdict={card.verdict}
          />
        ))}
      </Wrapper>
    </section>
  )
}

Pinned.propTypes = {
  initialData: PropTypes.object
}

export default Pinned
