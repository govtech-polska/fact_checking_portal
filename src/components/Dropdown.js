import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { useState, useEffect } from 'react'

const Wrapper = styled.div`
  position: relative;
`

const Label = styled.button`
  appearance: none;
  margin: 0;
  background: none;
  border: none;
  padding: 0 20px 0 10px;
  color: #fff;
  position: relative;
  cursor: pointer;

  :after {
    content: '›';
    position: absolute;
    display: block;
    right: 0;
    top: 50%;
    font-size: 24px;
    transform: rotate(90deg);

    ${({ open }) =>
      open &&
      css`
        transform: rotate(-90deg);
        right: 7px;
      `}
  }

  &:active {
    outline: none;
  }
`
const List = styled.ul`
  position: absolute;
  list-style: none;
  padding: 0;
  left: 0;
  right: 0;
  display: none;
  border: 1px solid #666;
  transform: translateY(5px);

  ${({ open }) => open && `display: block;`}
`
const Item = styled.li`
  padding: 10px;
  background: #fff;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`

const Dropdown = ({ options, value, label, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const currentLabel = options.find((item) => item.value === value).label || label

  const handleOpen = (e) => {
    e.target.blur()
    setIsOpen(true)
  }

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false)
    }
    if (isOpen) {
      window.addEventListener('click', handleClickOutside, { once: true })
    }
    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen])

  const handleClick = (item) => () => {
    onChange(item)
  }

  return (
    <Wrapper>
      <Label className={className} open={isOpen} onClick={handleOpen}>
        {currentLabel}
      </Label>
      <List open={isOpen}>
        {options.map((item) => (
          <Item key={item.value} onClick={handleClick(item)}>
            {item.label}
          </Item>
        ))}
      </List>
    </Wrapper>
  )
}

Dropdown.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.shape({
    find: PropTypes.func,
    label: PropTypes.string,
    map: PropTypes.func,
    value: PropTypes.any
  }),
  value: PropTypes.any
}

export default Dropdown
