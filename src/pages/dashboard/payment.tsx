import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import validateTicket from '@/utils/validateTicket'
import { useState } from 'react'
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

  const handlePayment = () => {
    validateTicket({
      id: state.id,
      paid: true
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <S.Container>
      <Header />
      <S.Card>
        <Breadcrumbs />
        <S.Title>Pagamento</S.Title>
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
      </S.Card>
    </S.Container>
  )
}
