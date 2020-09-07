import styled from 'styled-components'

export const Title = styled.h1`
  margin: 0;
  line-height: 1.25;

  margin-bottom: ${({ theme }) => theme.spacing.main};
  font-size: ${({ theme }) => theme.font.size.title};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const SectionTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  line-height: 1.2;

  font-size: ${({ theme }) => theme.font.size.sectionTitle};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const SubSectionTitle = styled.h3`
  margin: 0;
  margin-bottom: 16px;
  line-height: 1.2;

  font-size: ${({ theme }) => theme.font.size.subSectionTitle};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const Text = styled.p`
  margin: 0;
  margin-bottom: 16px;
  line-height: 24px;

  font-size: ${({ theme }) => theme.font.size.body};
  font-weight: ${({ theme }) => theme.font.weight.regular};

  white-space: ${(props) => (props.preLine ? 'pre-line' : '')};
  hyphens: auto;
  overflow-wrap: break-word;
`

export const IndexSectionTitleRaw = styled.h2`
  font-size: 18px;
  color: #666;
  font-weight: ${({ theme }) => theme.font.weight.bold};
`

export const IndexSectionTitle = styled(IndexSectionTitleRaw)`
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  margin: 16px 0;
  flex: 1;
`
