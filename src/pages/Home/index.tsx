import { useContext, useState } from 'react'
import { IssueCell } from '../../components/IssueCell'
import { ProfileResume } from '../../components/ProfileResume'
import { IssuesContext } from '../../contexts/IssuesContext'
import { Container, IssuesContainer, SearchHeader, SearchInput } from './style'

export function Home() {
  const [search, setSearch] = useState('')

  const { fetchIssues, issues } = useContext(IssuesContext)

  function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
    fetchIssues(event.target.value)
  }

  return (
    <Container>
      <ProfileResume />
      <SearchHeader>
        <strong>Publicações</strong>
        <span>{issues.length} publicações</span>
      </SearchHeader>
      <SearchInput
        placeholder="Buscar conteúdo"
        value={search}
        onChange={handleSearch}
      />
      <IssuesContainer>
        {issues.map((issue) => (
          <IssueCell key={issue.id} issue={issue} />
        ))}
      </IssuesContainer>
    </Container>
  )
}
