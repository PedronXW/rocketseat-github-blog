import { styled } from 'styled-components'

export const SocialResumeContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`

export const SocialResumeItem = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  > span {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`
