import { useRef, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import styled, { css } from 'styled-components'

import Link from 'components/Link'
import Container from 'components/Container'
import Button from 'components/Button'

import { resolveUrl } from 'utils'
import { apiUrls, appUrls } from 'urls'
import { request } from 'base/request'

const Wrapper = styled.div`
  background: #f7f0f2;
`

const StyledContainer = styled(Container)`
  margin: 10px auto;
  display: flex;
`

const showAll = css`
  flex-wrap: wrap;

  &:after {
    display: none;
  }
`

const OverflowWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  position: relative;

  &:after {
    ${(props) => props.isOverflown && `content: '';`}
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 32px;
    background: linear-gradient(90deg, rgba(247, 240, 242, 0) 0%, rgba(247, 240, 242, 1) 90%);
    z-index: 1;
  }

  ${(props) => props.showAll && showAll}
`

const activeLink = css`
  background: ${({ theme }) => theme.colors.primary};
  transition: background 0.3s;

  &,
  &:hover {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
  }
`

const StyledLink = styled(Link)`
  word-break: normal;
  white-space: nowrap;
  font-size: 14px;
  padding: 8px 12px;
  margin: 6px 4px;
  position: relative;
  text-transform: capitalize;
  color: #6b3931;
  font-weight: ${({ theme }) => theme.font.weight.medium};

  &:hover {
    text-decoration: underline;
  }

  ${(props) => props.active && activeLink}
`

const MoreButton = styled(Button)`
  border: none;
  word-break: normal;
  white-space: nowrap;
  font-size: 14px;
  padding: 8px 12px;
  margin: 6px 4px;
  position: relative;
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  outline: none;

  ${(props) => props.hide && 'display: none;'}
`

const isOverflown = (el) => {
  if (!el) return false
  return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth
}

const Categories = ({ activeCategory, initialData }) => {
  const { data } = useSWR(apiUrls.CATEGORIES, request, {
    suspense: false,
    initialData
  })
  const $container = useRef(null)
  const [showAll, setShowAll] = useState(false)
  const [displayMoreBtn, setDisplayMoreBtn] = useState(false)

  useEffect(() => {
    setDisplayMoreBtn(isOverflown($container.current))
  }, [data?.results?.length])

  useEffect(() => {
    if (!showAll) {
      setDisplayMoreBtn(isOverflown($container.current))
    }
  }, [showAll])

  useEffect(() => {
    const handleResize = () => {
      if (!showAll) {
        setDisplayMoreBtn(isOverflown($container.current))
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (!data || data.results?.length === 0) {
    return null
  }
  const feedPageUrl = resolveUrl(appUrls.FEED)
  return (
    <Wrapper>
      <StyledContainer>
        <OverflowWrapper ref={$container} isOverflown={displayMoreBtn} showAll={showAll}>
          <StyledLink href={feedPageUrl} page={feedPageUrl} active={!activeCategory}>
            Wszystkie
          </StyledLink>

          {data.results?.map(({ name }) => {
            const url = resolveUrl(appUrls.FEED, { category: name })
            return (
              <StyledLink key={name} href={url} page={feedPageUrl} active={activeCategory === name}>
                {name}
              </StyledLink>
            )
          })}

          <MoreButton onClick={() => setShowAll(false)} hide={!showAll}>
            Pokaż mniej
          </MoreButton>
        </OverflowWrapper>

        {displayMoreBtn && (
          <MoreButton onClick={() => setShowAll(true)} hide={showAll}>
            Pokaż więcej
          </MoreButton>
        )}
      </StyledContainer>
    </Wrapper>
  )
}

Categories.propTypes = {
  activeCategory: PropTypes.string,
  initialData: PropTypes.object
}

export default Categories
