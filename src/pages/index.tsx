import ToggleTheme from '@/components/ToggleTheme'
import Theme from '@/context/Theme'
import { useContext, useEffect } from 'react'

export default function Home() {
  const { theme, setTheme } = useContext(Theme)
  useEffect(() => {
    console.log(theme)
  }, [theme])
  return (
    <>
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        aaaaa
      </button>
      <ToggleTheme />
    </>
  )
}
