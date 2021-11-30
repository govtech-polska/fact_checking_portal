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





                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col"><strong>{t('agendaIV:table.tableTitle')}</strong>
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
                                                colSpan="2"><strong>{t('agendaIV:table.tableMainTitle1')}</strong></td>
                                        </tr>

                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id3">Marcin Maj</a></td>
                                            <td>{t('agendaIV:functions.function3')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id5">Piotr Potejko</a></td>
                                            <td>{t('agendaIV:functions.function5')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:30
                                            </td>
                                            <td><a href="#id10">Dr Paweł M. Boguszewski</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function10')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="middle hour" rowSpan="4">12:00</td>
                                            <td className="debateName" colSpan="2">
                                                {t('agendaIV:table.debate1')}</td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id11">Antoni Rytel</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function11')}
                                            </td>
                                        </tr>



                                        <tr>
                                            <td><a href="#id12">Łukasz Dzieran</a></td>
                                            <td>{t('agendaIV:functions.function12')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id13">Rafał Pazura</a></td>
                                            <td>{t('agendaIV:functions.function13')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">13:00
                                            </td>
                                            <td><a href="#id1">Agnieszka Bujała</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function1')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">14:00
                                            </td>
                                            <td><a href="#id4">Piotr Maszczyk</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function4')}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col"><strong>{t('agendaIV:table.tableTitle2')}</strong>
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
                                            <td className="hour">10:00</td>
                                            <td><a href="#id2">Ilona Dąbrowska</a></td>
                                            <td>{t('agendaIV:functions.function2')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id6">Tomasz Witkowski</a></td>
                                            <td>{t('agendaIV:functions.function6')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id14">Mariusz Kurczyk</a></td>
                                            <td>{t('agendaIV:functions.function14')}</td>
                                        </tr>



                                        <tr>
                                            <td className="hour">13:00
                                            </td>
                                            <td><a href="#id7">Marcin Juwa</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function7')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">14:00
                                            </td>
                                            <td><a href="#id8">Arkadiusz Bednarczuk</a> / <a href="#id9">Mariusz Kuśmierczyk</a>
                                            </td>
                                            <td>{t('agendaIV:functions.function8')} / {t('agendaIV:functions.function9')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="hour">14:30</td>
                                            <td className="center"
                                                colSpan="2"><strong>{t('agendaIV:table.tableMainTitle2')}</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <h2 className="subtitle">{t('agendaIV:subtitle1')}</h2>
                                <ul className="personList">
                                    <li id="id8" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/8.jpeg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person8.name')}</h2>
                                            <p>{t('agendaIV:personList.person8.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id10" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/10.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person10.name')}</h2>
                                            <p>{t('agendaIV:personList.person10.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/1.JPG"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person1.name')}</h2>
                                            <p>{t('agendaIV:personList.person1.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id2" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/2.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person2.name')}</h2>
                                            <p>{t('agendaIV:personList.person2.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id12" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/12.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person12.name')}</h2>
                                            <p>{t('agendaIV:personList.person12.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id9" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/9.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person9.name')}</h2>
                                            <p>{t('agendaIV:personList.person9.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id7" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/7.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person7.name')}</h2>
                                            <p>{t('agendaIV:personList.person7.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/3.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person3.name')}</h2>
                                            <p>{t('agendaIV:personList.person3.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id4" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/4.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person4.name')}</h2>
                                            <p>{t('agendaIV:personList.person4.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id13" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/13.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person13.name')}</h2>
                                            <p>{t('agendaIV:personList.person13.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id5" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/5.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person5.name')}</h2>
                                            <p>{t('agendaIV:personList.person5.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id11" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/11.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person11.name')}</h2>
                                            <p>{t('agendaIV:personList.person11.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id6" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh4/6.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIV:personList.person6.name')}</h2>
                                            <p>{t('agendaIV:personList.person6.description')}</p>
                                        </div>
                                    </li>
                                </ul>



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