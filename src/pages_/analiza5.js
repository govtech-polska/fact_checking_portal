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
                                <h1 className="articleTitle">{t('analiza5:title')}</h1>
                                <div className="imageWrapper">
                                    <img src="/images/news/analiza_5.jpg" alt=""/>
                                    <div className="description">
                                        Fot. PAP Jerzy Muszyński.jpg
                                    </div>
                                </div>
                                <p className="lead">{t('analiza5:paragraph1')}</p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph2"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p><Trans i18nKey="analiza5:paragraph3"
                                          components={[
                                              <sup></sup>
                                          ]}
                                /></p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph4"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>{t('analiza5:paragraph5')}</p>

                                <p>
                                    <Trans i18nKey="analiza5:paragraph6"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph7"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph8"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph9"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph10"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph11"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph12"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph13"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph14"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph15"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph16"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph17"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>
                                <p>
                                    <Trans i18nKey="analiza5:paragraph18"
                                           components={[
                                               <sup></sup>
                                           ]}
                                    />
                                </p>



                            </div>
                            <p className="footnotes">
                                {t('analiza5:footnotes')}

                                <br/> <br/>
                                <sup>1</sup> <a className="link" href="https://www.rbb24.de/studiofrankfurt/panorama/2022/08/oder-fischsterben-quecksilber-nachgewiesen-polen.html"
                                                target="_blank">https://www.rbb24.de/studiofrankfurt/panorama/2022/08/oder-fischsterben-quecksilber-nachgewiesen-polen.html</a>
                                <br/> <br/>
                                <sup>2</sup> <a className="link" href="https://twitter.com/RSuligowski/status/1557814716222816261" target="_blank">https://twitter.com/RSuligowski/status/1557814716222816261</a>
                                <br/> <br/>
                                <sup>3</sup> <a className="link" href="https://twitter.com/witapawel/status/1557815538142875653" target="_blank">https://twitter.com/witapawel/status/1557815538142875653</a>
                                <br/> <br/>
                                <sup>4</sup> <a className="link" href="https://twitter.com/Bertold_K/status/1557844585195397122?cxt=HHwWhICzva_ZyZ4rAAAA" target="_blank">https://twitter.com/Bertold_K/status/1557844585195397122?cxt=HHwWhICzva_ZyZ4rAAAA</a>
                                <br/> <br/>
                                <sup>5</sup> <a className="link" href="Depesza PAP z 2022-08-11 16:22 Berlin" target="_blank">Depesza PAP z 2022-08-11 16:22 Berlin</a>
                                <br/> <br/>
                                <sup>6</sup> <a className="link" href="https://www.rp.pl/ekologia/art36860031-w-niemieckich-probkach-wody-z-odry-znaleziono-rtec" target="_blank">https://www.rp.pl/ekologia/art36860031-w-niemieckich-probkach-wody-z-odry-znaleziono-rtec</a>
                                <br/> <br/>
                                <sup>7</sup> <a className="link" href="https://trends.google.pl/trends/trendingsearches/daily?geo=PL" target="_blank">https://trends.google.pl/trends/trendingsearches/daily?geo=PL</a>
                                <br/> <br/>
                                <sup>8</sup> <a className="link" href="https://twitter.com/Bernard_pl/status/1559927062701416449" target="_blank">https://twitter.com/Bernard_pl/status/1559927062701416449</a>
                                <br/> <br/>
                                <sup>9</sup> <a className="link" href="https://www.polsatnews.pl/wideo-program/gosc-wydarzen-wojciech-skurkiewicz-i-elzbieta-anna-polak_6806824/" target="_blank">https://www.polsatnews.pl/wideo-program/gosc-wydarzen-wojciech-skurkiewicz-i-elzbieta-anna-polak_6806824/</a>
                                <br/> <br/>
                                <sup>10</sup> <a className="link" href="https://www.gazeta.ru/social/2022/08/14/15272990.shtml" target="_blank">https://www.gazeta.ru/social/2022/08/14/15272990.shtml</a>
                                <br/> <br/>
                                <sup>11</sup> <a className="link" href="https://www.pap.pl/aktualnosci/news%2C1400041%2Cminister-moskwa-badania-wody-i-ryb-nie-potwierdzily-obecnosci-toksyn.html" target="_blank">https://www.pap.pl/aktualnosci/news%2C1400041%2Cminister-moskwa-badania-wody-i-ryb-nie-potwierdzily-obecnosci-toksyn.html</a>
                                <br/> <br/>
                                <sup>12</sup> <a className="link" href="  https://thehill.com/opinion/energy-environment/596304-investigate-russias-covert-funding-of-us-anti-fossil-fuel-groups/" target="_blank">  https://thehill.com/opinion/energy-environment/596304-investigate-russias-covert-funding-of-us-anti-fossil-fuel-groups/</a>
                                <br/> <br/>
                                <sup>13</sup> <a className="link" href="https://mobile.twitter.com/mic_marek/status/1558044206123433984/photo/2" target="_blank">https://mobile.twitter.com/mic_marek/status/1558044206123433984/photo/2</a>


                            </p>

                        </div>

                    </div>
                </div>
            </Layout>
        </>
    )
}

export default analysisNews