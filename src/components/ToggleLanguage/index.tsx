import i18next from 'i18next'
import { useEffect, useState } from 'react'
import * as S from './styles'

const ToggleLanguage = () => {
  const [language, setLanguage] = useState<string>('pt-BR')

  useEffect(() => {
    const localLng = window.localStorage.getItem('i18nextLng')
    const initialLng = localLng ? localLng : 'pr-BR'
    setLanguage(initialLng)
  }, [])

  const toggle = () => {
    if (language === 'pt-BR') {
      setLanguage('en-US')
      window.localStorage.setItem('i18nextLng', 'en-US')
      i18next.changeLanguage('en-US')
    } else {
      setLanguage('pt-BR')
      window.localStorage.setItem('i18nextLng', 'pt-BR')
      i18next.changeLanguage('pt-BR')
    }
    console.log(language)
  }

  return (
    <S.Wrapper>
      <S.Dot option={language} onClick={toggle}>
        <span className="en">EN</span>
        <span className="pt">BR</span>
      </S.Dot>
    </S.Wrapper>
  )
}

export default ToggleLanguage
