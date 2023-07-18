import { styled } from 'styled-components'

export const ProfileResumeContainer = styled.div`
  margin: -5.5rem auto;
  display: flex;
  width: 54rem;
  height: 13.25rem;
  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`
