import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { User } from './UserContext'

interface IssuesContextProps {
  children: ReactNode
}

export interface Reactions {
  url: string
  total_count: number
  '+1': number
  '-1': number
  laugh: number
  hooray: number
  confused: number
  heart: number
  rocket: number
  eyes: number
}

export type Issue = {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: User
  labels: any[]
  state: string
  locked: boolean
  assignee: string
  assignees: any[]
  milestone: null
  comments: number
  created_at: Date
  updated_at: Date
  closed_at: Date
  author_association: string
  active_lock_reason: string
  body: string
  reactions: Reactions
  timeline_url: string
  performed_via_github_app: string
  state_reason: string
  score: number
}

interface IssuesContextType {
  issues: Issue[]
  totalIssues: number
  fetchIssues: (query: string) => void
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesContextProps) {
  const [issues, setIssues] = useState<Issue[]>([])
  const [totalIssues, setTotalIssues] = useState<number>(0)

  const fetchIssues = useCallback(async (query: string) => {
    const result = await api.get(
      `search/issues?q=${query}%20repo:PedronXW/rocketseat-github-blog`,
    )
    setIssues(result.data.items)
    setTotalIssues(result.data.total_count)
  }, [])

  useEffect(() => {
    fetchIssues('')
  }, [])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues, totalIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
