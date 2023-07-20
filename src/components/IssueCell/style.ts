import styled from 'styled-components'

export const IssueContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 16.25rem;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  border: 2px solid transparent;
  padding: 2rem;

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }

  > span {
    overflow: hidden;
    color: ${(props) => props.theme['base-text']};
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4; /* start showing ellipsis when 3rd line is reached */
    white-space: pre-wrap;
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
  }
`

export const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;

  > strong {
    width: 100%;
    color: ${(props) => props.theme['base-title']};
    font-size: 20px;
    font-weight: 700;
    line-height: 160%;
  }

  > span {
    color: ${(props) => props.theme['base-span']};
    margin-top: 5px;
    font-size: 14px;
    white-space: nowrap;
    font-weight: 400;
    line-height: 160%;
  }
`
