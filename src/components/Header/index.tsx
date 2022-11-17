import { Logo } from '../Icons/Logo'
import LogoutButton from '../LogoutButton'
import ToggleLanguage from '../ToggleLanguage'
import ToggleTheme from '../ToggleTheme'
import * as S from './styles'

interface IHeader {
  title?: string
  hasLogout?: boolean
}

const Header = ({ title, hasLogout }: IHeader) => (
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

export default Header
