import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { SocialResumeContainer, SocialResumeItem } from './style'

export function SocialResume() {
  const { user } = useContext(UserContext)

  return (
    <SocialResumeContainer>
      <SocialResumeItem>
        <FontAwesomeIcon icon={faGithub} width={18} height={18} />
        <span>{user?.login}</span>
      </SocialResumeItem>

      {user?.company ? (
        <SocialResumeItem>
          <FontAwesomeIcon icon={faBuilding} width={18} height={18} />
          <span>{user?.company}</span>
        </SocialResumeItem>
      ) : null}

      <SocialResumeItem>
        <FontAwesomeIcon icon={faUserGroup} width={18} height={18} />
        <span>{user?.followers} seguidores</span>
      </SocialResumeItem>
    </SocialResumeContainer>
  )
}
