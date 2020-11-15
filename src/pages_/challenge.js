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
                    <h1 className="title challenge_title">
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
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="s2">
              <div className="container-fluid">
                <div className="row no-gutters">

                  <div className="col-lg-6">
                    <div class="iframeWrapper">
                      <iframe src="//iframe.dacast.com/b/142411/c/544128" width="990" height="557" frameBorder="0"
                              scrolling="no" allow="autoplay" allowFullScreen webkitallowfullscreen mozallowfullscreen
                              oallowfullscreen msallowfullscreen></iframe>

                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section12.title')}</h2>
                      <p className="title">{t('challenge:section12.subtitle')}</p>
                      <p>
                        {t('challenge:section12.description')}
                      </p>
                      <a target="_blank" className="button"
                         rel="noopener noreferrer"
                         href="/agenda"
                      >
                        {t('challenge:section12.button')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="s2">
              <div className="container-fluid">
                <div className="row no-gutters">


                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section8.title')}</h2>
                      <p className="title">{t('challenge:section8.subtitle')}</p>
                      <p>
                        <Trans i18nKey="challenge:section8.description" components={[<span/>]}/>
                      </p>
                      <div className="dropdown link">
                        <button
                            className="dropdown-toggle buttonDropdown link"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                          {t('challenge:section8.link')}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dropdown-item"
                              href="/attachments/regulamin.pdf"
                          >
                            PL
                          </a>
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dropdown-item"
                              href="/attachments/regulations.pdf"
                          >
                            EN
                          </a>
                        </div>
                      </div>


                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/prize.png" alt=""/>
                      <div className="author">
                        Ariel / Unsplash
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="s4" id="zostanfakehunterem">
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
                        <Trans i18nKey="challenge:section4.description1" components={[<a className="link" href="https://www.facebook.com/PAPFakeHunter/" target="_blank"/>]}/>
                      </p>
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button"
                          href="https://zgloszenia.govtech.gov.pl/ankieta/573866/rejestracja-do-fakehunter-challenge.html"
                      >
                        {t('challenge:section4.applyBtn')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="s4 diffrentButtons">
              <div className="container-fluid">
                <div className="row no-gutters">


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

                      <div></div>


                      <div className="dropdown link">
                        <button
                            className="dropdown-toggle buttonDropdown link"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                          {t('challenge:section2.link')}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dropdown-item"
                              href="/attachments/kategorie.pdf"
                          >
                            PL
                          </a>
                          <a
                              target="_blank"
                              rel="noopener noreferrer"
                              className="dropdown-item"
                              href="/attachments/categories.pdf"
                          >
                            EN
                          </a>
                        </div>
                      </div>






                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/image5.png" alt=""/>
                      <div className="author">strixcode / Adobe Stock</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="s2">
              <div className="container-fluid">
                <div className="row no-gutters">

                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/mail.png" alt=""/>
                      <div className="author">Onlineprinters / Unsplash</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section11.title')}</h2>
                      <p className="title">{t('challenge:section11.subtitle')}</p>
                      <p>
                        {t('challenge:section11.description')}
                      </p>
                      <a className="button"
                         rel="noopener noreferrer"
                         href="https://zgloszenia.govtech.gov.pl/ankieta/573102/zgloszenie-fake-news-raportu-weryfikacji-lub-zrodla-fejka-do-fakehunter-challenge.html"
                      >
                        {t('challenge:section11.button')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>


            <section className="s2">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section13.title')}</h2>
                      <p className="title">{t('challenge:section13.subtitle')}</p>
                      <p>
                        <Trans i18nKey="challenge:section13.description" components={[<span/>]}/>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/tabela2.png" alt=""/>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="s2">
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="imageWrapper">
                      <img src="/images/festiwal.png" alt=""/>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section10.title')}</h2>
                      <p className="title">{t('challenge:section10.subtitle')}</p>
                      <p>
                        {t('challenge:section10.description')}
                      </p>
                      <a className="button"
                         rel="noopener noreferrer"
                         href="http://www.govtechfestival.com"
                      >
                        {t('challenge:section10.button')}
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </section>
            <section className="s6" >
              <div className="container-fluid">
                <div className="row no-gutters">
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section9.title')}</h2>
                      <p className="title">{t('challenge:section9.subtitle')}</p>
                      <p>
                        <Trans i18nKey="challenge:section9.description" components={[<span/>]}/>
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <ul className="logoWrapper">

                      <li className="state">
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://stateofpoland.pl/"
                        >
                          <img src="/images/logo1.png" alt="State of Poland"/>
                        </a>
                      </li>
                      <li className="fundacja">
                        <a target="_blank" rel="noopener noreferrer" href="https://fundacjapfr.pl/">
                          <img src="/images/logo2.png" alt="PFR"/>
                        </a>
                      </li>
                      <li className="festiwal">
                        <a target="_blank" rel="noopener noreferrer" href="http://www.govtechfestival.com/">
                          <img src="/images/logo3.png" alt="Festiwal"/>
                        </a>
                      </li>
                      <li className="wykop">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.wykop.pl/">
                          <img src="/images/wykopLogo.png" alt="Wykop"/>
                        </a>
                      </li>
                    </ul>
                  </div>


                </div>
              </div>
            </section>


            <section className="s2" id="oprojekcie">
              <div className="container-fluid">
                <div className="row no-gutters">

                  <div className="col-lg-6">
                    <iframe height="400px" className="imageWrapper" src="https://www.youtube.com/embed/Q_trVUFPNCI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                  </div>
                  <div className="col-lg-6">
                    <div className="textWrapper">
                      <h2 className="section">{t('challenge:section1.title')}</h2>
                      <p className="title">{t('challenge:section1.subtitle')}</p>
                      <p>
                        {t('challenge:section1.description')}
                      </p>
                      <a className="button"
                         rel="noopener noreferrer"
                         href="/"
                      >
                        {t('challenge:section1.button')}
                      </a>
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




