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

const AgendaIV = () => {
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
                                <h1 className="title">{t('agendaIV:title')}</h1>

                                <p className="lead">{t('agendaIV:subtitle')}</p>

                                {/*    <a className="button center"
                                   rel="noopener noreferrer"
                                   href="#frames"
                                >{t('agendaIV:iframebutton')}
                                </a>
                                */}


                                {/*


                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col">{t('agendaIV:table.tableTitle')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agendaIV:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaIV:table.tableTh1')} {t('agendaIV:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaIV:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">9:50</td>
                                            <td className="center"
                                                colSpan="2">{t('agendaIV:table.tableMainTitle1')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id2">Piotr Naimski</a></td>
                                            <td>{t('agendaIV:functions.function2')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id11">Grzegorz Religa</a></td>
                                            <td>{t('agendaIV:functions.function11')}</td>
                                        </tr>

                                        <tr>
                                            <td className="middle hour" rowSpan="4">12:00</td>
                                            <td className="debateName" colSpan="2">
                                                {t('agendaIV:table.debate1')}</td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id5">Józef Orzeł</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function5')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id4">Małgorzata Zakrzewska</a></td>
                                            <td>{t('agendaIV:functions.function4')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id6">Dr Leszek Mellibruda</a></td>
                                            <td>{t('agendaIV:functions.function6')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">13:00
                                            </td>
                                            <td><a href="#id1">Grzegorz Kuczyński</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function1')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">14:00
                                            </td>
                                            <td><a href="#id7">Emilian Kamiński</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function7')}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                */}

                                {/*

                                <h2 className="subtitle">{t('agendaIV:subtitle1')}</h2>
                                <ul className="personList">
                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/3.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person3.name')}</h2>
                                            <p>{t('agendaIV:personList.person3.description')}</p>
                                        </div>
                                    </li>
                                </ul>*/}

                                {/*
                                <div id="frames" className="iframeList">
                                    <h2 className="title">{t('agendaIV:subtitle2')}</h2>
                                    <ul>
                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - otwarcie</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/YVOZ3bhr.html"
                                                        title="#FakeHunter Challenge/Gospodarka - otwarcie"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                    </ul>


                                </div> */}

                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </>
    )
}

export default AgendaIV