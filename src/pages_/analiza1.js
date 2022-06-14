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
                                <h1 className="articleTitle">{t('analiza1:title')}</h1>
                                <div className="imageWrapper">
                                    <img src="/images/news/kreml_big_analiza_1.png" alt=""/>
                                </div>
                                <p className="lead">{t('analiza1:paragraph1')}</p>
                                <p>{t('analiza1:paragraph2')}</p>
                                <p>{t('analiza1:paragraph3')}</p>
                                <h3>{t('analiza1:subtitle1')}</h3>
                                <p>{t('analiza1:paragraph4')}</p>
                                <p>{t('analiza1:paragraph5')}</p>
                                <p>{t('analiza1:paragraph6')}</p>
                                <p>{t('analiza1:paragraph7')}</p>
                                <h3>{t('analiza1:subtitle2')}</h3>
                                <p>{t('analiza1:paragraph8')}</p>
                                <p>{t('analiza1:paragraph9')}</p>
                                <p>{t('analiza1:paragraph10')}</p>
                                <p>{t('analiza1:paragraph11')}</p>
                                <h3>{t('analiza1:subtitle3')}</h3>
                                <p>{t('analiza1:paragraph12')}</p>
                                <p>{t('analiza1:paragraph13')}</p>
                                <h3>{t('analiza1:subtitle4')}</h3>
                                 <p>{t('analiza1:paragraph14')}</p>
                                <p>
                                <Trans i18nKey="analiza1:paragraph15"
                                       components={[
                                           <a className="link" href="https://www.spiegel.de/politik/deutschland/ukraine-krieg-ein-fuenftel-in-deutschland-glaubt-verschwoerungsmythen-a-43e24191-8375-4576-a4aa-9388607fd04b"
                                                target="_blank"/>
                                       ]}
                                />
                                </p>
                                <p>{t('analiza1:paragraph16')}</p>
                                <p>{t('analiza1:paragraph17')}</p>
                                <p>{t('analiza1:paragraph18')}</p>
                                <p>{t('analiza1:paragraph19')}</p>
                                <h3>{t('analiza1:subtitle5')}</h3>
                                <p>{t('analiza1:paragraph20')}</p>
                                <p>{t('analiza1:paragraph21')}</p>
                                <div className="imageWrapper">
                                    <img src="/images/news/news_1_wykres.png" alt=""/>
                                    <div className="description">
                                        {t('analiza1:chart1')}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default analysisNews