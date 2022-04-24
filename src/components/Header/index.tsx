import { Logo } from '../Icons/Logo'
import * as S from './styles'

interface IHeader {
  title: string
}

const Header = ({ title }: IHeader) => (
  <S.Wrapper>
    <Logo option="header" />
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default Header
