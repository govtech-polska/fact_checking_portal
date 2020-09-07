import PropTypes from 'prop-types'
import styled from 'styled-components'

import Link from 'components/Link'
import Verdict from 'components/Verdict'
import { resolveUrl } from 'utils'
import { appUrls } from 'urls'

const CardArticle = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  background-image: linear-gradient(0, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.25) 100%),
    url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 4px;
  position: relative;
  padding: 10px;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.2s ease;

  &:after {
    content: '';
    top: 0;
    bottom: 0;
    padding: 10px;
    left: 0;
    right: 0;
    position: absolute;
    transition: all 0.2s ease;
    background: inherit;
    filter: blur(1px);
  }
`
const StyledLink = styled(Link)`
  &:hover {
    ${CardArticle} {
      &:after {
        filter: none;
        transform: scale(1.1);
      }
    }
  }
`

const Title = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.white};
  margin: 10px 0;
  z-index: 1;

  span {
    text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 4px;
    background: rgba(0, 0, 0, 0.1);
  }
`

const StyledVerdict = styled(Verdict)`
  margin-bottom: auto;
`

const Card = ({ id, title, image, verdict, newTab }) => {
  return (
    <StyledLink
      page={appUrls.DETAILS}
      href={resolveUrl(appUrls.DETAILS, { id })}
      variant="clear"
      newTab={newTab}
    >
      <CardArticle bgUrl={image || '/pinned.png'}>
        <StyledVerdict type={verdict} size="pinned" isFinal={true} />
        <Title>
          <span>{title}</span>
        </Title>
      </CardArticle>
    </StyledLink>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  verdict: PropTypes.string,
  newTab: PropTypes.bool
}

export default Card
