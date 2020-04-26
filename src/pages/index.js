import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR, { mutate } from 'swr'

import FeedLayoutManager from 'containers/FeedLayoutManager'
import ListItem from 'containers/ListItem'
import Feed from 'containers/Feed'
import Container from 'components/Container'

import { useState, useEffect } from 'react'
import { FEED_LAYOUTS } from 'consts'
import Topbar from 'containers/Topbar'

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
        <title>DoFacts!</title>
        <meta
          name="description"
          content="DoFacts! is an open source application focused on the fight against disinformation"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DoFacts!" />
        <meta
          property="og:description"
          content="DoFacts! is an open source application focused on the fight against disinformation"
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
