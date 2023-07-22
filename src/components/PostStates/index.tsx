import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faComment } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CompleteIssue } from '../../pages/Post'
import { PostStatesContainer, PostStatesItem } from './style'

interface PostStatesProps {
  issue: CompleteIssue
}

export function PostStates({ issue }: PostStatesProps) {
  console.log(issue)
  return (
    <PostStatesContainer>
      <PostStatesItem>
        <FontAwesomeIcon icon={faGithub} width={18} height={18} />
        <span>{issue.user ? issue?.user.login : ''}</span>
      </PostStatesItem>

      <PostStatesItem>
        <FontAwesomeIcon icon={faCalendar} width={18} height={18} />
        <span>
          {formatDistanceToNow(
            issue.created_at
              ? new Date(issue?.created_at)
              : new Date('2023-07-21T02:24:18Z'),
            {
              addSuffix: true,
              locale: ptBR,
            },
          )}
        </span>
      </PostStatesItem>

      <PostStatesItem>
        <FontAwesomeIcon icon={faComment} width={18} height={18} />
        <span>
          {issue.comments !== undefined ? String(issue.comments) : ''}{' '}
          comentários
        </span>
      </PostStatesItem>
    </PostStatesContainer>
  )
}
