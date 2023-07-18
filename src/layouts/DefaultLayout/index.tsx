import { Outlet } from 'react-router-dom'
import headerCover from '../../assets/cover.svg'
import { Container, Image } from './style'

export function DefaultLayout() {
  return (
    <Container>
      <Image src={headerCover} />
      <Outlet />
    </Container>
  )
}
