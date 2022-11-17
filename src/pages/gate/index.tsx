import Input from '@/components/TextInput'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Title } from '../dashboard/styles'
import * as S from './styles'

export default function Gate() {
  const [ticketId, setTicketId] = useState<string>('')
  const [validated, setValidated] = useState<boolean | undefined>(undefined)

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
        setValidated(res.data.paid)
      })
      .catch((err) => {
        setValidated(false)
        toast.error('Erro interno! Tente novamente mais tarde!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        })
        console.log(err)
      })
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <S.Wrapper validated={validated}>
        <Card>
          <Title>Cancela</Title>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: handleValidate,
                label: 'Confirmar'
              }
            ]}
          />
          <S.FeedbackMessage>
            {validated === true
              ? 'Ticket pago'
              : validated === false
              ? 'O ticket não foi pago!'
              : ''}
          </S.FeedbackMessage>
        </Card>
      </S.Wrapper>
    </>
  )
}
