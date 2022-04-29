import CardBlock from '@/components/CardBlock'
import Header from '@/components/Header'
import Indicator from '@/components/Indicator'
import ParkingSpotCard from '@/components/ParkingSpotCard'
import ToggleLanguage from '@/components/ToggleLanguage'
import ToggleTheme from '@/components/ToggleTheme'
import Theme from '@/context/Theme'
import { useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const { theme, setTheme } = useContext(Theme)
  useEffect(() => {
    console.log(theme)
  }, [theme])
  const [disabled, setDisabled] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        {t('button')}
      </button>
      <ToggleTheme />
      <ToggleLanguage />
      <Header title="Blocos" />
      <Indicator />
      <CardBlock letter="E" color="green" number={24} />
      <ParkingSpotCard disabled={disabled} />
      <button onClick={() => setDisabled(!disabled)}>asasasas</button>
    </>
  )
}
