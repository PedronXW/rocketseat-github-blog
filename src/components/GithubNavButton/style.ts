import { styled } from 'styled-components'

export const ButtonContainer = styled.a`
  display: inline-flex;
  align-items: center;
  height: min-content;
  gap: 8px;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  > span {
    color: ${(props) => props.theme.blue};
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 160%;
    text-transform: uppercase;
  }
`
