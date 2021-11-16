import Head from 'next/head'
import Layout from 'containers/Layout'
import useTranslation from 'next-translate/useTranslation'



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
                <p className="lead">{t('team:description1')}</p>

                <h2 className="subtitle">{t('team:subtitle')}</h2>


                <h3 className="listHeader">{t('team:listHeader')}</h3>

                <ul>
                  <li>
                    <strong>{t('team:data.1.name')}</strong>
                    <p>{t('team:data.1.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.2.name')}</strong>
                    <p>{t('team:data.2.description')}</p>
                  </li>
                </ul>

                <h3 className="listHeader">{t('team:listHeader1')}</h3>


                <ul>
                  <li>
                    <strong>{t('team:data.3.name')}</strong>
                    <p>{t('team:data.3.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.4.name')}</strong>
                    <p>{t('team:data.4.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.5.name')}</strong>
                    <p>{t('team:data.5.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.6.name')}</strong>
                    <p>{t('team:data.6.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.7.name')}</strong>
                    <p>{t('team:data.7.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.8.name')}</strong>
                    <p>{t('team:data.8.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.9.name')}</strong>
                    <p>{t('team:data.9.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.10.name')}</strong>
                    <p>{t('team:data.10.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.11.name')}</strong>
                    <p>{t('team:data.11.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.12.name')}</strong>
                    <p>{t('team:data.12.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.13.name')}</strong>
                    <p>{t('team:data.13.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.14.name')}</strong>
                    <p>{t('team:data.14.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.15.name')}</strong>
                    <p>{t('team:data.15.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.17.name')}</strong>
                    <p>{t('team:data.17.description')}</p>
                  </li>
                  <li>
                    <strong>{t('team:data.16.name')}</strong>
                    <p>{t('team:data.16.description')}</p>
                  </li>
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
