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
                        <Trans i18nKey="challenge:section4.description" components={[<span/>]}/>
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
                        <span>#FakeHunter</span> {t('challenge:section1.description')}
                      </p>
                      <div className="collapse" id="collapseOne">
                        <p>{t('challenge:section1.collapsed.1')}</p>

                        <p>
                          <Trans i18nKey="challenge:section1.collapsed.2" components={[<span/>]}/>
                        </p>

                        <h3 className="subtitle">{t('challenge:section1.collapsed.3')}</h3>
                        <p>{t('challenge:section1.collapsed.4')}</p>
                        <p>{t('challenge:section1.collapsed.5')}</p>

                        <h3 className="subtitle">{t('challenge:section1.collapsed.6')}</h3>
                        <p>{t('challenge:section1.collapsed.7')}</p>
                      </div>
                      <a
                          className="collapseButton collapsed"
                          data-toggle="collapse"
                          href="#collapseOne"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                      >
                        <span></span>
                      </a>
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
                      <h3 className="subtitle">{t('challenge:section2.subtitle2')}</h3>
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

                        <ol>
                          <li>{t('challenge:section2.collapsed.1')}</li>
                          <li>{t('challenge:section2.collapsed.2')}</li>
                          <li>{t('challenge:section2.collapsed.3')}</li>
                          <li>{t('challenge:section2.collapsed.4')}</li>
                          <li>{t('challenge:section2.collapsed.5')}</li>
                          <li>{t('challenge:section2.collapsed.6')}</li>
                        </ol>
                        <div className="dropdown">
                          <button
                              className="dropdown-toggle buttonDropdown"
                              type="button"
                              id="dropdownMenuButton"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                          >
                            {t('challenge:section2.collapsed.installExtBtn')}
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dropdown-item"
                                href="https://chrome.google.com/webstore/detail/fakehunter/biebjolppinbddooahlglekngmalnfkf"
                            >
                              Chrome
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dropdown-item"
                                href="https://addons.mozilla.org/pl/firefox/addon/fakehunter-pap-pl/"
                            >
                              Firefox
                            </a>
                          </div>
                        </div>
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

                        <ol>
                          <li>{t('challenge:section2.collapsed1.1')}</li>
                          <li>{t('challenge:section2.collapsed1.2')}</li>
                          <li>{t('challenge:section2.collapsed1.3')}</li>
                          <li>{t('challenge:section2.collapsed1.4')}</li>
                        </ol>
                        <div className="dropdown">
                          <button
                              className="dropdown-toggle buttonDropdown"
                              type="button"
                              id="dropdownMenuButton1"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                          >
                            {t('challenge:section2.collapsed1.installExtBtn')}
                          </button>
                          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dropdown-item"
                                href="https://play.google.com/store/apps/details?id=pl.pap.fakehunter"
                            >
                              Android
                            </a>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="dropdown-item"
                                href="https://apps.apple.com/pl/app/fakehunter/id1527976394"
                            >
                              IOS
                            </a>
                          </div>
                        </div>
                      </div>


                      <div></div>


                      <a
                          className="collapseButton collapsed"
                          data-toggle="collapse"
                          href="#collapseFour"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapseFour">
                        <span>{t('challenge:section2.button2')}</span>
                      </a>

                      <div className="collapse" id="collapseFour">
                        <ol>
                          <li>{t('challenge:section2.collapsed2.1')}</li>
                          <li>{t('challenge:section2.collapsed2.2')}</li>
                        </ol>
                        <a className="button"
                           href="https://www.facebook.com/PAPFakeHunter/">Chatbot</a>
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