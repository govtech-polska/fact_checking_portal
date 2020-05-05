import PropTypes from 'prop-types'
import styled from 'styled-components'
import Warning from 'components/Icons/Warning'
import Loader from './Loader'

const Error = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.error};

  svg {
    height: 18px;
    margin-right: 10px;
  }
`

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const Suspense = ({ children, wait, error, infinite }) => {
  if (wait && !infinite) {
    return (
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
    )
  }

  if (error) {
    return (
      <Error>
        <Warning /> {error}
      </Error>
    )
  }

  return children
}

Suspense.propTypes = {
  children: PropTypes.element,
  wait: PropTypes.bool,
  infinite: PropTypes.bool,
  error: PropTypes.string
}

export default Suspense
