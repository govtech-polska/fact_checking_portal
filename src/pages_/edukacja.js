/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import ContactForm from 'components/ContactForm'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
  const recaptcha = document.querySelector('.grecaptcha-badge')
  if (recaptcha) recaptcha.style.display = display
}

const Edukacja = () => {
  const {t, lang} = useTranslation()
  const isEn = lang === 'en'

  useEffect(() => {
    setRecaptchaDisplay('block')
    return () => {
      setRecaptchaDisplay('none')
    }
  }, [])

  return (
      <>
        <Head>
          <CommonHead/>
          <link
              rel="stylesheet"
              href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          />
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"/>
          <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"/>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"/>
          <script
              src={`https://www.google.com/recaptcha/api.js?render=${process.env.GOOGLE_SITE_KEY}`}
              async
              defer
          />
        </Head>
        <Layout>
          <div className={`about-project ${isEn ? 'en' : ''}`}>
            <section className="s1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <h1 className="title">
                      <Trans i18nKey="edukacja:title" components={[<br/>, <span/>]}/>
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="followUs">
                      <h4>{t('edukacja:follow')}</h4>
                      <ul>
                        <li className="facebook">
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://www.facebook.com/PAPFakeHunter/"
                          ></a>
                        </li>
                        <li className="twitter">
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              href="https://twitter.com/PAPFakeHunter"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="quotation">
                      <h2>
                        <Trans i18nKey="edukacja:quote" components={[<br/>, <br/>]}/>
                      </h2>
                      <br/>
                      Katie Byron
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="s2" id="oprojekcie">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('edukacja:section1.title')}</h2>
                      <p className="title">{t('edukacja:section1.subtitle')}</p>
                      <p>
                        <span>#FakeHunter</span> {t('edukacja:section1.description')}
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/image2.png" alt=""/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="s8" id="kontakt">
              <div className="container-fluid">
                <div className="row no-gutters">


                  <div className="col-lg-12">
                    <div className="textWrapper">
                      <h2 className="section">{t('edukacja:section7.title')}</h2>
                      <p className="title">{t('edukacja:section7.subtitle')}</p>
                      <p>
                        <Trans i18nKey="edukacja:section7.description" components={[<a className="link" href="mailto:fakehunter@pap.pl" target="_blank"/>]}/></p>
                    </div>
                  </div>


                </div>
              </div>
            </section>
          </div>
        </Layout>
      </>
  )
}

export default Edukacja