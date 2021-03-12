/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import ChallengeContactForm from 'components/ChallengeIIContactForm'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
    const recaptcha = document.querySelector('.grecaptcha-badge')
    if (recaptcha) recaptcha.style.display = display
}

const ChallengeII = () => {
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
                                        <Trans i18nKey="challengeII:title" components={[<br/>, <span/>]}/>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="followUs">
                                        <h4>{t('challengeII:follow')}</h4>
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
                                            <Trans i18nKey="challengeII:quote" components={[<br/>, <br/>]}/>
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
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeII:section12.title')}</h2>
                                        <p className="title">{t('challengeII:section12.subtitle')}</p>
                                        <p>


                                            <Trans i18nKey="challengeII:section12.description"
                                                   components={[<a className="link" href="https://pap-mediaroom.pl"
                                                                   target="_blank"/>]}/>

                                        </p>


                                        <span> <Trans i18nKey="challengeII:section12.button"
                                                      components={[<a className="button" href="/agendaII"/>,
                                                          <a className="button" href="/en/agendaII"/>]}/></span>


                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="iframeWrapper">
                                        <iframe
                                                webkitAllowFullScree mozallowfullscreen allowFullScreen
                                                src="//ljsp.lwcdn.com/api/video/embed.jsp?id=2b275b50-2fea-4968-b2b1-c7f3a77e3d18&pi=6ccbd9c0-a038-4243-b85b-cdfa19dd5c05"
                                                title="0" byline="0" portrait="0" width="640" height="360"
                                                frameBorder="0" allow="autoplay"></iframe>

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
                                        <h2 className="section">{t('challengeII:section4.title')}</h2>
                                        <p className="title">{t('challengeII:section4.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeII:section4.description"/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeII:section4.description1"
                                                   components={[<a className="link"
                                                                   href="https://www.facebook.com/PAPFakeHunter/"
                                                                   target="_blank"/>]}/>
                                        </p>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button"
                                            href="https://www.webankieta.pl/ankieta/603664/rejestracja-do-konkursu-fakehunterchallengeszczepienia.html"
                                        >
                                            {t('challengeII:section4.applyBtn')}
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
                                        <h2 className="section">{t('challengeII:section11.title')}</h2>
                                        <p className="title">{t('challengeII:section11.subtitle')}</p>
                                        <p>
                                            {t('challengeII:section11.description')}
                                        </p>
                                        <a className="button"
                                           rel="noopener noreferrer"
                                           href="https://www.webankieta.pl/ankieta/603362/formularz-konkursowy-fakehunter-challengeszczepienia.html"
                                        >
                                            {t('challengeII:section11.button')}
                                        </a>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/mail.png" alt=""/>
                                        <div className="author">Onlineprinters / Unsplash</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    <section className="s4 diffrentButtons">
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
                                        <h2 className="section">{t('challengeII:section2.title')}</h2>
                                        <p className="title">{t('challengeII:section2.subtitle')}</p>
                                        <p>{t('challengeII:section2.description')}</p>
                                        <p>{t('challengeII:section2.description1')}</p>

                                        <a
                                            className="collapseButton collapsed"
                                            data-toggle="collapse"
                                            href="#collapseTwo"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            <span>{t('challengeII:section2.button')}</span>
                                        </a>

                                        <div className="collapse" id="collapseTwo">
                                            <p>{t('challengeII:section2.collapsed.description')}</p>
                                        </div>

                                        <div></div>

                                        <a
                                            className="collapseButton collapsed"
                                            data-toggle="collapse"
                                            href="#collapseThree"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            <span>{t('challengeII:section2.button1')}</span>
                                        </a>

                                        <div className="collapse" id="collapseThree">
                                            <p>

                                                <Trans i18nKey="challengeII:section2.collapsed1.description1"
                                                       components={[<a className="link"
                                                                       href="/attachments/reguly_weryfikacji_faktow.pdf"
                                                                       target="_blank"/>, <a className="link"
                                                                                             href="/attachments/FH_Rules_of_Fact_Verification.pdf"
                                                                                             target="_blank"/>]}/>
                                            </p>
                                        </div>


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
                                        <h2 className="section">{t('challengeII:section8.title')}</h2>
                                        <p className="title">{t('challengeII:section8.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeII:section8.description" components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="challengeII:section8.description1" components={[<span/>]}/>
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
                                                {t('challengeII:section8.link')}
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="dropdown-item"
                                                    href="/attachments/regFH2pol.pdf"
                                                >
                                                    PL
                                                </a>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="dropdown-item"
                                                    href="/attachments/regFH2eng.pdf"
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


                    <section className="s2">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/image2.png" alt=""/>

                                    </div>


                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeII:section13.title')}</h2>
                                        <p className="title">{t('challengeII:section13.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeII:section13.description" components={[<span/>]}/>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>









                    <section className="s6">
                        <div className="container-fluid">
                            <div className="row no-gutters">


                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeII:section9.title')}</h2>
                                        <p className="title">{t('challengeII:section9.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeII:section9.description" components={[<span/>]}/>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="logoWrapper">


                                        <li className="wykop">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.wykop.pl/">
                                                <img src="/images/wykopLogo.png" alt="Wykop"/>
                                            </a>
                                        </li>
                                        <li className="festiwal">
                                            <a target="_blank" rel="noopener noreferrer"
                                               href="https://www.gov.pl/web/govtech">
                                                <img src="/images/govtech_logo.svg" alt="Festiwal"/>
                                            </a>
                                        </li>
                                        <li className="wykop">
                                            <a target="_blank" rel="noopener noreferrer" href="https://wsei.edu.pl//">
                                                <img src="/images/1_wsei_full_color.jpg" alt="wsei"/>
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
                                    <iframe height="400px" className="imageWrapper"
                                            src="https://www.youtube.com/embed/Q_trVUFPNCI"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen></iframe>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('challengeII:section1.title')}</h2>
                                        <p className="title">{t('challengeII:section1.subtitle')}</p>
                                        <p>
                                            {t('challengeII:section1.description')}
                                        </p>
                                        <a className="button"
                                           rel="noopener noreferrer"
                                           href="/"
                                        >
                                            {t('challengeII:section1.button')}
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
                                        <h2 className="section">{t('challengeII:section3.title')}</h2>
                                        <p className="title">{t('challengeII:section3.subtitle')}</p>
                                        <p>{t('challengeII:section3.description')}</p>
                                        <a className="button" href="/">
                                            {t('challengeII:section3.verifiedNewsBtn')}
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
                                        <h2 className="section">{t('challengeII:section7.title')}</h2>
                                        <p className="title">{t('challengeII:section7.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="challengeII:section7.description"
                                                   components={[<a className="link" href="mailto:fakehunter@pap.pl"
                                                                   target="_blank"/>]}/></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="previousVersions">

                                        <h3>{t('challengeII:section14.title')}</h3>
                                        <ul className="list-unstyled">
                                            <li><Trans i18nKey="challengeII:section14.link1"
                                                       components={[<a className="link" href="/challenge"/>,
                                                           <a className="link" href="/en/challenge"/>]}/></li>
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

export default ChallengeII




