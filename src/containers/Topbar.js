import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

import Container from 'components/Container'
import Link from 'components/Link'
import LogoSvg from 'components/Icons/Logo'
import { useRouter } from 'next/router'

const Wrapper = styled.header`
  background: ${({ theme }) => theme.colors.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 999;
`

const Content = styled(Container)`
  padding: 20px 16px;
  margin: 0 auto;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledH1 = styled.h1`
  margin: 0;
  line-height: 0;
`

const Logo = styled(LogoSvg)`
  height: 45px;
  color: ${({ theme }) => theme.colors.primary};
`

const StyledLink = styled(Link)`
  line-height: 1;
`

const MenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 1300px) {
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 100%;
    background: ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 16px;
    display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  }
`

const Hamburger = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  position: relative;
  display: none;

  @media (max-width: 1300px) {
    display: block;
  }
`

const HamburgerItems = styled.span`
  display: inline-block;
  vertical-align: middle;
  width: 30px;
  height: 2px;
  background: ${({ theme }) => theme.colors.white};

  &:before {
    content: '';
    position: absolute;
    top: 7px;
    display: block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 5px;
    display: block;
    width: 30px;
    height: 2px;
    background: ${({ theme }) => theme.colors.white};
  }
`

const menuItemMixin = css`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding: 8px 15px;
  font-size: 14px;
  margin: 0;
  text-decoration: none;
  line-height: 1.5;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: underline;
  }

  @media (max-width: 1300px) {
    font-size: 16px;
    display: block;
  }
`

const MenuItemLink = styled(Link)`
  ${menuItemMixin}

  ${({ theme, special }) =>
    special &&
    css`
      background: ${theme.colors.white};
      color: ${theme.colors.primary};
      margin: 0 10px;
      padding: 8px 15px;
      transition: all 0.2s ease;

      &:hover {
        text-decoration: none;
        background: ${theme.colors.primaryHover};
        color: ${theme.colors.white};
      }
    `}
`

const menuItems = (isFirefox = false, t) => [
  {
    href: '/',
    label: t('common:nav.verified')
  },
  {
    href: '/o-projekcie',
    label: t('common:nav.about')
  },


  {
    href: '/o-projekcie#jaktodziala',
    label: t('common:nav.report'),
    special: true
  },


  {
    href: '/o-projekcie#zostanfakehunterem',
    label: t('common:nav.join')
  },
  {
    href: '/zespol',
    label: t('common:nav.team')
  },
  {
    href: '/dolacz-do-partnerow',
    label: t('common:nav.partners')
  },
  {
    href: '/challengeIV',
    label: t('common:nav.challengeIV')
  }
]

const NEW_TAB_PROPSES = { target: '_blank', rel: 'noreferrer noopener' }

const Topbar = () => {
  const { route, asPath } = useRouter()
  const routeWithoutLocale = route.replace(/^\/en\/?/, '/')
  const pathWithoutLocale = asPath.replace(/^\/en\/?/, '/')
  const [isOpen, setIsOpen] = useState(false)
  const [isFirefox, setIsFirefox] = useState(false)
  const { t, lang } = useTranslation()
  const isPL = lang === 'pl'

  useEffect(() => {
    const isFirefox = window.navigator.userAgent.indexOf('Firefox/') > -1
    setIsFirefox(isFirefox)
  }, [])

  return (
      <Wrapper>
        <Content>
          <StyledLink href="/">
            <StyledH1>
              <Logo />
            </StyledH1>
          </StyledLink>
          <Hamburger onClick={() => setIsOpen(!isOpen)}>
            <HamburgerItems />
          </Hamburger>
          <MenuList isOpen={isOpen}>
            {menuItems(isFirefox, t).map((item) => (
                <li key={item.href}>
                  <MenuItemLink
                      href={item.href}
                      special={item.special}
                      external={item.special}
                      {...(item.special ? NEW_TAB_PROPSES : {})}
                  >
                    {item.label}
                  </MenuItemLink>
                </li>
            ))}
            <li>
              <MenuItemLink
                  nextLinkProps={{ lang: isPL ? 'en' : 'pl' }}
                  page={routeWithoutLocale}
                  href={pathWithoutLocale}
              >
                {isPL ? 'EN' : 'PL'}
              </MenuItemLink>
            </li>
          </MenuList>
        </Content>
      </Wrapper>
  )
}

export default Topbar