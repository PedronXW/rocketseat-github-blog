import { styled } from 'styled-components'

export const ProfileResumeContainer = styled.div`
  margin-top: -5.5rem;
  display: flex;
  width: 54rem;
  gap: 2rem;
  padding: 2rem;
  height: 13.25rem;
  background-color: ${({ theme }) => theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    margin-left: 0.5rem;
  }

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const ProfileResumeContent = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    color: ${(props) => props.theme['base-text']};
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
  }
`

export const ProfileResumeHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0.5rem 0;

  > strong {
    color: ${(props) => props.theme['base-title']};
    font-size: 24px;
    font-weight: 700;
    line-height: 130%;
  }
`
