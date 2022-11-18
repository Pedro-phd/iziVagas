import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import validateTicket from '@/utils/validateTicket'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

type StateBlocks = {
  id: string
}

export default function Payment() {
  const [state, setState] = useState<StateBlocks>({
    id: ''
  })
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    state.id ? setDisabled(false) : setDisabled(true)
  }, [state.id])

  const router = useRouter()

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
      .then(() => {
        toast.success('Tíquete pago com sucesso!', {
          position: 'top-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined,
          onClose: () => {
            router.reload()
          }
        })
      })
      .catch(() => {
        toast.error('Erro ao pagar o tíquete!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          draggable: false,
          progress: undefined
        })
      })
  }

  return (
    <S.Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
      />
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
              width: '150px',
              disabled: disabled
            }
          ]}
        />
      </S.Card>
    </S.Container>
  )
}
