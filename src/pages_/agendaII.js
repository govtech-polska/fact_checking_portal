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
                                <h1 className="title">{t('agendaII:title')}</h1>

                                <p className="lead">{t('agendaII:subtitle')}</p>



                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colspan="3"
                                                scope="col">{t('agendaII:table.tableTitle')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agendaII:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaII:table.tableTh1')} {t('agendaII:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaII:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">9:50</td>
                                            <td className="center" colspan="2">Otwarcie #FakeHunter Challenge/Szczepienia</td>

                                        </tr>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id1">Cyrille Cohen</a></td>
                                            <td>{t('agendaII:functions.function1')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id2">Tomasz Rożek</a></td>
                                            <td>{t('agendaII:functions.function2')}</td>
                                        </tr>
                                        <tr>
                                            <td className="middle hour" rowspan="3">12:00</td>
                                            <td><a href="#id3"></a>
                                            </td>
                                            <td>{t('agendaII:functions.function3')}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id4"></a></td>

                                            <td>{t('agendaII:functions.function4')}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id5"></a>
                                            </td>

                                            <td>{t('agendaII:functions.function5')}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">13:00
                                            </td>
                                            <td><a href="#id6">Aneta Łapińska</a>
                                            </td>

                                            <td>{t('agendaII:functions.function6')}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">14:00
                                            </td>
                                            <td><a href="#id7">Stanisław Banasiuk</a>

                                            </td>
                                            <td>{t('agendaII:functions.function7')}


                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>

                                <div className="tableWrapper">
                                    <table className="table  table-bordered ">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col">{t('agendaII:table.tableTitle2')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th className="hour" scope="col">{t('agendaII:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaII:table.tableTh1')} {t('agendaII:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaII:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id8">Dr hab. n. med. Jarosław Jan Pinkas </a>


                                            </td>

                                            <td>{t('agendaII:functions.function8')}

                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:30</td>
                                            <td><a href="#id9">Cezary Pazura
                                            </a>
                                            </td>

                                            <td>{t('agendaII:functions.function9')}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">12:30</td>
                                            <td><a href="#id10">
                                            </a>
                                            </td>

                                            <td>{t('agendaII:functions.function10')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">13:30</td>
                                            <td><a href="#id10">
                                            </a>
                                            </td>

                                            <td>{t('agendaII:functions.function10')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="middle hour" rowSpan="3">15:00</td>
                                            <td><a href="#id11"></a>

                                            </td>

                                            <td>{t('agendaII:functions.function11')}

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id12"></a>
                                            </td>

                                            <td>{t('agendaII:functions.function12')}

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id13"></a>

                                            </td>

                                            <td>{t('agendaII:functions.function13')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">15:40</td>
                                            <td className="center" colSpan="3">Zakończenie #FakeHunter Challenge/Szczepienia
                                            </td>

                                        </tr>


                                        </tbody>
                                    </table>
                                </div>


                                <h2 className="subtitle">{t('agendaII:subtitle1')}</h2>

                                <ul className="personList">


                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/cyrille-cohen.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person1.name')}</h2>
                                            <p>{t('agendaII:personList.person1.description')}</p>
                                        </div>
                                    </li>




                                    <li id="id7" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Stanislaw_Banasiuk_foto.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person7.name')}</h2>
                                            <p>{t('agendaII:personList.person7.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id9" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Cezary_Pazura_foto.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person9.name')}</h2>
                                            <p>{t('agendaII:personList.person9.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id8" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/pinkas.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person8.name')}</h2>
                                            <p>{t('agendaII:personList.person8.description')}</p>
                                        </div>
                                    </li>


                                    <li id="id2" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/TomRozek-300x300.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person2.name')}</h2>
                                            <p>{t('agendaII:personList.person2.description')}</p>
                                        </div>
                                    </li>

                                </ul>

                                s

                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </>
    )
}

export default Agenda