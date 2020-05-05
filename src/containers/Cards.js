import PropTypes from 'prop-types'
import styled from 'styled-components'

import Card from 'components/Card'
import Link from 'components/Link'

import { resolveUrl } from 'utils'
import { appUrls } from 'urls'

const CardLink = styled(Link)`
  flex: 0 1 360px;
  margin: 8px;

  @media (max-width: 800px) {
    flex: 1 1 100%;
  }

  outline-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 32px;
`

const Cards = ({ items }) => {
  return (
    <CardsWrapper>
      {items.map((item) => (
        <CardLink
          key={item.id}
          page="/[id]"
          href={resolveUrl(appUrls.DETAILS, { id: item.id })}
          variant="clear"
        >
          <Card
            title={item.title}
            description={item.text}
            image={item.screenshot_url}
            verdict={item.verdict}
            date={item.date}
            isFinal={item.verified_by_expert}
          />
        </CardLink>
      ))}
    </CardsWrapper>
  )
}

Cards.propTypes = {
  items: PropTypes.array
}

export default Cards
