import clientApi from '@/utils/axios'
import { Button, TextField } from '@mui/material'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

export default function Gate() {
  const [ticketId, setTicketId] = useState<string>('')
  const [validated, setValidated] = useState<boolean | undefined>(undefined)
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
        <S.Card>
          <TextField
            id="outlined-basic"
            label="Id do ticket"
            variant="outlined"
            placeholder="Id do ticket"
            onChange={(e) => setTicketId(e.target.value)}
          />
          <Button variant="contained" onClick={handleValidate}>
            Confirmar
          </Button>
          <S.FeedbackMessage>
            {validated === true
              ? 'Ticket pago'
              : validated === false
              ? 'O ticket não foi pago!'
              : ''}
          </S.FeedbackMessage>
        </S.Card>
      </S.Wrapper>
    </>
  )
}
