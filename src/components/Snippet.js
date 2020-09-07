import PropTypes from 'prop-types'
import { useRef, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { ghcolors } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styled from 'styled-components'

import CopyToClickboardIcon from 'components/Icons/CopyToClickboard'

const Wrapper = styled.div`
  position: relative;
`

const CopyButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  appearance: none;
  background: rgba(0, 0, 0, 0);
  border: none;
  padding: 8px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`

const CopyIcon = styled(CopyToClickboardIcon)`
  width: 24px;
  height: 24px;
`

const CopyMessage = styled.p`
  position: absolute;
  top: 46px;
  right: 10px;
  padding: 6px 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  border-radius: 4px;
`

const Snippet = ({ children }) => {
  const $text = useRef(null)
  const closePopupTimeout = useRef(null)
  const [isCoppied, setIsCoppied] = useState(false)

  const copyToClickboard = () => {
    try {
      document.execCommand('copy')
      setIsCoppied(true)
      clearTimeout(closePopupTimeout.current)
      closePopupTimeout.current = setTimeout(() => {
        setIsCoppied(false)
      }, 750)
    } catch (e) {
      console.error('document.execCommand("copy")', e.message)
    }
  }

  const selectCode = () => {
    const textNode = $text.current
    if (document.body.createTextRange) {
      const range = document.body.createTextRange()
      range.moveToElementText(textNode)
      range.select()
      copyToClickboard()
    } else if (window.getSelection) {
      const selection = window.getSelection()
      const range = document.createRange()
      range.selectNodeContents(textNode)
      selection.removeAllRanges()
      selection.addRange(range)
      copyToClickboard()
    } else {
      console.warn('Could not select text in node: Unsupported browser.')
    }
  }

  return (
    <Wrapper>
      <span ref={$text}>
        <SyntaxHighlighter
          language="markup"
          style={ghcolors}
          customStyle={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}
          codeTagProps={{ style: { whiteSpace: 'inherit', wordBreak: 'inherit' } }}
        >
          {children}
        </SyntaxHighlighter>
      </span>
      <CopyButton onClick={selectCode}>
        <CopyIcon />
      </CopyButton>
      {isCoppied && <CopyMessage>Skopiowano</CopyMessage>}
    </Wrapper>
  )
}

Snippet.propTypes = {
  children: PropTypes.string
}

export default Snippet
