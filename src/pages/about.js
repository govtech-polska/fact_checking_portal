import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import styled from 'styled-components'
import useSWR, { mutate } from 'swr'

import FeedLayoutManager from 'containers/FeedLayoutManager'
import ListItem from 'containers/ListItem'
import Feed from 'containers/Feed'
import Container from 'components/Container'

import Topbar from 'containers/Topbar'

const LAYOUT_TYPE = 'LAYOUT_TYPE'
const About = () => {
  return (
    <>
      <Head>
        <title>DoFacts! - about</title>
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Tristique nulla aliquet enim tortor. Neque gravida in
          fermentum et sollicitudin. Tristique magna sit amet purus gravida. Suspendisse sed nisi
          lacus sed. Vestibulum rhoncus est pellentesque elit ullamcorper. Enim sed faucibus turpis
          in eu mi bibendum neque egestas. Bibendum ut tristique et egestas quis ipsum. Amet mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Cursus in hac habitasse
          platea dictumst quisque sagittis purus. Duis ultricies lacus sed turpis tincidunt. In ante
          metus dictum at tempor. Odio ut sem nulla pharetra. Dui faucibus in ornare quam viverra
          orci sagittis eu volutpat. Leo in vitae turpis massa sed.
        </p>
        <p>
          Turpis egestas maecenas pharetra convallis posuere morbi leo. Rhoncus est pellentesque
          elit ullamcorper dignissim cras tincidunt. Vulputate dignissim suspendisse in est ante in
          nibh. Dignissim sodales ut eu sem integer vitae justo eget magna. Risus nec feugiat in
          fermentum posuere. Sed adipiscing diam donec adipiscing tristique. Tempus iaculis urna id
          volutpat lacus laoreet non curabitur gravida. Eget aliquet nibh praesent tristique magna
          sit amet purus gravida. Amet est placerat in egestas. Urna id volutpat lacus laoreet non
          curabitur gravida. Nunc sed velit dignissim sodales ut eu sem. Eu scelerisque felis
          imperdiet proin fermentum. Augue eget arcu dictum varius duis at consectetur. Iaculis nunc
          sed augue lacus viverra vitae. Porttitor rhoncus dolor purus non enim praesent elementum.
          Morbi leo urna molestie at. Risus commodo viverra maecenas accumsan. Aliquet porttitor
          lacus luctus accumsan. Quis varius quam quisque id diam. Leo vel fringilla est ullamcorper
          eget nulla facilisi etiam.
        </p>
        <p>
          Suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Volutpat blandit aliquam
          etiam erat velit. Aliquam purus sit amet luctus venenatis lectus magna fringilla. Nisl
          suscipit adipiscing bibendum est ultricies integer quis auctor. Dui faucibus in ornare
          quam viverra orci sagittis eu volutpat. Pretium aenean pharetra magna ac placerat
          vestibulum. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ac turpis
          egestas integer eget aliquet nibh. Eleifend quam adipiscing vitae proin. Turpis tincidunt
          id aliquet risus feugiat in ante metus. Ultrices tincidunt arcu non sodales neque sodales
          ut etiam. Vitae congue eu consequat ac felis donec et odio.
        </p>
      </Container>
    </>
  )
}

export default About
