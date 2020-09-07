import styled from 'styled-components'

import SearchIcon from './Icons/Search'

// TODO: all styles and markup is just boilarplate for now
const SearchWrapper = styled.div`
  height: 50px;
  max-width: 500px;
  width: 100%;
  display: flex;
`

const Input = styled.input`
  height: 100%;
  width: 100%;
  background: #fff;
  border: 2px solid transparent;
  appearance: none;
  padding: 16px;
  outline: none;

  &:focus {
    border-bottom: 2px dashed ${({ theme }) => theme.colors.hover};
  }
`

const Button = styled.button`
  height: 50px;
  flex: 1 0 50px;
  background: ${({ theme }) => theme.colors.hover};
  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    border: 2px dashed ${({ theme }) => theme.colors.primary};
  }
`

const Search = () => (
  <SearchWrapper>
    <Input type="search" placeholder="Wyszukaj newsa" />
    <Button>
      <SearchIcon />
    </Button>
  </SearchWrapper>
)

export default Search
