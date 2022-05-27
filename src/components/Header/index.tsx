import { Logo } from '../Icons/Logo'
import ToggleLanguage from '../ToggleLanguage'
import ToggleTheme from '../ToggleTheme'
import * as S from './styles'

interface IHeader {
  title: string
}

const Header = ({ title }: IHeader) => (
  <S.Wrapper>
    <S.row>
      <Logo option="header" />
      <S.toggles>
        <ToggleLanguage />
        <ToggleTheme />
      </S.toggles>
    </S.row>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Header
