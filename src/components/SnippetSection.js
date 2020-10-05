import PropTypes from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import Snippet from 'components/Snippet'
import Container from 'components/Container'
import { SectionTitle } from 'components/Typography'
import useTranslation from 'next-translate/useTranslation'

const Wrapper = styled.div`
  padding: 32px 0;
  background: #f9f9f9;

  &:nth-child(odd) {
    background: #fff;
  }
`

const Title = styled(SectionTitle)`
  margin: 0;
  margin-bottom: 16px;
`

const CenterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const ConfigWrapper = styled.div`
  max-width: 460px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const InputsWrapper = styled.div`
  display: flex;
`

const Iframe = styled.iframe`
  margin-bottom: 12px;
  background: #ddd;
`

export const ConfigRow = styled.div`
  align-items: baseline;
  margin-bottom: 20px;
`

export const ConfigLabel = styled.p`
  color: #666;
  line-height: 1;
  margin: 0 3px 10px;
`

export const ConfigInput = styled.input`
  border: 1px solid #afafaf;
  border-radius: 3px;
  background: #fff;
  padding: 8px 10px;
  margin: 0 3px;
  width: 100%;
`

const SnippetSection = ({ renderConfig, defaultConfig, title, snippet, getSrc }) => {
  const [config, setConfig] = useState(defaultConfig)
  const { t, lang } = useTranslation()
  const isEn = lang === 'en'

  return (
    <Wrapper>
      <CenterContainer>
        <Title>{title}</Title>
        <ConfigWrapper>
          <ConfigRow>
            <ConfigLabel>{t('developers:iframes.common.sizeLabel')}</ConfigLabel>
            <InputsWrapper>
              <ConfigInput
                name="width"
                type="number"
                placeholder={t('developers:iframes.common.widthLabel') + ' (px)'}
                onBlur={(e) =>
                  setConfig({ ...config, width: e.target.value || defaultConfig.width })
                }
              />
              <ConfigInput
                name="height"
                type="number"
                placeholder={t('developers:iframes.common.heightLabel') + ' (px)'}
                onBlur={(e) =>
                  setConfig({ ...config, height: e.target.value || defaultConfig.height })
                }
              />
            </InputsWrapper>
          </ConfigRow>
          {renderConfig && renderConfig(config, setConfig)}
        </ConfigWrapper>
        <Iframe
          src={getSrc({ ...config, isEn })}
          width={config.width}
          height={config.height}
          frameborder="0"
          style={{
            border: 'none',
            width: '100%',
            maxWidth: `${config.width}px`
          }}
        />
        <Snippet>{snippet({ ...config, isEn })}</Snippet>
      </CenterContainer>
    </Wrapper>
  )
}

SnippetSection.propTypes = {
  defaultConfig: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number
  }),
  getSrc: PropTypes.func,
  renderConfig: PropTypes.func,
  snippet: PropTypes.func,
  title: PropTypes.string
}

export default SnippetSection
