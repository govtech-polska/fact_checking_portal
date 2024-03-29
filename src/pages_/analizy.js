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

const Analysis = () => {
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
                <div className={`analysis ${isEn ? 'en' : ''}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="pageTitle">{t('analizy:title')}</h1>
                            </div>
                        </div>

                        <div className="newsList row">
                            <div className="news col-md-4">
                                <a href="/analiza5">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_5.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news5.title')}</h2>
                                        <p className="description">{t('analizy:news5.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/analiza4">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_4.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news4.title')}</h2>
                                        <p className="description">{t('analizy:news4.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/analiza1">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_1.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news1.title')}</h2>
                                        <p className="description">{t('analizy:news1.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/analiza2">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_2.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news2.title')}</h2>
                                        <p className="description">{t('analizy:news2.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/analiza3">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_3.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news3.title')}</h2>
                                        <p className="description">{t('analizy:news3.description')}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="newsList en row">
                            <div className="news col-md-4">
                                <a href="/en/analiza5">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_5.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news5.title')}</h2>
                                        <p className="description">{t('analizy:news5.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/en/analiza4">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_4.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news4.title')}</h2>
                                        <p className="description">{t('analizy:news4.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/en/analiza1">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_1.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news1.title')}</h2>
                                        <p className="description">{t('analizy:news1.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/en/analiza2">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_2.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news2.title')}</h2>
                                        <p className="description">{t('analizy:news2.description')}</p>
                                    </div>
                                </a>
                            </div>
                            <div className="news col-md-4">
                                <a href="/en/analiza3">
                                    <div className="imageWrapper">
                                        <img src="/images/news/analiza_3.jpg" alt=""/>
                                    </div>
                                    <div className="textWrapper">
                                        <h2 className="title">{t('analizy:news3.title')}</h2>
                                        <p className="description">{t('analizy:news3.description')}</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Analysis