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

const agendaV = () => {
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
                                <h1 className="title">{t('agendaV:title')}</h1>

                                <p className="lead">{t('agendaV:subtitle')}</p>

                                <a className="button center"
                                   rel="noopener noreferrer"
                                   href="#frames"
                                >{t('agendaV:iframebutton')}
                                </a>


                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col"><strong>{t('agendaV:table.tableTitle')}</strong>
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agendaV:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaV:table.tableTh1')} {t('agendaV:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaV:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">9:50</td>
                                            <td className="center"
                                                colSpan="2"><strong>{t('agendaV:table.tableMainTitle')}</strong></td>
                                        </tr>

                                        <tr>
                                            <td rowSpan="2" className="hour">10:00</td>
                                            <td><a href="#id13">{t('agendaV:personList.person13.name')}</a></td>
                                            <td>{t('agendaV:personList.person13.function')} </td>


                                        </tr>
                                        <tr>
                                            <td><a href="#id15">{t('agendaV:personList.person15.name')}</a></td>
                                            <td>{t('agendaV:personList.person15.function')}</td>


                                        </tr>


                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id14">{t('agendaV:personList.person14.name')}</a></td>
                                            <td>{t('agendaV:personList.person14.function')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id16">{t('agendaV:personList.person16.name')}</a></td>
                                            <td>{t('agendaV:personList.person16.function')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">13:00</td>
                                            <td><a href="#id19">{t('agendaV:personList.person19.name')}</a></td>
                                            <td>{t('agendaV:personList.person19.function')}</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan="2" className="hour">14:00</td>
                                            <td><a href="#id17">{t('agendaV:personList.person17.name')}</a></td>
                                            <td>{t('agendaV:personList.person17.function')} </td>


                                        </tr>
                                        <tr>
                                            <td><a href="#id18">{t('agendaV:personList.person18.name')}</a></td>
                                            <td>{t('agendaV:personList.person18.function')}</td>


                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col"><strong>{t('agendaV:table.tableTitle1')}</strong>
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agendaV:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaV:table.tableTh1')} {t('agendaV:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaV:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id6">{t('agendaV:personList.person6.name')}</a></td>
                                            <td>{t('agendaV:personList.person6.function')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id7">{t('agendaV:personList.person7.name')}</a></td>
                                            <td>{t('agendaV:personList.person7.function')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">12:00</td>
                                            <td><a href="#id20">{t('agendaV:personList.person20.name')}</a></td>
                                            <td>{t('agendaV:personList.person20.function')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">13:00</td>
                                            <td><a href="#id8">{t('agendaV:personList.person8.name')}</a></td>
                                            <td>{t('agendaV:personList.person8.function')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">14:00</td>
                                            <td><a href="#id2">{t('agendaV:personList.person2.name')}</a></td>
                                            <td>{t('agendaV:personList.person2.function')}</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
                                                scope="col"><strong>{t('agendaV:table.tableTitle2')}</strong>
                                            </th>

                                        </tr>
                                        <tr>
                                            <th scope="col">{t('agendaV:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaV:table.tableTh1')} {t('agendaV:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaV:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>


                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id4">{t('agendaV:personList.person4.name')}</a></td>
                                            <td>{t('agendaV:personList.person4.function')}</td>
                                        </tr>
                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id12">{t('agendaV:personList.person12.name')}</a></td>
                                            <td>{t('agendaV:personList.person12.function')}</td>
                                        </tr>


                                        <tr>
                                            <td className="middle hour" rowSpan="4">12:00</td>
                                            <td className="debateName" colSpan="2">
                                                {t('agendaV:table.debate2')}</td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id9">{t('agendaV:personList.person9.name')}</a>
                                            </td>
                                            <td>{t('agendaV:personList.person9.function')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#id5">{t('agendaV:personList.person5.name')}</a>
                                            </td>
                                            <td>{t('agendaV:personList.person5.function')}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><a href="#id3">{t('agendaV:personList.person3.name')}</a>
                                            </td>
                                            <td>{t('agendaV:personList.person3.function')}
                                            </td>
                                        </tr>


                                        <tr>
                                            <td className="hour">13:00</td>
                                            <td><a href="#id10">{t('agendaV:personList.person10.name')}</a></td>
                                            <td>{t('agendaV:personList.person10.function')}</td>
                                        </tr>


                                        <tr>
                                            <td className="hour">14:00</td>
                                            <td><a href="#id1">{t('agendaV:personList.person1.name')}</a></td>
                                            <td>{t('agendaV:personList.person1.function')}</td>
                                        </tr>


                                        <tr>
                                            <td className="hour">14:40</td>
                                            <td className="center"
                                                colSpan="2"><strong>{t('agendaV:table.tableMainTitle2')}</strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>


                                <h2 className="subtitle">{t('agendaV:subtitle1')}</h2>
                                <ul className="personList">
                                    <li id="id12" className="person">
                                        <div className="imageWrapper noImage">
                                            <img src="/images/persons/fh5/12.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person12.name')}</h2>
                                            <p>{t('agendaV:personList.person12.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/1.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person1.name')}</h2>
                                            <p>{t('agendaV:personList.person1.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id2" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/2.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person2.name')}</h2>
                                            <p>{t('agendaV:personList.person2.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id18" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/18.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person18.name')}</h2>
                                            <p>{t('agendaV:personList.person18.description')}</p>
                                        </div>
                                    </li>
                                    {/*<li id="id11" className="person">
                                        <div className="imageWrapper noImage">
                                            <img src="/images/persons/fh5/11.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person11.name')}</h2>
                                            <p>{t('agendaV:personList.person11.description')}</p>
                                        </div>
                                    </li>*/}
                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/3.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person3.name')}</h2>
                                            <p>{t('agendaV:personList.person3.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id4" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/4.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person4.name')}</h2>
                                            <p>{t('agendaV:personList.person4.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id5" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/5.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person5.name')}</h2>
                                            <p>{t('agendaV:personList.person5.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id14" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/14.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person14.name')}</h2>
                                            <p>{t('agendaV:personList.person14.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id19" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/19.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person19.name')}</h2>
                                            <p>{t('agendaV:personList.person19.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id15" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/15.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person15.name')}</h2>
                                            <p>{t('agendaV:personList.person15.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id20" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/20.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person20.name')}</h2>
                                            <p>{t('agendaV:personList.person20.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id6" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/6.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person6.name')}</h2>
                                            <p>{t('agendaV:personList.person6.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id7" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/7.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person7.name')}</h2>
                                            <p>{t('agendaV:personList.person7.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id16" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/16.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person16.name')}</h2>
                                            <p>{t('agendaV:personList.person16.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id17" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/17.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person17.name')}</h2>
                                            <p>{t('agendaV:personList.person17.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id13" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/13.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person13.name')}</h2>
                                            <p>{t('agendaV:personList.person13.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id10" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/10.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person10.name')}</h2>
                                            <p>{t('agendaV:personList.person10.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id8" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/8.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person8.name')}</h2>
                                            <p>{t('agendaV:personList.person8.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id9" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh5/9.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaV:personList.person9.name')}</h2>
                                            <p>{t('agendaV:personList.person9.description')}</p>
                                        </div>
                                    </li>

                                </ul>


                                <div id="frames" className="iframeList">
                                    <h2 className="title">{t('agendaV:subtitle2')}</h2>
                                    <ul>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - otwarcie wydarzenia</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/UHM7tKEM.html"
                                                        title="#FakeHunter Challenge/Geopolityka - otwarcie wydarzenia"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Justyną Orłowską oraz Michałem Kanownikiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/qRPU8uiG.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Justyną Orłowską oraz Michałem Kanownikiem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z harcmistrzem Chorągwi Kieleckiej</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/kGYR3lm6.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z harcmistrzem Chorągwi Kieleckiej"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z psychologiem Dorotą Mintą</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/YfToY1Jq.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z psychologiem Dorotą Mintą"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z red. Jarosławem Junko</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/e9yQj8Ra.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z red. Jarosławem Junko"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z dyrektorami Zespołów Szkół w Lubilinie i Łosicach</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/A4gmQPi6.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z dyrektorami Zespołów Szkół w Lubilinie i Łosicach" width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Grzegorzem Kuczyńskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/VU4i7Rgd.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Grzegorzem Kuczyńskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Michałem Markiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/Qg5XzaDZ.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Michałem Markiem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Robertem Królem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/GT7xLeTR.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Robertem Królem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z gen. Romanem Polko</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/iX1sYwrN.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z gen. Romanem Polko"
                                                        width="620"></iframe>
                                            </div>
                                        </li>
                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z red. Jakubem Biernatem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/mSuufxhZ.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z red. Jakubem Biernatem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Pawłem Delągiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/wq7zD5uP.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Pawłem Delągiem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Dominikiem Andrzejczukiem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/TU8ouODY.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Dominikiem Andrzejczukiem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - debata pt. "Państwo, którego nie ma. Dezinformacja na temat Polski w światowym obiegu informacji"</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/WkKsEyca.html"
                                                        title="#FakeHunter Challenge/Geopolityka - debata pt. &#34;Państwo, którego nie ma. Dezinformacja na temat Polski w światowym obiegu informacji&#34;"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Bogdanem Pliszką</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/sGWut6tF.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Bogdanem Pliszką"
                                                        width="620">
                                                </iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - rozmowa z Michałem Baranowskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/55b849hi.html"
                                                        title="#FakeHunter Challenge/Geopolityka - rozmowa z Michałem Baranowskim"
                                                        width="620">

                                                </iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Geopolityka - zakończenie spotkań eksperckich</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/r3NRZDN2.html"
                                                        title="#FakeHunter Challenge/Geopolityka - zakończenie spotkań eksperckich"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>Ogłoszenie wyników #FakeHunter Challenge/Geopolityka</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350" src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/TgTBT52h.html"
                                                        title="Ogłoszenie wyników #FakeHunter Challenge/Geopolityka" width="620"></iframe>
                                            </div>
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

export default agendaV