import login from '@/useCases/login'
import logoff from '@/useCases/signout'
import { UserCredential } from '@firebase/auth'
import { useState } from 'react'
import { TextField, Button } from '@mui/material'
import * as S from './styles'

export default function Home() {
  const [user, setUser] = useState<UserCredential | Error>()

  const handleLogin = (email: string, pass: string) => {
    login(email, pass)
      .then((res) => {
        console.log('Sucesso!' + res)
        setUser(res)
      })
      .catch((err) => console.log('error' + err))
  }

  const handleSingout = () => {
    logoff().then(() => {
      alert('deslogado')
      console.log(user)
    })
  }

  return (
    <>
      <S.Container>
        <S.Card>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            placeholder="E-mail"
          />
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            type="password"
            placeholder="Password"
          />
          <Button
            variant="contained"
            onClick={() => handleLogin('teste@email.com', '123456789')}
          >
            Login
          </Button>
        </S.Card>
      </S.Container>
    </>
  )
}
