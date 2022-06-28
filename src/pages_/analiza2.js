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
                                               <sup></sup>
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
                                               <sup></sup>
                                           ]}
                                    />
                                </p>


                                <h3>{t('analiza2:subtitle4')}</h3>

                                <p>
                                    <Trans i18nKey="analiza2:paragraph9"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>

                                <h3>{t('analiza2:subtitle5')}</h3>

                                <p>
                                    <Trans i18nKey="analiza2:paragraph10"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>

                                <p>{t('analiza2:paragraph11')}</p>
                                <h3>{t('analiza2:subtitle6')}</h3>

                                <p>
                                    <Trans i18nKey="analiza2:paragraph12"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>{t('analiza2:paragraph13')}</p>

                                <p className="footnotes">{t('analiza2:footnotes')}<br/> <br/>

                                    <sup>1</sup> <a className="link"
                                                   href="https://www.gov.pl/web/sluzby-specjalne/klamstwa-rosyjskiej-propagandy2"
                                                   target="_blank">https://www.gov.pl/web/sluzby-specjalne/klamstwa-rosyjskiej-propagandy2</a>
                                    <br/> <br/>
                                    <sup>2</sup> <a className="link" href="https://cyberdefence24.pl/cyberbezpieczenstwo/rosyjska-wojna-dezinformacyjna-ekspert-celem-rosjan-jest-stymulowanie-paniki-w-polsce-wywiad"
                                                    target="_blank">https://cyberdefence24.pl/cyberbezpieczenstwo/rosyjska-wojna-dezinformacyjna-ekspert-celem-rosjan-jest-stymulowanie-paniki-w-polsce-wywiad</a>
                                    <br/> <br/>

                                    <sup>3</sup> <a className="link"
                                                   href="https://www.state.gov/wp-content/uploads/2020/08/Pillars-of-Russia%E2%80%99s-Disinformation-and-Propaganda-Ecosystem_08-04-20.pdf"
                                                   target="_blank">https://www.state.gov/wp-content/uploads/2020/08/Pillars-of-Russia%E2%80%99s-Disinformation-and-Propaganda-Ecosystem_08-04-20.pdf</a>
                                    <br/> <br/>
                                    <sup>4</sup> <a className="link" href="https://pieniadze.rp.pl/konta-bankowe/art35948741-hrywny-do-wymiany-ruszyla-akcja-pomocy-banku-centralnego"
                                                    target="_blank">https://pieniadze.rp.pl/konta-bankowe/art35948741-hrywny-do-wymiany-ruszyla-akcja-pomocy-banku-centralnego</a>

                                    <br/> <br/>
                                    <sup>5</sup> <a className="link"
                                                   href="https://www.rp.pl/konflikty-zbrojne/art35822351-kamil-basaj-trwa-operacja-rosji-przeciw-uciekinierom"
                                                   target="_blank">https://www.rp.pl/konflikty-zbrojne/art35822351-kamil-basaj-trwa-operacja-rosji-przeciw-uciekinierom</a>
                                    <br/> <br/>
                                    <sup>6</sup> <a className="link" href="hhttps://twitter.com/StZaryn/status/1524332174270517251?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1524332174270517251%7Ctwgr%5E%7Ctwcon%5Es1_&amp;ref_url=https%3A%2F%2Fpolskieradio24.pl%2F5%2F1222%2FArtykul%2F2956378Kreml-probuje-fake-newsami-uderzac-w-Polske-RCB-ostrzega-i-apeluje-o-walke-z-dezinformacja"
                                                    target="_blank">https://twitter.com/StZaryn/status/1524332174270517251?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1524332174270517251%7Ctwgr%5E%7Ctwcon%5Es1_&amp;ref_url=https%3A%2F%2Fpolskieradio24.pl%2F5%2F1222%2FArtykul%2F2956378Kreml-probuje-fake-newsami-uderzac-w-Polske-RCB-ostrzega-i-apeluje-o-walke-z-dezinformacja</a>

                                </p>


                            </div>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default analysisNews