import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserContextProps {
  children: ReactNode
}

export type User = {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
  name: string
  company: string
  blog: string
  location: string
  email: string
  hireable: string
  bio: string
  twitter_username: string
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: Date
  updated_at: Date
}

interface UserContextType {
  user: User | null
  fetchUser: () => void
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<User | null>(null)

  const fetchUser = useCallback(async () => {
    const result = await api.get('users/PedronXW')
    setUser(result.data as User)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  )
}
