/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'

import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
    const recaptcha = document.querySelector('.grecaptcha-badge')
    if (recaptcha) recaptcha.style.display = display
}

const challengeV = () => {
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
                <div className={`challenge-project challangeIV ${isEn ? 'en' : ''}`}>
                    <section className="s1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <h1 className="title challenge_title">
                                        <Trans i18nKey="challengeV:title" components={[<br/>, <span/>]}/>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="followUs">
                                        <h4>{t('challengeV:follow')}</h4>
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
                                            <Trans i18nKey="challengeV:quote" components={[<br/>, <br/>]}/>
                                        </h2>
                                        <br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="s2" id="konkurs">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section13.title')}</h2>
                                        <p className="title">{t('challengeV:section13.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeV:section13.description" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section13.description1" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section13.description2" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section13.description3" components={[<span/>]}/>
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
                    <section className="s4" id="zostanfakehunterem">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">

                                    <div className="imageWrapper">
                                        <img src="/images/image3.png" alt=""/>

                                    </div>
                                </div>
                                <div className="col-lg-6">

                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section4.title')}</h2>
                                        <p className="title">{t('challengeV:section4.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeV:section4.description"/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section4.description1"/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section4.description2"/>
                                        </p>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button"
                                            href="https://www.webankieta.pl/ankieta/712620/rejestracja-do-konkursu-fakehunterchallenge-geopolityka.html"
                                        >
                                            {t('challengeV:section4.applyBtn')}
                                        </a>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="s2" id="nagrody">
                        <div className="container-fluid">
                            <div className="row no-gutters">



                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section8.title')}</h2>
                                        <p className="title">{t('challengeV:section8.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description1" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description2" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description3" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description4" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description5" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description6" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section8.description7" components={[<a className="link" href="https://fakehunter.pap.pl"
                                                                                                              target="_blank"/>]}/>
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
                                                {t('challengeV:section8.link')}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="dropdown-item"
                                                    href="/attachments/challengeV/reg_pl.pdf"
                                                >
                                                    PL
                                                </a>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="dropdown-item"
                                                    href="/attachments/challengeV/reg_en.pdf"
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
                    <section className="s2" id="wyslij_zgloszenie">
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
                                        <h2 className="section">{t('challengeV:section11.title')}</h2>
                                        <p className="title">{t('challengeV:section11.subtitle')}</p>
                                        <p>
                                            {t('challengeV:section11.description')}
                                        </p>
                                        <a target="_blank" className="button"
                                           rel="noopener noreferrer"
                                           href="https://www.webankieta.pl/ankieta/712621/formularz-konkursowy-fakehunterchallenge-geopolityka.html"
                                        >
                                            {t('challengeV:section11.button')}
                                        </a>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                    <section className="s4 diffrentButtons" id="zasady_rywalizacji">
                        <div className="container-fluid">
                            <div className="row no-gutters">



                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section2.title')}</h2>
                                        <p className="title">{t('challengeV:section2.subtitle')}</p>
                                        <p>{t('challengeV:section2.description')}</p>
                                        <p><strong>{t('challengeV:section2.description1')}</strong>
                                            <br />

                                            {t('challengeV:section2.description2')}
                                            <br />
                                            {t('challengeV:section2.description3')}

                                        </p>








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
                    <section className="s2" id="eksperckie_spotkania">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    {/* <div className="iframeWrapper">
                                        <iframe allowFullScreen frameBorder="0" height="350"
                                                src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/xj1yZxmL.html"
                                                title="#FakeHunter Challenge - Uwaga! Oszust - debata pt. &#34;Oszustwa doby dezinformacji – jak nie wpaść w pułapkę nadużyć&#34;"
                                                width="620"></iframe>

                                    </div>*/}
                                  <div className="imageWrapper">
                                        <img src="/images/micro.png" alt="eksperckie_spotkania"/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section12.title')}</h2>
                                        <p className="title">{t('challengeV:section12.subtitle')}</p>
                                        <p><Trans i18nKey="challengeV:section12.description"
                                                   components={[<a className="link" href="https://fakehunter.pap.pl"
                                                                   target="_blank"/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeV:section12.description1"
                                                   components={[<a className="link" href="https://fakehunter.pap.pl"
                                                                   target="_blank"/>]}/>
                                        </p>
                                        <span> <Trans i18nKey="challengeV:section12.button"
                                                      components={[<a className="button" href="/agendaV"/>,
                                                          <a className="button" href="/en/agendaV"/>]}/></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s6" id="partnerzy">
                        <div className="container-fluid">
                            <div className="row no-gutters">

                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section9.title')}</h2>
                                        <p className="title">{t('challengeV:section9.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeV:section9.description" components={[<span/>]}/>
                                        </p>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <ul className="logoWrapper">


                                        <li className="festiwal">
                                            <a target="_blank" rel="noopener noreferrer"
                                               href="https://www.gov.pl/web/govtech">
                                                <img src="/images/govtech_logo.svg" alt="Festiwal"/>
                                            </a>
                                        </li>
                                        <li className="festiwal">
                                            <a target="_blank" rel="noopener noreferrer"
                                               href="https://www.gov.pl/web/govtech">
                                                <img src="/images/partners/cyfrowa_polska_logo.png" alt="Festiwal"/>
                                            </a>
                                        </li>

                                    </ul>
                                </div>


                            </div>
                        </div>
                    </section>
                    <section className="s2" id="o_konkursie">
                        <div className="container-fluid">
                            <div className="row no-gutters">


                                <div className="col-lg-6">
                                    <div className="iframeWrapper">
                                        <iframe height="400px"
                                                src="https://www.youtube.com/embed/Q_trVUFPNCI"
                                                frameBorder="0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen></iframe>
                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section1.title')}</h2>
                                        <p className="title">{t('challengeV:section1.subtitle')}</p>
                                        <p>
                                            {t('challengeV:section1.description')}
                                        </p>
                                        <a target="_blank" className="button"
                                           rel="noopener noreferrer"
                                           href="/"
                                        >
                                            {t('challengeV:section1.button')}
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
                                        <h2 className="section">{t('challengeV:section3.title')}</h2>
                                        <p className="title">{t('challengeV:section3.subtitle')}</p>
                                        <p>{t('challengeV:section3.description')}</p>
                                        <a className="button" href="/">
                                            {t('challengeV:section3.verifiedNewsBtn')}
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


                                <div className="col-lg-12">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeV:section7.title')}</h2>
                                        <p className="title">{t('challengeV:section7.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeV:section7.description"
                                                   components={[<a className="link" href="mailto:fakehunter@pap.pl"
                                                                   target="_blank"/>]}/></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>



                    {/*<section className="s2" id="wyniki_konkursu">*/}
                    {/*    <div className="container-fluid">*/}
                    {/*        <div className="row no-gutters">*/}

                    {/*            <div className="col-lg-6">*/}
                    {/*                <div className="imageWrapper">*/}
                    {/*                    <img src="/images/fh3nagrody.png" alt="nagrody" />*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className="col-lg-6">*/}
                    {/*                <div className="textWrapper">*/}
                    {/*                    <h2 className="section">{t('challengeV:section15.title')}</h2>*/}
                    {/*                    <p className="title">{t('challengeV:section15.subtitle')}</p>*/}
                    {/*                    <p>*/}
                    {/*                        <Trans i18nKey="challengeV:section15.description" components={[<span/>]}/>*/}
                    {/*                    </p>*/}
                    {/*                    <p>*/}
                    {/*                        <Trans i18nKey="challengeV:section15.description1" components={[<span/>]}/>*/}
                    {/*                    </p>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}


                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</section>*/}


                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="previousVersions">

                                        <h3>{t('challengeV:section14.title')}</h3>
                                        <ul className="list-unstyled">
                                            <li><Trans i18nKey="challengeV:section14.link1"
                                                       components={[<a className="link" href="/challenge"/>,
                                                           <a className="link" href="/en/challenge"/>]}/></li>
                                            <li><Trans i18nKey="challengeV:section14.link2"
                                                       components={[<a className="link" href="/challengeII"/>,
                                                           <a className="link" href="/en/challengeII"/>]}/></li>
                                            <li><Trans i18nKey="challengeV:section14.link3"
                                                       components={[<a className="link" href="/challengeIII"/>,
                                                           <a className="link" href="/en/challengeIII"/>]}/></li>
                                            <li><Trans i18nKey="challengeV:section14.link3"
                                                       components={[<a className="link" href="/challengeIV"/>,
                                                           <a className="link" href="/en/challengeIV"/>]}/></li>
                                        </ul>

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

export default challengeV



