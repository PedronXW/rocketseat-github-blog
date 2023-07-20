import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  height: min-content;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4.5rem;
  width: 54rem;
  align-items: center;

  > strong {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 18px;
    font-weight: 700;
    line-height: 160%;
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const SearchInput = styled.input`
  display: flex;
  width: 54rem;
  padding: 12px 16px;
  margin-top: 0.75rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;

  &:focus {
    border: 1px solid ${(props) => props.theme.blue};
  }

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }
`

export const IssuesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3rem;
  width: 54rem;
  grid-gap: 2rem;
`
