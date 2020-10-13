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

const ChallengeContactForm = () => {
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
          {t('challenge:contactForm.successMsg')}
        </p>
      )}
      {isError && (
        <p className="alert alert-danger" role="alert">
          {t('challenge:contactForm.errorMsg')}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="name">
              {t('challenge:contactForm.name')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder={t('challenge:contactForm.name')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="surname">
              {t('challenge:contactForm.surname')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="surname"
              placeholder={t('challenge:contactForm.surname')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="email">
              {t('challenge:contactForm.email')}
              <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder={t('challenge:contactForm.email')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="title">
              {t('challenge:contactForm.topic')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder={t('challenge:contactForm.topic')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="text">
              {t('challenge:contactForm.message')}
              <span>*</span>
            </label>
            <textarea
              placeholder={t('challenge:contactForm.message')}
              className="form-control"
              name="text"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <button type="submit" className="button">
              {t('challenge:contactForm.send')}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ChallengeContactForm
