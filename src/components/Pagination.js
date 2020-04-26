import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'

const styleVars = {
  colors: {
    disabled: '#ddd',
    border: '#dcdcdc',
    hover: '#e9ecef'
  }
}

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  font-weight: ${({ theme }) => theme.font.weight.regular};

  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }

  li {
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${styleVars.colors.border};
    margin-left: -1px;
    display: block;
    padding: 7px 14px;
    outline: none;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: ${styleVars.colors.hover};
    }
  }

  .previous a {
    border-radius: 4px 0 0 4px;
  }

  .next a {
    border-radius: 0 4px 4px 0;
  }

  .disabled a {
    color: ${styleVars.colors.disabled};
    pointer-events: none;
  }

  .selected a {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`

const PAGE_SIZE = 20
const Pagination = ({ total, page = 1, onPageChange }) => {
  const pageCount = Math.ceil(total / PAGE_SIZE)

  return (
    <PaginationWrapper>
      <ReactPaginate
        pageCount={pageCount}
        forcePage={page - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
      />
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  total: PropTypes.number,
  page: PropTypes.number,
  onPageChange: PropTypes.func
}

export default Pagination
