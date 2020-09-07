import PropTypes from 'prop-types'
import styled from 'styled-components'
import dateFormat from 'dateformat'

import Verdict from 'components/Verdict'

const Image = styled.img`
  flex-shrink: 0;
  height: 200px;
  width: 101%;
  object-fit: cover;
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
`

const CardArticle = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 4px;
  overflow: hidden;
`

const CardBody = styled.div`
  padding: 16px;
  flex: 1 1 100%;
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0;
  margin-bottom: 6px;
`

const Description = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.regular};
  flex: 1;
`

const DateInfo = styled.p`
  font-size: 14px;
  color: #aaa;
  line-height: 1;
  margin: 0;
`

const Card = ({ title, description, image, verdict, date, isFinal }) => {
  const formattedDate = date && dateFormat(new Date(date), 'dd.mm.yyyy')

  return (
    <CardArticle>
      <Image src={image || '/no-image.png'} alt="" loading="lazy" />
      <CardBody>
        <Title>{title}</Title>
        <DateInfo>{formattedDate}</DateInfo>
        <Description>{description}</Description>
        <Verdict type={verdict} size="card" isFinal={isFinal} />
      </CardBody>
    </CardArticle>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  verdict: PropTypes.string,
  isFinal: PropTypes.bool,
  date: PropTypes.string
}

export default Card
