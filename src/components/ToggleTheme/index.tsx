import { Moon, Sun } from '@/components/Icons'
import Theme from '@/context/Theme'
import { useContext } from 'react'
import * as S from './styles'

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(Theme)

  return (
    <S.Wrapper>
      <S.Dot
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        option={theme}
      >
        <Moon className={'moon'} />
        <Sun className={'sun'} />
      </S.Dot>
    </S.Wrapper>
  )
}

export default ToggleTheme
