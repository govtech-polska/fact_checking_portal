import PropTypes from 'prop-types'
import styled from 'styled-components'
import dateFormat from 'dateformat'
import useTranslation from 'next-translate/useTranslation'

import Link from 'components/Link'
import Verdict from 'components/Verdict'

import { resolveUrl } from 'utils'
import { appUrls } from 'urls'

const Article = styled.article`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;

  @media (min-width: 600px) {
    height: auto;
    flex: 0 0 250px;
    border-right: 1px solid ${({ theme }) => theme.colors.cardBorder};
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
`

const Content = styled.div`
  position: relative;
  flex: 1;

  @media (min-width: 900px) {
    display: flex;
    flex: 1;
  }
`

const CardBody = styled.div`
  padding: 16px;
  width: 100%;
`

const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  flex: 1 0 200px;
`

const Title = styled.h3`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin: 0;
  margin-bottom: 6px;
`

const Description = styled.p`
  word-break: break-word;
  font-weight: ${({ theme }) => theme.font.weight.regular};
`

const Button = styled(Link)`
  padding: 14px 20px;
  font-size: 14px;
  border-radius: 2px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.primaryHover};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primaryActive};
  }
`

const DateInfo = styled.p`
  font-size: 13px;
  color: #aaa;
  line-height: 1;
  margin: 0;
`

const TitleLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const ListItem = ({ id, title, description, image, verdict, date, isFinal, newTab }) => {
  const { t } = useTranslation()
  const formattedDate = date && dateFormat(new Date(date), 'dd.mm.yyyy HH:MM')
  const link = resolveUrl(appUrls.DETAILS, { id })

  return (
    <Article>
      <ImageWrapper>
        <Image src={image || '/no-image.png'} alt="" loading="lazy" />
      </ImageWrapper>
      <Content>
        <CardBody>
          <TitleLink page={appUrls.DETAILS} href={link} newTab={newTab}>
            <Title>{title}</Title>
          </TitleLink>
          <DateInfo>
            {t('verified:listItem.reportDate')} {formattedDate}
          </DateInfo>
          <Description>{description}</Description>
        </CardBody>
        <CardMeta>
          <Verdict type={verdict} size="list" isFinal={isFinal} />
          <Button page={appUrls.DETAILS} href={link} newTab={newTab}>
            {t('verified:listItem.showReport')}
          </Button>
        </CardMeta>
      </Content>
    </Article>
  )
}

ListItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  verdict: PropTypes.string,
  date: PropTypes.string,
  isFinal: PropTypes.bool,
  newTab: PropTypes.bool
}

export default ListItem
