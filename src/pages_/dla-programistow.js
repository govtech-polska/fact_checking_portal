import PropTypes from 'prop-types'
import Head from 'next/head'

import Layout from 'containers/Layout'
import Container from 'components/Container'
import CommonHead from 'base/CommonHead'
import { Title, Text } from 'components/Typography'
import SnippetSection, { ConfigRow, ConfigLabel, ConfigInput } from 'components/SnippetSection'
import { getUUIDFromUrl, resolveUrl } from 'utils'
import { apiUrls } from 'urls'
import { request } from 'base/request'

const APP_URL = process.env.APP_URL

const DETAILS = {
  config: { width: 500, height: 360, url: 'caf6516b-b4b4-434c-8ea8-b0beddf858b8' },
  src: ({ url }) => `${APP_URL}/plugins/details/${getUUIDFromUrl(url)}`,
  snippet: ({ url, width, height }) => `<iframe
  src="${APP_URL}/plugins/details/${getUUIDFromUrl(url)}"
  width="${width}" height="${height}" frameborder="0"
  style="border: none; width: 100%; max-width: ${width}px;"
/>`
}

const PINNED = {
  config: { width: 1000, height: 450 },
  src: () => `${APP_URL}/plugins/pinned`,
  snippet: ({ width, height }) => `<iframe
  src="${APP_URL}/plugins/pinned"
  width="${width}" height="${height}" frameborder="0"
  style="border: none; width: 100%; max-width: ${width}px;"
/>`
}

const NEWEST = {
  config: { width: 1000, height: 450, count: 5 },
  src: ({ count }) => `${APP_URL}/plugins/newest?count=${count}`,
  snippet: ({ width, height, count }) => `<iframe
  src="${APP_URL}/plugins/newest?count=${count}"
  width="${width}" height="${height}" frameborder="0"
  style="border: none; width: 100%; max-width: ${width}px;"
/>`
}

const Development = ({ defaultDetailsUrl }) => {
  return (
    <>
      <Head>
        <CommonHead title="#FakeHunter - dla programistów" />
      </Head>

      <Layout>
        <Container>
          <Title style={{ margin: '30px 0' }}>Dla programistów</Title>
          <Text style={{ marginBottom: '48px' }}>
            Na tej stronie znaleźć można fragmenty kodu, które pozwalają na osadzenie istotnych
            elementów portalu na zewnętrznych stronach www. Każda z poniższych sekcji składa się z
            pól konfiguracyjnych, podglądu oraz gotowego kodu do osadzenia.
          </Text>
        </Container>

        <SnippetSection
          title="Raport fact checkingowy"
          defaultConfig={{ ...DETAILS.config, url: defaultDetailsUrl }}
          getSrc={DETAILS.src}
          snippet={DETAILS.snippet}
          renderConfig={(config, setConfig) => (
            <ConfigRow>
              <ConfigLabel>Jaki jest adres raportu?</ConfigLabel>
              <ConfigInput
                name="url"
                placeholder={`np. ${config.url}`}
                onBlur={(e) => setConfig({ ...config, url: e.target.value || defaultDetailsUrl })}
              />
            </ConfigRow>
          )}
        />

        <SnippetSection
          title="Wyróżnione raporty"
          defaultConfig={PINNED.config}
          getSrc={PINNED.src}
          snippet={PINNED.snippet}
        />

        <SnippetSection
          title="Najnowsze raporty"
          defaultConfig={NEWEST.config}
          getSrc={NEWEST.src}
          snippet={NEWEST.snippet}
          renderConfig={(config, setConfig) => (
            <ConfigRow>
              <ConfigLabel>Ile raportów wyświetlać?</ConfigLabel>
              <ConfigInput
                name="count"
                type="number"
                placeholder="od 1 do 20 (np. 5)"
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
