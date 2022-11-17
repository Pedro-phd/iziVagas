import Breadcrumbs from '@/components/Breadcrumbs'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import validateTicket from '@/utils/validateTicket'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import * as S from './styles'

type StateBlocks = {
  id: string
}

export default function Payment() {
  const [state, setState] = useState<StateBlocks>({
    id: ''
  })

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, id: e.target.value })),
      placeholder: 'Insira o ID do tíquete...',
      width: '75%'
    }
  ]

  const router = useRouter()

  useEffect(() => {
    ;async () => {
      const login = await window.sessionStorage.getItem('login')
      if (!login) router.push('/login')
    }
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
        <Breadcrumbs />
        <S.LoginLabel>Pagamento</S.LoginLabel>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              onClick: handlePayment,
              label: 'Registrar pagamento',
              width: '150px'
            }
          ]}
        />
      </S.LoginCard>
    </S.LoginContainer>
  )
}
