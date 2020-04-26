import UrlPattern from 'url-pattern'

export const resolveUrl = (pattern, params) => {
  const urlPattern = new UrlPattern(pattern)
  return urlPattern.stringify(params)
}

export const getError = (error) =>
  error && String(error.response?.data?.detail || error.response?.data || error.message)

export const getPostDate = (expert, checkers) => expert?.date || checkers?.[0]?.date
