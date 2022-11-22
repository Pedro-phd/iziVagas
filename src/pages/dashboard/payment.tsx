import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { IStatePayment } from '@/types/Dashboard'
import { Event } from '@/types/types'
import validateTicket from '@/utils/validateTicket'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import * as S from './styles'

export default function Payment() {
  const [state, setState] = useState<IStatePayment>({
    id: ''
  })
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    state.id ? setDisabled(false) : setDisabled(true)
  }, [state.id])

  const router = useRouter()

  const { t } = useTranslation()

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, id: e.target.value })),
      placeholder: t('dashboard.payment.inputs.id'),
      width: '75%'
    }
  ]

  const handlePayment = () => {
    validateTicket({
      id: state.id,
      paid: true
    })
      .then(() => {
        toast.success(t('dashboard.payment.success'), {
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
        toast.error(t('dashboard.payment.error'), {
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
      <Header homeLink="/dashboard" />
      <S.Card>
        <Breadcrumbs />
        <S.Title>{t('dashboard.payment.title')}</S.Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              onClick: handlePayment,
              label: t('dashboard.payment.button.title'),
              width: '150px',
              disabled: disabled
            }
          ]}
        />
      </S.Card>
    </S.Container>
  )
}
