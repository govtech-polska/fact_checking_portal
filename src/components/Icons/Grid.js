import PropTypes from 'prop-types'

const Grid = ({ className, title }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 444 444" className={className}>
    <title>{title}</title>
    <path
      fill="currentColor"
      d="M7 0h181a7 7 0 017 7v181a7 7 0 01-7 7H7a7 7 0 01-7-7V7a7 7 0 017-7zm0 0M256 0h181a7 7 0 017 7v181a7 7 0 01-7 7H256a7 7 0 01-7-7V7a7 7 0 017-7zm0 0M7 249h181a7 7 0 017 7v181a7 7 0 01-7 7H7a7 7 0 01-7-7V256a7 7 0 017-7zm0 0M256 249h181a7 7 0 017 7v181a7 7 0 01-7 7H256a7 7 0 01-7-7V256a7 7 0 017-7zm0 0"
    />
  </svg>
)

Grid.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

export default Grid
