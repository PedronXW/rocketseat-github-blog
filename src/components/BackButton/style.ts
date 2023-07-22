import { styled } from 'styled-components'

export const BackButtonContainer = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  align-items: center;
  border: none;
  text-decoration: none;
  color: ${(props) => props.theme.blue};
  border-bottom: 1px solid transparent;
  height: min-content;

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
