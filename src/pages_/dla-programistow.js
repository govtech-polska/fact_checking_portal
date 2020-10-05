import PropTypes from 'prop-types'
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import Layout from 'containers/Layout'
import Container from 'components/Container'
import CommonHead from 'base/CommonHead'
import { Title, Text } from 'components/Typography'
import SnippetSection, { ConfigRow, ConfigLabel, ConfigInput } from 'components/SnippetSection'
import { getUUIDFromUrl, resolveUrl } from 'utils'
import { apiUrls } from 'urls'
import { request } from 'base/request'

const APP_URL = process.env.APP_URL

const getAppUrl = (isEn) => `${process.env.APP_URL}${isEn ? '/en' : ''}`

const DETAILS = {
  config: { width: 500, height: 360, url: 'caf6516b-b4b4-434c-8ea8-b0beddf858b8' },
  src: ({ url, isEn }) => `${getAppUrl(isEn)}/plugins/details/${getUUIDFromUrl(url)}`,
  snippet: ({ url, width, height, isEn }) => `<iframe
  src="${getAppUrl(isEn)}/plugins/details/${getUUIDFromUrl(url)}"
  width="${width}" height="${height}" frameborder="0"
  style="border: none; width: 100%; max-width: ${width}px;"
/>`
}

const PINNED = {
  config: { width: 1000, height: 450 },
  src: ({ isEn }) => `${getAppUrl(isEn)}/plugins/pinned`,
  snippet: ({ width, height, isEn }) => `<iframe
  src="${getAppUrl(isEn)}/plugins/pinned"
  width="${width}" height="${height}" frameborder="0"
  style="border: none; width: 100%; max-width: ${width}px;"
/>`
}

const NEWEST = {
  config: { width: 1000, height: 450, count: 5 },
  src: ({ count, isEn }) => `${getAppUrl(isEn)}/plugins/newest?count=${count}`,
  snippet: ({ width, height, count, isEn }) => `<iframe
  src="${getAppUrl(isEn)}/plugins/newest?count=${count}"
  width="${width}" height="${height}" frameborder="0"
  style="border: none; width: 100%; max-width: ${width}px;"
/>`
}

const Development = ({ defaultDetailsUrl }) => {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <CommonHead title={t('developers:tabTitle')} />
      </Head>

      <Layout>
        <Container>
          <Title style={{ margin: '30px 0' }}>{t('developers:title')}</Title>
          <Text style={{ marginBottom: '48px' }}>{t('developers:description')}</Text>
        </Container>

        <SnippetSection
          title={t('developers:iframes.report.title')}
          defaultConfig={{ ...DETAILS.config, url: defaultDetailsUrl }}
          getSrc={DETAILS.src}
          snippet={DETAILS.snippet}
          renderConfig={(config, setConfig) => (
            <ConfigRow>
              <ConfigLabel>{t('developers:iframes.report.urlLabel')}</ConfigLabel>
              <ConfigInput
                name="url"
                placeholder={`np. ${config.url}`}
                onBlur={(e) => setConfig({ ...config, url: e.target.value || defaultDetailsUrl })}
              />
            </ConfigRow>
          )}
        />

        <SnippetSection
          title={t('developers:iframes.pinned.title')}
          defaultConfig={PINNED.config}
          getSrc={PINNED.src}
          snippet={PINNED.snippet}
        />

        <SnippetSection
          title={t('developers:iframes.newest.title')}
          defaultConfig={NEWEST.config}
          getSrc={NEWEST.src}
          snippet={NEWEST.snippet}
          renderConfig={(config, setConfig) => (
            <ConfigRow>
              <ConfigLabel>{t('developers:iframes.newest.countLabel')}</ConfigLabel>
              <ConfigInput
                name="count"
                type="number"
                placeholder={t('developers:iframes.newest.countPlaceholder', {
                  from: 1,
                  to: 20,
                  example: 5
                })}
                onBlur={(e) =>
                  setConfig({ ...config, count: e.target.value || NEWEST.config.count })
                }
              />
            </ConfigRow>
          )}
        />
      </Layout>
    </>
  )
}

Development.propTypes = {
  defaultDetailsUrl: PropTypes.string
}

export async function getStaticProps() {
  const data = await request(resolveUrl(apiUrls.FEED))
  const firstId = data?.results?.[0]?.id

  return { props: { defaultDetailsUrl: `${process.env.APP_URL}/${firstId}` } }
}

export default Development
