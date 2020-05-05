import Head from 'next/head'

import FeedLayoutManager from 'containers/FeedLayoutManager'
import Topbar from 'containers/Topbar'
import Feed from 'containers/Feed'
import Container from 'components/Container'

import { useState, useEffect } from 'react'
import { FEED_LAYOUTS } from 'consts'

const LAYOUT_TYPE = 'LAYOUT_TYPE'
const Index = () => {
  const [layout, setLayout] = useState(FEED_LAYOUTS.LIST)

  useEffect(() => {
    setLayout(localStorage.getItem(LAYOUT_TYPE) || FEED_LAYOUTS.LIST)
  }, [])

  const handleLayoutChange = (type) => {
    setLayout(type)
    localStorage.setItem(LAYOUT_TYPE, type)
  }

  return (
    <>
      <Head>
        <title>#FakeHunter - dołącz do walki z dezinformacją o SARS-COV-2</title>
        <meta
          name="description"
          content="#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="#FakeHunter - dołącz do walki z dezinformacją o SARS-COV-2"
        />
        <meta
          property="og:description"
          content="#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2"
        />
      </Head>

      <Topbar />
      <Container>
        <FeedLayoutManager active={layout} onChange={handleLayoutChange} />
        <Feed layout={layout} />
      </Container>
    </>
  )
}

export default Index
