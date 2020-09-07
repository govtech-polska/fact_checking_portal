require('dotenv').config()
const path = require('path')

module.exports = () => {
  return {
    env: {
      API_URL: process.env.API_URL,
      APP_URL: process.env.APP_URL,
      GOOGLE_SITE_KEY: process.env.GOOGLE_SITE_KEY,
      GOOGLE_SECRET_KEY: process.env.GOOGLE_SECRET_KEY
    },
    webpack(config) {
      config.resolve.modules.push(path.join(__dirname, 'src'))
      return config
    },
    async rewrites() {
      return [
        {
          source: '/:lang/kategoria/:category',
          destination: '/:lang'
        },
        {
          source: '/kategoria/:category',
          destination: '/'
        }
      ]
    },
    async redirects() {
      return [
        {
          source: `/:id([0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12})`,
          destination: '/raport/:id',
          statusCode: 301
        }
      ]
    }
  }
}
