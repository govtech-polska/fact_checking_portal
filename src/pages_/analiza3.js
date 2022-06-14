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
                                <h1 className="articleTitle">{t('analiza3:title')}</h1>
                                <div className="imageWrapper">
                                    <img src="/images/news/abaliza_3_big.png" alt=""/>
                                </div>
                                <p className="lead">{t('analiza3:paragraph1')}</p>
                                <p>
                                    <Trans i18nKey="analiza3:paragraph2"
                                           components={[
                                               <a className="link" href="https://www.gov.pl/web/sluzby-specjalne/klamstwa-rosyjskiej-propagandy2"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>
                                <p>{t('analiza3:paragraph3')}</p>
                                <p>{t('analiza3:paragraph4')}</p>
                                <p>{t('analiza3:paragraph5')}</p>
                                <h3>{t('analiza3:subtitle1')}</h3>
                                <p>{t('analiza3:paragraph6')}</p>
                                <p>
                                    <Trans i18nKey="analiza3:paragraph7"
                                           components={[
                                               <a className="link" href="https://www.state.gov/wp-content/uploads/2020/08/Pillars-of-Russia%E2%80%99s-Disinformation-and-Propaganda-Ecosystem_08-04-20.pdf"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>
                                <p>{t('analiza3:paragraph8')}</p>
                                <p>{t('analiza3:paragraph9')}</p>
                                <div className="imageWrapper">
                                    <img src="/images/news/news_3_wykres.jpg" alt=""/>
                                </div>
                                <p>{t('analiza3:paragraph10')}</p>
                                <p>{t('analiza3:paragraph11')}</p>
                                <p>{t('analiza3:paragraph12')}</p>
                                <p>{t('analiza3:paragraph13')}</p>
                                <p>
                                    <Trans i18nKey="analiza3:paragraph14"
                                           components={[
                                               <a className="link" href="https://pieniadze.rp.pl/konta-bankowe/art35948741-hrywny-do-wymiany-ruszyla-akcja-pomocy-banku-centralnego"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>

                                <p>{t('analiza3:paragraph15')}</p>

                                <p>
                                    <Trans i18nKey="analiza3:paragraph16"
                                           components={[
                                               <a className="link" href="https://www.rp.pl/konflikty-zbrojne/art35822351-kamil-basaj-trwa-operacja-rosji-przeciw-uciekinierom"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza3:paragraph17"
                                           components={[
                                               <a className="link" href="https://twitter.com/StZaryn/status/1524332174270517251?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1524332174270517251%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpolskieradio24.pl%2F5%2F1222%2FArtykul%2F2956378Kreml-probuje-fake-newsami-uderzac-w-Polske-RCB-ostrzega-i-apeluje-o-walke-z-dezinformacja"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>


                                <h3>{t('analiza3:subtitle2')}</h3>
                                <p>{t('analiza3:paragraph18')}</p>
                                <p>{t('analiza3:paragraph19')}</p>
                                <p>{t('analiza3:paragraph20')}</p>
                                <h3>{t('analiza3:subtitle3')}</h3>

                                <p>
                                    <Trans i18nKey="analiza3:paragraph21"
                                           components={[
                                               <a className="link" href="https://konkret24.tvn24.pl/polska,108/wojsko-polskie-postawione-do-stanu-pelnej-gotowosci-bojowej-by-chronic-lwow-i-wolyn-ten-rozkaz-jest-falszywka,1104470.html"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>
                                <h3>{t('analiza3:subtitle4')}</h3>
                                <p>{t('analiza3:paragraph22')}</p>

                                <p>
                                    <Trans i18nKey="analiza3:paragraph23"
                                           components={[
                                               <a className="link" href="https://euvsdisinfo.eu/the-bucha-massacre-how-to-deflect-attention-in-poland/"
                                                  target="_blank"/>
                                           ]}
                                    />
                                </p>
                                <p>{t('analiza3:paragraph24')}</p>
                                <div className="imageWrapper">
                                    <img src="/images/news/news_3_wykres_1.jpg" alt=""/>
                                    <div className="description">
                                        {t('analiza3:chart2')}
                                    </div>
                                </div>
                                <p>{t('analiza3:paragraph25')}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default analysisNews