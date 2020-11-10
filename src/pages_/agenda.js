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
                                            <th className="main" colspan="3" scope="col">{t('agenda:table.tableTitle')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agenda:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agenda:table.tableTh1')} {t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">9:50</td>
                                            <td className="center" colspan="2">Otwarcie #FakeHunter Challenge</td>

                                        </tr>
                                        <tr>
                                            <td>10:00</td>
                                            <td><a href="#id12">Marek Dietl</a></td>
                                            <td>prezes GPW</td>
                                        </tr>
                                        <tr>
                                            <td>12:00</td>
                                            <td><a href="#id20">Tomasz Rożek</a></td>
                                            <td>naukowiec</td>
                                        </tr>
                                        <tr>
                                            <td className="middle" rowspan="3">14:00</td>
                                            <td><a href="#id4">Grzegorz Jankowski</a>
                                            </td>
                                            <td>dziennikarz
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id21">Tomasz Wróblewski</a></td>

                                            <td>dziennikarz
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id22">Wojciech Pędzich</a>
                                            </td>

                                            <td>Wikimedia
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>16:00
                                            </td>
                                            <td><a href="#id11">Marcin Miller</a>
                                            </td>

                                            <td>lider i wokalista zespołu Boys

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>18:00
                                            </td>
                                            <td><a href="#id19">Tomasz Lis</a>

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
                                            <th className="main" colSpan="3" scope="col">{t('agenda:table.tableTitle1')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agenda:table.tableTh')}</th>
                                            <th className="name" scope="col">{t('agenda:table.tableTh1')} {t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">10:00</td>

                                            <td><a href="#id16">Redbad Klynstra - Komarnicki</a>

                                            </td>
                                            <td>aktor, reżyser
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td>Jakub Biernat, Aleś Zarembiuk

                                            </td>
                                            <td>TVP Biełsat / Dom Białoruski

                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="middle" rowSpan="4">14:00</td>
                                            <td><a href="#id13">Michel Viatteau</a>

                                            </td>

                                            <td>Fact-checking editor for Central Europe at Agence France-Presse Warsaw Office/ Redaktor weryfikujący AFP



                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id18">Stefan Voss</a>
                                            </td>

                                            <td>Head of verification DPA/ Szef weryfikacji DPA


                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id1">Alex Giboi</a>


                                            </td>

                                            <td>EANA Secretary General/Sekretarz Generalny EANA



                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id3">Desiree Garcia Pruñonosa</a>

                                            </td>

                                            <td>Head of EFE Verifica, EFE’s fact-checking unit/Szef weryfikacji EFE

                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">16:00
                                            </td>
                                            <td><a href="#id17">Sławomir Jastrzębowski</a>

                                            </td>

                                            <td>b. naczelny Super Express

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">18:00
                                            </td>
                                            <td><a href="#id2">Cristina Tardaguila</a>


                                            </td>

                                            <td>International Fact-Checking Associate Director, Poynter Institute/ Zastępca dyrektora International Fact-Checking Network



                                            </td>
                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <div className="tableWrapper">
                                    <table className="table  table-bordered ">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3" scope="col">{t('agenda:table.tableTitle2')}
                                            </th>

                                        </tr>
                                        <tr>
                                            <th className="hour" scope="col">{t('agenda:table.tableTh')}</th>
                                            <th className="name" scope="col">{t('agenda:table.tableTh1')} {t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id8">Joanna Kos-Krauze</a>


                                            </td>

                                            <td>reżyserka, scenarzystka, producentka

                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id5">Hirek Wrona</a>
                                            </td>

                                            <td>dziennikarz muzyczny
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="middle" rowSpan="4">14:00</td>
                                            <td><a href="#id7">Jan Zygmuntowski</a>

                                            </td>

                                            <td>naukowiec, wykładowca

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id1">Krzysztof Stępniak</a>
                                            </td>

                                            <td>prof. UKSW dr hab., kierownik Katedry Komunikacji UKSW, medioznawca, wicedyrektor Instytutu Edukacji Medialnej i Dziennikarstwa UKSW


                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#">Klaudia Rosińska</a>

                                            </td>

                                            <td>dr teologii środków społ. przekazu, medioznawca, specjalistka ds. dezinformacji za pomocą fake news, pedagog

                                            </td>
                                        </tr>

                                        <tr>

                                            <td><a href="#">Jakub Kuś</a>


                                            </td>

                                            <td>psycholog nowych technologii dr SWPS


                                            </td>
                                        </tr>

                                        <tr>
                                            <td>16:00
                                            </td>
                                            <td><a href="#">Piotr Gursztyn</a>

                                            </td>

                                            <td>dziennikarz, historyk

                                            </td>
                                        </tr>

                                        <tr>
                                            <td>18:00
                                            </td>
                                            <td><a href="#">Paweł Mąciwoda-Jastrzębski</a>



                                            </td>

                                            <td>gitarzysta basowy, członek zespołu Scorpions


                                            </td>
                                        </tr>

                                        <tr>
                                            <td>18:30</td>
                                            <td className="center" colSpan="3">Zakończenie #FakeHunter Challenge
                                            </td>

                                        </tr>


                                        </tbody>
                                    </table>
                                </div>
                                <h2 className="subtitle">{t('agenda:subtitle1')}</h2>

                                <ul className="personList">
                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Alexandru-Ion-Giboi2.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person1.name')}</h2>
                                            <p>{t('agenda:personList.person1.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id2" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Tardaguila_LeoAversa29.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person2.name')}</h2>
                                            <p>{t('agenda:personList.person2.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Desiree.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person3.name')}</h2>
                                            <p>{t('agenda:personList.person3.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id4" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/GrzegorzJankowski.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person4.name')}</h2>
                                            <p>{t('agenda:personList.person4.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id5" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/HirekWrona.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person5.name')}</h2>
                                            <p>{t('agenda:personList.person5.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id6" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Jakub_Kusfoto.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person6.name')}</h2>
                                            <p>{t('agenda:personList.person6.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id7" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/zygmuntowski.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person7.name')}</h2>
                                            <p>{t('agenda:personList.person7.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id8" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/JoannaKos-Krauze.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person8.name')}</h2>
                                            <p>{t('agenda:personList.person8.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id9" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/KlaudiaRosinska.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person9.name')}</h2>
                                            <p>{t('agenda:personList.person9.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id10" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/KrzysztofStepniak.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person10.name')}</h2>
                                            <p>{t('agenda:personList.person10.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id11" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/miller.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person11.name')}</h2>
                                            <p>{t('agenda:personList.person11.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id12" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/MarekDietlfoto.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person12.name')}</h2>
                                            <p>{t('agenda:personList.person12.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id13" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Michel_VIATTEAU.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person13.name')}</h2>
                                            <p>{t('agenda:personList.person13.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id14" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/maciwoda.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person14.name')}</h2>
                                            <p>{t('agenda:personList.person14.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id15" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/PiotrGursztynfoto.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person15.name')}</h2>
                                            <p>{t('agenda:personList.person15.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id16" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/3758541.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person16.name')}</h2>
                                            <p>{t('agenda:personList.person16.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id17" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/jastrzebowski.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person17.name')}</h2>
                                            <p>{t('agenda:personList.person17.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id18" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/StefanVoss.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person18.name')}</h2>
                                            <p>{t('agenda:personList.person18.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id19" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/TomaszLisfoto.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person19.name')}</h2>
                                            <p>{t('agenda:personList.person19.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id20" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/TomRozek-300x300.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person20.name')}</h2>
                                            <p>{t('agenda:personList.person20.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id21" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/wroblewski.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person21.name')}</h2>
                                            <p>{t('agenda:personList.person21.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id22" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Wojciech_Pedzich.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person22.name')}</h2>
                                            <p>{t('agenda:personList.person22.description')}</p>
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