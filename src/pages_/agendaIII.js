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


                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colspan="3"
                                                scope="col">{t('agendaIII:table.tableTitle')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agendaIII:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaIII:table.tableTh1')} {t('agendaIII:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaIII:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">9:50</td>
                                            <td className="center" colspan="2">{t('agendaIII:table.tableMainTitle1')}</td>

                                        </tr>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id1">Cyrille Cohen</a></td>
                                            <td>{t('agendaIII:functions.function1')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id2">Tomasz Rożek</a></td>
                                            <td>{t('agendaIII:functions.function2')}</td>
                                        </tr>
                                        <tr>
                                            <td className="middle hour" rowspan="2">12:00</td>
                                            <td><a href="#id3">dr hab. Piotr Rzymski</a>
                                            </td>
                                            <td>{t('agendaIII:functions.function3')}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id4">Anna Krzyszowska-Kamińska</a></td>

                                            <td>{t('agendaIII:functions.function4')}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">13:00
                                            </td>
                                            <td><a href="#id6">Aneta Łapińska</a>
                                            </td>

                                            <td>{t('agendaIII:functions.function6')}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">14:00
                                            </td>
                                            <td><a href="#id7">Stanisław Banasiuk</a>

                                            </td>
                                            <td>{t('agendaIII:functions.function7')}


                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>










                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </>
    )
}

export default Agenda