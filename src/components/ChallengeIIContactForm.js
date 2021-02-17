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
          {t('challengeII:contactForm.successMsg')}
        </p>
      )}
      {isError && (
        <p className="alert alert-danger" role="alert">
          {t('challengeII:contactForm.errorMsg')}
        </p>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="col-md-6">
            <label htmlFor="name">
              {t('challengeII:contactForm.name')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder={t('challengeII:contactForm.name')}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="surname">
              {t('challengeII:contactForm.surname')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="surname"
              placeholder={t('challengeII:contactForm.surname')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="email">
              {t('challengeII:contactForm.email')}
              <span>*</span>
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder={t('challengeII:contactForm.email')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="title">
              {t('challengeII:contactForm.topic')}
              <span>*</span>
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              placeholder={t('challengeII:contactForm.topic')}
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <label htmlFor="text">
              {t('challengeII:contactForm.message')}
              <span>*</span>
            </label>
            <textarea
              placeholder={t('challengeII:contactForm.message')}
              className="form-control"
              name="text"
              rows="4"
            ></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <button type="submit" className="button">
              {t('challengeII:contactForm.send')}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ChallengeContactForm
