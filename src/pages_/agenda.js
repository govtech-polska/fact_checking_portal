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
                                <h1 className="title">{t('agenda:title')}</h1>

                                <p className="lead">{t('agenda:subtitle')}</p>

                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colspan="4" scope="col">{t('agenda:table.tableTitle')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agenda:table.tableTh')}</th>
                                            <th scope="col">{t('agenda:table.tableTh1')}</th>
                                            <th scope="col">{t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">9:50</td>
                                            <td className="center" colspan="3">Otwarcie #FakeHunter Marathon</td>

                                        </tr>
                                        <tr>
                                            <td>10:00</td>
                                            <td>Marek</td>
                                            <td>Dietl</td>
                                            <td>prezes GPW</td>
                                        </tr>
                                        <tr>
                                            <td>12:00</td>
                                            <td>Tomasz</td>
                                            <td>Rożek</td>
                                            <td>naukowiec</td>
                                        </tr>
                                        <tr>
                                            <td className="middle" rowspan="3">14:00</td>
                                            <td>Grzegorz
                                            </td>
                                            <td>Jankowski
                                            </td>
                                            <td>dziennikarz
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Tomasz</td>
                                            <td>Wróblewski
                                            </td>
                                            <td>b.dziennikarz
                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Wojciech
                                            </td>
                                            <td>Pędzich
                                            </td>
                                            <td>naukowiec</td>
                                        </tr>


                                        <tr>
                                            <td>16:00
                                            </td>
                                            <td>Marcin
                                            </td>
                                            <td>Miller
                                            </td>
                                            <td>lider zespołu Boys
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>18:00
                                            </td>
                                            <td>Tomasz

                                            </td>
                                            <td>Lis

                                            </td>
                                            <td>Ex. Director - Havas PR

                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="4" scope="col">{t('agenda:table.tableTitle1')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agenda:table.tableTh')}</th>
                                            <th scope="col">{t('agenda:table.tableTh1')}</th>
                                            <th scope="col">{t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td>Białoruś
                                                </td>
                                            <td>TVP Biełsat + Dom Białoruski
                                            </td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td className="middle" rowSpan="3">14:00</td>
                                            <td>Michel

                                            </td>
                                            <td>Viatteau

                                            </td>
                                            <td>agencja AFP

                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Stefan
                                            </td>
                                            <td>Voss

                                            </td>
                                            <td>DPA

                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Desiree

                                            </td>
                                            <td>Garcia Pruñonosa

                                            </td>
                                            <td>EFE
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">16:00
                                            </td>
                                            <td>Sławomir

                                            </td>
                                            <td>Jastrzębowski

                                            </td>
                                            <td>b. naczelny Super Express

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">18:00
                                            </td>
                                            <td>Cristina


                                            </td>
                                            <td>Tardaguila


                                            </td>
                                            <td>International Fact-Checking Associate Director, Poynter Institute


                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <div className="tableWrapper">
                                    <table className="table  table-bordered ">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="4" scope="col">{t('agenda:table.tableTitle2')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agenda:table.tableTh')}</th>
                                            <th scope="col">{t('agenda:table.tableTh1')}</th>
                                            <th scope="col">{t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>


                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td>Hirek
                                            </td>
                                            <td>Wrona
                                            </td>
                                            <td>dziennikarz muzyczny
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="middle" rowSpan="4">14:00</td>
                                            <td>Jan

                                            </td>
                                            <td>Zygmuntowski

                                            </td>
                                            <td>naukowiec, wykładowca

                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Krzysztof
                                            </td>
                                            <td>Stępniak

                                            </td>
                                            <td>kierownik komunikacji UKSW

                                            </td>
                                        </tr>
                                        <tr>

                                            <td>Klaudia

                                            </td>
                                            <td>Rosińska

                                            </td>
                                            <td>doktorantka UKSW
                                            </td>
                                        </tr>

                                        <tr>

                                            <td>Jakub


                                            </td>
                                            <td>Kuś


                                            </td>
                                            <td>psycholog nowych technologii dr SWPS

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>16:00
                                            </td>
                                            <td>Piotr

                                            </td>
                                            <td>Gursztyn

                                            </td>
                                            <td>dziennikarz, historyk

                                            </td>
                                        </tr>


                                        <tr>
                                            <td>18:30</td>
                                            <td className="center" colSpan="3">Zakończenie #FakeHunter Marathon
                                            </td>

                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <ul className="personList">
                                    <li className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Alexandru-Ion-Giboi2.jpg" />
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person1.name')}</h2>
                                            <p>{t('agenda:personList.person1.paragraph1')}</p>
                                            <p>{t('agenda:personList.person1.paragraph2')}</p>
                                            <p>{t('agenda:personList.person1.paragraph3')}</p>
                                        </div>
                                    </li>
                                    <li className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Tardaguila_LeoAversa29.jpg" />
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person2.name')}</h2>
                                            <p>{t('agenda:personList.person2.paragraph1')}</p>
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