import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ButtonContainer } from './style'

interface GithubNavButtonProps {
  text: string
  url: string | undefined
}

export function GithubNavButton({ text, url }: GithubNavButtonProps) {
  return (
    <ButtonContainer href={url}>
      <span>{text}</span>
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} width={12} height={12} />
    </ButtonContainer>
  )
}
