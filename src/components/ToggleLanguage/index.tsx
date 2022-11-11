import i18next from 'i18next'
import { useEffect, useState } from 'react'
import { Flags } from '../Icons/Flags'
import * as S from './styles'

const ToggleLanguage = () => {
  const [language, setLanguage] = useState<string>('pt-BR')

  useEffect(() => {
    const localLng = window.localStorage.getItem('i18nextLng')
    const initialLng = localLng ? localLng : 'pt-BR'
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
    <S.Wrapper onClick={toggle}>
      <S.Dot option={language}>
        <Flags />
      </S.Dot>
    </S.Wrapper>
  )
}

export default ToggleLanguage
