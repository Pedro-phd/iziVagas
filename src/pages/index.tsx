import Header from '@/components/Header'
import Indicator from '@/components/Indicator'
import ToggleLanguage from '@/components/ToggleLanguage'
import ToggleTheme from '@/components/ToggleTheme'
import Theme from '@/context/Theme'
import { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const { theme, setTheme } = useContext(Theme)
  useEffect(() => {
    console.log(theme)
  }, [theme])
  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {t('button')}
      </button>
      <ToggleTheme />
      <ToggleLanguage />
      <Header title="Blocos" />
      <Indicator />
    </>
  )
}
