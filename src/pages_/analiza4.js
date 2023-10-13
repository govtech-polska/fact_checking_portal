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
                                <h1 className="articleTitle">{t('analiza4:title')}</h1>
                                <div className="imageWrapper">
                                    <img src="/images/news/analiza_4.jpg" alt=""/>
                                    <div className="description">
                                        fot. PAP/Leszek Szymański
                                    </div>
                                </div>
                                <p className="lead">{t('analiza4:paragraph1')}</p>

                                <p>{t('analiza4:paragraph2')}</p>
                                <p>{t('analiza4:paragraph3')}</p>
                                <p>{t('analiza4:paragraph4')}</p>
                                <p>{t('analiza4:paragraph5')}</p>
                                <p>{t('analiza4:paragraph6')}</p>
                                <p>{t('analiza4:paragraph7')}</p>
                                <p>{t('analiza4:paragraph8')}</p>
                                <p>{t('analiza4:paragraph9')}</p>
                                <p>{t('analiza4:paragraph10')}</p>








                            </div>
                            <p className="footnotes">
                                {t('analiza4:footnotes')}<br/> <br/>





                            </p>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default analysisNews