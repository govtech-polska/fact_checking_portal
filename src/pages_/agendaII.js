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

                                <a className="button center"
                                   rel="noopener noreferrer"
                                   href="#frames"
                                >{t('agendaII:iframebutton')}

                                </a>

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
                                            <td className="center" colspan="2">{t('agendaII:table.tableMainTitle1')}</td>

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
                                            <td className="middle hour" rowspan="2">12:00</td>
                                            <td><a href="#id3">dr hab. Piotr Rzymski</a>
                                            </td>
                                            <td>{t('agendaII:functions.function3')}
                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id4">Anna Krzyszowska-Kamińska</a></td>

                                            <td>{t('agendaII:functions.function4')}
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
                                            <td><a href="#id10">Michał Chlipała
                                            </a>
                                            </td>

                                            <td>{t('agendaII:functions.function10')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">13:30</td>
                                            <td><a href="#id15">dr Piotr Maszczyk
                                            </a>
                                            </td>

                                            <td>{t('agendaII:functions.function15')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="middle hour" rowSpan="4">15:00</td>
                                            <td><a href="#id11">prof. Filip M. Szymański</a>

                                            </td>

                                            <td>{t('agendaII:functions.function11')}

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id12">prof. Krzysztof Tomasiewicz</a>
                                            </td>

                                            <td>{t('agendaII:functions.function12')}

                                            </td>
                                        </tr>
                                        <tr>

                                            <td><a href="#id13">prof. Piotr Kuna</a>

                                            </td>

                                            <td>{t('agendaII:functions.function13')}
                                            </td>
                                        </tr>

                                        <tr>

                                            <td><a href="#id14">prof. Piotr Gałecki</a>

                                            </td>

                                            <td>{t('agendaII:functions.function14')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">15:40</td>
                                            <td className="center" colSpan="3">{t('agendaII:table.tableMainTitle2')}
                                            </td>

                                        </tr>


                                        </tbody>
                                    </table>
                                </div>


                                <h2 className="subtitle">{t('agendaII:subtitle1')}</h2>

                                <ul className="personList">
                                    <li id="id7" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Stanislaw_Banasiuk_foto.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person7.name')}</h2>
                                            <p>{t('agendaII:personList.person7.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id10" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/chli.jpg" />
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person10.name')}</h2>
                                            <p>{t('agendaII:personList.person10.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/cyrille-cohen.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person1.name')}</h2>
                                            <p>{t('agendaII:personList.person1.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id14" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/galecki.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person14.name')}</h2>
                                            <p>{t('agendaII:personList.person14.description')}</p>
                                        </div>
                                    </li>






                                    <li id="id13" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Kuna.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person13.name')}</h2>
                                            <p>{t('agendaII:personList.person13.description')}</p>
                                        </div>
                                    </li>


                                    <li id="id4" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/krzyszowska.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person4.name')}</h2>
                                            <p>{t('agendaII:personList.person4.description')}</p>
                                        </div>
                                    </li>


                                    <li id="id6" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/lapinska.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person6.name')}</h2>
                                            <p>{t('agendaII:personList.person6.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id15" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Piotr_Maszczyk.jpg" />
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person15.name')}</h2>
                                            <p>{t('agendaII:personList.person15.description')}</p>
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


                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Rzymski.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person3.name')}</h2>
                                            <p>{t('agendaII:personList.person3.description')}</p>
                                        </div>
                                    </li>




                                    <li id="id11" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Szymanski_foto.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person11.name')}</h2>
                                            <p>{t('agendaII:personList.person11.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id12" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh2/Tomasiewicz_foto.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaII:personList.person12.name')}</h2>
                                            <p>{t('agendaII:personList.person12.description')}</p>
                                        </div>
                                    </li>





                                </ul>

                                <div id="frames" className="iframeList">

                                    <h2 className="title">{t('agendaII:subtitle2')}</h2>
                                    <ul>


                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z prof. C. Cohenem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/dr4WTqTB.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z prof. C. Cohenem"
                                                        width="620"></iframe>
                                            </div>


                                        </li>


                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z Tomaszem Rożkiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/ELu22VPw.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z Tomaszem Rożkiem"
                                                        width="620"></iframe>
                                            </div>


                                        </li>


                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z A. Krzyszowską-Kamińską oraz P. Rzymskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/PljfMg2h.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z A. Krzyszowską-Kamińską oraz P. Rzymskim"
                                                        width="620"></iframe>
                                            </div>


                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z Anetą Łapińską</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/YnT6uu5A.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z Anetą Łapińską"
                                                        width="620"></iframe>
                                            </div>


                                        </li><li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z aktorem Stanisławem Banasiukiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/d9QtDm8w.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z aktorem Stanisławem Banasiukiem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z Jarosławem Pinkasem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/OjNndVCZ.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z Jarosławem Pinkasem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z Cezarym Pazurą</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/RydI8ver.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z Cezarym Pazurą"
                                                        width="620"></iframe>
                                            </div>
                                        </li>



                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z Michałem Chlipałą</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/fzVs3iB5.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z Michałem Chlipałą"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Szczepienia - rozmowa z Piotrem Maszczykiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/KfCMCYBL.html"
                                                        title="#FakeHunter Challenge/Szczepienia - rozmowa z Piotrem Maszczykiem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                    </ul></div>

                            </div>
                        </div>
                    </div>
                </article>
            </Layout>
        </>
    )
}

export default Agenda