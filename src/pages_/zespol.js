import Head from 'next/head'
import Layout from 'containers/Layout'
import useTranslation from 'next-translate/useTranslation'

const NUMBER_OF_PEOPLE = 17
const TEAM_SIZE_ARRAY = Array(NUMBER_OF_PEOPLE).fill()

const Team = () => {
  const { t } = useTranslation()
  const getPersonData = (index) => ({
    name: t(`team:data.${index}.name`),
    description: t(`team:data.${index}.description`)
  })

  return (
    <>
      <Head>
        <meta
          name="description"
          content="#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2"
        />
        <meta
          property="og:title"
          content="#FakeHunter - dołącz do walki z dezinformacją o SARS-CoV-2"
        />
        <meta property="og:url" content="https://fakehunter.pap.pl/" />
        <meta
          property="og:description"
          content="#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2"
        />
        <meta property="og:image" content="/og-image.png" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />

        <link rel="stylesheet" href="/style.css" />
      </Head>
      <Layout>
        <article className="article">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1 className="title">{t('team:title')}</h1>

                <p className="lead">{t('team:description')}</p>

                <h2 className="subtitle">{t('team:subtitle')}</h2>

                <ul>
                  {TEAM_SIZE_ARRAY.map((_, i) => {
                    const { name, description } = getPersonData(i + 1)
                    return (
                      <li key={name}>
                        <strong>{name}</strong>
                        <p>{description}</p>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </>
  )
}

export default Team
