/* eslint-disable camelcase */
import { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { GithubNavButton } from '../GithubNavButton'
import { SocialResume } from '../SocialResume'
import {
  ProfileResumeContainer,
  ProfileResumeContent,
  ProfileResumeHeader,
} from './style'

export function ProfileResume() {
  const { user } = useContext(UserContext)

  const bio = user?.bio === null ? '' : user?.bio

  return (
    <ProfileResumeContainer>
      <img src={user?.avatar_url} alt="" />
      <div>
        <ProfileResumeContent>
          <ProfileResumeHeader>
            <strong>{user?.name}</strong>
            <GithubNavButton text="github" url={user?.html_url} />
          </ProfileResumeHeader>
          <span>{bio}</span>
        </ProfileResumeContent>
        <SocialResume />
      </div>
    </ProfileResumeContainer>
  )
}
