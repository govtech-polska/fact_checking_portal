import RouteParser from 'route-parser'
import qs from 'qs'

export const resolveUrl = (pattern, params, query) => {
  const urlPattern = new RouteParser(pattern)
  const url = urlPattern.reverse(params)
  const queryString = qs.stringify(query, { arrayFormat: 'brackets', addQueryPrefix: true })
  return `${url}${queryString}`
}

export const matchUrl = (pattern, path, langSupport) => {
  let patternToUse = pattern
  if (langSupport) patternToUse = '(/:lang)'.concat(pattern)
  const urlPattern = new RouteParser(patternToUse)
  return urlPattern.match(path)
}

export const getError = (error) =>
  String(error.response?.data?.detail || error.response?.data || error.message || error)

export const getPostDate = (expert, checkers) => expert?.date || checkers?.[0]?.date

export const getUUIDFromUrl = (url) => {
  return url.match(
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/
  )?.[0]
}

export const getAbsoluteUrl = (req, setLocalhost) => {
  var protocol = 'https:'
  var host = req ? req.headers['x-forwarded-host'] || req.headers['host'] : window.location.host
  if (host.indexOf('localhost') > -1) {
    if (setLocalhost) host = setLocalhost
    protocol = 'http:'
  }
  return {
    protocol: protocol,
    host: host,
    origin: protocol + '//' + host
  }
}
