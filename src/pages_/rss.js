import { Feed } from 'feed'
import { request } from 'base/request'
import { apiUrls } from 'urls'

const APP_URL = process.env.APP_URL
const Rss = () => {
  return null
}

export async function getServerSideProps({ res }) {
  const data = await request(apiUrls.FEED)

  const feed = new Feed({
    title: '#FakeHunter',
    description:
      '#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2',
    id: APP_URL,
    link: APP_URL,
    language: 'pl',
    image: `${APP_URL}/og-image.png`,
    favicon: `${APP_URL}/favicon.ico`
  })

  data?.results?.forEach((item) => {
    feed.addItem({
      title: item.title,
      id: item.id,
      link: `${APP_URL}/${item.id}`,
      description: item.text,
      content: item.text,
      date: new Date(item.date),
      image: item.screenshot_url
    })
  })

  res.setHeader('Content-type', 'text/xml')
  res.write(feed.rss2())
  res.end()
  return { props: {} }
}

export default Rss
