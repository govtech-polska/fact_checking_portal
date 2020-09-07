import axios from 'axios'

export const request = (endpoint, method = 'GET', options = {}) => {
  let url = process.env.API_URL + endpoint
  if (endpoint.startsWith('http') || options.sameOrigin) {
    url = endpoint
  }
  const reqConfig = {
    url,
    method,
    ...options
  }

  return axios(reqConfig).then((response) => response.data)
}
