import PropTypes from 'prop-types'

const LogoPAP = ({ className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 27" className={className}>
      <title>Polska Agencja Prasowa</title>
      <path
        fill="#DC371B"
        d="M34.9,7.2c-0.7,0-1.5,0.1-2.1,0.4V7.2h-3.3v14.2h3.3v-3.8c0.6,0.3,1.4,0.4,2.1,0.4c3,0,5.4-2.5,5.4-5.4
            C40.3,9.6,37.9,7.2,34.9,7.2z M34.9,14.7c-1.2,0-2.1-1-2.1-2.1c0-1.2,0.9-2.1,2.1-2.1c1.2,0,2.1,1,2.1,2.1
            C37,13.8,36.1,14.7,34.9,14.7z"
      ></path>
      <path
        fill="#DC371B"
        d="M10.6,7.2c-0.7,0-1.5,0.1-2.1,0.4V7.2H5.2v14.2h3.3v-3.8c0.6,0.3,1.4,0.4,2.1,0.4c3,0,5.4-2.5,5.4-5.4
            C16.1,9.6,13.6,7.2,10.6,7.2z M10.6,14.7c-1.2,0-2.1-1-2.1-2.1c0-1.2,1-2.1,2.1-2.1s2.1,1,2.1,2.1C12.7,13.8,11.8,14.7,10.6,14.7
            z"
      ></path>
      <path
        fill="#DC371B"
        d="M24.1,7.5c-0.6-0.3-1.4-0.4-2.1-0.4c-3,0-5.4,2.5-5.4,5.5c0,3,2.5,5.4,5.4,5.4c0.7,0,1.5-0.2,2.1-0.4V18h3.3
            c0-3.6,0-7.2,0-10.8h-3.3V7.5z M22,14.7c-1.2,0-2.1-0.9-2.1-2.1c0-1.2,1-2.1,2.1-2.1c1.2,0,2.1,1,2.1,2.1
            C24.1,13.7,23.2,14.7,22,14.7z"
      ></path>
      <path
        fill="#DC371B"
        d="M22,0.1C10,0.1,0.1,4.3,0.1,13.5c0,9.2,9.9,13.4,21.9,13.4c12,0,21.9-4.3,21.9-13.4
            C43.9,4.3,34.1,0.1,22,0.1z M22,25C10.3,24.9,0.6,22,0.6,13.5C0.6,5,10.2,1.8,22,1.9C33.8,2,43.4,5,43.4,13.5
            C43.4,22,33.7,25.1,22,25z"
      ></path>
    </svg>
  )
}

LogoPAP.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string
}

export default LogoPAP
