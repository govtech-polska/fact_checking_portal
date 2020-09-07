import styled from 'styled-components'
import Container from './Container'
import Link from './Link'
import Button from './Button'
import { useState } from 'react'
import Cookies from 'js-cookie'

const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  z-index: 40;
  width: 100%;
  padding: 0 20px;
`

const Content = styled(Container)`
  width: 100%;
  background: #fff;
  padding: 20px 40px;
  border-radius: 5px;
  font-size: 12px;
  box-shadow: 0px 0px 10px 0px rgba(102, 102, 102, 0.5);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 990px) {
    flex-direction: row;
  }
`

const Text = styled.p`
  @media (min-width: 990px) {
    margin: 0;
  }
`

const Actions = styled.div`
  display: flex;
`

const AcceptBtn = styled(Button)`
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: #008f52;
`

const CloseBtn = styled(Button)`
  line-height: 1;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  color: #dc371b;
`

const COOKIES_CLOSE_KEY = 'cookie_close'
const CookiesPrompt = () => {
  const [hidePrompt, setHidePrompt] = useState(() => !!Cookies.get(COOKIES_CLOSE_KEY))

  const acceptCookies = () => {
    Cookies.set(COOKIES_CLOSE_KEY, true)
    setHidePrompt(true)
  }

  const closePrompt = () => {
    setHidePrompt(true)
  }

  if (hidePrompt) {
    return null
  }

  return (
    <Wrapper>
      <Content>
        <Text>
          Ta strona korzysta z plików cookie. Sprawdź naszą politykę prywatności, żeby dowiedzieć
          się{' '}
          <Link href="attachments/polityka_prywatnosci.pdf" external>
            więcej
          </Link>
          .
        </Text>
        <Actions>
          <AcceptBtn onClick={acceptCookies}>Akceptuję</AcceptBtn>
          <CloseBtn onClick={closePrompt}>Zamknij</CloseBtn>
        </Actions>
      </Content>
    </Wrapper>
  )
}

export default CookiesPrompt
