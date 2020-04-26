import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import PositiveVote from './Icons/PositiveVote'
import NegativeVote from './Icons/NegativeVote'
import WarningIcon from './Icons/Warning'
import Unknown from './Icons/Unknown'
import { VERDICT_STATUS } from 'consts'

const styles = {
  card: {
    wrapper: css`
      align-items: center;
      justify-content: center;
    `,
    verdictStatus: css`
      justify-content: center;
      font-size: 16px;
      padding-bottom: 32px;
    `,
    icon: css`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,
    warning: css`
      color: #ffa500;
      border: 1px solid #ffa500;
      position: absolute;
      bottom: 0;
      margin: 0;
      padding: 5px;
    `
  },
  list: {
    wrapper: css`
      align-items: center;
      justify-content: center;
      /* margin-bottom: 30px; */
      /* margin-bottom: auto; */
      flex: 1;
      min-height: 100px;
    `,
    verdictStatus: css`
      justify-content: center;
      font-size: 16px;
    `,
    icon: css`
      width: 24px;
      height: 24px;
      margin-right: 8px;
    `,
    warning: css`
      color: #ffa500;
      border: 1px solid #ffa500;
    `
  },
  details: {
    wrapper: css`
      align-items: flex-start;
    `,
    verdictStatus: css`
      font-size: 18px;
    `,
    icon: css`
      width: 48px;
      height: 48px;
      margin-right: 8px;
    `,
    warning: css`
      color: #ffa500;
      border: 1px solid #ffa500;
    `
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const VerdictStatus = styled.div`
  display: flex;
  align-items: center;
`

const Icon = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 10px;
`

const Message = styled.p`
  font-weight: 700;
  line-height: 0;
`

const Warning = styled.p`
  font-size: 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: lightgray;
  line-height: 1.2;
  border: 1px solid lightgray;
  padding: 7px;
  border-radius: 4px;

  svg {
    width: 12px;
    height: 12px;
    margin-right: 6px;
  }
`

// TODO: extract
const mapTypeToIcon = {
  true: PositiveVote,
  false: NegativeVote,
  unidentified: Unknown
}

const Verdict = ({ type, size, className, isFinal }) => {
  return (
    <Wrapper className={className}>
      <VerdictStatus>
        <Icon as={mapTypeToIcon[type]} />
        <Message>{VERDICT_STATUS[type]}</Message>
      </VerdictStatus>
      {!isFinal && (
        <Warning>
          <WarningIcon />
          Awaiting expert report
        </Warning>
      )}
    </Wrapper>
  )
}

Verdict.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['card', 'details', 'list']),
  isFinal: PropTypes.bool
}

const StyledVerdict = styled(Verdict)`
  color: ${(props) => props.theme.colors.verdicts[props.type]};

  ${(props) => styles[props.size].wrapper};

  ${VerdictStatus} {
    ${(props) => styles[props.size].verdictStatus};
  }

  ${Icon} {
    ${(props) => styles[props.size].icon};
  }

  ${Warning} {
    ${(props) => styles[props.size].warning};
  }
`

export default StyledVerdict
