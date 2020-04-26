require('dotenv').config()
const path = require('path')

module.exports = () => {
  return {
    env: {
      API_URL: process.env.API_URL
    },
    webpack(config) {
      config.resolve.modules.push(path.join(__dirname, 'src'))
      return config
    }
  }
}
