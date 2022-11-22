import Input from '@/components/Input'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
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

  const { t } = useTranslation()

  const inputArray = [
    {
      onChange: (e: Event) => setTicketId(e.target.value),
      placeholder: t('dashboard.payment.inputs.id'),
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
        toast.error(t('dashboard.gate.error'), {
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
          <Title>{t('dashboard.gate.title')}</Title>
          <Input
            inputArray={inputArray}
            hasButton
            buttonContent={[
              {
                onClick: handleValidate,
                label: t('dashboard.gate.button.title'),
                disabled: disabled
              }
            ]}
          />
          <S.FeedbackMessage>
            {validated === 'P'
              ? t('dashboard.gate.paidSuccess')
              : validated === 'NP'
              ? t('dashboard.gate.paidError')
              : ''}
          </S.FeedbackMessage>
        </Card>
      </S.Wrapper>
    </>
  )
}
