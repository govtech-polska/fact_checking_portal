/*  eslint-disable  react/jsx-key*/
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
    const recaptcha = document.querySelector('.grecaptcha-badge')
    if (recaptcha) recaptcha.style.display = display
}

const Agenda = () => {
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
                <article className="article">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="title">{t('agendaIII:title')}</h1>

                                <p className="lead">{t('agendaIII:subtitle')}</p>





                                <h2 className="subtitle">{t('agendaIII:subtitle1')}</h2>

                                <ul className="personList">

                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/1.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person1.name')}</h2>
                                            <p>{t('agendaIII:personList.person1.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id2" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/2.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person2.name')}</h2>
                                            <p>{t('agendaIII:personList.person2.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/3.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person3.name')}</h2>
                                            <p>{t('agendaIII:personList.person3.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id4" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/4.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person4.name')}</h2>
                                            <p>{t('agendaIII:personList.person4.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id5" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/5.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person5.name')}</h2>
                                            <p>{t('agendaIII:personList.person5.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id6" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/6.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person6.name')}</h2>
                                            <p>{t('agendaIII:personList.person6.description')}</p>
                                        </div>
                                    </li>

                                </ul>







                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </>
    )
}

export default Agenda