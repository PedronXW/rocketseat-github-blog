import { CompleteIssue } from '../../pages/Post'
import { BackButton } from '../BackButton'
import { GithubNavButton } from '../GithubNavButton'
import { PostStates } from '../PostStates'
import { PostHeaderContainer, PostHeaderNav } from './style'

interface PostHeaderProps {
  issue: CompleteIssue
}

export function PostHeader({ issue }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderNav>
        <BackButton />
        <GithubNavButton
          text="VER NO GITHUB"
          url={issue ? issue.html_url : ''}
        />
      </PostHeaderNav>
      <strong>{issue?.title}</strong>
      <PostStates issue={issue} />
    </PostHeaderContainer>
  )
}
