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
                <div className={`education ${isEn ? 'en' : ''}`}>
                    <section className="s2" id="oprojekcie">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/education/1.png" alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('edukacja:section1.title')}</h2>
                                        <p className="title">{t('edukacja:section1.subtitle')}</p>
                                        <p>
                                            {t('edukacja:section1.description')}
                                        </p>
                                        <p>
                                            {t('edukacja:section1.description1')}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="s3" id="czymsafakenews">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('edukacja:section2.title')}</h2>
                                        <p className="title">{t('edukacja:section2.subtitle')}</p>
                                        <ul>
                                            <li>{t('edukacja:section2.point1')}</li>
                                            <li>{t('edukacja:section2.point2')}</li>
                                            <li>{t('edukacja:section2.point3')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="iframeWrapper">
                                        <iframe allowFullScreen frameBorder="0" height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/Rnlgw5G0.html"
                                                title="SZKOLENIE WIDEO 1 - CZYM SĄ FAKE NEWSY" width="620"></iframe>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                    <section className="s4" id="jakrozpoznacfakenews">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="iframeWrapper">
                                        <iframe allowFullScreen frameBorder="0" height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/ucPAiAct.html"
                                                title="SZKOLENIE WIDEO 2 - JAK ROZPOZNAĆ FAKE NEWSA" width="620"></iframe>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('edukacja:section3.title')}</h2>
                                        <p className="title">{t('edukacja:section3.subtitle')}</p>
                                        <ul>
                                            <li>{t('edukacja:section3.point1')}</li>
                                            <li>{t('edukacja:section3.point2')}</li>
                                            <li>{t('edukacja:section3.point3')}</li>
                                            <li>{t('edukacja:section3.point4')}</li>
                                            <li>{t('edukacja:section3.point5')}</li>
                                            <li>{t('edukacja:section3.point6')}</li>
                                            <li>{t('edukacja:section3.point7')}</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <section className="s5" id="gdziesprawdzicinformacje">
                        <div className="container-fluid">
                            <div className="row no-gutters">

                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('edukacja:section4.title')}</h2>
                                        <p className="title">{t('edukacja:section4.subtitle')}</p>
                                        <ul>
                                            <li>{t('edukacja:section4.point1')}</li>
                                            <li>{t('edukacja:section4.point2')}</li>
                                            <li>{t('edukacja:section4.point3')}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="iframeWrapper">
                                        <iframe allowFullScreen frameBorder="0" height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/vHcC9ovu.html"
                                                title="SZKOLENIE WIDEO 3 - GDZIE SPRAWDZIĆ INFORMACJE" width="620"></iframe>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                    <section className="s6" id="kontakt">
                        <div className="container-fluid">
                            <div className="row no-gutters">


                                <div className="col-lg-12">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('edukacja:section5.title')}</h2>
                                        <ul className="partnersList list-unstyled">
                                            <li><a href="https://pap.pl"><img src="/images/education/logo_pap.png" alt=""/></a></li>
                                            <li><a href="https://www.ibe.edu.pl/index.php/pl/"><img src="/images/education/ibe.png" alt=""/></a></li>
                                            <li><a href="https://www.gov.pl/web/govtech"><img src="/images/education/govtech.png" alt=""/></a></li>
                                            <li><a href="https://www.gov.pl/web/edukacja-i-nauka"><img src="/images/education/me.png" alt=""/></a></li>
                                            <li><a href="https://www.gov.pl/web/edukacja-i-nauka"><img src="/images/education/men.png" alt=""/></a></li>

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

export default Edukacja