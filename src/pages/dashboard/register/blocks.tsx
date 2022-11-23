import Breadcrumbs from '@/components/Breadcrumbs'
import Header from '@/components/Header'
import Input from '@/components/Input'
import { IStateBlocksRegister } from '@/types/Dashboard'
import { Event } from '@/types/types'
import clientApi from '@/utils/axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Card, Container, Title } from '../styles'

export default function NewBlocks() {
  const [state, setState] = useState<IStateBlocksRegister>({
    name: '',
    slots: 0
  })

  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    state.name.length !== 0 && (state.slots > 0 || !isNaN(state.slots))
      ? setDisabled(false)
      : setDisabled(true)
  }, [state.name, state.slots])

  const router = useRouter()

  const { t } = useTranslation()

  const inputArray = [
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, name: e.target.value })),
      placeholder: t('dashboard.blocks.inputs.name'),
      width: '75%'
    },
    {
      onChange: (e: Event) =>
        setState((old) => ({ ...old, slots: parseInt(e.target.value) })),
      placeholder: t('dashboard.blocks.inputs.amount'),
      width: '75%',
      type: 'number'
    }
  ]

  const handleCreate = () => {
    clientApi
      .post('api/blocks/new', {
        name: state.name,
        slots: state.slots
      })
      .then(() => {
        toast.success(t('dashboard.blocks.success'), {
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
        toast.error(t('dashboard.blocks.error'), {
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
    <Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
      />
      <Header homeLink="/dashboard" />
      <Card>
        <Breadcrumbs editLink={'/dashboard/edit/blocks'} />
        <Title>{t('dashboard.blocks.inputs.title')}</Title>
        <Input
          inputArray={inputArray}
          hasButton
          buttonContent={[
            {
              onClick: handleCreate,
              label: t('dashboard.blocks.button.title'),
              width: '150px',
              disabled: disabled
            }
          ]}
        />
      </Card>
    </Container>
  )
}
