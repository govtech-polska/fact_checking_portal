import axios from 'axios'

export const request = (endpoint, method = 'GET', payload) => {
  let url = process.env.API_URL + endpoint
  if (endpoint.startsWith('http')) {
    url = endpoint
  }
  const reqConfig = {
    url,
    method,
    data: payload
  }

  return axios(reqConfig).then((response) => response.data)
}
