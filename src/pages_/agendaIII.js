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

                                <a className="button center"
                                   rel="noopener noreferrer"
                                   href="#frames"
                                >{t('agendaIII:iframebutton')}

                                </a>

                                <div className="tableWrapper">
                                    <table className="table  table-bordered">
                                        <thead>
                                        <tr>
                                            <th className="main" colSpan="3"
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
                                            <td className="center"
                                                colSpan="2">{t('agendaIII:table.tableMainTitle1')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id2">Piotr Naimski</a></td>
                                            <td>{t('agendaIII:functions.function2')}</td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id11">Grzegorz Religa</a></td>
                                            <td>{t('agendaIII:functions.function11')}</td>
                                        </tr>

                                        <tr>
                                            <td className="middle hour" rowSpan="4">12:00</td>
                                            <td className="debateName" colSpan="2">
                                                {t('agendaIII:table.debate1')}</td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id5">Józef Orzeł</a>
                                            </td>
                                            <td>{t('agendaIII:functions.function5')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id4">Małgorzata Zakrzewska</a></td>
                                            <td>{t('agendaIII:functions.function4')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id6">Dr Leszek Mellibruda</a></td>
                                            <td>{t('agendaIII:functions.function6')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">13:00
                                            </td>
                                            <td><a href="#id1">Grzegorz Kuczyński</a>
                                            </td>
                                            <td>{t('agendaIII:functions.function1')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">14:00
                                            </td>
                                            <td><a href="#id7">Emilian Kamiński</a>
                                            </td>
                                            <td>{t('agendaIII:functions.function7')}
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
                                                scope="col">{t('agendaIII:table.tableTitle2')}
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="hour" scope="col">{t('agendaIII:table.tableTh')}</th>
                                            <th className="name"
                                                scope="col">{t('agendaIII:table.tableTh1')} {t('agendaIII:table.tableTh2')}</th>
                                            <th scope="col">{t('agendaIII:table.tableTh3')}</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="hour">10:00</td>
                                            <td><a href="#id3">Artur Chmielewski </a>
                                            </td>
                                            <td>{t('agendaIII:functions.function3')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">11:00</td>
                                            <td><a href="#id8">Andrzej Kisielewicz
                                            </a>
                                            </td>
                                            <td>{t('agendaIII:functions.function8')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="middle hour" rowSpan="3">12:00</td>
                                            <td className="debateName" colSpan="2">
                                                {t('agendaIII:table.debate2')}</td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id9">Tomasz Nowacki</a>
                                            </td>
                                            <td>{t('agendaIII:functions.function9')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><a href="#id13">Marcin Roszkowski</a></td>
                                            <td>{t('agendaIII:functions.function13')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">13:00</td>
                                            <td><a href="id12">Robert Perkowski
                                            </a>
                                            </td>
                                            <td>{t('agendaIII:functions.function12')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">14:00</td>
                                            <td><a href="#id10">Marek Wroński
                                            </a>
                                            </td>
                                            <td>{t('agendaIII:functions.function10')}
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="hour">14:30</td>
                                            <td className="center" colSpan="3">{t('agendaIII:table.tableMainTitle2')}
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <h2 className="subtitle">{t('agendaIII:subtitle1')}</h2>
                                <ul className="personList">
                                    <li id="id3" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/3.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person3.name')}</h2>
                                            <p>{t('agendaIII:personList.person3.description')}</p>
                                        </div>
                                    </li>
                                    <li id="id7" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/7.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person7.name')}</h2>
                                            <p>{t('agendaIII:personList.person7.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id8" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/8.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person8.name')}</h2>
                                            <p>{t('agendaIII:personList.person8.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id1" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/1.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person1.name')}</h2>
                                            <p>{t('agendaIII:personList.person1.description')}</p>
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

                                    <li id="id2" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/2.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person2.name')}</h2>
                                            <p>{t('agendaIII:personList.person2.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id9" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/9.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person9.name')}</h2>
                                            <p>{t('agendaIII:personList.person9.description')}</p>
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

                                    <li id="id12" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/12.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person12.name')}</h2>
                                            <p>{t('agendaIII:personList.person12.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id11" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/11.jpeg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person11.name')}</h2>
                                            <p>{t('agendaIII:personList.person11.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id13" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/13.png"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person13.name')}</h2>
                                            <p>{t('agendaIII:personList.person13.description')}</p>
                                        </div>
                                    </li>

                                    <li id="id10" className="person">
                                        <div className="imageWrapper">
                                            <img src="/images/persons/fh3/10.jpg"/>
                                        </div>
                                        <div className="textWrapper">
                                            <h2 className="name">{t('agendaIII:personList.person10.name')}</h2>
                                            <p>{t('agendaIII:personList.person10.description')}</p>
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
                                </ul>


                                <div id="frames" className="iframeList">
                                    <h2 className="title">{t('agendaIII:subtitle2')}</h2>
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

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Piotrem Naimskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/QxLHJlBH.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Piotrem Naimskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z dr Grzegorzem Religą</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/ZFOKiq9M.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z dr Grzegorzem Religą"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - debata pt. &#34;Wpływ fake newsów na zachowania społeczne – jak groźna może być dezinformacja&#34;</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/Tg8SSeC1.html"
                                                        title="#FakeHunter Challenge/Gospodarka - debata pt. &#34;Wpływ fake newsów na zachowania społeczne – jak groźna może być dezinformacja&#34;"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Grzegorzem Kuczyńskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/CkCOgASF.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Grzegorzem Kuczyńskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Emilianem Kamińskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/ZJl5YiO8.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Emilianem Kamińskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Arturem Chmielewskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/maYizoXs.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Arturem Chmielewskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Andrzejem Kisielewiczem</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/d782evwC.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Andrzejem Kisielewiczem"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - debata pt. &#34;Ile będzie nas kosztować energia jądrowa i czy jest rzeczywiście droższa niż zielona&#34;</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/775JbVk0.html"
                                                        title="#FakeHunter Challenge/Gospodarka - debata pt. &#34;Ile będzie nas kosztować energia jądrowa i czy jest rzeczywiście droższa niż zielona&#34;"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Robertem Perkowskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/LWg1IZwN.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Robertem Perkowskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - rozmowa z Markiem Wrońskim</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/LRRrYTXb.html"
                                                        title="#FakeHunter Challenge/Gospodarka - rozmowa z Markiem Wrońskim"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>#FakeHunter Challenge/Gospodarka - zakończenie</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/LxCG2kVk.html"
                                                        title="#FakeHunter Challenge/Gospodarka - zakończenie"
                                                        width="620"></iframe>
                                            </div>
                                        </li>

                                        <li>
                                            <h5>Ogłoszenie wyników #FH Challenge/Gospodarka</h5>
                                            <div className="iframeWrapper">
                                                <iframe allowFullScreen frameBorder="0" height="350"
                                                        src="//r.dcs.redcdn.pl/webcache/pap-embed/iframe/35wTBmhD.html"
                                                        title="Ogłoszenie wyników #FH Challenge/Gospodarka"
                                                        width="620"></iframe>
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

export default Agenda