import Theme from '@/context/Theme'
import Main from 'components/Main'
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
      <Main />
    </>
  )
}
