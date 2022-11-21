import Input from '@/components/Input'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Title } from '../dashboard/styles'
import * as S from './styles'

export default function Gate() {
  const [ticketId, setTicketId] = useState<string>('')
  const [validated, setValidated] = useState<string>('')
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    ticketId ? setDisabled(false) : setDisabled(true)
  }, [ticketId])

  const router = useRouter()

  const inputArray = [
    {
      onChange: (e: Event) => setTicketId(e.target.value),
      placeholder: 'Insira o ID do tíquete...',
      width: '75%'
    }
  ]

  const handleValidate = () => {
    clientApi
      .get(`api/ticket/get/${ticketId}`)
      .then((res) => {
        setValidated(res.data.paid ? 'P' : 'NP')
        setTimeout(() => {
          router.reload()
        }, 2000)
      })
      .catch(() => {
        setValidated('NP')
        toast.error('Erro interno! Tente novamente mais tarde!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          draggable: true,
          progress: undefined
        })
      })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
      />
      <S.Wrapper validated={validated}>
        <Card>
          <Title>Liberar a cancela</Title>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: handleValidate,
                label: 'Liberar',
                disabled: disabled
              }
            ]}
          />
          <S.FeedbackMessage>
            {validated === 'P'
              ? 'Ticket pago!'
              : validated === 'NP'
              ? 'O ticket não foi pago!'
              : ''}
          </S.FeedbackMessage>
        </Card>
      </S.Wrapper>
    </>
  )
}
