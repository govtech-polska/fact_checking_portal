/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import ChallengeContactForm from 'components/ChallengeContactForm'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
  const recaptcha = document.querySelector('.grecaptcha-badge')
  if (recaptcha) recaptcha.style.display = display
}

const Challenge = () => {
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
          <div className={`challenge-project ${isEn ? 'en' : ''}`}>
            <section className="s1">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <h1 className="title">
                      <Trans i18nKey="challenge:title" components={[<br/>, <span/>]}/>
                    </h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-12">
                    <div className="followUs">
                      <h4>{t('challenge:follow')}</h4>
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
                        <Trans i18nKey="challenge:quote" components={[<br/>, <br/>]}/>
                      </h2>
                      <br/>
                      Organizatorzy
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="s5" id="zostanfakehunterem">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/image3.png" alt=""/>
                      <div className="author">
                        luismolinero / contrastwerkstatt / Rido / Asier / Adobe Stock
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section4.title')}</h2>
                      <p className="title">{t('challenge:section4.subtitle')}</p>
                      <p>
                        <Trans i18nKey="challenge:section4.description" />
                      </p>
                      <p>
                        <Trans i18nKey="challenge:section4.description1" components={[<a href="https://www.facebook.com/PAPFakeHunter/" target="_blank"/>]}/>
                      </p>
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button"
                          href="https://zgloszenia.govtech.gov.pl/ankieta/512297/dolacz-do-korpusu-ludzi-walczacych-z-dezinformacja-towarzyszaca-epidemii-koronawirusa.html"
                      >
                        {t('challenge:section4.applyBtn')}
                      </a>
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
                      <h2 className="section">{t('challenge:section1.title')}</h2>
                      <p className="title">{t('challenge:section1.subtitle')}</p>
                      <p>
                          {t('challenge:section1.description')}
                      </p>
                      <a className="button" 
                        target="_blank"
                        rel="noopener noreferrer"
                        href="/"
                        >
                        {t('challenge:section1.button')}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <iframe height = "380px" className = "imageWrapper" src="https://www.youtube.com/embed/Q_trVUFPNCI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                </div>
              </div>
            </section>

            <section className="s3" id="jaktodziala">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/image5.png" alt=""/>
                      <div className="author">strixcode / Adobe Stock</div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section2.title')}</h2>
                      <p className="title">{t('challenge:section2.subtitle')}</p>
                      <p>{t('challenge:section2.description')}</p>
                      <p>{t('challenge:section2.description1')}</p>

                      <a
                          className="collapseButton collapsed"
                          data-toggle="collapse"
                          href="#collapseTwo"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                        <span>{t('challenge:section2.button')}</span>
                      </a>

                      <div className="collapse" id="collapseTwo">
                          <p>{t('challenge:section2.collapsed.description')}</p>
                      </div>

                      <div></div>

                      <a
                          className="collapseButton collapsed"
                          data-toggle="collapse"
                          href="#collapseThree"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseTwo">
                        <span>{t('challenge:section2.button1')}</span>
                      </a>

                      <div className="collapse" id="collapseThree">
                        <p>{t('challenge:section2.collapsed1.description1')}</p>
                      </div>


                      <div></div>

                      <a
                          className="collapseButton collapsed"
                          data-toggle="collapse"
                          href="#collapseFive"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseFive">
                        <span>{t('challenge:section2.button2')}</span>
                      </a>

                      <div className="collapse" id="collapseFive">
                        <p>{t('challenge:section2.collapsed2.description2')}</p>
                      </div>

                      <div></div>

                      <a
                          className="collapseButton collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseFour">
                        <span>{t('challenge:section2.button3')}</span>
                      </a>

                      <div className="collapse" id="collapseFour">
                        <p>{t('challenge:section2.collapsed3.description3')}</p>
                      </div>


                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="s4" id="zweryfikowaneinformacje">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section3.title')}</h2>
                      <p className="title">{t('challenge:section3.subtitle')}</p>
                      <p>{t('challenge:section3.description')}</p>
                      <a className="button" href="/">
                        {t('challenge:section3.verifiedNewsBtn')}
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/image4.png" alt=""/>
                      <div className="author">Alejandro Escamilla / Unsplash</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="s8" id="kontakt">
              <div className="container-fluid">
                <div className="row no-gutters">
                <div className="col-lg-6">
                    <ul className="formWrapper">
                      <ChallengeContactForm/>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section7.title')}</h2>
                      <p className="title">{t('challenge:section7.subtitle')}</p>
                      <p>{t('challenge:section7.description')}</p>
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

export default Challenge