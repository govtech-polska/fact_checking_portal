import styled, { keyframes } from 'styled-components'

const loaderAnim = keyframes`
  0% {
    transform: translateY(-16px);
    height: 64px;
  }
  50%, 100% {
    height: 32px;
  }
`

const Wrapper = styled.div`
  display: block;
  position: relative;
  width: 80px;
  height: 80px;
`

const Element = styled.div`
  display: inline-block;
  position: absolute;
  top: 24px;
  left: 8px;
  width: 16px;
  background: ${({ theme }) => theme.colors.hover};
  animation: ${loaderAnim} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;

  &:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  &:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  &:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
`

const Loader = () => {
  return (
    <Wrapper>
      <Element />
      <Element />
      <Element />
    </Wrapper>
  )
}

export default Loader
