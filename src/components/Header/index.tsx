import { IHeader } from '@/types/Header'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Logo } from '../Icons/Logo'
import LogoutButton from '../LogoutButton'
import ToggleLanguage from '../ToggleLanguage'
import ToggleTheme from '../ToggleTheme'
import * as S from './styles'

const Header = ({ title, hasLogout }: IHeader) => {
  const router = useRouter()

  useEffect(() => {
    ;(async () => {
      const login = await window.sessionStorage.getItem('login')
      if (login === 'false') router.push('/login')
    })()
  }, [router])

  return (
    <S.Wrapper>
      <S.Row>
        <Logo option="header" />
        <S.ToggleWrapper>
          {hasLogout && <LogoutButton />}
          <ToggleLanguage />
          <ToggleTheme />
        </S.ToggleWrapper>
      </S.Row>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  )
}

export default Header
