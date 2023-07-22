import { styled } from 'styled-components'

export const PostHeaderContainer = styled.div`
  margin-top: -5.5rem;
  display: flex;
  flex-direction: column;
  width: 54rem;
  padding: 2rem;
  height: 10.5rem;
  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  > strong {
    color: ${({ theme }) => theme['base-title']};
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
  }
`

export const PostHeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
