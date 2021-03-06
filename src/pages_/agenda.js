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

                                <a className="button center"
                                   rel="noopener noreferrer"
                                   href="#frames"
                                >{t('agenda:iframebutton')}

                                </a>

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
                                            <td className="center" colspan="2">Otwarcie #FakeHunter Challengeya</td>

                                        </tr>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id12">Marek Dietl</a></td>
                                            <td>{t('agenda:functions.function1')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id20">Tomasz Rożek</a></td>
                                            <td>{t('agenda:functions.function2')}</td>
                                        </tr>
                                        <tr>
                                            <td className="middle hour" rowspan="3">Debata <br/>14:00 - 14:45</td>
                                            <td><a href="#id4">Grzegorz Jankowski</a>
                                            </td>
                                            <td>{t('agenda:functions.function3')}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id21">Tomasz Wróblewski</a></td>

                                            <td>{t('agenda:functions.function4')}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id22">Wojciech Pędzich</a>
                                            </td>

                                            <td>{t('agenda:functions.function5')}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">16:00
                                            </td>
                                            <td><a href="#id11">Agnieszka Hyży</a>
                                            </td>

                                            <td>{t('agenda:functions.function6')}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">18:00
                                            </td>
                                            <td><a href="#id19">Tomasz Lis</a>

                                            </td>
                                            <td>{t('agenda:functions.function7')}


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
                                            <th className="name"
                                                scope="col">{t('agenda:table.tableTh1')} {t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">10:00</td>

                                            <td><a href="#id16">Redbad Klynstra - Komarnicki</a>

                                            </td>
                                            <td>{t('agenda:functions.function8')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id23">Jakub Biernat</a>, <a href="#id24">Aleś Zarembiuk</a>

                                            </td>
                                            <td>{t('agenda:functions.function9')}

                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="middle hour" rowSpan="4">Debata <br/>14:00 - 14:45</td>
                                            <td><a href="#id13">Michel Viatteau</a>

                                            </td>

                                            <td>{t('agenda:functions.function10')}


                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id18">Stefan Voss</a>
                                            </td>

                                            <td>{t('agenda:functions.function11')}


                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id1">Alex Giboi</a>


                                            </td>

                                            <td>{t('agenda:functions.function12')}


                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id3">Desiree Garcia Pruñonosa</a>

                                            </td>

                                            <td>{t('agenda:functions.function13')}

                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">16:00
                                            </td>
                                            <td><a href="#id17">Piotr Legutko</a>

                                            </td>

                                            <td>{t('agenda:functions.function14')}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">18:00
                                            </td>
                                            <td><a href="#id2">Cristina Tardaguila</a>


                                            </td>

                                            <td>{t('agenda:functions.function15')}

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
                                            <th className="name"
                                                scope="col">{t('agenda:table.tableTh1')} {t('agenda:table.tableTh2')}</th>
                                            <th scope="col">{t('agenda:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id8">Joanna Kos-Krauze</a>


                                            </td>

                                            <td>{t('agenda:functions.function16')}

                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id5">Hirek Wrona</a>
                                            </td>

                                            <td>{t('agenda:functions.function17')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="middle hour" rowSpan="4">Debata <br/>14:00 - 14:45</td>
                                            <td><a href="#id7">Jan Zygmuntowski</a>

                                            </td>

                                            <td>{t('agenda:functions.function18')}

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id1">Krzysztof Stępniak</a>
                                            </td>

                                            <td>{t('agenda:functions.function19')}

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#">Klaudia Rosińska</a>

                                            </td>

                                            <td>{t('agenda:functions.function20')}
                                            </td>
                                        </tr>

                                        <tr>

                                            <td><a href="#">Jakub Kuś</a>


                                            </td>

                                            <td>{t('agenda:functions.function21')}


                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">16:00
                                            </td>
                                            <td><a href="#">Piotr Gursztyn</a>

                                            </td>

                                            <td>{t('agenda:functions.function22')}

                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">18:00
                                            </td>
                                            <td><a href="#">Paweł Mąciwoda-Jastrzębski</a>


                                            </td>

                                            <td>{t('agenda:functions.function23')}


                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">18:30</td>
                                            <td className="center" colSpan="3">Zakończenie #FakeHunter Challenge
                                            </td>

                                        </tr>


                                        </tbody>
                                    </table>
                                </div>





                                <h2 className="subtitle">{t('agenda:subtitle1')}</h2>

                                <ul className="personList">

                                    <li id="id11" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/hyzy.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person11.name')}</h2>
                                            <p>{t('agenda:personList.person11.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id24" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/ales.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person24.name')}</h2>
                                            <p>{t('agenda:personList.person24.description')}</p>
                                        </div>
                                    </li>
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
                                    <li id="id23" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/biernat.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person23.name')}</h2>
                                            <p>{t('agenda:personList.person23.description')}</p>
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
                                    <li id="id17" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/legutko.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person17.name')}</h2>
                                            <p>{t('agenda:personList.person17.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id16" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/Redbad.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agenda:personList.person16.name')}</h2>
                                            <p>{t('agenda:personList.person16.description')}</p>
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

                                <div id="frames" className="iframeList">

                                    <h2 className="title">{t('agenda:subtitle2')}</h2>
                                    <ul>
                                        <li>
                                            <h5>#FakeHunter Challenge: otwarcie</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/1YZ5Hsp1.html"
                                                        title="#FakeHunter Challenge: otwarcie" width="620"></iframe>
                                            </div>


                                        </li> <li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Markiem Dietlem (GPW)</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/8QIcNU37.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Markiem Dietlem (GPW)"
                                                        width="620"></iframe>
                                            </div>


                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Tomaszem Rożkiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/LXAPuVPE.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Tomaszem Rożkiem"
                                                        width="620"></iframe>
                                            </div>


                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge: debata dziennikarska</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/At5KhvBt.html"
                                                        title="#FakeHunter Challenge: debata dziennikarska"
                                                        width="620"></iframe>
                                            </div>


                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Agnieszką Hyży</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/9MMHPnCV.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Agnieszką Hyży"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Tomaszem Lisem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/1LbNjV5d.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Tomaszem Lisem"
                                                        width="620"></iframe>
                                            </div>


                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Redbadem Klynstra-Komarnickim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/WaOH1uJ7.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Redbadem Klynstra-Komarnickim"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Jakubem Biernatem oraz Aleśem Zarembiukiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/Iuhpjvv5.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Jakubem Biernatem oraz Aleśem Zarembiukiem"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: debata agencyjna</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/4CIwF7o8.html"
                                                        title="#FakeHunter Challenge: debata agencyjna"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Piotrem Legutko (TVP Historia)</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/nxD6t5hB.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Piotrem Legutko (TVP Historia)"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Cristiną Tardáguilą</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/MZxylDhG.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Cristiną Tardáguilą"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Joanną Kos-Krauze</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/soZ5T6LL.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Joanną Kos-Krauze"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Hirkiem Wroną</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/XD4aC0TR.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Hirkiem Wroną"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: debata naukowa</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/QguIt2j7.html"
                                                        title="#FakeHunter Challenge: debata naukowa"
                                                        width="620"></iframe></div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Piotrem Gursztynem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/ZoCFP9bp.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Piotrem Gursztynem"
                                                        width="620"></iframe></div>


                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge: panel dyskusyjny z Pawłem Mąciwodą - Jastrzębskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/UkK4kfTk.html"
                                                        title="#FakeHunter Challenge: panel dyskusyjny z Pawłem Mąciwodą - Jastrzębskim"
                                                        width="620"></iframe></div>


                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge: zakończenie</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/ApVxdkxC.html"
                                                        title="#FakeHunter Challenge: zakończenie" width="620"></iframe></div>


                                        </li>

                                    </ul>

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