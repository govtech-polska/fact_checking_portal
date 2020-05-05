import PropTypes from 'prop-types'
import NextLink from 'next/link'
import styled, { css } from 'styled-components'
import ExternalLinkSvg from './Icons/ExternalLink'

const primaryMixin = css`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`

const clearMixin = css`
  color: inherit;
  text-decoration: none;
`

const StyledLink = styled.a`
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-all;
  word-break: break-word;
  hyphens: auto;

  ${(props) => (props.variant === 'clear' ? clearMixin : primaryMixin)};
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return `14px`
      case 'regular':
        return `16px`
    }
  }};
`

const LinkIcon = styled(ExternalLinkSvg)`
  height: 14px;
  margin-right: 6px;
  flex: 0 0 14px;
`

const Link = ({ className, href, external, children, withIcon, page, newTab, ...props }) => {
  const newTabPropses = newTab ? { target: '_blank', rel: 'noreferrer noopener' } : {}

  if (external) {
    return (
      <StyledLink href={href} className={className} {...newTabPropses} {...props}>
        {withIcon && <LinkIcon />}
        {children}
      </StyledLink>
    )
  }

  return (
    <NextLink href={page || href} as={href} passHref>
      <StyledLink className={className} {...newTabPropses} {...props}>
        {withIcon && <LinkIcon />}
        {children}
      </StyledLink>
    </NextLink>
  )
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  external: PropTypes.bool,
  children: PropTypes.node,
  variant: PropTypes.oneOf(['clear']),
  size: PropTypes.oneOf(['small', 'regular']),
  withIcon: PropTypes.bool,
  newTab: PropTypes.bool,
  page: PropTypes.string
}

export default Link
