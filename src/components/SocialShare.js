import PropTypes from 'prop-types'
import {
  FacebookShareButton,
  FacebookIcon,
  PocketShareButton,
  XShareButton,
  WhatsappShareButton,
  XIcon,
  PocketIcon,
  WhatsappIcon
} from 'react-share'
import styled from 'styled-components'

import createShareButton from 'react-share/lib/hocs/createShareButton'
import useTranslation from 'next-translate/useTranslation'

const Wrapper = styled.div`
  display: flex;
  font-size: 0;
  line-height: 0;
  align-items: center;

  button {
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    margin-left: 2px;
    cursor: pointer;
  }
`

const Label = styled.p`
  font-size: 14px;
  margin-right: 8px;
  display: none;

  @media (min-width: 600px) {
    display: block;
  }
`

const WykopShareButton = createShareButton(
  'wykop',
  (url) => url,
  () => ({}),
  {
    windowWidth: 660,
    windowHeight: 650
  }
)

const SocialShare = ({ url, title, description }) => {
  const { t } = useTranslation()
  return (
    <Wrapper>
      <Label>{t('verified:report.share')}</Label>
      <FacebookShareButton url={url}>
        <FacebookIcon size={32} />
      </FacebookShareButton>
      <XShareButton url={url}>
        <XIcon size={32} title="Udostępnij na Twitterze" />
      </XShareButton>
      <WhatsappShareButton url={url} windowWidth={660} windowHeight={700}>
        <WhatsappIcon size={32} title="Wyślij na WhatsApp" />
      </WhatsappShareButton>
      <PocketShareButton url={url}>
        <PocketIcon size={32} title="Dodaj do Pocket" />
      </PocketShareButton>
      <WykopShareButton
        url={`http://www.wykop.pl/dodaj/link/?url=${url}&title=${title}&desc=${description}`}
      >
        <img alt="Wykop" src="/wykop-icon.png" title="Wykop" />
      </WykopShareButton>
    </Wrapper>
  )
}

SocialShare.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

export default SocialShare
