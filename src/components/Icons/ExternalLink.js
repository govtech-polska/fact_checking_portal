import PropTypes from 'prop-types'

const ExternalLink = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={className}>
      <path
        fill="currentColor"
        d="M488.73 0H302.54a23.27 23.27 0 000 46.55h130L193 286.09A23.27 23.27 0 00225.9 319L465.46 79.46v130a23.27 23.27 0 0046.55 0V23.27A23.27 23.27 0 00488.73 0z"
      />
      <path
        fill="currentColor"
        d="M395.64 232.73A23.27 23.27 0 00372.36 256v209.46H46.55V139.64H256a23.27 23.27 0 000-46.55H23.27A23.27 23.27 0 000 116.36v372.37A23.27 23.27 0 0023.27 512h372.37a23.27 23.27 0 0023.27-23.27V256a23.27 23.27 0 00-23.27-23.27z"
      />
    </svg>
  )
}

ExternalLink.propTypes = {
  className: PropTypes.string
}

export default ExternalLink
