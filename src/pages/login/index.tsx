import { Logo } from '@/components/Icons'
import login from '@/useCases/login'
import logoff from '@/useCases/signout'
import { Button, TextField } from '@mui/material'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'

export default function Home() {
  const [state, setState] = useState({
    email: '',
    pass: '',
    error: false,
    errorMessage: ''
  })

  const router = useRouter()

  const handleLogin = (email: string, pass: string) => {
    login(email, pass)
      .then(() => {
        setState((old) => ({ ...old, error: false, errorMessage: '' }))
        router.push('/dashboard')
      })
      .catch((err) => {
        setState((old) => ({
          ...old,
          error: true,
          errorMessage: err.toString().split('Firebase:')[1]
        }))
      })
  }

  const handleSingout = () => {
    logoff().then(() => {
      alert('deslogado')
    })
  }

  return (
    <>
      <S.Container>
        <S.Card>
          <Logo option="header" />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            placeholder="E-mail"
            onChange={(e) =>
              setState((old) => ({ ...old, email: e.target.value }))
            }
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Password"
            onChange={(e) =>
              setState((old) => ({ ...old, pass: e.target.value }))
            }
          />
          {state.error && <span>{state.errorMessage}</span>}
          <Button
            variant="contained"
            onClick={() => handleLogin(state.email, state.pass)}
          >
            Login
          </Button>
          <Button variant="contained" onClick={handleSingout}>
            Sair
          </Button>
        </S.Card>
      </S.Container>
    </>
  )
}
