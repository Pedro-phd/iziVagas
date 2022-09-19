import validateTicket from '@/utils/validateTicket'
import { Button, TextField } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

type StateBlocks = {
  id: string
}

const auth = getAuth()

export default function Payment() {
  const [state, setState] = useState<StateBlocks>({
    id: ''
  })

  const router = useRouter()

  useEffect(() => {
    auth.currentUser ? null : router.push('/login')
  }, [router])

  const handlePayment = () => {
    validateTicket({
      id: state.id,
      paid: true
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <S.LoginContainer>
      <S.LoginCard>
        <S.LoginLabel>Pagamento</S.LoginLabel>
        <TextField
          id="outlined-basic"
          label="Id do Ticket"
          variant="outlined"
          placeholder="Id do Ticket"
          onChange={(e) => setState((old) => ({ ...old, id: e.target.value }))}
        />
        <Button variant="contained" onClick={handlePayment}>
          Registrar pagamento
        </Button>
      </S.LoginCard>
    </S.LoginContainer>
  )
}
