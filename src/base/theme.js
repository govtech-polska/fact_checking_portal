import { VERDICT_STATUS } from '../consts'

const theme = {
  colors: {
    primary: '#0260E8',
    primaryHover: '#103a77',
    primaryActive: '#161077',

    cardBorder: '#eee',

    white: '#FFFFFF',

    hover: '#333',

    grayBg: '#f7f7f7',

    fontMain: '#333',
    error: '#ff0000',

    verdicts: {
      true: 'green',
      false: 'red',
      unidentified: 'gary'
    },

    secondary: '#D5233F',
    secondaryAlt: '#A7162D',
    black: '#1B1B1B',
    grayDarker: '#656565',
    grayDark: '#767676',

    gray: '#F1F1F1'
  },
  font: {
    size: {
      title: '30px',
      sectionTitle: '20px',
      subSectionTitle: '16px',
      body: '16px'
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700
    }
  },
  spacing: {
    main: '16px',
    large: '32px'
  },
  breakpoints: {
    tablet: '600px',
    desktop: '900px'
  }
}

export default theme
