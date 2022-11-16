import logoff from '@/useCases/signout'
import { Logout } from '../Icons/Logout'
import * as S from './styles'

function LogoutButton() {
  const handleSignout = () => {
    logoff().then(() => {
      alert('deslogado')
    })
  }

  return (
    <S.LogoutContainer>
      <S.LogoutWrapper onClick={handleSignout}>
        <Logout />
      </S.LogoutWrapper>
    </S.LogoutContainer>
  )
}

export default LogoutButton
