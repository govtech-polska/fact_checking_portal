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
                                <h1 className="articleTitle">{t('analiza2:title')}</h1>
                                <div className="imageWrapper">
                                    <img src="/images/news/abaliza_2_big.png" alt=""/>
                                </div>
                                <p className="lead">{t('analiza2:paragraph1')}</p>
                                <p>{t('analiza2:paragraph2')}</p>
                                <h3>{t('analiza2:subtitle1')}</h3>
                                <p>
                                    <Trans i18nKey="analiza2:paragraph3"
                                           components={[
                                               <a className="link" href="https://fakehunter.pap.pl/raport/028e70db-b7c7-4c3c-b1e7-c4acb1cb3b7b"
                                                  target="_blank"/>,
                                               <a className="link" href="https://fakehunter.pap.pl/raport/7a7b7745-6dd4-462d-aed6-fb75b789d4d4"
                                                  target="_blank"/>,
                                               <a className="link" href="https://fakehunter.pap.pl/raport/18e5d8e5-6b24-4392-b007-a28f473f"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>

                                <p>{t('analiza2:paragraph4')}</p>
                                <p>{t('analiza2:paragraph5')}</p>
                                <h3>{t('analiza2:subtitle2')}</h3>
                                <p>{t('analiza2:paragraph6')}</p>
                                <p>{t('analiza2:paragraph7')}</p>
                                <h3>{t('analiza2:subtitle3')}</h3>

                                <p>
                                    <Trans i18nKey="analiza2:paragraph8"
                                           components={[
                                               <a className="link" href="https://www.gazetaprawna.pl/wiadomosci/kraj/artykuly/8422422,gospodarka-inwazja-rosji-na-ukraine-wojna-rynek-pracy.html"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>



                                <h3>{t('analiza2:subtitle4')}</h3>

                <p>
                    <Trans i18nKey="analiza2:paragraph9"
                           components={[
                               <a className="link" href="https://fakehunter.pap.pl/raport/dec44e57-4205-4d3d-897d-b041f8801d86"
                                  target="_blank"/>,
                               <a className="link" href="https://fakehunter.pap.pl/raport/a4442caf-0f0b-4fe3-9ce0-fed909a33664"
                                  target="_blank"/>,
                               <a className="link" href="https://fakehunter.pap.pl/raport/4913cf8a-fed8-4539-932f-cfd314357377"
                                  target="_blank"/>,
                               <a className="link" href="https://fakehunter.pap.pl/raport/43ffc73c-7ec1-4806-b97b-0b5e2f4c048f<"
                                  target="_blank"/>
                           ]}
                    />
                </p>

                                <h3>{t('analiza2:subtitle5')}</h3>

                                <p>
                                    <Trans i18nKey="analiza2:paragraph10"
                                           components={[
                                               <a className="link" href="https://wszystkoconajwazniejsze.pl/prof-piotr-dlugosz-ukraincy-w-polsce/?fbclid=IwAR3tuc_h1z1cCt3FfeoF2xgbmMThEpeluW3ulRqDSYCXjxd5qjOuZvxFQf4"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>

                                <p>{t('analiza2:paragraph11')}</p>
                                <h3>{t('analiza2:subtitle6')}</h3>

                                <p>
                                    <Trans i18nKey="analiza2:paragraph12"
                                           components={[
                                               <a className="link" href="https://alebank.pl/goldman-sachs-podwyzszyl-prognoze-wzrostu-pkb-polski-do-61-proc-w-2022-roku/?id=411109&catid=25926"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>
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