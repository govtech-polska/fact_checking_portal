/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
    const recaptcha = document.querySelector('.grecaptcha-badge')
    if (recaptcha) recaptcha.style.display = display
}

const analysisNews = () => {
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
                <div className={`analysisNews ${isEn ? 'en' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <a className="back pl" href="/analizy">&#60; Wróć</a>
                                <a className="back en" href="/en/analizy">&#60; Back</a>
                                <h1 className="articleTitle">{t('analiza2:title')}</h1>
                                <p className="lead">{t('analiza2:paragraph1')}</p>
                                <p>{t('analiza2:paragraph2')}</p>
                                <h3>{t('analiza2:subtitle1')}</h3>
                                <p>{t('analiza2:paragraph3')}</p>
                                <p>{t('analiza2:paragraph4')}</p>
                                <p>{t('analiza2:paragraph5')}</p>
                                <h3>{t('analiza2:subtitle2')}</h3>
                                <p>{t('analiza2:paragraph6')}</p>
                                <p>{t('analiza2:paragraph7')}</p>
                                <h3>{t('analiza2:subtitle3')}</h3>
                                <p>{t('analiza2:paragraph8')}</p>
                                <h3>{t('analiza2:subtitle4')}</h3>
                                <p>{t('analiza2:paragraph9')}</p>
                                <h3>{t('analiza2:subtitle5')}</h3>
                                <p>{t('analiza2:paragraph10')}</p>
                                <p>{t('analiza2:paragraph11')}</p>
                                <h3>{t('analiza2:subtitle6')}</h3>
                                <p>{t('analiza2:paragraph12')}</p>
                                <p>{t('analiza2:paragraph13')}</p>

                            </div>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default analysisNews