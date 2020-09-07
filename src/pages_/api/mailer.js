import nodemailer from 'nodemailer'
import { request } from 'base/request'
import url from 'url'

let config = {}
if (process.env.NODE_ENV === 'production') {
  config = {
    host: 'wysylka.pap.com.pl',
    port: 25,
    secure: false,
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASSWORD
    }
  }
} else {
  config = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: process.env.TEST_MAILER_USER,
      pass: process.env.TEST_MAILER_PASSWORD
    }
  }
}

const transporter = nodemailer.createTransport(config)

export default async (req, res) => {
  const { token, ...data } = req.body

  const values = Object.values(data)
  if (values.some((v) => !v)) {
    res.statusCode = 400
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Wszystkie pola są wymagane' }))
    return
  }

  const captchaPayload = new url.URLSearchParams({
    secret: process.env.GOOGLE_SECRET_KEY,
    response: token
  })
  const recaptcha = await request(
    'https://www.google.com/recaptcha/api/siteverify',
    'POST',
    captchaPayload
  )

  if (!recaptcha.success) {
    res.statusCode = 403
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'reCaptcha error' }))
    return
  }

  const text = `Imię i Nazwisko: ${data.name} ${data.surname}\n\nAdres e-mail: ${data.email}\n\nTemat: ${data.title}\n\nTreść: ${data.text}`
  const html = `
    <p>Nowe zgłoszenie ze strony #FakeHunter:</p>
    <p>Imię i Nazwisko: <b>${data.name} ${data.surname}</b></p>
    <p>Adres e-mail: <b>${data.email}</b></p>
    <p>Temat: <b>${data.title}</b></p>
    <p>Treść: ${data.text}</p>
  `

  await transporter.sendMail({
    from: '"Serwis #FakeHunter" <fakhunter@pap.pl>',
    to: 'fakehunter@pap.pl',
    subject: 'Zgłoszenie z Landing Page - FakeHunter',
    text,
    html
  })

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ ok: true }))
}
