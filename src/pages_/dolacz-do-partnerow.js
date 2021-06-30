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

const dolaczDoPartnerow = () => {
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
                <div className={`challenge-project challangeIII ${isEn ? 'en' : ''}`}>


                    <section className="s2">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="imageWrapper">

                                        <img src="/images/partners/partners.png" alt=""/>

                                    </div>

                                </div>

                                <div className="col-lg-6">
                                    <div className="textWrapper">

                                        <h1 className="title">{t('dolacz-do-partnerow:section1.title')}</h1>
                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section1.description1"
                                                   components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section1.description2"
                                                   components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section1.description3"
                                                   components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section1.description4"
                                                   components={[<span/>]}/>
                                        </p>
                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section1.description5"
                                                   components={[<span/>]}/>
                                        </p>

                                        <ul>
                                            <li>
                                                <Trans i18nKey="dolacz-do-partnerow:section1.description6"
                                                       components={[<span/>]}/>
                                            </li>
                                            <li>
                                                <Trans i18nKey="dolacz-do-partnerow:section1.description7"
                                                       components={[<span/>]}/>
                                            </li>
                                            <li>
                                                <Trans i18nKey="dolacz-do-partnerow:section1.description8"
                                                       components={[<span/>]}/>
                                            </li>
                                            <li>
                                                <Trans i18nKey="dolacz-do-partnerow:section1.description9"
                                                       components={[<span/>]}/>
                                            </li>


                                        </ul>


                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section1.description10"
                                                   components={[<span/>]}/>
                                        </p>


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
                                        <p>
                                            <Trans i18nKey="dolacz-do-partnerow:section2.partner1"
                                                   components={[<span/>]}/>
                                        </p>

                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="imageWrapper play">
                                        <a href="#"><img src="/images/partners/1.png" alt="Play"/></a>

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

export default dolaczDoPartnerow



