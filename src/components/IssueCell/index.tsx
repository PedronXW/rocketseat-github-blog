import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Issue } from '../../contexts/IssuesContext'
import { IssueContainer, IssueHeader } from './style'

interface IssueCellProps {
  issue: Issue
}

export function IssueCell({ issue }: IssueCellProps) {
  return (
    <IssueContainer>
      <IssueHeader>
        <strong>{issue.title}</strong>
        <span>
          {formatDistanceToNow(new Date(issue.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </IssueHeader>
      <span>{issue.body}</span>
    </IssueContainer>
  )
}
