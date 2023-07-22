import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
import { BackButtonContainer } from './style'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <BackButtonContainer
      onClick={() => {
        navigate('/')
      }}
    >
      <FontAwesomeIcon icon={faCaretLeft} width={12} height={12} />
      <span>Voltar</span>
    </BackButtonContainer>
  )
}
