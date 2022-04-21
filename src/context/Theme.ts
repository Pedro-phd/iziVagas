import { createContext, Dispatch, SetStateAction } from 'react'

interface ThemeContext {
  theme: string
  setTheme: Dispatch<SetStateAction<string>>
}

const Theme = createContext<ThemeContext>({ theme: '', setTheme: () => '' })
export default Theme
