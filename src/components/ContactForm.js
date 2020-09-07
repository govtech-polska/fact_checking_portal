import { request } from 'base/request'
import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'

const APP_URL = process.env.APP_URL

const elementsToValues = (keysArr, elements) =>
  keysArr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: elements[curr].value
    }
  }, {})

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const { t } = useTranslation()

  const handleSubmit = async (e) => {
    e.preventDefault()
    e.persist()

    const payload = elementsToValues(
      ['name', 'surname', 'title', 'email', 'text'],
      e.target.elements
    )
    try {
      const token = await grecaptcha.execute(process.env.GOOGLE_SITE_KEY, {
        action: 'submit'
      })
      await request(`${APP_URL}/api/mailer`, 'POST', {
        sameOrigin: true,
        data: {
          ...payload,
          token
        }
      })
      setIsError(false)
      setIsSuccess(true)
      e.target.reset()
    } catch (err) {
      setIsSuccess(false)
      setIsError(true)
    }
  }

  return (
    <>
      {isSuccess && (
        <p className="alert alert-success" role="alert">
          {t('about:contactForm.successMsg')}
        </p>
      )}
      {isError && (
        <p className="alert alert-danger" role="alert">
          {t('about:contactForm.errorMsg')}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="name">
              {t('about:contactForm.name')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder={t('about:contactForm.name')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="surname">
              {t('about:contactForm.surname')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="surname"
              placeholder={t('about:contactForm.surname')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="email">
              {t('about:contactForm.email')}
              <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder={t('about:contactForm.email')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="title">
              {t('about:contactForm.topic')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder={t('about:contactForm.topic')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="text">
              {t('about:contactForm.message')}
              <span>*</span>
            </label>
            <textarea
              placeholder={t('about:contactForm.message')}
              className="form-control"
              name="text"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <button type="submit" className="button">
              {t('about:contactForm.send')}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm
