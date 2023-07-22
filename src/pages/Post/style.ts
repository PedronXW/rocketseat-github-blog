import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 4rem;
  height: min-content;
`

export const PostContent = styled.div`
  display: flex;
  width: 54rem;
  padding: 40px 32px;
  flex-direction: column;
  align-items: start;
  gap: 24px;

  strong {
    font-weight: bold;
  }

  code {
    border-radius: 2px;
    background: ${({ theme }) => theme['base-post']};
    display: flex;
    padding: 16px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  }

  ul {
    padding: 0rem 0rem 0rem 1.5rem;
  }

  li {
    font-weight: medium;
    padding: 0.5rem 0rem;
  }

  > h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 2.5rem 0rem;
    color: ${({ theme }) => theme.blue};
    text-decoration: underline;
  }

  p {
    font-weight: 300;
    padding: 0rem 0rem 1rem 0rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  blockquote {
    width: 100%;
  }
`
