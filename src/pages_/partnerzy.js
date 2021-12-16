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

const partnerzy = () => {
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
                <div className={`partners ${isEn ? 'en' : ''}`}>
                    <section className="s2 partners">
                        <div className="container-fluid">

                            <div className="row no-gutters">
                                <div className="col-lg-6">

                                    <div className="imageWrapper">

                                        <img src="/images/partners/people-blob.png" alt="Play"/>
                                    </div>

                                </div>
                                <div className="col-lg-6">

                                    <div className="textWrapper">
                                       <div className="textWrapperImg">
                                           <a href="https://www.play.pl/"><img src="/images/partners/1.png" alt="Play"/></a></div>
                                        <p>
                                            <Trans i18nKey="partnerzy:section1.partner1"
                                                   components={[<span/>]}/>
                                        </p>
                                    </div>

                                </div>
                            </div>


                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <div className="textWrapperImg">
                                            <a href="https://pgnig.pl/"><img src="/images/partners/pgnig_logo.png" alt="PGNIG"/></a></div>
                                        <p>
                                            <Trans i18nKey="partnerzy:section1.partner2"
                                                   components={[<span/>]}/>
                                        </p>
                                    </div>

                                </div>
                                <div className="col-lg-6">

                                    <div className="iframeWrapper">
                                        <iframe allowFullScreen frameBorder="0" height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/fJ3yfSyZ.html" title="PGNiG_film_korporacyjny"
                                                width="620"></iframe></div>

                                </div>
                            </div>


                            <div className="row no-gutters">
                                <div className="col-lg-6">

                                    <div className="imageWrapper">

                                        <img src="/images/partners/dook.jpg" alt="dook"/>
                                    </div>

                                </div>
                                <div className="col-lg-6">

                                    <div className="textWrapper">
                                        <div className="textWrapperImg">
                                            <a href="https://www.play.pl/"></a></div>
                                        <p>
                                            <Trans i18nKey="partnerzy:section1.partner3"
                                                   components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="partnerzy:section1.partner3a"
                                                   components={[<a className="link" href="https://dook.pro"
                                                                   target="_blank"/>]}/>
                                        </p>
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

export default partnerzy



