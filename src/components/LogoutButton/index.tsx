import logoff from '@/useCases/signout'
import { useRouter } from 'next/router'
import { Logout } from '../Icons/Logout'
import * as S from './styles'

function LogoutButton() {
  const router = useRouter()
  const handleSignout = () => {
    logoff().then(() => {
      window.sessionStorage.setItem('login', 'false')
      router.push('/login')
    })
  }

  return (
    <S.LogoutWrapper onClick={handleSignout}>
      <Logout />
    </S.LogoutWrapper>
  )
}

export default LogoutButton
