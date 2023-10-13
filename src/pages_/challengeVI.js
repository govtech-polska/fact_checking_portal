/* eslint-disable react/jsx-key */
import Head from 'next/head'
import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'

import CommonHead from 'base/CommonHead'
import Layout from 'containers/Layout'
import {useEffect} from 'react'

const setRecaptchaDisplay = (display) => {
    const recaptcha = document.querySelector('.grecaptcha-badge')
    if (recaptcha) recaptcha.style.display = display
}

const challengeVI = () => {
    // const navigate = useNavigate();


    const {t, lang} = useTranslation()
    const isEn = lang === 'en'

    useEffect(() => {
        setRecaptchaDisplay('block');
        console.log('elo');
        window.location.replace('https://fake-hunter.pap.pl/challengeVI');
        return () => {


            setRecaptchaDisplay('none')
        }
    }, [])

    return (

        <>


        </>
    )
}

export default challengeVI



