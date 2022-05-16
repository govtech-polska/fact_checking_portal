/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import ContactForm from 'components/ContactForm'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
    const recaptcha = document.querySelector('.grecaptcha-badge')
    if (recaptcha) recaptcha.style.display = display
}

const About = () => {
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
                <div className={`about-project ${isEn ? 'en' : ''}`}>
                    <section className="s1">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <h1 className="title">
                                        <Trans i18nKey="about:title" components={[<br/>, <span/>]}/>
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="followUs">
                                        <h4>{t('about:follow')}</h4>
                                        <ul>
                                            <li className="facebook">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://www.facebook.com/PAPFakeHunter/"
                                                ></a>
                                            </li>
                                            <li className="twitter">
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://twitter.com/PAPFakeHunter"
                                                ></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="quotation">
                                        <h2>
                                            <Trans i18nKey="about:quote" components={[<br/>, <br/>]}/>
                                        </h2>
                                        <br/>
                                        Katie Byron
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s2" id="oprojekcie">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('about:section1.title')}</h2>
                                        <p className="title">{t('about:section1.subtitle')}</p>
                                        <p>
                                            <span>#FakeHunter</span> {t('about:section1.description')}
                                        </p>
                                        <div className="collapse" id="collapseOne">
                                            <p>{t('about:section1.collapsed.1')}</p>

                                            <p>
                                                <Trans i18nKey="about:section1.collapsed.2" components={[<span/>]}/>
                                            </p>

                                            <h3 className="subtitle">{t('about:section1.collapsed.3')}</h3>
                                            <p>{t('about:section1.collapsed.4')}</p>
                                            <p>{t('about:section1.collapsed.5')}</p>

                                            <h3 className="subtitle">{t('about:section1.collapsed.6')}</h3>
                                            <p>{t('about:section1.collapsed.7')}</p>
                                        </div>
                                        <a
                                            className="collapseButton collapsed"
                                            data-toggle="collapse"
                                            href="#collapseOne"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseOne"
                                        >
                                            <span></span>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/image2.png" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s3" id="walka_z_fakenewsami">
                        <div className="container-fluid">
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="iframeWrapper">
                                        <iframe allowFullScreen height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/4JV6dGFL.html"
                                                title="Kongres Impact’22: agencje informacyjne są na pierwszej linii frontu w walce z fake newsami" width="620"></iframe>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper diffrentButtons">
                                        <h2 className="section">{t('about:section8.title')}</h2>
                                        <p className="title">{t('about:section8.subtitle')}</p>
                                        <p>{t('about:section8.description')}</p>
                                        <a className="button" target="_blank"
                                           href="https://pap-mediaroom.pl/polityka-i-spoleczenstwo/kongres-impact22-agencje-informacyjne-sa-na-pierwszej-linii-frontu-w-walce">
                                            {t('about:section8.verifiedNewsBtn')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s3" id="jaktodziala">
                        <div className="container-fluid">
                            <div className="row no-gutters">

                                <div className="col-lg-6">
                                    <div className="textWrapper diffrentButtons">
                                        <h2 className="section">{t('about:section2.title')}</h2>
                                        <p className="title">{t('about:section2.subtitle')}</p>
                                        <p>{t('about:section2.description')}</p>
                                        <h3 className="subtitle">{t('about:section2.subtitle2')}</h3>
                                        <a
                                            className="collapseButton collapsed"
                                            data-toggle="collapse"
                                            href="#collapseTwo"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            <span>{t('about:section2.button')}</span>
                                        </a>

                                        <div className="collapse" id="collapseTwo">

                                            <ol>
                                                <li>{t('about:section2.collapsed.1')}</li>
                                                <li>{t('about:section2.collapsed.2')}</li>
                                                <li>{t('about:section2.collapsed.3')}</li>
                                                <li>{t('about:section2.collapsed.4')}</li>
                                                <li>{t('about:section2.collapsed.5')}</li>
                                                <li>{t('about:section2.collapsed.6')}</li>
                                            </ol>
                                            <div className="dropdown">
                                                <button
                                                    className="dropdown-toggle buttonDropdown"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    {t('about:section2.collapsed.installExtBtn')}
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="dropdown-item"
                                                        href="https://chrome.google.com/webstore/detail/fakehunter/biebjolppinbddooahlglekngmalnfkf"
                                                    >
                                                        Chrome
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="dropdown-item"
                                                        href="https://addons.mozilla.org/pl/firefox/addon/fakehunter-pap-pl/"
                                                    >
                                                        FireFox
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div></div>

                                        <a
                                            className="collapseButton collapsed"
                                            data-toggle="collapse"
                                            href="#collapseThree"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo">
                                            <span>{t('about:section2.button1')}</span>
                                        </a>

                                        <div className="collapse" id="collapseThree">

                                            <ol>
                                                <li>{t('about:section2.collapsed1.1')}</li>
                                                <li>{t('about:section2.collapsed1.2')}</li>
                                                <li>{t('about:section2.collapsed1.3')}</li>
                                                <li>{t('about:section2.collapsed1.4')}</li>
                                            </ol>
                                            <div className="dropdown">
                                                <button
                                                    className="dropdown-toggle buttonDropdown"
                                                    type="button"
                                                    id="dropdownMenuButton1"
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    {t('about:section2.collapsed1.installExtBtn')}
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="dropdown-item"
                                                        href="https://play.google.com/store/apps/details?id=pl.pap.fakehunter"
                                                    >
                                                        Android
                                                    </a>
                                                    <a
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="dropdown-item"
                                                        href="https://apps.apple.com/pl/app/fakehunter/id1527976394"
                                                    >
                                                        IOS
                                                    </a>
                                                </div>
                                            </div>
                                        </div>


                                        <div></div>


                                        <a
                                            className="collapseButton collapsed"
                                            data-toggle="collapse"
                                            href="#collapseFour"
                                            role="button"
                                            aria-expanded="false"
                                            aria-controls="collapseFour">
                                            <span>{t('about:section2.button2')}</span>
                                        </a>

                                        <div className="collapse" id="collapseFour">
                                            <ol>
                                                <li>{t('about:section2.collapsed2.1')}</li>
                                                <li>{t('about:section2.collapsed2.2')}</li>
                                            </ol>
                                            <a className="button"
                                               href="https://www.facebook.com/PAPFakeHunter/">Chatbot</a>
                                        </div>


                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/image5.png" alt=""/>
                                        <div className="author">strixcode / Adobe Stock</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s4" id="zweryfikowaneinformacje">
                        <div className="container-fluid">
                            <div className="row no-gutters">

                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/image4.png" alt=""/>
                                        <div className="author">Alejandro Escamilla / Unsplash</div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('about:section3.title')}</h2>
                                        <p className="title">{t('about:section3.subtitle')}</p>
                                        <p>{t('about:section3.description')}</p>
                                        <a className="button" href="/">
                                            {t('about:section3.verifiedNewsBtn')}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s5" id="zostanfakehunterem">
                        <div className="container-fluid">
                            <div className="row no-gutters">

                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('about:section4.title')}</h2>
                                        <p className="title">{t('about:section4.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="about:section4.description" components={[<span/>]}/>
                                        </p>
                                        <a
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="button"
                                            href="https://form.govtech.gov.pl/ankieta/512297/dolacz-do-korpusu-ludzi-walczacych-z-dezinformacja-towarzyszaca-epidemii-koronawirusa.html"
                                        >
                                            {t('about:section4.applyBtn')}
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="imageWrapper">
                                        <img src="/images/image3.png" alt=""/>
                                        <div className="author">
                                            luismolinero / contrastwerkstatt / Rido / Asier / Adobe Stock
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s6" id="partnerzy">
                        <div className="container-fluid">
                            <div className="row no-gutters">

                                <div className="col-lg-6">
                                    <ul className="logoWrapper">
                                        <li className="dook">
                                            <div>
                                                <h5>{t('about:section5.techLeader')}</h5>
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    href="https://dook.pro/"
                                                    aria-label="DOOK"
                                                />
                                            </div>
                                        </li>
                                        <li className="objectivity">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="https://www.objectivity.co.uk/"
                                            >
                                                <img src="/images/objectivity_logo.png" alt="objectivity"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noopener noreferrer" href="https://aws.amazon.com/">
                                                <img src="/images/aws_logo.png" alt="AWS"/>
                                            </a>
                                        </li>

                                        <li className="obywatele">
                                            <a
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                href="http://www.obywatelezz.pl/"
                                            >
                                                <img src="/images/logo_obywatele.jpg"
                                                     alt="Obywatele zdrowo zaangaĹźowani"/>
                                            </a>
                                        </li>
                                        <li className="play">
                                            <a target="_blank" rel="noopener noreferrer" href="https://pgnig.pl/">
                                                <img src="/images/pgnig.png" alt="PGNIG"/>
                                            </a>
                                        </li>
                                        <li className="play">
                                            <a target="_blank" rel="noopener noreferrer" href="https://www.pfizer.com/">
                                                <img src="/images/partners/Pfizer_Logo.png" alt="Pfizer"/>
                                            </a>
                                        </li>
                                        <li className="info">
                                            <h5 className="title">


                          <span> <Trans i18nKey="about:section5.joinBtn"
                                        components={[<a className="" href="/dolacz-do-partnerow"/>,
                                            <a className="" href="/en/dolacz-do-partnerow"/>]}/></span>

                                            </h5>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('about:section5.title')}</h2>
                                        <p className="title">{t('about:section5.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="about:section5.description" components={[<span/>]}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="s8" id="kontakt">
                        <div className="container-fluid">
                            <div className="row no-gutters">


                                <div className="col-lg-12">
                                    <div className="textWrapper">
                                        <h2 className="section">{t('about:section7.title')}</h2>
                                        <p className="title">{t('about:section7.subtitle')}</p>
                                        <p>
                                            <Trans i18nKey="about:section7.description" components={[<a className="link" href="mailto:fakehunter@pap.pl" target="_blank"/>]}/></p>
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

export default About