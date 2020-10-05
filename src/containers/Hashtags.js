import { Fragment } from 'react'
import PropTypes from 'prop-types'
import useSWR from 'swr'
import styled from 'styled-components'
import useTranslation from 'next-translate/useTranslation'

import Link from 'components/Link'
import { resolveUrl } from 'utils'
import { appUrls, apiUrls } from 'urls'
import { request } from 'base/request'

const Text = styled.p`
  color: #666;
  font-size: 15px;
  margin: 0;
  margin-bottom: 10px;
`

const Hashtags = ({ initialData }) => {
  const { t } = useTranslation()
  const { data, error } = useSWR(resolveUrl(apiUrls.TAGS, {}, { popular: true }), request, {
    suspense: false,
    initialData
  })

  const results = data?.results || []

  if (!data || error) {
    return null
  }

  return (
    <Text>
      {t('verified:feed.latestTags')}{' '}
      {results.map((tag, i) => {
        const url = resolveUrl(appUrls.FEED, {}, { tags: [tag.name] })
        return (
          <Fragment key={tag.name}>
            <Link
              href={url}
              page={url}
              nextLinkProps={{
                scroll: false
              }}
            >{`#${tag.name}`}</Link>
            {i !== results.length - 1 && ', '}
          </Fragment>
        )
      })}
    </Text>
  )
}

Hashtags.propTypes = {
  id: PropTypes.string,
  initialData: PropTypes.object
}

export default Hashtags
