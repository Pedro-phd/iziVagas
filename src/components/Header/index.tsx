import { IHeader } from '@/types/Header'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Logo } from '../Icons/Logo'
import LogoutButton from '../LogoutButton'
import ToggleLanguage from '../ToggleLanguage'
import ToggleTheme from '../ToggleTheme'
import * as S from './styles'

const Header = ({ title, hasLogout, homeLink }: IHeader) => {
  const router = useRouter()

  const handlePush = (link: string) => {
    router.push(link)
  }

  useEffect(() => {
    ;(async () => {
      const login = await window.sessionStorage.getItem('login')
      if (login === 'false') router.push('/login')
    })()
  }, [router])

  return (
    <S.Wrapper>
      <S.Row>
        <S.LogoWrapper
          onClick={() => handlePush(homeLink ? homeLink : '')}
          homeLink={homeLink}
        >
          <Logo option="header" />
        </S.LogoWrapper>
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
