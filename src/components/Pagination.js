import PropTypes from 'prop-types'
import ReactPaginate from 'react-paginate'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

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
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
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

const Pagination = ({ total, pageSize, page = 1, onPageChange }) => {
  const { t } = useTranslation()
  const pageCount = Math.ceil(total / pageSize)

  if (pageCount === 0) {
    return null
  }

  return (
    <PaginationWrapper>
      <ReactPaginate
        pageCount={pageCount}
        forcePage={page - 1}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        nextLabel={t('verified:pagination.next')}
        previousLabel={t('verified:pagination.previous')}
      />
    </PaginationWrapper>
  )
}

Pagination.propTypes = {
  total: PropTypes.number,
  pageSize: PropTypes.number,
  page: PropTypes.number,
  onPageChange: PropTypes.func
}

export default Pagination
